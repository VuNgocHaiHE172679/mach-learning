export const QUIZ_CHALLENGE_ROUNDS = 6;

function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export function buildChapterQuizQuestions(
  chapters,
  lessonProfiles,
  chapterId,
  random = Math.random,
) {
  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[0];
  const questions = (chapter?.modules ?? []).flatMap(
    (module) => lessonProfiles[module.id]?.quiz ?? [],
  );

  return shuffle(questions, random).slice(0, QUIZ_CHALLENGE_ROUNDS);
}

export function getQuizAssessment(score, total) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  if (percentage >= 85) {
    return {
      percentage,
      label: "Nắm chắc mạch kiến thức",
      message: "Bạn đã nhận diện tốt các khái niệm và quan hệ chính của chương.",
    };
  }
  if (percentage >= 60) {
    return {
      percentage,
      label: "Đã hiểu phần cốt lõi",
      message: "Bạn có nền tảng tốt; hãy xem lại những giải thích ở câu trả lời chưa đúng.",
    };
  }
  return {
    percentage,
    label: "Nên xem lại học phần",
    message: "Hãy mở lại các học phần liên quan rồi thử một bộ câu hỏi mới.",
  };
}
