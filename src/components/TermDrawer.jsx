import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Network,
  Sparkles,
  X,
} from "lucide-react";
import {
  getFirstSourcePage,
  getSourceDocumentHref,
} from "../utils/sourceDocument";

export default function TermDrawer({
  term,
  onClose,
}) {
  const closeButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  useEffect(() => {
    setSelectedPrompt(null);
  }, [term]);

  useEffect(() => {
    if (!term) return undefined;
    const previousOverflow = document.body.style.overflow;
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
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
    (term.sourcePages
      ? `Nhà nước xã hội chủ nghĩa Việt Nam, tr. ${term.sourcePages}`
      : "Tài liệu Nhà nước xã hội chủ nghĩa Việt Nam");
  const sourceLocator = term.sourcePages ?? term.sourcePage ?? term.source;
  const sourceHref = getSourceDocumentHref(sourceLocator);
  const hasVerifiedSourcePage = Boolean(getFirstSourcePage(sourceLocator));
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
            PDF · mở tại trang trích dẫn
          </span>
        )}
      </div>
      {hasVerifiedSourcePage && (
        <ExternalLink size={16} aria-hidden="true" />
      )}
    </>
  );
  const promptOptions = [
    {
      id: "example",
      label: "Cho tôi một ví dụ dễ hình dung",
      response:
        context ?? `Có thể bắt đầu từ cách hiểu ngắn gọn này: ${definition}`,
    },
    {
      id: "compare",
      label: "So sánh với khái niệm gần nhất",
      response: related.length
        ? `${name} cần được phân biệt nhưng đồng thời đặt trong quan hệ với ${related.join(", ")}.`
        : `${name} nên được so sánh theo phạm vi, chủ thể và mục tiêu được nêu trong tài liệu nguồn.`,
    },
    {
      id: "map",
      label: "Vẽ thành sơ đồ quan hệ",
      response: related.length
        ? `${name} là nút trung tâm; các nút liên quan gồm: ${related.join(" · ")}.`
        : `${name} → nội dung cốt lõi → ngữ cảnh vận dụng → trang tài liệu đối chiếu.`,
    },
  ];
  const activePrompt = promptOptions.find((item) => item.id === selectedPrompt);

  return (
    <div className="drawer-layer" role="presentation">
      <button
        type="button"
        className="drawer-scrim"
        aria-label="Đóng bảng thuật ngữ"
        onClick={onClose}
      />
      <aside
        ref={drawerRef}
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
              aria-label={`Mở ${source} trong tài liệu PDF ở thẻ mới`}
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
            {promptOptions.map((item) => (
              <button
                type="button"
                key={item.id}
                className={selectedPrompt === item.id ? "active" : ""}
                aria-pressed={selectedPrompt === item.id}
                onClick={() => setSelectedPrompt(item.id)}
              >
                {item.label}
              </button>
            ))}
            {activePrompt && (
              <p className="prompt-response" aria-live="polite">
                {activePrompt.response}
              </p>
            )}
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
