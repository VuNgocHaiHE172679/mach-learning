import { useMemo, useState } from "react";
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
import {
  countFilteredModules,
  filterLearningChapters,
} from "../utils/hubFilters";

const FORMAT_FILTERS = [
  { id: "all", label: "Tất cả" },
  { id: "read", label: "Bài đọc" },
  { id: "listen", label: "Bài nghe" },
];

const DURATION_FILTERS = [
  { id: "all", label: "Mọi thời lượng" },
  { id: "short", label: "Dưới 15 phút" },
  { id: "long", label: "Từ 15 phút" },
];

export default function LearningHubPage({ navigate }) {
  const [query, setQuery] = useState("");
  const [formatFilter, setFormatFilter] = useState("all");
  const [chapterFilter, setChapterFilter] = useState("all");
  const [durationFilter, setDurationFilter] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visibleChapters = useMemo(() => {
    return filterLearningChapters(chapters, {
      query,
      formatFilter,
      chapterFilter,
      durationFilter,
    });
  }, [chapterFilter, durationFilter, formatFilter, query]);

  const resultCount = countFilteredModules(visibleChapters);
  const activeAdvancedFilters =
    Number(chapterFilter !== "all") + Number(durationFilter !== "all");
  const hasActiveFilters =
    Boolean(query.trim()) ||
    formatFilter !== "all" ||
    activeAdvancedFilters > 0;

  const resetFilters = () => {
    setQuery("");
    setFormatFilter("all");
    setChapterFilter("all");
    setDurationFilter("all");
  };

  return (
    <div className="page hub-page">
      <section className="hub-hero">
        <div className="section-shell hub-hero-inner">
          <div>
            <p className="eyebrow light">KHO TRI THỨC / BẢN ĐỒ KIẾN THỨC</p>
            <h1>Chọn một mạch.<br />Đi đến tận bản chất.</h1>
            <p>
              9 chuyên đề được nối thành ba tuyến: bản chất, quyền làm chủ và
              chức năng của Nhà nước. Mỗi điểm dừng có nội dung, sơ đồ, bài
              nghe và ba câu tự kiểm tra riêng.
            </p>
          </div>
          <div className="hub-score">
            <div className="library-seal">
              <span>
                <strong>03</strong>
                tuyến kiến thức
              </span>
            </div>
            <div>
              <span>
                <BookOpen size={16} /> 9 mô-đun kiến thức
              </span>
              <span>
                <Sparkles size={16} /> 13 thuật ngữ trọng tâm
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
              id="knowledge-search"
              type="search"
              placeholder="Tìm khái niệm hoặc bài học..."
              aria-label="Tìm bài học"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="filter-tabs" aria-label="Bộ lọc bài học">
            {FORMAT_FILTERS.map((filter) => (
              <button
                type="button"
                className={formatFilter === filter.id ? "active" : ""}
                key={filter.id}
                aria-pressed={formatFilter === filter.id}
                onClick={() => setFormatFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={`filter-button ${filtersOpen ? "active" : ""}`}
            aria-expanded={filtersOpen}
            aria-controls="hub-filter-panel"
            onClick={() => setFiltersOpen((current) => !current)}
          >
            <Filter size={17} /> Bộ lọc
            {activeAdvancedFilters > 0 && (
              <span>{activeAdvancedFilters}</span>
            )}
          </button>
        </div>

        {filtersOpen && (
          <div className="hub-filter-panel" id="hub-filter-panel">
            <fieldset>
              <legend>Lọc theo tuyến</legend>
              <div>
                <button
                  type="button"
                  className={chapterFilter === "all" ? "active" : ""}
                  aria-pressed={chapterFilter === "all"}
                  onClick={() => setChapterFilter("all")}
                >
                  Tất cả tuyến
                </button>
                {chapters.map((chapter) => (
                  <button
                    type="button"
                    className={chapterFilter === chapter.id ? "active" : ""}
                    key={chapter.id}
                    aria-pressed={chapterFilter === chapter.id}
                    onClick={() => setChapterFilter(chapter.id)}
                  >
                    Tuyến {Number(chapter.number)}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Lọc theo thời lượng</legend>
              <div>
                {DURATION_FILTERS.map((filter) => (
                  <button
                    type="button"
                    className={durationFilter === filter.id ? "active" : ""}
                    key={filter.id}
                    aria-pressed={durationFilter === filter.id}
                    onClick={() => setDurationFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </fieldset>
            <button
              type="button"
              className="clear-advanced-filters"
              disabled={activeAdvancedFilters === 0}
              onClick={() => {
                setChapterFilter("all");
                setDurationFilter("all");
              }}
            >
              Xóa bộ lọc chi tiết
            </button>
          </div>
        )}

        <div className="hub-results-meta" aria-live="polite">
          <p>
            Tìm thấy <strong>{resultCount}</strong> học phần
            {query.trim() && (
              <span> cho “{query.trim()}”</span>
            )}
          </p>
          {hasActiveFilters && (
            <button type="button" onClick={resetFilters}>
              Xóa tất cả điều kiện
            </button>
          )}
        </div>

        <div className="learning-map">
          {visibleChapters.map((chapter) => {
            const chapterIndex = chapter.sourceIndex;

            return (
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
                      ["BẢN CHẤT", "DÂN CHỦ", "CHỨC NĂNG"][chapterIndex]}
                  </p>
                  <h2>{chapter.title}</h2>
                </div>
                <span className="track-status">
                  TR. {chapter.sourcePages}
                </span>
                <figure
                  className={`track-illustration${
                    (chapterHistoryFeatures[chapter.id]?.image ?? chapter.illustration.src)
                      .endsWith(".svg")
                      ? " is-diagram"
                      : ""
                  }`}
                >
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
                {(chapter.modules ?? []).map((module) => (
                    <div className="module-row" key={module.id ?? module.title}>
                      <div className="module-node">
                        <span>
                          {String(module.sourceModuleIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="module-main">
                        <div className="module-title-row">
                          <div>
                            <span>
                              {chapterIndex + 1}.{module.sourceModuleIndex + 1}
                            </span>
                            <h3>{module.title}</h3>
                          </div>
                          <div className="module-format">
                            {module.primaryFormat === "listen" ? (
                              <Headphones size={16} />
                            ) : (
                              <BookOpen size={16} />
                            )}
                            <span>
                              {module.primaryFormat === "listen"
                                ? "Bài nghe"
                                : "Bài đọc"}
                            </span>
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
            );
          })}
        </div>

        {!hasActiveFilters && (
          <section className="state-mindmap" aria-labelledby="state-mindmap-title">
            <header>
              <div>
                <p className="eyebrow">SƠ ĐỒ TƯ DUY TỔNG QUAN</p>
                <h2 id="state-mindmap-title">Một trung tâm, ba tuyến, chín chuyên đề</h2>
              </div>
              <p>
                Chọn một nhánh để đi thẳng tới bài học. Các đường nối thể hiện
                cấu trúc biên tập của website, không phải sơ đồ nguyên bản trong PDF.
              </p>
            </header>
            <div className="state-mindmap-canvas">
              <div className="state-mindmap-core">
                <Network size={28} />
                <span>TRUNG TÂM</span>
                <strong>NHÀ NƯỚC XHCN<br />VIỆT NAM</strong>
              </div>
              <div className="state-mindmap-branches">
                {chapters.map((chapter, chapterIndex) => (
                  <article
                    className={`state-mindmap-branch branch-${chapterIndex + 1}`}
                    key={`mindmap-${chapter.id}`}
                  >
                    <div className="state-mindmap-branch-head">
                      <span>{chapter.number}</span>
                      <div>
                        <small>TUYẾN KIẾN THỨC</small>
                        <h3>{chapter.shortTitle}</h3>
                      </div>
                    </div>
                    <div className="state-mindmap-lessons">
                      {chapter.modules.map((module) => (
                        <button
                          type="button"
                          key={`mindmap-${module.id}`}
                          onClick={() => navigate("lesson", module.id)}
                        >
                          <span>{module.number}</span>
                          <strong>{module.title}</strong>
                          <ChevronRight size={16} />
                        </button>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {resultCount === 0 && (
          <div className="hub-empty-state">
            <Search size={28} />
            <h2>Chưa tìm thấy học phần phù hợp</h2>
            <p>
              Thử một thuật ngữ ngắn hơn, bỏ bớt điều kiện hoặc tìm bằng tiếng
              Việt không dấu.
            </p>
            <button type="button" className="button primary" onClick={resetFilters}>
              Hiển thị lại toàn bộ học phần
            </button>
          </div>
        )}

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
              <button
                type="button"
                className="text-link"
                onClick={() => navigate("lesson", chapters[0].modules[0].id)}
              >
                Khám phá 13 khái niệm <ArrowRight size={16} />
              </button>
            </div>
            <div className="mini-map" aria-hidden="true">
              <i className="map-line line-1" />
              <i className="map-line line-2" />
              <i className="map-line line-3" />
              <span className="map-dot dot-1">BC</span>
              <span className="map-dot dot-2">DC</span>
              <span className="map-dot dot-3">NN</span>
              <span className="map-dot dot-4">MT</span>
            </div>
          </article>
          <article className="study-tip">
            <Sparkles size={20} />
            <div>
              <p className="eyebrow light">GỢI Ý ĐỌC</p>
              <h3>Bắt đầu từ thông điệp “của Nhân dân, do Nhân dân, vì Nhân dân”.</h3>
              <button
                type="button"
                onClick={() => navigate("lesson", chapters[0].modules[0].id)}
              >
                Mở chuyên đề <ArrowRight size={16} />
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
