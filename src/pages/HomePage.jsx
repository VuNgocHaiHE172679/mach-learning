import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Headphones,
  Network,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";
import { chapters, podcasts } from "../data/learningContent";
import { lessonAudioScripts } from "../data/lessonAudioScripts";

const FEATURED_AUDIO_SCRIPT = lessonAudioScripts["chapter-1-module-1"];
const FEATURED_HOME_AUDIO = {
  ...podcasts[0],
  transcript: FEATURED_AUDIO_SCRIPT?.transcript,
  duration: FEATURED_AUDIO_SCRIPT?.duration ?? podcasts[0]?.duration,
  wordCount: FEATURED_AUDIO_SCRIPT?.wordCount,
};

export default function HomePage({
  navigate,
  openTerm,
  playAudio,
}) {
  const nextAudio = FEATURED_HOME_AUDIO;

  return (
    <div className="page home-page">
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            KHÔNG GIAN TRIẾT HỌC SỐ · 03 CHƯƠNG
          </div>
          <h1>
            Từ hiện thực
            <span>đến hệ thống lý luận.</span>
          </h1>
          <p className="hero-description">
            Khám phá Chủ nghĩa xã hội khoa học qua bối cảnh lịch sử, những mâu
            thuẫn hiện thực, hệ thống khái niệm và quy luật vận động.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="button primary large"
              onClick={() => navigate("lesson")}
            >
              Bắt đầu khám phá
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="button ghost large"
              onClick={() => navigate("hub")}
            >
              <Network size={18} />
              Xem bản đồ tri thức
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>
            <p>
              <strong>24 chuyên đề tương tác</strong>
              <span>Hiện thực · Khái niệm · Vận động</span>
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Bản đồ ba chương">
          <div className="construct-grid" />
          <div className="visual-label label-top">SƠ ĐỒ BIỆN CHỨNG / 001</div>
          <div className="visual-sun" />
          <div className="visual-axis axis-one" />
          <div className="visual-axis axis-two" />
          <div className="chapter-orbit orbit-one">
            <span>01</span>
            <strong>THỰC TIỄN</strong>
          </div>
          <div className="chapter-orbit orbit-two">
            <span>02</span>
            <strong>KHÁI NIỆM</strong>
          </div>
          <div className="chapter-orbit orbit-three">
            <span>03</span>
            <strong>CHUYỂN BIẾN</strong>
          </div>
          <div className="visual-core">
            <small>PHƯƠNG PHÁP</small>
            <strong>BIỆN</strong>
            <span>CHỨNG</span>
          </div>
          <div className="visual-caption">
            <Sparkles size={16} />
            <span>Đọc sự vật trong quan hệ, vận động và phát triển</span>
          </div>
        </div>
      </section>

      <section className="resume-band">
        <div className="section-shell resume-inner">
          <div className="resume-icon" aria-hidden="true">
            <BookOpen size={22} />
          </div>
          <div className="resume-copy">
            <span>CHUYÊN ĐỀ NỔI BẬT</span>
            <strong>1.2 · Ba phát kiến vĩ đại của Mác và Ăngghen</strong>
          </div>
          <div className="resume-meta">
            <span>THỜI LƯỢNG ĐỌC</span>
            <strong>16 phút · Trang 21–35</strong>
          </div>
          <button
            type="button"
            className="round-arrow"
            onClick={() => navigate("lesson")}
            aria-label="Mở chuyên đề nổi bật"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="philosophy-thesis">
        <div className="section-shell thesis-layout">
          <div className="thesis-copy">
            <p className="eyebrow">LUẬN ĐỀ TRUNG TÂM</p>
            <h2>
              Lý luận bắt đầu từ hiện thực và trở lại soi sáng thực tiễn.
            </h2>
            <p>
              Group 2 tổ chức mỗi bài học như một quá trình tư duy: nhận diện điều
              kiện, hình thành khái niệm, phát hiện quan hệ và thử vận dụng để
              giải thích một vấn đề mới.
            </p>
          </div>
          <div className="thesis-flow" aria-label="Bốn bước tư duy triết học">
            {[
              ["01", "HIỆN THỰC"],
              ["02", "MÂU THUẪN"],
              ["03", "KHÁI NIỆM"],
              ["04", "VẬN DỤNG"],
            ].map(([number, label], index) => (
              <div className="thesis-node" key={number}>
                <span>{number}</span>
                <strong>{label}</strong>
                {index < 3 && <i aria-hidden="true">↓</i>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell chapter-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">BA TUYẾN TRI THỨC</p>
            <h2>Một hệ thống, ba câu hỏi lớn</h2>
          </div>
          <p>
            Đi theo lộ trình chuẩn hoặc bắt đầu từ câu hỏi khiến bạn tò mò
            nhất.
          </p>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter, index) => (
            <article className={`chapter-card chapter-${index + 1}`} key={chapter.id}>
              <div className="chapter-card-top">
                <span className="chapter-number">
                  {String(chapter.number ?? index + 1).padStart(2, "0")}
                </span>
                <span className="chapter-pages">
                  TR. {chapter.pageRange ?? chapter.pages ?? chapter.sourcePages}
                </span>
              </div>
              <figure className="chapter-card-figure">
                <img
                  src={chapter.illustration.src}
                  alt={chapter.illustration.alt}
                  width="1400"
                  height="933"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: chapter.illustration.focalPoint }}
                />
                <figcaption>{chapter.illustration.caption}</figcaption>
              </figure>
              <div className="chapter-line" />
              <p className="chapter-kicker">
                {chapter.kicker ??
                  chapter.shortTitle ??
                  ["NGUỒN GỐC", "CHỦ THỂ", "CHUYỂN TIẾP"][index]}
              </p>
              <h3>{chapter.title}</h3>
              <p>{chapter.summary ?? chapter.description}</p>
              <div className="chapter-meta">
                <span>
                  <Clock3 size={15} />
                  {chapter.duration ??
                    `${chapter.estimatedMinutes ?? 45} phút`}
                </span>
                <span>
                  <Zap size={15} />
                  {chapter.modules?.length ?? 3} cụm bài
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  navigate("lesson", chapter.modules?.[0]?.id)
                }
              >
                Khám phá chương
                <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell daily-grid">
        <article className="concept-card">
          <div className="card-label">
            <Sparkles size={15} /> KHÁI NIỆM HÔM NAY
          </div>
          <div className="concept-content">
            <p>KHÁI NIỆM / 02.04</p>
            <h2>Hình thái kinh tế–xã hội</h2>
            <p>
              Đừng chỉ học thuộc định nghĩa. Hãy nhìn khái niệm như một cấu
              trúc gồm các thành tố có quan hệ với nhau.
            </p>
            <button
              type="button"
              className="text-link"
              onClick={() => openTerm("Hình thái kinh tế - xã hội")}
            >
              Mở Term Lens <ArrowRight size={16} />
            </button>
          </div>
          <div className="concept-radar" aria-hidden="true">
            <span />
            <span />
            <span />
            <i>HT</i>
          </div>
        </article>

        <article className="audio-feature">
          <div className="audio-cover">
            <span className="vertical-word">AUDIO</span>
            <Headphones size={36} />
            <strong>{nextAudio?.duration ?? "≈ 08 phút"}</strong>
          </div>
          <div className="audio-copy">
            <p className="eyebrow light">BÀI NGHE CHUYÊN ĐỀ · BẢN ĐẦY ĐỦ</p>
            <h2>{nextAudio?.title ?? "Từ không tưởng đến khoa học"}</h2>
            <p>
              {nextAudio?.summary ??
                nextAudio?.description ??
                "Nghe lại mạch chuyển biến của tư tưởng xã hội chủ nghĩa bằng một cuộc đối thoại ngắn."}
            </p>
            <button
              type="button"
              className="audio-play"
              onClick={() => playAudio(nextAudio)}
            >
              <span>
                <Play size={17} fill="currentColor" />
              </span>
              Nghe toàn bộ
            </button>
          </div>
        </article>
      </section>

      <section className="section-shell game-teaser">
        <div className="teaser-copy">
          <p className="eyebrow light">GAME ARENA / THỬ THÁCH 03 PHÚT</p>
          <h2>Bạn có dựng đúng mạch lịch sử?</h2>
          <p>
            Sắp xếp các điều kiện kinh tế–xã hội, phong trào thực tiễn và phát
            kiến lý luận vào đúng quan hệ.
          </p>
          <button
            type="button"
            className="button mustard"
            onClick={() => navigate("games")}
          >
            Vào xưởng lịch sử <ArrowRight size={18} />
          </button>
        </div>
        <div className="teaser-board" aria-hidden="true">
          <div className="board-node complete">
            <CheckCircle2 size={18} /> Đại công nghiệp
          </div>
          <span className="board-link link-a" />
          <div className="board-node active">Mâu thuẫn xã hội</div>
          <span className="board-link link-b" />
          <div className="board-node">Phong trào công nhân</div>
          <div className="board-stamp">BUILD THE LOGIC</div>
        </div>
      </section>
    </div>
  );
}
