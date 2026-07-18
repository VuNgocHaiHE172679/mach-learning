import { useEffect, useRef, useState } from "react";
import { Headphones, Pause, Play, RotateCcw, X } from "lucide-react";
import { splitIntoSpeechChunks } from "../utils/audioScript";

export default function AudioPlayer({ audio, onClose }) {
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [position, setPosition] = useState({ current: 0, total: 0 });
  const chunksRef = useRef([]);
  const chunkIndexRef = useRef(0);
  const sessionRef = useRef(0);
  const utteranceRef = useRef(null);

  const transcript =
    audio?.transcript ??
    audio?.transcriptPreview ??
    audio?.summary ??
    audio?.description ??
    "Nhà nước xã hội chủ nghĩa Việt Nam được tài liệu trình bày qua bản chất, quyền làm chủ của Nhân dân, các chức năng và mục tiêu phát triển đất nước.";

  useEffect(() => {
    sessionRef.current += 1;
    window.speechSynthesis?.cancel();
    const chunks = splitIntoSpeechChunks(transcript);
    chunksRef.current = chunks;
    chunkIndexRef.current = 0;
    setStatus("idle");
    setProgress(0);
    setPosition({ current: 0, total: chunks.length });

    return () => {
      sessionRef.current += 1;
      window.speechSynthesis?.cancel();
    };
  }, [audio, transcript]);

  if (!audio) return null;

  const title = audio.title ?? "Bài nghe lý luận";

  const speakChunk = (index, session) => {
    if (session !== sessionRef.current) return;

    const chunks = chunksRef.current;
    if (index >= chunks.length) {
      setStatus("complete");
      setProgress(100);
      setPosition({ current: chunks.length, total: chunks.length });
      return;
    }

    chunkIndexRef.current = index;
    setPosition({ current: index + 1, total: chunks.length });
    setProgress((index / chunks.length) * 100);

    const utterance = new SpeechSynthesisUtterance(chunks[index]);
    utterance.lang = "vi-VN";
    utterance.rate = 0.92;
    utterance.onend = () => {
      if (session !== sessionRef.current) return;
      const nextIndex = index + 1;
      setProgress((nextIndex / chunks.length) * 100);
      speakChunk(nextIndex, session);
    };
    utterance.onerror = (event) => {
      if (session !== sessionRef.current) return;
      if (event.error === "canceled" || event.error === "interrupted") return;
      setStatus("paused");
    };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const startFrom = (index) => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      setStatus("unsupported");
      return;
    }

    sessionRef.current += 1;
    const session = sessionRef.current;
    window.speechSynthesis.cancel();
    setStatus("playing");
    speakChunk(index, session);
  };

  const togglePlayback = () => {
    if (status === "playing") {
      sessionRef.current += 1;
      window.speechSynthesis?.cancel();
      setStatus("paused");
      return;
    }

    const resumeIndex = status === "paused" ? chunkIndexRef.current : 0;
    startFrom(resumeIndex);
  };

  const restart = () => {
    chunkIndexRef.current = 0;
    setProgress(0);
    startFrom(0);
  };

  const statusLabel = {
    idle: `${audio.duration ?? "Bài nghe dài"} · ${position.total} đoạn`,
    playing: `Đang đọc · đoạn ${position.current}/${position.total}`,
    paused: `Đã tạm dừng · đoạn ${position.current}/${position.total}`,
    complete: "Đã nghe xong · nhấn phát để nghe lại",
    unsupported: "Trình duyệt này chưa hỗ trợ đọc giọng nói",
  }[status];

  return (
    <section className="floating-player" aria-label="Trình phát bài nghe">
      <div className="player-cover" aria-hidden="true">
        <Headphones size={22} />
      </div>
      <button
        type="button"
        className="player-control"
        onClick={togglePlayback}
        aria-label={status === "playing" ? "Tạm dừng" : "Phát bài nghe"}
      >
        {status === "playing" ? <Pause size={18} /> : <Play size={18} />}
      </button>
      <div className="player-info">
        <strong>{title}</strong>
        <span>{statusLabel}</span>
      </div>
      <div
        className="player-track"
        role="progressbar"
        aria-label="Tiến độ bài nghe"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(progress)}
      >
        <span style={{ width: `${progress}%` }} />
      </div>
      <button
        type="button"
        className="icon-button player-restart"
        onClick={restart}
        aria-label="Phát lại từ đầu"
      >
        <RotateCcw size={17} />
      </button>
      <button
        type="button"
        className="icon-button"
        onClick={() => {
          sessionRef.current += 1;
          window.speechSynthesis?.cancel();
          onClose();
        }}
        aria-label="Đóng trình phát"
      >
        <X size={18} />
      </button>
    </section>
  );
}
