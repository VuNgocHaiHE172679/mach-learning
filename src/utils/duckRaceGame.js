export const DUCK_RACERS = [
  { id: "red", name: "Vịt Đỏ", color: "#c51910", lane: "Luận điểm" },
  { id: "gold", name: "Vịt Vàng", color: "#f4c62f", lane: "Dẫn chứng" },
  { id: "blue", name: "Vịt Lam", color: "#238a9b", lane: "Khái niệm" },
  { id: "brown", name: "Vịt Nâu", color: "#85502f", lane: "Bối cảnh" },
];

export const DUCK_RACE_ROUNDS = 6;

function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export function buildDuckRaceQuestions(
  chapters,
  lessonProfiles,
  chapterId,
  random = Math.random,
) {
  const chapter = chapters.find((item) => item.id === chapterId) ?? chapters[0];
  const questions = (chapter?.modules ?? []).flatMap(
    (module) => lessonProfiles[module.id]?.quiz ?? [],
  );
  return shuffle(questions, random).slice(0, DUCK_RACE_ROUNDS);
}

export function createRaceProgress() {
  return Object.fromEntries(DUCK_RACERS.map((duck) => [duck.id, 0]));
}

export function advanceDuckRace(
  currentProgress,
  playerDuckId,
  isCorrect,
  random = Math.random,
) {
  const progress = { ...currentProgress };

  for (const duck of DUCK_RACERS) {
    const isPlayer = duck.id === playerDuckId;
    const boost = isPlayer
      ? isCorrect
        ? 18 + Math.floor(random() * 7)
        : 5 + Math.floor(random() * 5)
      : 8 + Math.floor(random() * 9);
    progress[duck.id] = Math.min(100, (progress[duck.id] ?? 0) + boost);
  }

  let event = null;
  if (random() < 0.12) {
    progress[playerDuckId] = Math.min(100, progress[playerDuckId] + 8);
    event = {
      title: "Gió thuận trên đường đua!",
      description: "Vịt bạn chọn nhận thêm 8% quãng đường từ sự kiện ngẫu nhiên.",
    };
  }

  return { progress, event };
}

export function rankDuckRacers(progress) {
  return [...DUCK_RACERS].sort(
    (left, right) => (progress[right.id] ?? 0) - (progress[left.id] ?? 0),
  );
}
