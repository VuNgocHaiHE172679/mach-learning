import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import learningContent, {
  chapters,
  games,
  glossary,
  microQuiz,
  podcasts,
} from "../src/data/learningContent.js";
import { lessonProfiles } from "../src/data/lessonProfiles.js";
import { lessonAudioScripts } from "../src/data/lessonAudioScripts.js";
import {
  TEXTBOOK_PDF_PATH,
  getTextbookSourceHref,
} from "../src/utils/textbookSource.js";
import {
  MAX_AUDIO_CHUNK_LENGTH,
  countAudioWords,
  estimateAudioMinutes,
  splitIntoSpeechChunks,
} from "../src/utils/audioScript.js";

assert.equal(chapters.length, 3, "MẠCH phải có đúng ba chương cốt lõi.");
assert.deepEqual(
  chapters.map((chapter) => chapter.sourcePages),
  ["11–49", "51–84", "86–124"],
  "Phạm vi trang in của ba chương không đúng.",
);

for (const chapter of chapters) {
  assert.equal(
    chapter.modules.length,
    3,
    `${chapter.id} phải có đúng ba mô-đun.`,
  );
  assert.ok(chapter.title && chapter.description, `${chapter.id} thiếu nội dung.`);
  assert.ok(
    chapter.illustration?.src &&
      chapter.illustration?.alt &&
      chapter.illustration?.caption,
    `${chapter.id} thiếu dữ liệu minh họa có khả năng tiếp cận.`,
  );
  const illustrationPath = join(
    process.cwd(),
    "public",
    chapter.illustration.src.replace(/^\//, ""),
  );
  assert.ok(existsSync(illustrationPath), `${chapter.id} thiếu file minh họa.`);
  assert.ok(
    statSync(illustrationPath).size < 400_000,
    `${chapter.id} có file minh họa lớn hơn 400 KB.`,
  );
}

const modules = chapters.flatMap((chapter) => chapter.modules);
assert.equal(modules.length, 9, "Ba chương phải có tổng cộng chín học phần.");

for (const module of modules) {
  const profile = lessonProfiles[module.id];
  assert.ok(profile, `${module.id} chưa có nội dung bài học riêng.`);

  for (const field of [
    "thesis",
    "thesisDetail",
    "sectionEyebrow",
    "sectionTitle",
    "relationTitle",
    "relationIntro",
    "caution",
  ]) {
    assert.ok(profile[field], `${module.id} thiếu trường ${field}.`);
  }

  assert.equal(
    profile.contextParagraphs.length,
    2,
    `${module.id} phải có đúng hai đoạn bối cảnh.`,
  );
  assert.equal(
    profile.blocks.length,
    3,
    `${module.id} phải có đúng ba khối trực quan.`,
  );
  assert.equal(
    profile.lenses.length,
    3,
    `${module.id} phải có đúng ba góc nhìn.`,
  );
  assert.equal(
    profile.quiz.length,
    3,
    `${module.id} phải có đúng ba câu micro-quiz.`,
  );

  for (const question of profile.quiz) {
    assert.ok(question.prompt, `${question.id} thiếu câu hỏi.`);
    assert.ok(question.options.length >= 3, `${question.id} thiếu lựa chọn.`);
    assert.ok(
      question.options.some(
        (option) => option.id === question.correctOptionId,
      ),
      `${question.id} có đáp án không hợp lệ.`,
    );
  }

  const audio = lessonAudioScripts[module.id];
  assert.ok(audio?.title, `${module.id} chưa có tiêu đề audio đầy đủ.`);
  assert.ok(audio?.transcript, `${module.id} chưa có kịch bản audio đầy đủ.`);
  const audioWordCount = countAudioWords(audio.transcript);
  assert.ok(
    audioWordCount >= 850 && audioWordCount <= 1_100,
    `${module.id} phải có kịch bản trong khoảng 850–1100 từ.`,
  );
  assert.ok(
    estimateAudioMinutes(audio.transcript) >= 7,
    `${module.id} có thời lượng audio ước tính dưới bảy phút.`,
  );
  const speechChunks = splitIntoSpeechChunks(audio.transcript);
  assert.ok(speechChunks.length >= 20, `${module.id} có quá ít đoạn đọc.`);
  assert.ok(
    speechChunks.every((chunk) => chunk.length <= MAX_AUDIO_CHUNK_LENGTH),
    `${module.id} có đoạn đọc quá dài cho trình phát giọng nói.`,
  );
}

assert.deepEqual(
  modules.map((module) => getTextbookSourceHref(module.sourcePages)),
  [
    `${TEXTBOOK_PDF_PATH}#page=8`,
    `${TEXTBOOK_PDF_PATH}#page=18`,
    `${TEXTBOOK_PDF_PATH}#page=33`,
    `${TEXTBOOK_PDF_PATH}#page=48`,
    `${TEXTBOOK_PDF_PATH}#page=58`,
    `${TEXTBOOK_PDF_PATH}#page=70`,
    `${TEXTBOOK_PDF_PATH}#page=83`,
    `${TEXTBOOK_PDF_PATH}#page=98`,
    `${TEXTBOOK_PDF_PATH}#page=109`,
  ],
  "Liên kết nguồn PDF của chín học phần chưa đúng trang bắt đầu.",
);

const textbookPath = join(
  process.cwd(),
  "public",
  TEXTBOOK_PDF_PATH.replace(/^\//, ""),
);
assert.ok(existsSync(textbookPath), "Thiếu file PDF giáo trình công khai.");
assert.ok(
  statSync(textbookPath).size > 20_000_000,
  "File PDF giáo trình có kích thước bất thường.",
);
assert.equal(
  getTextbookSourceHref("86–100"),
  `${TEXTBOOK_PDF_PATH}#page=83`,
  "Liên kết nguồn chưa trỏ đúng trang PDF tương ứng với trang in 86.",
);

assert.equal(microQuiz.length, 3, "Bài nổi bật phải có đúng ba micro-quiz.");
for (const question of microQuiz) {
  assert.ok(question.prompt, `${question.id} thiếu câu hỏi.`);
  assert.ok(question.options.length >= 3, `${question.id} thiếu lựa chọn.`);
  assert.ok(
    question.options.some((option) => option.id === question.correctOptionId),
    `${question.id} có đáp án không hợp lệ.`,
  );
}

assert.ok(glossary.length >= 7, "Từ điển mẫu cần tối thiểu bảy thuật ngữ.");
assert.ok(podcasts.length >= 3, "Cần tối thiểu một audio cho mỗi chương.");
assert.equal(games.length, 3, "Cần đúng một game lõi cho mỗi chương.");

const publicContent = JSON.stringify(learningContent);
for (const personalField of [
  "dashboardStats",
  "\"xp\"",
  "\"progress\"",
  "completedModules",
  "unlockCondition",
]) {
  assert.ok(
    !publicContent.includes(personalField),
    `Dữ liệu công khai không được chứa trường cá nhân hóa: ${personalField}`,
  );
}

console.log(
  `✓ ${chapters.length} chương · ${modules.length} học phần riêng · ${glossary.length} thuật ngữ · ${modules.reduce((total, module) => total + lessonProfiles[module.id].quiz.length, 0)} câu micro-quiz · ${Object.values(lessonAudioScripts).reduce((total, audio) => total + estimateAudioMinutes(audio.transcript), 0)} phút audio · ${games.length} game`,
);
