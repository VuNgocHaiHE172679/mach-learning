import { useMemo, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  Clock3,
  Gamepad2,
  Network,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import { games } from "../data/learningContent";

const SEQUENCE = [
  { id: "industry", label: "Đại công nghiệp phát triển", order: 0 },
  { id: "contradiction", label: "Mâu thuẫn xã hội bộc lộ", order: 1 },
  { id: "movement", label: "Phong trào công nhân phát triển", order: 2 },
  { id: "theory", label: "Yêu cầu về lý luận khoa học", order: 3 },
];

const SHUFFLED = [SEQUENCE[2], SEQUENCE[0], SEQUENCE[3], SEQUENCE[1]];

export default function GameArenaPage({ navigate }) {
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);

  const remaining = useMemo(
    () => SHUFFLED.filter((item) => !selected.some((pick) => pick.id === item.id)),
    [selected],
  );

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
          </div>
          <div className="arena-score">
            <Network size={25} />
            <div>
              <span>NỘI DUNG TƯƠNG TÁC</span>
              <strong>03 MÔ HÌNH</strong>
            </div>
            <span className="arena-rank">TRUY CẬP CÔNG KHAI</span>
          </div>
        </div>
      </section>

      <section className="section-shell game-catalogue">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">BA PHÒNG THỬ NGHIỆM</p>
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
                  {index === 0 ? "↗" : index === 1 ? "×" : "⇄"}
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
                      .getElementById("active-challenge")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Khám phá mô hình
                  <ArrowRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
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
