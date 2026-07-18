import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import {
  chapters,
  games,
  glossary,
  podcasts,
} from "../src/data/learningContent.js";
import { lessonProfiles } from "../src/data/lessonProfiles.js";
import {
  chapterHistoryFeatures,
  lessonCoreContent,
} from "../src/data/lessonCoreContent.js";
import { lessonAudioScripts } from "../src/data/lessonAudioScripts.js";
import { sourceDocument } from "../src/data/stateContent.js";
import {
  getFirstSourcePage,
  getSourceDocumentHref,
} from "../src/utils/sourceDocument.js";
import {
  countFilteredModules,
  filterLearningChapters,
} from "../src/utils/hubFilters.js";
import { buildChapterQuizQuestions } from "../src/utils/quizChallenge.js";
import { estimateAudioMinutes } from "../src/utils/audioScript.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicPath = (value) => resolve(root, "public", value.replace(/^\//, ""));
const modules = chapters.flatMap((track) => track.modules);
const moduleIds = new Set(modules.map((module) => module.id));
const allowedPages = new Set([1, 3, 4, 5, 6, 7, 8, 9, 10, 12]);

assert.equal(chapters.length, 3, "Cần đúng ba tuyến kiến thức.");
assert.equal(modules.length, 9, "Ba tuyến phải có tổng cộng chín chuyên đề.");
assert.equal(moduleIds.size, 9, "Mỗi chuyên đề phải có ID riêng.");

for (const track of chapters) {
  assert.equal(track.modules.length, 3, `${track.id} phải có ba chuyên đề.`);
  assert.ok(track.title && track.description && track.guidingQuestion);
  assert.ok(track.illustration?.src, `${track.id} thiếu hình ảnh mở tuyến.`);
  assert.ok(existsSync(publicPath(track.illustration.src)), `${track.id} trỏ tới ảnh không tồn tại.`);

  const feature = chapterHistoryFeatures[track.id];
  assert.ok(feature, `${track.id} thiếu dẫn chứng hoặc sơ đồ đối chiếu.`);
  assert.ok(existsSync(publicPath(feature.image)), `${track.id} thiếu tệp dẫn chứng.`);
  assert.ok(feature.credit && feature.sourceUrl, `${track.id} thiếu credit hoặc nguồn ảnh.`);
}

for (const module of modules) {
  assert.ok(module.summary && module.subtitle && module.thesis);
  assert.equal(module.learningOutcomes.length, 3, `${module.id} cần ba mục tiêu học tập.`);
  assert.ok(module.keyConcepts.length >= 4, `${module.id} cần ít nhất bốn khái niệm.`);
  assert.equal(module.blocks.length, 3, `${module.id} cần ba khối trong sơ đồ.`);
  assert.equal(module.lenses.length, 3, `${module.id} cần ba góc nhìn.`);
  assert.equal(module.quiz.length, 3, `${module.id} cần đúng ba câu tự kiểm tra.`);
  assert.ok(module.caution, `${module.id} thiếu lưu ý diễn giải thận trọng.`);

  const referencedPages = String(module.sourcePages).match(/\d+/g)?.map(Number) ?? [];
  assert.ok(referencedPages.length > 0, `${module.id} thiếu trang nguồn.`);
  for (const page of referencedPages) {
    assert.ok(allowedPages.has(page), `${module.id} tham chiếu trang trống hoặc ngoài phạm vi: ${page}.`);
  }

  const profile = lessonProfiles[module.id];
  assert.ok(profile, `${module.id} thiếu hồ sơ bài học.`);
  assert.equal(profile.quiz.length, 3);
  assert.equal(profile.blocks.length, 3);

  const core = lessonCoreContent[module.id];
  assert.ok(core?.lead, `${module.id} thiếu nội dung cốt lõi.`);
  assert.ok(core.sections.length >= 3, `${module.id} cần ít nhất ba luận điểm cốt lõi.`);
  for (const section of core.sections) {
    assert.ok(section.title && section.summary);
    assert.ok(section.points.length >= 3, `${module.id} có luận điểm chưa đủ ý.`);
  }

  for (const question of profile.quiz) {
    assert.equal(question.options.length, 4, `${question.id} phải có bốn lựa chọn.`);
    assert.ok(question.options.some((option) => option.id === question.correctOptionId));
    assert.ok(question.explanation, `${question.id} thiếu giải thích đáp án.`);
  }

  const audio = lessonAudioScripts[module.id];
  assert.ok(audio, `${module.id} thiếu bài nghe.`);
  assert.ok(audio.wordCount >= 850 && audio.wordCount <= 1100, `${module.id} cần bài nghe khoảng 7–9 phút.`);
  assert.ok(audio.transcript.includes(`trang ${module.sourcePages}`));
}

assert.equal(Object.keys(lessonProfiles).length, 9);
assert.equal(Object.keys(lessonCoreContent).length, 9);
assert.equal(Object.keys(lessonAudioScripts).length, 9);
assert.equal(glossary.length, 13, "Cần đúng 13 thuật ngữ đã biên soạn.");
assert.equal(podcasts.length, 3, "Cần một bài nghe nổi bật cho mỗi tuyến.");
assert.equal(games.length, 3, "Cần ba thử thách tương ứng với nội dung mới.");

assert.equal(sourceDocument.totalPages, 12);
assert.deepEqual(sourceDocument.blankPages, [2, 11]);
assert.equal(getFirstSourcePage("7–8, 12"), 7);
assert.equal(
  getSourceDocumentHref("9"),
  "/documents/nha-nuoc-xa-hoi-chu-nghia-viet-nam.pdf#page=9",
);
assert.ok(existsSync(publicPath(sourceDocument.path)), "Thiếu PDF nguồn mới.");
assert.ok(statSync(publicPath(sourceDocument.path)).size > 15_000_000, "PDF nguồn mới có kích thước bất thường.");

for (const obsoletePath of [
  "/documents/giao-trinh-chu-nghia-xa-hoi-khoa-hoc.pdf",
  "/images/history/nguyen-ai-quoc-tours-1920.webp",
  "/images/history/cong-nhan-ba-son-1925.webp",
  "/images/history/dai-hoi-vi-1986.webp",
]) {
  assert.ok(!existsSync(publicPath(obsoletePath)), `Tài nguyên cũ chưa được xóa: ${obsoletePath}`);
}

assert.ok(
  countFilteredModules(filterLearningChapters(chapters, { query: "dan chu" })) >= 3,
  "Tìm kiếm không dấu cho dân chủ phải tìm thấy các chuyên đề liên quan.",
);
assert.ok(
  countFilteredModules(filterLearningChapters(chapters, { query: "doi ngoai" })) >= 1,
  "Tìm kiếm đối ngoại phải tìm thấy chuyên đề liên quan.",
);
assert.equal(
  countFilteredModules(filterLearningChapters(chapters, { chapterFilter: "chapter-3" })),
  3,
  "Bộ lọc tuyến 3 phải trả về ba chuyên đề.",
);
assert.equal(
  buildChapterQuizQuestions(chapters, lessonProfiles, "chapter-2", () => 0.5).length,
  6,
  "Lượt tự kiểm tra phải lấy đủ sáu câu từ tuyến đã chọn.",
);

const audioMinutes = Object.values(lessonAudioScripts).reduce(
  (total, audio) => total + estimateAudioMinutes(audio.transcript),
  0,
);

console.log(
  `✓ ${chapters.length} tuyến · ${modules.length} chuyên đề · ${glossary.length} thuật ngữ · ${modules.length * 3} câu tự kiểm tra · ${audioMinutes} phút bài nghe · ${games.length} thử thách`,
);
