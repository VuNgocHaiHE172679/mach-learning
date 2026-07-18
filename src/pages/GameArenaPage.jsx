import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Check,
  CheckCircle2,
  Clock3,
  Gamepad2,
  Headphones,
  Network,
  Play,
  RotateCcw,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { chapters, games } from "../data/learningContent";
import { lessonProfiles } from "../data/lessonProfiles";
import {
  buildChapterQuizQuestions,
  getQuizAssessment,
} from "../utils/quizChallenge";

const SEQUENCE = [
  { id: "industry", label: "Đại công nghiệp phát triển", order: 0 },
  { id: "contradiction", label: "Mâu thuẫn xã hội bộc lộ", order: 1 },
  { id: "movement", label: "Phong trào công nhân phát triển", order: 2 },
  { id: "theory", label: "Yêu cầu về lý luận khoa học", order: 3 },
];

const SHUFFLED = [SEQUENCE[2], SEQUENCE[0], SEQUENCE[3], SEQUENCE[1]];
const MISSION_CHAPTER = chapters.find((chapter) => chapter.id === "chapter-2");

export default function GameArenaPage({ navigate }) {
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);
  const [activeMindModuleId, setActiveMindModuleId] = useState(
    MISSION_CHAPTER?.modules[0]?.id,
  );
  const [quizChapterId, setQuizChapterId] = useState(chapters[0].id);
  const [quizStatus, setQuizStatus] = useState("setup");
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState(null);
  const [quizFeedback, setQuizFeedback] = useState(null);
  const [quizScore, setQuizScore] = useState(0);

  const remaining = useMemo(
    () => SHUFFLED.filter((item) => !selected.some((pick) => pick.id === item.id)),
    [selected],
  );

  const quizChapter =
    chapters.find((chapter) => chapter.id === quizChapterId) ?? chapters[0];
  const activeMindModule =
    MISSION_CHAPTER?.modules.find(
      (module) => module.id === activeMindModuleId,
    ) ?? MISSION_CHAPTER?.modules[0];
  const currentQuizQuestion = quizQuestions[quizQuestionIndex];
  const quizAssessment = getQuizAssessment(quizScore, quizQuestions.length);

  const startQuiz = () => {
    const questions = buildChapterQuizQuestions(
      chapters,
      lessonProfiles,
      quizChapterId,
    );
    setQuizQuestions(questions);
    setQuizQuestionIndex(0);
    setQuizSelectedOption(null);
    setQuizFeedback(null);
    setQuizScore(0);
    setQuizStatus("answering");
  };

  const checkQuizAnswer = () => {
    if (!currentQuizQuestion || quizSelectedOption === null || quizFeedback) return;
    const isCorrect =
      quizSelectedOption === currentQuizQuestion.correctOptionId;
    const isLastQuestion = quizQuestionIndex === quizQuestions.length - 1;

    if (isCorrect) setQuizScore((score) => score + 1);
    setQuizFeedback({
      isCorrect,
      finished: isLastQuestion,
    });
  };

  const continueQuiz = () => {
    if (!quizFeedback) return;
    if (quizFeedback.finished) {
      setQuizStatus("finished");
      return;
    }
    setQuizQuestionIndex((index) => index + 1);
    setQuizSelectedOption(null);
    setQuizFeedback(null);
  };

  const returnToQuizSetup = () => {
    setQuizStatus("setup");
    setQuizQuestions([]);
    setQuizQuestionIndex(0);
    setQuizSelectedOption(null);
    setQuizFeedback(null);
    setQuizScore(0);
  };

  const addItem = (item) => {
    if (result) return;
    setSelected((current) => [...current, item]);
  };

  const removeItem = (item) => {
    if (result) return;
    setSelected((current) => current.filter((pick) => pick.id !== item.id));
  };

  const checkSequence = () => {
    if (selected.length !== SEQUENCE.length) return;
    const correct = selected.every((item, index) => item.order === index);
    setResult(correct ? "correct" : "incorrect");
  };

  const reset = () => {
    setSelected([]);
    setResult(null);
  };

  return (
    <div className="page game-page">
      <section className="game-hero">
        <div className="section-shell game-hero-inner">
          <div>
            <div className="status-pill dark">
              <Gamepad2 size={15} />
              THỬ THÁCH TƯ DUY / BẢN THỬ NGHIỆM
            </div>
            <h1>
              Đừng chỉ nhớ.
              <span>Hãy dựng lại lập luận.</span>
            </h1>
            <p>
              Mỗi thử thách biến một cấu trúc lý luận thành thao tác: sắp xếp,
              phân loại, nối quan hệ và giải thích lựa chọn.
            </p>
            <button
              type="button"
              className="game-hero-cta"
              onClick={() =>
                document
                  .getElementById("knowledge-quiz")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <BrainCircuit size={18} aria-hidden="true" />
              Bắt đầu câu hỏi kiến thức
              <ArrowRight size={17} />
            </button>
          </div>
          <div className="arena-score">
            <Network size={25} />
            <div>
              <span>NỘI DUNG TƯƠNG TÁC</span>
              <strong>04 MÔ HÌNH</strong>
            </div>
            <span className="arena-rank">TRUY CẬP CÔNG KHAI</span>
          </div>
        </div>
      </section>

      <section className="section-shell game-catalogue">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">BỐN PHÒNG THỬ NGHIỆM</p>
            <h2>Mỗi chương, một kiểu tư duy</h2>
          </div>
          <p>
            Các mô hình trực quan giúp làm rõ quan hệ nhân quả, cấu trúc và
            chuyển biến trong từng chương.
          </p>
        </div>
        <div className="game-card-grid">
          {games.map((game, index) => (
            <article className={`game-card game-card-${index + 1}`} key={game.id}>
              <div className="game-card-visual">
                <span>0{index + 1}</span>
                <div className="game-glyph" aria-hidden="true">
                  {index === 0 ? "↗" : index === 1 ? "✣" : "⇄"}
                </div>
              </div>
              <div className="game-card-copy">
                <p>{game.chapter ?? `CHƯƠNG ${index + 1}`}</p>
                <h3>{game.title}</h3>
                <p>{game.description ?? game.summary}</p>
                <div className="game-meta">
                  <span>
                    <Clock3 size={14} /> {game.duration ?? "3–5 phút"}
                  </span>
                  <span>
                    <BrainCircuit size={14} />{" "}
                    {game.skills?.[0] ?? "Tư duy hệ thống"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById(
                        game.id === "mission-matrix"
                          ? "mission-mindmap"
                          : "active-challenge",
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {game.id === "mission-matrix"
                    ? "Mở sơ đồ tư duy"
                    : "Khám phá mô hình"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {MISSION_CHAPTER && activeMindModule && (
        <section
          className="section-shell mission-map-section"
          id="mission-mindmap"
        >
          <header className="mission-map-header">
            <div>
              <p className="eyebrow">CHƯƠNG 2 / SƠ ĐỒ TƯ DUY TƯƠNG TÁC</p>
              <h2>Ba học phần, một mạch sứ mệnh</h2>
            </div>
            <p>
              Bấm vào từng nhánh để xem luận điểm trung tâm, khái niệm then chốt
              và đi thẳng đến học phần cần đọc sâu.
            </p>
          </header>

          <div className="mission-map-canvas">
            <div className="mission-map-center">
              <span>CHỦ ĐỀ TRUNG TÂM</span>
              <Network size={28} aria-hidden="true" />
              <strong>{MISSION_CHAPTER.title}</strong>
              <small>Trang {MISSION_CHAPTER.sourcePages}</small>
            </div>

            <div className="mission-map-branches" aria-label="Ba học phần Chương 2">
              {MISSION_CHAPTER.modules.map((module, index) => {
                const isActive = module.id === activeMindModule.id;
                const FormatIcon =
                  module.primaryFormat === "listen" ? Headphones : BookOpen;

                return (
                  <button
                    type="button"
                    className={isActive ? "active" : ""}
                    aria-pressed={isActive}
                    key={module.id}
                    onClick={() => setActiveMindModuleId(module.id)}
                  >
                    <span className="mission-branch-number">0{index + 1}</span>
                    <span className="mission-branch-copy">
                      <small>{module.number} · {module.estimatedMinutes} PHÚT</small>
                      <strong>{module.title}</strong>
                      <em>
                        <FormatIcon size={14} aria-hidden="true" />
                        {module.keyConcepts.slice(0, 2).join(" · ")}
                      </em>
                    </span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          <article className="mission-map-detail" aria-live="polite">
            <div className="mission-map-detail-index">
              <span>{activeMindModule.number}</span>
              <small>NHÁNH ĐANG MỞ</small>
            </div>
            <div className="mission-map-detail-copy">
              <p>{activeMindModule.subtitle}</p>
              <h3>{activeMindModule.title}</h3>
              <p>{activeMindModule.summary}</p>
              <div className="mission-map-concepts">
                {activeMindModule.keyConcepts.map((concept) => (
                  <span key={concept}>{concept}</span>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => navigate("lesson", activeMindModule.id)}
            >
              Vào học phần
              <ArrowRight size={17} />
            </button>
          </article>
        </section>
      )}

      <section
        className="section-shell knowledge-quiz-section"
        id="knowledge-quiz"
      >
        <header className="knowledge-quiz-header">
          <div>
            <p className="eyebrow">TỰ KIỂM TRA / KHÔNG CẦN TÀI KHOẢN</p>
            <h2>Trả lời câu hỏi kiến thức</h2>
            <p>
              Chọn một chương và hoàn thành sáu câu hỏi ngắn. Mỗi câu đều có
              phản hồi và giải thích ngay để bạn tự đối chiếu cách hiểu.
            </p>
          </div>
          <div className="knowledge-quiz-summary">
            <span>06</span>
            <strong>câu hỏi mỗi lượt</strong>
            <small>Không giới hạn thời gian</small>
          </div>
        </header>

        {quizStatus === "setup" && (
          <div className="knowledge-quiz-setup">
            <fieldset>
              <legend>Chọn chương kiến thức</legend>
              <div className="quiz-chapter-grid">
                {chapters.map((chapter) => (
                  <button
                    type="button"
                    className={quizChapterId === chapter.id ? "active" : ""}
                    aria-pressed={quizChapterId === chapter.id}
                    key={chapter.id}
                    onClick={() => setQuizChapterId(chapter.id)}
                  >
                    <span>{chapter.number}</span>
                    <strong>{chapter.title}</strong>
                    <small>{chapter.modules.length} học phần · {chapter.sourcePages}</small>
                  </button>
                ))}
              </div>
            </fieldset>
            <button type="button" className="quiz-start-button" onClick={startQuiz}>
              <Play size={18} fill="currentColor" /> Bắt đầu trả lời
            </button>
          </div>
        )}

        {quizStatus === "answering" && currentQuizQuestion && (
          <div className="knowledge-quiz-card">
            <div className="quiz-progress-meta">
              <span>CÂU {quizQuestionIndex + 1}/{quizQuestions.length}</span>
              <strong>{quizChapter.title}</strong>
              <span>{quizScore} câu đúng</span>
            </div>
            <div
              className="quiz-progress-track"
              role="progressbar"
              aria-label={`Tiến độ: câu ${quizQuestionIndex + 1} trên ${quizQuestions.length}`}
              aria-valuemin="1"
              aria-valuemax={quizQuestions.length}
              aria-valuenow={quizQuestionIndex + 1}
            >
              <span
                style={{
                  width: `${((quizQuestionIndex + 1) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>

            <h3>{currentQuizQuestion.prompt}</h3>
            <div className="quiz-answer-grid">
              {currentQuizQuestion.options.map((option, index) => {
                const isSelected = quizSelectedOption === option.id;
                const isCorrectOption =
                  quizFeedback && option.id === currentQuizQuestion.correctOptionId;
                const isIncorrectSelection =
                  quizFeedback && isSelected && !isCorrectOption;

                return (
                  <button
                    type="button"
                    className={`${isSelected ? "selected" : ""} ${
                      isCorrectOption ? "correct" : ""
                    } ${isIncorrectSelection ? "incorrect" : ""}`}
                    disabled={Boolean(quizFeedback)}
                    key={option.id}
                    onClick={() => setQuizSelectedOption(option.id)}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option.label}
                    {isCorrectOption && <CheckCircle2 size={18} />}
                    {isIncorrectSelection && <X size={18} />}
                  </button>
                );
              })}
            </div>

            {quizFeedback && (
              <div className={`quiz-feedback ${quizFeedback.isCorrect ? "good" : ""}`}>
                {quizFeedback.isCorrect ? (
                  <CheckCircle2 size={22} />
                ) : (
                  <BrainCircuit size={22} />
                )}
                <div>
                  <strong>
                    {quizFeedback.isCorrect
                      ? "Chính xác."
                      : "Chưa đúng — hãy xem lại cách lập luận."}
                  </strong>
                  <p>{currentQuizQuestion.explanation}</p>
                </div>
              </div>
            )}

            <div className="quiz-card-actions">
              {!quizFeedback ? (
                <button
                  type="button"
                  className="button primary"
                  disabled={quizSelectedOption === null}
                  onClick={checkQuizAnswer}
                >
                  Xác nhận đáp án <ArrowRight size={17} />
                </button>
              ) : (
                <button type="button" className="button primary" onClick={continueQuiz}>
                  {quizFeedback.finished ? "Xem kết quả" : "Câu tiếp theo"}
                  <ArrowRight size={17} />
                </button>
              )}
            </div>
          </div>
        )}

        {quizStatus === "finished" && (
          <div className="knowledge-quiz-result">
            <div className="quiz-result-score">
              <Trophy size={30} aria-hidden="true" />
              <strong>{quizAssessment.percentage}%</strong>
              <span>{quizScore}/{quizQuestions.length} câu đúng</span>
            </div>
            <div>
              <p className="eyebrow">KẾT QUẢ TỰ KIỂM TRA</p>
              <h3>{quizAssessment.label}</h3>
              <p>{quizAssessment.message}</p>
            </div>
            <div className="quiz-result-actions">
              <button type="button" className="button primary" onClick={startQuiz}>
                <RotateCcw size={17} /> Làm bộ câu hỏi mới
              </button>
              <button type="button" className="button secondary" onClick={returnToQuizSetup}>
                Chọn chương khác
              </button>
            </div>
          </div>
        )}

        <footer className="knowledge-quiz-note">
          <span>Không lưu dữ liệu</span>
          <p>
            Câu hỏi được tạo lại từ ba học phần của chương đã chọn. Website
            không lưu tên, điểm số hoặc lịch sử trả lời.
          </p>
        </footer>
      </section>

      <section
        className="section-shell active-challenge"
        id="active-challenge"
      >
        <div className="challenge-header">
          <div>
            <p className="eyebrow light">XƯỞNG LỊCH SỬ / LƯỢT 01</p>
            <h2>Sắp xếp mạch nhân quả</h2>
            <p>
              Chọn bốn thẻ theo thứ tự hợp lý. Sau đó kiểm tra và xem giải
              thích.
            </p>
          </div>
          <div className="challenge-timer">
            <Clock3 size={18} />
            <span>
              KHÔNG GIỚI HẠN
              <strong>Học trước, tốc độ sau</strong>
            </span>
          </div>
        </div>

        <div className="challenge-board">
          <div className="card-bank">
            <p>KHO DỮ KIỆN</p>
            <div>
              {remaining.map((item) => (
                <button type="button" key={item.id} onClick={() => addItem(item)}>
                  <span>+</span>
                  {item.label}
                </button>
              ))}
              {remaining.length === 0 && (
                <span className="bank-empty">Đã dùng hết dữ kiện</span>
              )}
            </div>
          </div>

          <div className="sequence-zone">
            <p>TRÌNH TỰ SẮP XẾP</p>
            <div className="sequence-slots">
              {[0, 1, 2, 3].map((slot) => {
                const item = selected[slot];
                return (
                  <div
                    className={`sequence-slot ${item ? "filled" : ""} ${
                      result && item
                        ? item.order === slot
                          ? "correct"
                          : "incorrect"
                        : ""
                    }`}
                    key={slot}
                  >
                    <span className="slot-number">0{slot + 1}</span>
                    {item ? (
                      <button type="button" onClick={() => removeItem(item)}>
                        {item.label}
                        {result ? (
                          item.order === slot ? (
                            <Check size={17} />
                          ) : (
                            <X size={17} />
                          )
                        ) : (
                          <X size={15} />
                        )}
                      </button>
                    ) : (
                      <span>Chọn một dữ kiện</span>
                    )}
                    {slot < 3 && <i aria-hidden="true">↓</i>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {result && (
          <div className={`challenge-feedback ${result}`}>
            {result === "correct" ? (
              <CheckCircle2 size={24} />
            ) : (
              <Sparkles size={24} />
            )}
            <div>
              <strong>
                {result === "correct"
                  ? "Mạch nhân quả hợp lý."
                  : "Có một quan hệ cần xem lại."}
              </strong>
              <p>
                {result === "correct"
                  ? "Chuỗi đã nối được điều kiện kinh tế–xã hội với yêu cầu hình thành một lý luận khoa học."
                  : "Hãy bắt đầu từ biến đổi của sản xuất, sau đó quan sát mâu thuẫn xã hội và sự phát triển của phong trào thực tiễn."}
              </p>
            </div>
          </div>
        )}

        <div className="challenge-actions">
          <button type="button" className="button ghost-dark" onClick={reset}>
            <RotateCcw size={17} /> Làm lại
          </button>
          <button
            type="button"
            className="button mustard"
            disabled={selected.length !== 4 || result !== null}
            onClick={checkSequence}
          >
            Kiểm tra mạch <ArrowRight size={17} />
          </button>
        </div>
      </section>

      <section className="section-shell arena-note">
        <Sparkles size={20} />
        <div>
          <strong>Trò tương tác là một cách trình bày kiến thức.</strong>
          <p>
            Kết quả chỉ giúp người xem kiểm tra quan hệ giữa các luận điểm;
            website không lưu điểm, hồ sơ hay lịch sử hoạt động.
          </p>
        </div>
        <button type="button" onClick={() => navigate("hub")}>
          Trở lại bản đồ tri thức <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
