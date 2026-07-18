import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  HelpCircle,
  Network,
  RotateCcw,
  Sparkles,
  XCircle,
} from "lucide-react";
import { chapters } from "../data/learningContent";
import { lessonProfiles } from "../data/lessonProfiles";
import { getQuizAssessment } from "../utils/quizChallenge";
import { getSourceDocumentHref } from "../utils/sourceDocument";

const ROUND_LENGTH = 6;

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function buildQuestionBank() {
  return chapters.flatMap((track) =>
    track.modules.flatMap((module) =>
      (lessonProfiles[module.id]?.quiz ?? []).map((question) => ({
        ...question,
        trackId: track.id,
        trackNumber: track.number,
        trackTitle: track.shortTitle,
        moduleId: module.id,
        moduleNumber: module.number,
        moduleTitle: module.title,
        sourcePages: module.sourcePages,
      })),
    ),
  );
}

export default function GameArenaPage({ navigate }) {
  const questionBank = useMemo(buildQuestionBank, []);
  const [selectedTrackId, setSelectedTrackId] = useState("all");
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[questionIndex];
  const assessment = finished
    ? getQuizAssessment(score, questions.length)
    : null;

  const startQuiz = (trackId = selectedTrackId) => {
    const pool =
      trackId === "all"
        ? questionBank
        : questionBank.filter((question) => question.trackId === trackId);

    setSelectedTrackId(trackId);
    setQuestions(shuffle(pool).slice(0, ROUND_LENGTH));
    setQuestionIndex(0);
    setSelectedOptionId(null);
    setChecked(false);
    setScore(0);
    setFinished(false);
    window.setTimeout(() => {
      document.getElementById("quiz-workspace")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const checkAnswer = () => {
    if (!currentQuestion || !selectedOptionId || checked) return;
    setChecked(true);
    if (selectedOptionId === currentQuestion.correctOptionId) {
      setScore((currentScore) => currentScore + 1);
    }
  };

  const nextQuestion = () => {
    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedOptionId(null);
    setChecked(false);
  };

  const restart = () => startQuiz(selectedTrackId);

  return (
    <div className="page game-page quiz-arena-page">
      <section className="game-hero">
        <div className="section-shell game-hero-inner">
          <div>
            <div className="status-pill dark">
              <span className="status-dot" /> TỰ KIỂM TRA · KHÔNG CẦN TÀI KHOẢN
            </div>
            <p className="eyebrow light">27 CÂU HỎI · 09 CHUYÊN ĐỀ</p>
            <h1>Trả lời câu hỏi.<br />Hiểu rõ từng quan hệ.</h1>
            <p>
              Không đua, không kéo thả, không lưu điểm. Mỗi lượt gồm sáu câu
              trắc nghiệm, phản hồi ngay và có liên kết mở đúng trang PDF nguồn.
            </p>
            <button
              type="button"
              className="button mustard large"
              onClick={() => startQuiz("all")}
            >
              Bắt đầu với cả ba tuyến <ArrowRight size={18} />
            </button>
          </div>
          <div className="quiz-hero-diagram" aria-hidden="true">
            <div className="quiz-hero-core">
              <HelpCircle size={34} />
              <span>06 CÂU</span>
              <strong>MỘT LƯỢT</strong>
            </div>
            <div className="quiz-hero-node node-a">BẢN CHẤT</div>
            <div className="quiz-hero-node node-b">DÂN CHỦ</div>
            <div className="quiz-hero-node node-c">CHỨC NĂNG</div>
          </div>
        </div>
      </section>

      <section className="section-shell game-catalogue quiz-track-picker">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">CHỌN PHẠM VI</p>
            <h2>Ôn toàn bộ hoặc tập trung một tuyến</h2>
          </div>
          <p>
            Câu hỏi được lấy từ đúng phần tự kiểm tra của từng bài. Mỗi lần bắt
            đầu, thứ tự câu và đáp án được giữ nguyên nội dung nhưng trộn lại lượt.
          </p>
        </div>

        <div className="game-card-grid quiz-track-grid">
          {chapters.map((track, index) => (
            <article className={`game-card game-card-${index + 1}`} key={track.id}>
              <div className="game-card-visual">
                <span>0{index + 1}</span>
                <div className="game-glyph" aria-hidden="true">
                  <Network size={34} />
                </div>
              </div>
              <div className="game-card-copy">
                <p>TUYẾN {track.number}</p>
                <h3>{track.shortTitle}</h3>
                <p>{track.description}</p>
                <div className="game-meta">
                  <span><Clock3 size={14} /> 4–6 phút</span>
                  <span><BookOpen size={14} /> 9 câu nguồn</span>
                </div>
                <button type="button" onClick={() => startQuiz(track.id)}>
                  Làm 6 câu ngẫu nhiên <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell quiz-workspace" id="quiz-workspace">
        {questions.length === 0 && (
          <div className="quiz-welcome">
            <Sparkles size={26} />
            <div>
              <p className="eyebrow">SẴN SÀNG KHI BẠN CHỌN</p>
              <h2>Một lượt ngắn, phản hồi đầy đủ</h2>
              <p>
                Bạn có thể xem sơ đồ tư duy trong Kho tri thức trước, sau đó quay
                lại làm bài mà không cần đăng nhập hoặc lưu tiến độ.
              </p>
            </div>
            <button type="button" className="button secondary" onClick={() => navigate("hub")}>
              Xem sơ đồ tư duy <ArrowRight size={17} />
            </button>
          </div>
        )}

        {currentQuestion && !finished && (
          <article className="arena-quiz-card">
            <header className="arena-quiz-header">
              <div>
                <p className="eyebrow">TUYẾN {currentQuestion.trackNumber} · {currentQuestion.moduleNumber}</p>
                <h2>{currentQuestion.moduleTitle}</h2>
              </div>
              <div className="arena-quiz-progress">
                <span>CÂU {questionIndex + 1}/{questions.length}</span>
                <div>
                  <i style={{ width: `${((questionIndex + Number(checked)) / questions.length) * 100}%` }} />
                </div>
              </div>
            </header>

            <div className="arena-quiz-body">
              <h3>{currentQuestion.prompt}</h3>
              <div className="quiz-options arena-quiz-options">
                {currentQuestion.options.map((option, optionIndex) => {
                  let state = "";
                  if (!checked && selectedOptionId === option.id) state = "selected";
                  if (checked && option.id === currentQuestion.correctOptionId) state = "correct";
                  if (
                    checked &&
                    option.id === selectedOptionId &&
                    option.id !== currentQuestion.correctOptionId
                  ) {
                    state = "incorrect";
                  }

                  return (
                    <button
                      type="button"
                      className={state}
                      key={option.id}
                      disabled={checked}
                      aria-pressed={selectedOptionId === option.id}
                      onClick={() => setSelectedOptionId(option.id)}
                    >
                      <span>{String.fromCharCode(65 + optionIndex)}</span>
                      {option.label}
                      {state === "correct" && <CheckCircle2 size={19} />}
                      {state === "incorrect" && <XCircle size={19} />}
                    </button>
                  );
                })}
              </div>

              {checked && (
                <div
                  className={
                    selectedOptionId === currentQuestion.correctOptionId
                      ? "quiz-feedback good"
                      : "quiz-feedback"
                  }
                  aria-live="polite"
                >
                  {selectedOptionId === currentQuestion.correctOptionId ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <HelpCircle size={20} />
                  )}
                  <div>
                    <strong>
                      {selectedOptionId === currentQuestion.correctOptionId
                        ? "Chính xác."
                        : "Chưa đúng — xem lại mạch giải thích."}
                    </strong>
                    <p>{currentQuestion.explanation}</p>
                    <a
                      href={getSourceDocumentHref(currentQuestion.sourcePages)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mở tài liệu nguồn · trang {currentQuestion.sourcePages} ↗
                    </a>
                  </div>
                </div>
              )}
            </div>

            <footer className="arena-quiz-actions">
              <span>
                {checked
                  ? `Điểm tạm thời: ${score}/${questionIndex + 1}`
                  : "Chọn một đáp án để tiếp tục"}
              </span>
              {!checked ? (
                <button
                  type="button"
                  className="button primary"
                  disabled={!selectedOptionId}
                  onClick={checkAnswer}
                >
                  Kiểm tra đáp án
                </button>
              ) : (
                <button type="button" className="button primary" onClick={nextQuestion}>
                  {questionIndex === questions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
                  <ArrowRight size={17} />
                </button>
              )}
            </footer>
          </article>
        )}

        {finished && assessment && (
          <article className="quiz-result-card">
            <div className="quiz-result-score">
              <span>{assessment.percentage}%</span>
              <small>{score}/{questions.length} câu đúng</small>
            </div>
            <div>
              <p className="eyebrow">HOÀN THÀNH LƯỢT TỰ KIỂM TRA</p>
              <h2>{assessment.label}</h2>
              <p>{assessment.message}</p>
              <div className="quiz-result-actions">
                <button type="button" className="button primary" onClick={restart}>
                  <RotateCcw size={17} /> Làm bộ câu hỏi mới
                </button>
                <button type="button" className="button secondary" onClick={() => navigate("hub")}>
                  <BookOpen size={17} /> Quay lại Kho tri thức
                </button>
              </div>
            </div>
          </article>
        )}
      </section>
    </div>
  );
}
