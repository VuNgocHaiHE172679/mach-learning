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
import {
  chapterHistoryFeatures,
  lessonCoreContent,
} from "../src/data/lessonCoreContent.js";
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
import {
  countFilteredModules,
  filterLearningChapters,
  normalizeSearch,
} from "../src/utils/hubFilters.js";

assert.equal(chapters.length, 3, "Group 2 phải có đúng ba chương cốt lõi.");
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

  const historyFeature = chapterHistoryFeatures[chapter.id];
  assert.ok(historyFeature, `${chapter.id} thiếu lát cắt lịch sử Việt Nam.`);
  for (const field of ["image", "alt", "year", "title", "caption", "credit", "sourceUrl"]) {
    assert.ok(historyFeature[field], `${chapter.id} thiếu trường ảnh lịch sử ${field}.`);
  }
  assert.match(
    historyFeature.sourceUrl,
    /^https:\/\//,
    `${chapter.id} có nguồn ảnh lịch sử không hợp lệ.`,
  );
  const historyImagePath = join(
    process.cwd(),
    "public",
    historyFeature.image.replace(/^\//, ""),
  );
  assert.ok(existsSync(historyImagePath), `${chapter.id} thiếu file ảnh lịch sử.`);
  assert.ok(
    statSync(historyImagePath).size < 200_000,
    `${chapter.id} có ảnh lịch sử lớn hơn 200 KB.`,
  );
}

const modules = chapters.flatMap((chapter) => chapter.modules);
assert.equal(modules.length, 9, "Ba chương phải có tổng cộng chín học phần.");

for (const module of modules) {
  const profile = lessonProfiles[module.id];
  assert.ok(profile, `${module.id} chưa có nội dung bài học riêng.`);
  assert.ok(
    ["read", "listen"].includes(module.primaryFormat),
    `${module.id} thiếu loại nội dung chính để phục vụ bộ lọc.`,
  );
  const coreContent = lessonCoreContent[module.id];
  assert.ok(coreContent?.lead, `${module.id} thiếu dẫn nhập nội dung cốt lõi.`);
  assert.ok(
    coreContent.sections.length >= 3 && coreContent.sections.length <= 4,
    `${module.id} cần có từ ba đến bốn luận điểm cốt lõi.`,
  );
  for (const section of coreContent.sections) {
    assert.ok(section.title && section.summary, `${module.id} có luận điểm thiếu nội dung.`);
    assert.ok(
      section.points.length >= 3 && section.points.length <= 5,
      `${module.id} có luận điểm cần từ ba đến năm ý chính.`,
    );
    assert.ok(
      section.summary.length <= 420,
      `${module.id} có phần giải thích quá dài.`,
    );
  }

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

assert.equal(
  normalizeSearch("Sứ mệnh lịch sử"),
  "su menh lich su",
  "Tìm kiếm phải hỗ trợ tiếng Việt không dấu.",
);
assert.equal(
  countFilteredModules(filterLearningChapters(chapters)),
  9,
  "Trạng thái mặc định phải hiển thị đủ chín học phần.",
);
assert.equal(
  countFilteredModules(
    filterLearningChapters(chapters, { formatFilter: "listen" }),
  ),
  3,
  "Bộ lọc bài nghe phải trả về ba học phần.",
);
assert.equal(
  countFilteredModules(
    filterLearningChapters(chapters, { query: "gia tri thang du" }),
  ),
  1,
  "Tìm thuật ngữ không dấu phải trả về đúng học phần chứa thuật ngữ.",
);
assert.equal(
  countFilteredModules(
    filterLearningChapters(chapters, { chapterFilter: "chapter-2" }),
  ),
  3,
  "Bộ lọc Chương 2 phải trả về ba học phần.",
);
assert.equal(
  countFilteredModules(
    filterLearningChapters(chapters, { durationFilter: "long" }),
  ),
  4,
  "Bộ lọc từ 15 phút phải trả về bốn học phần.",
);
assert.equal(
  countFilteredModules(
    filterLearningChapters(chapters, {
      query: "giai cap cong nhan",
      chapterFilter: "chapter-2",
      formatFilter: "listen",
      durationFilter: "long",
    }),
  ),
  1,
  "Tổ hợp tìm kiếm và bộ lọc phải trả về đúng học phần.",
);
assert.equal(
  countFilteredModules(
    filterLearningChapters(chapters, { query: "khong-co-ket-qua" }),
  ),
  0,
  "Từ khóa không tồn tại phải trả về trạng thái rỗng.",
);

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
  `✓ ${chapters.length} chương · ${modules.length} học phần riêng · ${glossary.length} thuật ngữ · ${modules.reduce((total, module) => total + lessonProfiles[module.id].quiz.length, 0)} câu tự kiểm tra · ${Object.values(lessonAudioScripts).reduce((total, audio) => total + estimateAudioMinutes(audio.transcript), 0)} phút bài nghe · ${games.length} thử thách`,
);
