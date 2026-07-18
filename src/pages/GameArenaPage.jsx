import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Check,
  CheckCircle2,
  Clock3,
  Flag,
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
  DUCK_RACERS,
  advanceDuckRace,
  buildDuckRaceQuestions,
  createRaceProgress,
  rankDuckRacers,
} from "../utils/duckRaceGame";

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
  const [raceChapterId, setRaceChapterId] = useState(chapters[0].id);
  const [playerDuckId, setPlayerDuckId] = useState(DUCK_RACERS[0].id);
  const [raceStatus, setRaceStatus] = useState("setup");
  const [raceQuestions, setRaceQuestions] = useState([]);
  const [raceQuestionIndex, setRaceQuestionIndex] = useState(0);
  const [raceSelectedOption, setRaceSelectedOption] = useState(null);
  const [raceFeedback, setRaceFeedback] = useState(null);
  const [raceProgress, setRaceProgress] = useState(createRaceProgress);
  const [raceScore, setRaceScore] = useState(0);

  const remaining = useMemo(
    () => SHUFFLED.filter((item) => !selected.some((pick) => pick.id === item.id)),
    [selected],
  );

  const raceChapter =
    chapters.find((chapter) => chapter.id === raceChapterId) ?? chapters[0];
  const activeMindModule =
    MISSION_CHAPTER?.modules.find(
      (module) => module.id === activeMindModuleId,
    ) ?? MISSION_CHAPTER?.modules[0];
  const currentRaceQuestion = raceQuestions[raceQuestionIndex];
  const raceRanking = useMemo(
    () => rankDuckRacers(raceProgress),
    [raceProgress],
  );

  const startDuckRace = () => {
    const questions = buildDuckRaceQuestions(
      chapters,
      lessonProfiles,
      raceChapterId,
    );
    setRaceQuestions(questions);
    setRaceQuestionIndex(0);
    setRaceSelectedOption(null);
    setRaceFeedback(null);
    setRaceProgress(createRaceProgress());
    setRaceScore(0);
    setRaceStatus("racing");
  };

  const checkRaceAnswer = () => {
    if (!currentRaceQuestion || raceSelectedOption === null || raceFeedback) return;
    const isCorrect =
      raceSelectedOption === currentRaceQuestion.correctOptionId;
    const outcome = advanceDuckRace(
      raceProgress,
      playerDuckId,
      isCorrect,
    );
    const reachedFinish = Math.max(...Object.values(outcome.progress)) >= 100;
    const isLastQuestion = raceQuestionIndex === raceQuestions.length - 1;

    setRaceProgress(outcome.progress);
    if (isCorrect) setRaceScore((score) => score + 1);
    setRaceFeedback({
      isCorrect,
      event: outcome.event,
      finished: reachedFinish || isLastQuestion,
    });
  };

  const continueDuckRace = () => {
    if (!raceFeedback) return;
    if (raceFeedback.finished) {
      setRaceStatus("finished");
      return;
    }
    setRaceQuestionIndex((index) => index + 1);
    setRaceSelectedOption(null);
    setRaceFeedback(null);
  };

  const returnToRaceSetup = () => {
    setRaceStatus("setup");
    setRaceQuestions([]);
    setRaceQuestionIndex(0);
    setRaceSelectedOption(null);
    setRaceFeedback(null);
    setRaceProgress(createRaceProgress());
    setRaceScore(0);
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
                  .getElementById("duck-race")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <span aria-hidden="true">🦆</span>
              Vào đường đua biện chứng
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

      <section className="section-shell duck-race-section" id="duck-race">
        <header className="duck-race-header">
          <div>
            <p className="eyebrow">TRÒ CHƠI THỬ NGHIỆM / KHÔNG CẦN TÀI KHOẢN</p>
            <h2>Đường đua Biện chứng</h2>
            <p>
              Chọn một chú vịt và trả lời sáu câu hỏi. Đáp án đúng tạo lợi thế
              lớn; sự kiện ngẫu nhiên chỉ đóng vai trò phụ để đường đua luôn bất ngờ.
            </p>
          </div>
          <div className="duck-race-balance">
            <span>70%</span>
            <strong>kiến thức quyết định</strong>
            <small>30% nhịp đua và bất ngờ</small>
          </div>
        </header>

        {raceStatus === "setup" && (
          <div className="duck-race-setup">
            <fieldset>
              <legend>1. Chọn chương kiến thức</legend>
              <div className="race-choice-grid chapter-choices">
                {chapters.map((chapter) => (
                  <button
                    type="button"
                    className={raceChapterId === chapter.id ? "active" : ""}
                    aria-pressed={raceChapterId === chapter.id}
                    key={chapter.id}
                    onClick={() => setRaceChapterId(chapter.id)}
                  >
                    <span>{chapter.number}</span>
                    <strong>{chapter.shortTitle}</strong>
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>2. Chọn vịt đại diện</legend>
              <div className="race-choice-grid duck-choices">
                {DUCK_RACERS.map((duck) => (
                  <button
                    type="button"
                    className={playerDuckId === duck.id ? "active" : ""}
                    aria-pressed={playerDuckId === duck.id}
                    key={duck.id}
                    onClick={() => setPlayerDuckId(duck.id)}
                    style={{ "--duck-color": duck.color }}
                  >
                    <span aria-hidden="true">🦆</span>
                    <strong>{duck.name}</strong>
                    <small>{duck.lane}</small>
                  </button>
                ))}
              </div>
            </fieldset>
            <button type="button" className="race-start-button" onClick={startDuckRace}>
              <Play size={18} fill="currentColor" /> Bắt đầu cuộc đua
            </button>
          </div>
        )}

        <div className="duck-track" aria-label="Tiến độ đường đua">
          <div className="duck-track-head" aria-hidden="true">
            <span>VẠCH XUẤT PHÁT</span>
            <span>ĐÍCH ĐẾN <Flag size={14} /></span>
          </div>
          {DUCK_RACERS.map((duck, index) => {
            const progress = raceProgress[duck.id] ?? 0;
            const isPlayer = duck.id === playerDuckId;

            return (
              <div
                className={`duck-lane ${isPlayer ? "is-player" : ""}`}
                key={duck.id}
                style={{
                  "--duck-color": duck.color,
                  "--race-progress": progress,
                }}
              >
                <div className="duck-lane-label">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{duck.name}</strong>
                  {isPlayer && <small>VỊT CỦA BẠN</small>}
                </div>
                <div
                  className="duck-lane-course"
                  role="progressbar"
                  aria-label={`${duck.name}: ${progress}% đường đua`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={progress}
                >
                  <div className="duck-runner">
                    <span aria-hidden="true">🦆</span>
                    <small>{progress}%</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {raceStatus === "racing" && currentRaceQuestion && (
          <div className="duck-race-round">
            <div className="race-round-meta">
              <span>
                LƯỢT {raceQuestionIndex + 1}/{raceQuestions.length}
              </span>
              <strong>{raceChapter.title}</strong>
              <span>{raceScore} câu đúng</span>
            </div>
            <h3>{currentRaceQuestion.prompt}</h3>
            <div className="race-answer-grid">
              {currentRaceQuestion.options.map((option, index) => {
                const isSelected = raceSelectedOption === option.id;
                const isCorrectOption =
                  raceFeedback && option.id === currentRaceQuestion.correctOptionId;
                const isIncorrectSelection =
                  raceFeedback && isSelected && !isCorrectOption;

                return (
                  <button
                    type="button"
                    className={`${isSelected ? "selected" : ""} ${
                      isCorrectOption ? "correct" : ""
                    } ${isIncorrectSelection ? "incorrect" : ""}`}
                    disabled={Boolean(raceFeedback)}
                    key={option.id}
                    onClick={() => setRaceSelectedOption(option.id)}
                  >
                    <span>{String.fromCharCode(65 + index)}</span>
                    {option.label}
                    {isCorrectOption && <CheckCircle2 size={18} />}
                    {isIncorrectSelection && <X size={18} />}
                  </button>
                );
              })}
            </div>

            {raceFeedback && (
              <div className={`race-feedback ${raceFeedback.isCorrect ? "good" : ""}`}>
                <Sparkles size={21} />
                <div>
                  <strong>
                    {raceFeedback.isCorrect
                      ? "Chính xác — vịt của bạn tăng tốc!"
                      : "Chưa đúng — vịt vẫn tiến lên nhưng chậm hơn."}
                  </strong>
                  <p>{currentRaceQuestion.explanation}</p>
                  {raceFeedback.event && (
                    <p className="race-random-event">
                      <b>{raceFeedback.event.title}</b>{" "}
                      {raceFeedback.event.description}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="race-round-actions">
              {!raceFeedback ? (
                <button
                  type="button"
                  className="button primary"
                  disabled={raceSelectedOption === null}
                  onClick={checkRaceAnswer}
                >
                  Xác nhận đáp án <ArrowRight size={17} />
                </button>
              ) : (
                <button type="button" className="button primary" onClick={continueDuckRace}>
                  {raceFeedback.finished ? "Xem kết quả" : "Câu tiếp theo"}
                  <ArrowRight size={17} />
                </button>
              )}
            </div>
          </div>
        )}

        {raceStatus === "finished" && (
          <div className="duck-race-result">
            <Trophy size={38} />
            <div>
              <p className="eyebrow">KẾT QUẢ ĐƯỜNG ĐUA</p>
              <h3>
                {raceRanking[0].id === playerDuckId
                  ? `${raceRanking[0].name} về nhất!`
                  : `${raceRanking[0].name} dẫn đầu đường đua.`}
              </h3>
              <p>
                Bạn trả lời đúng <strong>{raceScore}/{raceQuestionIndex + 1}</strong>{" "}
                câu. Kết quả đua chỉ được lưu trong lượt chơi hiện tại.
              </p>
            </div>
            <ol>
              {raceRanking.map((duck, index) => (
                <li key={duck.id} className={duck.id === playerDuckId ? "is-player" : ""}>
                  <span>#{index + 1}</span>
                  <b>{duck.name}</b>
                  <strong>{raceProgress[duck.id]}%</strong>
                </li>
              ))}
            </ol>
            <div className="duck-result-actions">
              <button type="button" className="button primary" onClick={startDuckRace}>
                <RotateCcw size={17} /> Đua lại cùng lựa chọn
              </button>
              <button type="button" className="button secondary" onClick={returnToRaceSetup}>
                Chọn lại chương hoặc vịt
              </button>
            </div>
          </div>
        )}

        <footer className="duck-race-note">
          <span>Không backend</span>
          <p>
            Không lưu tên, điểm hay lịch sử chơi. Mỗi lượt tạo lại thứ tự câu hỏi
            và nhịp chạy của đối thủ ngay trên thiết bị.
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
