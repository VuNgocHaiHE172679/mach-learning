import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Network,
  Sparkles,
  X,
} from "lucide-react";
import {
  getFirstPrintedPage,
  getTextbookSourceHref,
} from "../utils/textbookSource";

export default function TermDrawer({
  term,
  onClose,
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!term) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, term]);

  if (!term) return null;

  const name = term.term ?? term.title;
  const definition =
    term.definition ?? term.shortDefinition ?? term.explanation;
  const context = term.context ?? term.inContext;
  const related =
    term.related ?? term.relatedTerms ?? term.relatedConcepts ?? [];
  const source =
    term.source ??
    term.sourcePage ??
    (term.sourcePages ? `Giáo trình, tr. ${term.sourcePages}` : "Giáo trình, bản in");
  const sourceLocator = term.sourcePages ?? term.sourcePage ?? term.source;
  const sourceHref = getTextbookSourceHref(sourceLocator);
  const hasVerifiedSourcePage = Boolean(getFirstPrintedPage(sourceLocator));
  const sourceContent = (
    <>
      <span className="source-icon" aria-hidden="true">
        〽
      </span>
      <div>
        <small>NGUỒN ĐỐI CHIẾU</small>
        <strong>{source}</strong>
        {hasVerifiedSourcePage && (
          <span className="source-file-meta">
            PDF · 29,6 MB · mở tại trang trích dẫn
          </span>
        )}
      </div>
      {hasVerifiedSourcePage && (
        <ExternalLink size={16} aria-hidden="true" />
      )}
    </>
  );

  return (
    <div className="drawer-layer" role="presentation">
      <button
        type="button"
        className="drawer-scrim"
        aria-label="Đóng bảng thuật ngữ"
        onClick={onClose}
      />
      <aside
        className="term-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="term-title"
      >
        <div className="drawer-header">
          <div className="ai-label">
            <Sparkles size={14} />
            Trợ lý Group 2 · Đã nối nguồn
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Đóng"
          >
            <X size={20} />
          </button>
        </div>

        <div className="drawer-content">
          <p className="eyebrow">GIẢI THÍCH TRONG 15 GIÂY</p>
          <h2 id="term-title">{name}</h2>
          <p className="term-definition">{definition}</p>

          {context && (
            <section className="drawer-section">
              <h3>Trong mạch bài đang học</h3>
              <p>{context}</p>
            </section>
          )}

          {hasVerifiedSourcePage ? (
            <a
              className="drawer-section source-section"
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Mở ${source} trong giáo trình PDF ở thẻ mới`}
            >
              {sourceContent}
            </a>
          ) : (
            <section className="drawer-section source-section">
              {sourceContent}
            </section>
          )}

          {related.length > 0 && (
            <section className="drawer-section">
              <h3>
                <Network size={17} /> Khái niệm liên quan
              </h3>
              <div className="term-tags">
                {related.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          )}

          <section className="drawer-section prompt-section">
            <h3>Thử một cách giải thích khác</h3>
            <button type="button">Cho tôi một ví dụ dễ hình dung</button>
            <button type="button">So sánh với khái niệm gần nhất</button>
            <button type="button">Vẽ thành sơ đồ quan hệ</button>
          </section>
        </div>

        <div className="drawer-footer">
          <p>
            Nội dung được truy cập công khai, không yêu cầu tài khoản. Trợ lý
            tự động có thể diễn giải sai; hãy mở nguồn khi cần trích dẫn.
          </p>
        </div>
      </aside>
    </div>
  );
}
