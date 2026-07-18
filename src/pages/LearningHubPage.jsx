import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock3,
  Filter,
  Headphones,
  Network,
  Search,
  Sparkles,
} from "lucide-react";
import { chapters } from "../data/learningContent";
import { chapterHistoryFeatures } from "../data/lessonCoreContent";

export default function LearningHubPage({ navigate }) {
  return (
    <div className="page hub-page">
      <section className="hub-hero">
        <div className="section-shell hub-hero-inner">
          <div>
            <p className="eyebrow light">KHO TRI THỨC / BẢN ĐỒ KIẾN THỨC</p>
            <h1>Chọn một mạch.<br />Đi đến tận bản chất.</h1>
            <p>
              9 học phần được nối thành ba tuyến kiến thức. Mỗi điểm dừng có
              nội dung, sơ đồ và câu hỏi ngắn riêng để người xem đọc theo đúng mạch.
            </p>
          </div>
          <div className="hub-score">
            <div className="library-seal">
              <span>
                <strong>03</strong>
                chương cốt lõi
              </span>
            </div>
            <div>
              <span>
                <BookOpen size={16} /> 9 mô-đun kiến thức
              </span>
              <span>
                <Sparkles size={16} /> 8 thuật ngữ trọng tâm
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell hub-content">
        <div className="hub-toolbar">
          <label className="search-field">
            <Search size={18} />
            <input
              type="search"
              placeholder="Tìm khái niệm hoặc bài học..."
              aria-label="Tìm bài học"
            />
          </label>
          <div className="filter-tabs" aria-label="Bộ lọc bài học">
            <button type="button" className="active">
              Tất cả
            </button>
            <button type="button">Bài đọc</button>
            <button type="button">Bài nghe</button>
          </div>
          <button type="button" className="filter-button">
            <Filter size={17} /> Bộ lọc
          </button>
        </div>

        <div className="learning-map">
          {chapters.map((chapter, chapterIndex) => (
            <article
              className={`learning-track track-${chapterIndex + 1}`}
              key={chapter.id}
            >
              <header className="track-header">
                <div className="track-index">
                  {String(chapter.number ?? chapterIndex + 1).padStart(2, "0")}
                </div>
                <div>
                  <p>
                    {chapter.kicker ??
                      chapter.shortTitle ??
                      ["NGUỒN GỐC", "CHỦ THỂ", "CHUYỂN TIẾP"][chapterIndex]}
                  </p>
                  <h2>{chapter.title}</h2>
                </div>
                <span className="track-status">
                  TR. {chapter.sourcePages}
                </span>
                <figure className="track-illustration">
                  <img
                    src={
                      chapterHistoryFeatures[chapter.id]?.image ??
                      chapter.illustration.src
                    }
                    alt={
                      chapterHistoryFeatures[chapter.id]?.alt ??
                      chapter.illustration.alt
                    }
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
                    {chapterHistoryFeatures[chapter.id]?.year}
                  </figcaption>
                </figure>
              </header>

              <div className="track-body">
                <div className="track-rail" aria-hidden="true" />
                {(chapter.modules ?? []).map((module, moduleIndex) => (
                    <div className="module-row" key={module.id ?? module.title}>
                      <div className="module-node">
                        <span>{String(moduleIndex + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="module-main">
                        <div className="module-title-row">
                          <div>
                            <span>
                              {chapterIndex + 1}.{moduleIndex + 1}
                            </span>
                            <h3>{module.title}</h3>
                          </div>
                          <div className="module-format">
                            {moduleIndex % 2 === 0 ? (
                              <BookOpen size={16} />
                            ) : (
                              <Headphones size={16} />
                            )}
                            <Clock3 size={15} />
                            {module.duration ??
                              `${module.estimatedMinutes ?? 8} phút`}
                          </div>
                        </div>
                        <p>{module.summary ?? module.description}</p>
                        <div className="module-concepts">
                          {(module.concepts ?? module.keyConcepts ?? [])
                            .slice(0, 3)
                            .map((concept) => (
                              <span key={concept}>{concept}</span>
                            ))}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="module-open"
                        aria-label={`Mở ${module.title}`}
                        onClick={() => navigate("lesson", module.id)}
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  ))}
              </div>
            </article>
          ))}
        </div>

        <div className="hub-bottom-grid">
          <article className="knowledge-map-card">
            <div>
              <Network size={23} />
              <p className="eyebrow">BẢN ĐỒ KHÁI NIỆM</p>
              <h2>Không biết nên bắt đầu từ đâu?</h2>
              <p>
                Mở bản đồ khái niệm để nhìn toàn bộ quan hệ trước khi chọn một
                tuyến học.
              </p>
              <button type="button" className="text-link">
                Khám phá 42 khái niệm <ArrowRight size={16} />
              </button>
            </div>
            <div className="mini-map" aria-hidden="true">
              <i className="map-line line-1" />
              <i className="map-line line-2" />
              <i className="map-line line-3" />
              <span className="map-dot dot-1">GC</span>
              <span className="map-dot dot-2">SM</span>
              <span className="map-dot dot-3">QĐ</span>
              <span className="map-dot dot-4">KT</span>
            </div>
          </article>
          <article className="study-tip">
            <Sparkles size={20} />
            <div>
              <p className="eyebrow light">GỢI Ý ĐỌC</p>
              <h3>Bắt đầu từ hoàn cảnh lịch sử để hiểu vì sao lý luận ra đời.</h3>
              <button type="button" onClick={() => navigate("lesson")}>
                Mở chuyên đề <ArrowRight size={16} />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
