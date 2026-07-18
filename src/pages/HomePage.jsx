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
import { chapterHistoryFeatures } from "../data/lessonCoreContent";

const FEATURED_MODULE = chapters[1].modules[2];
const FEATURED_AUDIO_SCRIPT = lessonAudioScripts["chapter-1-module-1"];
const FEATURED_HOME_AUDIO = {
  ...podcasts[0],
  transcript: FEATURED_AUDIO_SCRIPT?.transcript,
  duration: FEATURED_AUDIO_SCRIPT?.duration ?? podcasts[0]?.duration,
  wordCount: FEATURED_AUDIO_SCRIPT?.wordCount,
};

export default function HomePage({ navigate, openTerm, playAudio }) {
  return (
    <div className="page home-page">
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            KHÔNG GIAN TRIẾT HỌC SỐ · 03 TUYẾN KIẾN THỨC
          </div>
          <h1>
            Từ quyền làm chủ
            <span>đến Nhà nước phục vụ.</span>
          </h1>
          <p className="hero-description">
            Khám phá Nhà nước xã hội chủ nghĩa Việt Nam qua bản chất, quyền lực
            của Nhân dân, chức năng đối nội – đối ngoại và mục tiêu phát triển.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="button primary large"
              onClick={() => navigate("lesson", chapters[0].modules[0].id)}
            >
              Bắt đầu khám phá <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="button ghost large"
              onClick={() => navigate("hub")}
            >
              <Network size={18} /> Xem bản đồ tri thức
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>01</span>
              <span>02</span>
              <span>03</span>
            </div>
            <p>
              <strong>9 chuyên đề có đối chiếu nguồn</strong>
              <span>Bản chất · Dân chủ · Chức năng</span>
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Bản đồ ba tuyến kiến thức">
          <div className="construct-grid" />
          <div className="visual-label label-top">SƠ ĐỒ QUAN HỆ / 001</div>
          <div className="visual-sun" />
          <div className="visual-axis axis-one" />
          <div className="visual-axis axis-two" />
          <div className="chapter-orbit orbit-one">
            <span>01</span>
            <strong>BẢN CHẤT</strong>
          </div>
          <div className="chapter-orbit orbit-two">
            <span>02</span>
            <strong>DÂN CHỦ</strong>
          </div>
          <div className="chapter-orbit orbit-three">
            <span>03</span>
            <strong>CHỨC NĂNG</strong>
          </div>
          <div className="visual-core">
            <small>TRUNG TÂM</small>
            <strong>NHÂN</strong>
            <span>DÂN</span>
          </div>
          <div className="visual-caption">
            <Sparkles size={16} />
            <span>Của Nhân dân · Do Nhân dân · Vì Nhân dân</span>
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
            <strong>{FEATURED_MODULE.number} · {FEATURED_MODULE.title}</strong>
          </div>
          <div className="resume-meta">
            <span>THỜI LƯỢNG ĐỌC</span>
            <strong>
              {FEATURED_MODULE.estimatedMinutes} phút · Trang {FEATURED_MODULE.sourcePages}
            </strong>
          </div>
          <button
            type="button"
            className="round-arrow"
            onClick={() => navigate("lesson", FEATURED_MODULE.id)}
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
              Quyền lực thuộc về Nhân dân chỉ rõ khi đi vào cơ chế và thiết chế.
            </h2>
            <p>
              Group 2 tổ chức nội dung theo một mạch thống nhất: nhận diện bản
              chất, xác định chủ thể quyền lực, phân tích chức năng và đối chiếu
              mọi hoạt động với mục tiêu phục vụ Nhân dân.
            </p>
          </div>
          <div className="thesis-flow" aria-label="Bốn lớp của hệ thống kiến thức">
            {[
              ["01", "BẢN CHẤT"],
              ["02", "QUYỀN LỰC"],
              ["03", "CHỨC NĂNG"],
              ["04", "MỤC TIÊU"],
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
            <h2>Một tài liệu, ba câu hỏi lớn</h2>
          </div>
          <p>
            Đi theo lộ trình từ nền tảng đến mục tiêu hoặc bắt đầu ở câu hỏi
            khiến bạn quan tâm nhất.
          </p>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter, index) => (
            <article className={`chapter-card chapter-${index + 1}`} key={chapter.id}>
              <div className="chapter-card-top">
                <span className="chapter-number">
                  {String(chapter.number ?? index + 1).padStart(2, "0")}
                </span>
                <span className="chapter-pages">TR. {chapter.sourcePages}</span>
              </div>
              <figure
                className={`chapter-card-figure${
                  (chapterHistoryFeatures[chapter.id]?.image ?? chapter.illustration.src)
                    .endsWith(".svg")
                    ? " is-diagram"
                    : ""
                }`}
              >
                <img
                  src={chapterHistoryFeatures[chapter.id]?.image ?? chapter.illustration.src}
                  alt={chapterHistoryFeatures[chapter.id]?.alt ?? chapter.illustration.alt}
                  width="1400"
                  height="933"
                  loading="lazy"
                  decoding="async"
                  style={{
                    objectPosition:
                      chapterHistoryFeatures[chapter.id]?.focalPoint ??
                      chapter.illustration.focalPoint,
                  }}
                />
                <figcaption>
                  <span>{chapterHistoryFeatures[chapter.id]?.year}</span>
                  {chapterHistoryFeatures[chapter.id]?.title ?? chapter.illustration.caption}
                </figcaption>
              </figure>
              <div className="chapter-line" />
              <p className="chapter-kicker">{chapter.kicker ?? chapter.shortTitle}</p>
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
              <div className="chapter-meta">
                <span>
                  <Clock3 size={15} /> {chapter.estimatedMinutes} phút
                </span>
                <span>
                  <Zap size={15} /> {chapter.modules.length} chuyên đề
                </span>
              </div>
              <button
                type="button"
                onClick={() => navigate("lesson", chapter.modules[0].id)}
              >
                Khám phá tuyến <ArrowRight size={17} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell daily-grid">
        <article className="concept-card">
          <div className="card-label">
            <Sparkles size={15} /> KHÁI NIỆM TRỌNG TÂM
          </div>
          <div className="concept-content">
            <p>KHÁI NIỆM / 02.01</p>
            <h2>Quyền lực nhà nước thuộc về Nhân dân</h2>
            <p>
              Đừng dừng ở nguyên tắc. Hãy nối chủ thể quyền lực với tham gia
              trực tiếp, cơ chế đại diện và giám sát quyền lực.
            </p>
            <button
              type="button"
              className="text-link"
              onClick={() => openTerm("Quyền lực nhà nước thuộc về Nhân dân")}
            >
              Mở giải thích thuật ngữ <ArrowRight size={16} />
            </button>
          </div>
          <div className="concept-radar" aria-hidden="true">
            <span />
            <span />
            <span />
            <i>ND</i>
          </div>
        </article>

        <article className="audio-feature">
          <div className="audio-cover">
            <span className="vertical-word">BÀI NGHE</span>
            <Headphones size={36} />
            <strong>{FEATURED_HOME_AUDIO?.duration ?? "≈ 06 phút"}</strong>
          </div>
          <div className="audio-copy">
            <p className="eyebrow light">BÀI NGHE CHUYÊN ĐỀ · CÓ ĐỐI CHIẾU</p>
            <h2>{FEATURED_HOME_AUDIO?.title}</h2>
            <p>{FEATURED_HOME_AUDIO?.description}</p>
            <button
              type="button"
              className="audio-play"
              onClick={() => playAudio(FEATURED_HOME_AUDIO)}
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
          <p className="eyebrow light">TỰ KIỂM TRA / 05 PHÚT</p>
          <h2>Bạn có nối đúng bản chất, cơ chế và mục tiêu?</h2>
          <p>
            Chọn một tuyến kiến thức, trả lời câu hỏi ngắn và xem giải thích có
            liên kết về đúng trang tài liệu nguồn.
          </p>
          <button
            type="button"
            className="button mustard"
            onClick={() => navigate("games")}
          >
            Bắt đầu trả lời <ArrowRight size={18} />
          </button>
        </div>
        <div className="teaser-board" aria-hidden="true">
          <div className="board-node complete">
            <CheckCircle2 size={18} /> Quyền lực thuộc về Nhân dân
          </div>
          <span className="board-link link-a" />
          <div className="board-node active">Dân chủ và Nhà nước</div>
          <span className="board-link link-b" />
          <div className="board-node">Mục tiêu phát triển</div>
          <div className="board-stamp">NỐI MẠCH KIẾN THỨC</div>
        </div>
      </section>
    </div>
  );
}
