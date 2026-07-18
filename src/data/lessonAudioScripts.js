import { allModules } from "./stateContent.js";
import {
  countAudioWords,
  formatAudioDuration,
} from "../utils/audioScript.js";

function buildTranscript(module) {
  const coreNarration = module.coreSections
    .map(
      (section, index) =>
        `Luận điểm ${index + 1}: ${section.title}. ${section.summary} ` +
        `${section.points.join(" ")}`,
    )
    .join(" ");
  const relationshipNarration = module.blocks
    .map((block, index) => `Mắt xích ${index + 1}, ${block.title}. ${block.text}`)
    .join(" ");
  const outcomeNarration = module.learningOutcomes
    .map((outcome, index) => `Mục tiêu ${index + 1}: ${outcome}`)
    .join(" ");
  const reflectionNarration = module.quiz
    .map(
      (question, index) =>
        `Câu gợi nhớ ${index + 1}: ${question.prompt} Đáp án cần giữ là ${
          question.options.find((option) => option.id === question.correctOptionId)?.label
        }. ${question.explanation}`,
    )
    .join(" ");

  return [
    `Bạn đang nghe chuyên đề ${module.number}, ${module.title}. Nội dung được biên soạn từ tài liệu Nhà nước xã hội chủ nghĩa Việt Nam, trang ${module.sourcePages}. Đây là bản diễn giải học tập; khi trích dẫn, hãy mở PDF nguồn để đối chiếu.`,
    `Luận đề cần giữ: ${module.thesis} ${module.thesisDetail}`,
    `Trước hết, hãy đặt bài học vào đúng bối cảnh. ${module.contextParagraphs.join(" ")}`,
    `Bây giờ, chúng ta đi qua các ý cốt lõi. ${coreNarration}`,
    `Tiếp theo là sơ đồ quan hệ mang tên ${module.relationTitle}. ${module.relationIntro} ${relationshipNarration}`,
    `Điểm cần thận trọng: ${module.caution}`,
    `Sau bài nghe, bạn cần đạt ba mục tiêu. ${outcomeNarration}`,
    `Cuối cùng, thử tự trả lời ba câu sau trước khi nghe đáp án. ${reflectionNarration}`,
    `Tóm lại, ${module.thesis} Hãy mở nguồn tại trang ${module.sourcePages} nếu bạn cần kiểm tra nguyên văn hoặc sử dụng nội dung trong bài viết học thuật.`,
  ].join(" ");
}

export const lessonAudioScripts = Object.fromEntries(
  allModules.map((module) => {
    const transcript = buildTranscript(module);

    return [
      module.id,
      {
        id: `full-audio-${module.id}`,
        lessonId: module.id,
        title: `${module.number} · ${module.title}`,
        description: module.summary,
        sourcePages: module.sourcePages,
        transcript,
        wordCount: countAudioWords(transcript),
        duration: formatAudioDuration(transcript),
        status: "ready",
      },
    ];
  }),
);

export default lessonAudioScripts;
