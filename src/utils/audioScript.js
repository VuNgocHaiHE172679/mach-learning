export const MAX_AUDIO_CHUNK_LENGTH = 220;

export function splitIntoSpeechChunks(value) {
  const text = String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return [];

  const sentences = text.match(/[^.!?…]+[.!?…]?/g) ?? [text];
  const chunks = [];
  let buffer = "";

  const pushBuffer = () => {
    if (!buffer.trim()) return;
    chunks.push(buffer.trim());
    buffer = "";
  };

  for (const rawSentence of sentences) {
    const sentence = rawSentence.trim();
    if (!sentence) continue;

    if (sentence.length <= MAX_AUDIO_CHUNK_LENGTH) {
      const candidate = buffer ? `${buffer} ${sentence}` : sentence;
      if (candidate.length <= MAX_AUDIO_CHUNK_LENGTH) {
        buffer = candidate;
      } else {
        pushBuffer();
        buffer = sentence;
      }
      continue;
    }

    pushBuffer();
    const words = sentence.split(" ");
    let fragment = "";

    for (const word of words) {
      const candidate = fragment ? `${fragment} ${word}` : word;
      if (candidate.length <= MAX_AUDIO_CHUNK_LENGTH) {
        fragment = candidate;
      } else {
        if (fragment) chunks.push(fragment);
        fragment = word;
      }
    }

    if (fragment) buffer = fragment;
  }

  pushBuffer();
  return chunks;
}

export function countAudioWords(transcript) {
  return String(transcript ?? "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function estimateAudioMinutes(transcript, wordsPerMinute = 125) {
  return Math.max(1, Math.ceil(countAudioWords(transcript) / wordsPerMinute));
}

export function formatAudioDuration(transcript) {
  const minutes = estimateAudioMinutes(transcript);
  return `≈ ${String(minutes).padStart(2, "0")} phút`;
}
