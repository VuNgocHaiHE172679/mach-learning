import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Highlighter,
  Lightbulb,
  ListTree,
  Network,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  XCircle,
} from "lucide-react";
import {
  chapters,
  featuredLesson,
  microQuiz,
} from "../data/learningContent";
import { lessonAudioScripts } from "../data/lessonAudioScripts";
import {
  chapterHistoryFeatures,
  lessonCoreContent,
  lessonVisuals,
} from "../data/lessonCoreContent";
import { lessonProfiles } from "../data/lessonProfiles";
import { getSourceDocumentHref } from "../utils/sourceDocument";

const TERM_FALLBACKS = [
  "Nhà nước xã hội chủ nghĩa",
  "Quyền lực nhà nước thuộc về Nhân dân",
  "Phát triển bền vững",
];

const MODULE_CATALOG = chapters.flatMap((chapter) =>
  chapter.modules.map((module, moduleIndex) => ({
    ...module,
    chapterId: chapter.id,
    chapterNumber: chapter.number,
    chapterTitle: chapter.title,
    moduleIndex,
  })),
);

const DEFAULT_MODULE =
  MODULE_CATALOG.find((module) => module.id === featuredLesson?.id) ??
  MODULE_CATALOG[0];

function buildFallbackProfile(lesson) {
  const outcomes = lesson.learningOutcomes ?? [];
  const concepts = lesson.keyConcepts ?? TERM_FALLBACKS;
  const blocks = Array.from({ length: 3 }, (_, index) => ({
    title: concepts[index] ?? `Luận điểm ${index + 1}`,
    text: outcomes[index] ?? lesson.summary,
  }));

  return {
    thesis: lesson.subtitle ?? lesson.title,
    thesisDetail: lesson.summary,
    sectionEyebrow: "Cơ sở bài học",
    sectionTitle: lesson.subtitle ?? lesson.title,
    contextParagraphs: [lesson.summary, outcomes[0] ?? lesson.summary],
    blocks,
    relationTitle: "Ba lớp nội dung cần kết nối",
    relationIntro:
      "Các khái niệm trong học phần cần được đọc trong quan hệ, không nên ghi nhớ như những mảnh thông tin rời rạc.",
    lenses: blocks.map((block, index) => ({
      code: String.fromCharCode(65 + index),
      label: `Góc nhìn ${index + 1}`,
      title: block.title,
    })),
    caution:
      outcomes[2] ??
      "Nội dung tóm lược không thay thế việc đọc và đối chiếu tài liệu nguồn.",
    quiz: microQuiz,
  };
}

function TermButton({ children, onOpen }) {
  return (
    <button type="button" className="inline-term" onClick={() => onOpen(children)}>
      {children}
      <Sparkles size={12} aria-hidden="true" />
    </button>
  );
}

function ExternalLinkIcon() {
  return (
    <span className="source-chip-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function QuizPanel({ questions, sourcePages }) {
  const normalized = questions?.length
    ? questions
    : [
        {
          question:
            "Nguyên tắc nào được tài liệu đặt ở trung tâm của quyền lực nhà nước?",
          options: [
            "Quyền lực thuộc về Nhân dân",
            "Quyền lực thuộc về doanh nghiệp",
            "Quyền lực thuộc về tổ chức quốc tế",
          ],
          answer: 0,
          explanation:
            "Trang 4 nhấn mạnh nguyên tắc tất cả quyền lực nhà nước thuộc về Nhân dân.",
        },
      ];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = normalized[questionIndex];
  const choices = current.options ?? current.choices ?? [];
  const answerIndex =
    current.answer ??
    current.correctIndex ??
    current.correctAnswer ??
    choices.findIndex((option) => option?.id === current.correctOptionId);
  const isCorrect = selected === answerIndex;

  const choose = (index) => {
    if (checked) return;
    setSelected(index);
  };

  const check = () => {
    if (selected === null) return;
    setChecked(true);
    if (selected === answerIndex) setScore((currentScore) => currentScore + 1);
  };

  const next = () => {
    if (questionIndex === normalized.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((index) => index + 1);
    setSelected(null);
    setChecked(false);
  };

  const reset = () => {
    setQuestionIndex(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const finalScore = score;
    return (
      <div className="quiz-finished">
        <div className="quiz-result-ring">
          <span>
            <strong>{finalScore}/{normalized.length}</strong>
            câu đúng
          </span>
        </div>
        <div>
          <p className="eyebrow">TỰ KIỂM TRA HOÀN TẤT</p>
          <h3>
            {finalScore === normalized.length
              ? "Mạch kiến thức đã nối liền."
              : "Có một vài quan hệ cần xem lại."}
          </h3>
          <p>
            {finalScore === normalized.length
              ? "Ba câu trả lời đã được đối chiếu với nội dung và nguồn của chuyên đề."
              : "Hãy quay lại khối kiến thức trực quan liên quan, sau đó thử trả lời lại bằng lập luận của bạn."}
          </p>
          <button type="button" className="button secondary" onClick={reset}>
            <RotateCcw size={17} /> Làm lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-panel">
      <div className="quiz-head">
        <div>
          <span>TỰ KIỂM TRA · 03 CÂU</span>
          <strong>
            Câu {questionIndex + 1}/{normalized.length}
          </strong>
        </div>
        <div className="quiz-dots" aria-hidden="true">
          {normalized.map((_, index) => (
            <i
              key={index}
              className={
                index < questionIndex
                  ? "done"
                  : index === questionIndex
                    ? "active"
                    : ""
              }
            />
          ))}
        </div>
      </div>
      <h3>{current.question ?? current.prompt}</h3>
      <div className="quiz-options">
        {choices.map((option, index) => {
          const optionLabel =
            typeof option === "string" ? option : option.label ?? option.text;
          const optionKey =
            typeof option === "string" ? option : option.id ?? optionLabel;
          let state = "";
          if (checked && index === answerIndex) state = "correct";
          if (checked && index === selected && !isCorrect) state = "incorrect";
          if (!checked && index === selected) state = "selected";
          return (
            <button
              type="button"
              className={state}
              key={optionKey}
              onClick={() => choose(index)}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {optionLabel}
              {state === "correct" && <CheckCircle2 size={19} />}
              {state === "incorrect" && <XCircle size={19} />}
            </button>
          );
        })}
      </div>

      {checked && (
        <div
          className={isCorrect ? "quiz-feedback good" : "quiz-feedback"}
          aria-live="polite"
        >
          <Lightbulb size={19} />
          <div>
            <strong>{isCorrect ? "Chính xác." : "Chưa đúng, nhưng rất gần."}</strong>
            <p>
              {current.explanation ??
                "Hãy nhìn lại quan hệ giữa phát kiến này với cách giải thích sự vận động của xã hội."}
            </p>
          </div>
        </div>
      )}

      <div className="quiz-actions">
        <span>
          {checked
            ? `Nguồn: Tài liệu “Nhà nước xã hội chủ nghĩa Việt Nam”, tr. ${sourcePages}`
            : "Chọn một đáp án"}
        </span>
        {!checked ? (
          <button
            type="button"
            className="button primary"
            disabled={selected === null}
            onClick={check}
          >
            Kiểm tra
          </button>
        ) : (
          <button type="button" className="button primary" onClick={next}>
            {questionIndex === normalized.length - 1
              ? "Xem kết quả"
              : "Câu tiếp theo"}
            <ArrowRight size={17} />
          </button>
        )}
      </div>
    </div>
  );
}

export default function LessonPage({
  navigate,
  openTerm,
  playAudio,
  lessonId,
}) {
  const [readingMode, setReadingMode] = useState("visual");
  const [highlighted, setHighlighted] = useState(false);
  const [activeOutline, setActiveOutline] = useState("context");
  const [activeBlock, setActiveBlock] = useState(0);

  const moduleRecord =
    MODULE_CATALOG.find((module) => module.id === lessonId) ?? DEFAULT_MODULE;
  const lesson =
    moduleRecord.id === featuredLesson?.id
      ? { ...featuredLesson, ...moduleRecord }
      : moduleRecord;
  const lessonChapter =
    chapters.find((chapter) => chapter.id === lesson.chapterId) ?? chapters[0];
  const profile = lessonProfiles[lesson.id] ?? buildFallbackProfile(lesson);
  const coreContent = lessonCoreContent[lesson.id] ?? {
    lead: lesson.summary,
    sections: profile.blocks.map((block) => ({
      title: block.title,
      summary: block.text,
      points: [],
    })),
  };
  const historyFeature = chapterHistoryFeatures[lesson.chapterId];
  const lessonVisual = lessonVisuals[lesson.id] ?? {
    image: lessonChapter.illustration.src,
    alt: lessonChapter.illustration.alt,
    focalPoint: lessonChapter.illustration.focalPoint,
    caption: lessonChapter.illustration.caption,
    credit: lessonChapter.illustration.credit,
    sourceUrl: lessonChapter.illustration.sourceUrl,
  };
  const fullAudio = lessonAudioScripts[lesson.id];
  const audio = fullAudio ? {
    ...fullAudio,
    chapterId: lesson.chapterId,
    description: lesson.summary,
    sourcePages: lesson.sourcePages,
    status: "ready",
  } : {
    id: `lesson-audio-${lesson.id}`,
    chapterId: lesson.chapterId,
    title: `Tóm tắt ${lesson.number}: ${lesson.title}`,
    description: lesson.summary,
    transcript: `${profile.thesis} ${profile.thesisDetail} ${profile.contextParagraphs.join(" ")} ${coreContent.lead}`,
    duration: "≈ 02 phút",
    sourcePages: lesson.sourcePages,
    status: "ready",
  };
  const terms =
    lesson.keyConcepts ??
    lesson.concepts ??
    TERM_FALLBACKS;
  const blocks = profile.blocks;

  useEffect(() => {
    setReadingMode("visual");
    setHighlighted(false);
    setActiveOutline("context");
    setActiveBlock(0);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [lesson.id]);

  useEffect(() => {
    if (lessonId && !MODULE_CATALOG.some((module) => module.id === lessonId)) {
      navigate("lesson", DEFAULT_MODULE.id);
    }
  }, [lessonId, navigate]);

  return (
    <div className="page lesson-page">
      <div className="lesson-topbar">
        <button type="button" onClick={() => navigate("hub")}>
          <ArrowLeft size={17} /> Kho tri thức
        </button>
        <div className="lesson-breadcrumb">
          <span>TUYẾN {Number(lessonChapter.number)}</span>
          <ChevronRight size={14} />
          <strong>{lesson.number} · {lesson.title}</strong>
        </div>
        <div className="lesson-top-actions">
          <button
            type="button"
            className={highlighted ? "active" : ""}
            aria-pressed={highlighted}
            onClick={() => setHighlighted((current) => !current)}
          >
            <Highlighter size={17} />
            <span>Làm nổi luận điểm</span>
          </button>
        </div>
      </div>

      <div className="lesson-layout section-shell">
        <aside className="lesson-outline">
          <p>TRONG BÀI NÀY</p>
          {[
            ["context", "Luận đề và câu hỏi"],
            ["conditions", "Cơ sở nội dung"],
            ["core-content", "Nội dung cốt lõi"],
            ["discoveries", "Hệ khái niệm"],
            ["relations", "Quan hệ lý luận"],
            ["quiz", "Phản tư và tự kiểm tra"],
          ].map(([id, label], index) => (
            <button
              type="button"
              key={id}
              className={activeOutline === id ? "active" : ""}
              aria-current={activeOutline === id ? "location" : undefined}
              onClick={() => {
                setActiveOutline(id);
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {label}
            </button>
          ))}
          <a
            className="outline-source"
            href={getSourceDocumentHref(lesson.sourcePages)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Mở tài liệu PDF tại trang ${lesson.sourcePages} ở thẻ mới`}
          >
            <span>NGUỒN ĐỐI CHIẾU</span>
            <strong>Tài liệu nguồn · Tr. {lesson.sourcePages}</strong>
          </a>
        </aside>

        <article className="lesson-article">
          <header className="article-header" id="context">
            <div className="lesson-labels">
              <span>CHUYÊN ĐỀ {lesson.number}</span>
              <span>
                <Clock3 size={14} /> {lesson.estimatedMinutes} phút
              </span>
              <span>TR. {lesson.sourcePages}</span>
            </div>
            <h1>{lesson.title}</h1>
            <p>{lesson.summary}</p>
            <div className="mode-switcher" aria-label="Chọn cách học">
              <button
                type="button"
                className={readingMode === "quick" ? "active" : ""}
                aria-pressed={readingMode === "quick"}
                onClick={() => setReadingMode("quick")}
              >
                <ZapIcon /> 60 giây
              </button>
              <button
                type="button"
                className={readingMode === "visual" ? "active" : ""}
                aria-pressed={readingMode === "visual"}
                onClick={() => setReadingMode("visual")}
              >
                <ListTree size={16} /> Bằng sơ đồ
              </button>
              <button
                type="button"
                className={readingMode === "full" ? "active" : ""}
                aria-pressed={readingMode === "full"}
                onClick={() => setReadingMode("full")}
              >
                <BookOpen size={16} /> Đọc đầy đủ
              </button>
            </div>
          </header>

          <figure
            className={`lesson-lead-figure${
              lessonVisual.fit === "contain" || lessonVisual.image.endsWith(".svg")
                ? " is-contained"
                : ""
            }`}
          >
            <img
              src={lessonVisual.image}
              alt={lessonVisual.alt}
              width="1400"
              height="933"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={{
                objectPosition: lessonVisual.focalPoint,
                objectFit:
                  lessonVisual.fit ??
                  (lessonVisual.image.endsWith(".svg") ? "contain" : "cover"),
              }}
            />
            <figcaption>
              <span>TUYẾN {lessonChapter.number}</span>
              <div>
                <p>{lessonVisual.caption}</p>
                {lessonVisual.sourceUrl && (
                  <a
                    href={lessonVisual.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lessonVisual.credit} <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </figcaption>
          </figure>

          <section className="quick-take">
            <div className="quick-index">60"</div>
            <div>
              <p className="eyebrow">LUẬN ĐỀ</p>
              <h2>{profile.thesis}</h2>
              <p>{profile.thesisDetail}</p>
            </div>
          </section>

          <section className="article-section" id="conditions">
            <div className="section-number">01</div>
            <div className="article-copy">
              <p className="eyebrow">{profile.sectionEyebrow}</p>
              <h2>{profile.sectionTitle}</h2>
              <p className={highlighted ? "reader-highlight" : ""}>
                {profile.contextParagraphs[0]}
              </p>
              <p>{profile.contextParagraphs[1]}</p>
              <a
                className="source-chip"
                href={getSourceDocumentHref(lesson.sourcePages)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Mở tài liệu PDF tại trang ${lesson.sourcePages} ở thẻ mới`}
              >
                <BookOpen size={15} /> Đối chiếu tài liệu nguồn · tr. {lesson.sourcePages}
                <ExternalLinkIcon />
              </a>
            </div>
          </section>

          <section
            className={`core-content ${readingMode === "full" ? "is-full" : "is-visual"}`}
            id="core-content"
          >
            <header className="core-content-head">
              <div>
                <p className="eyebrow">NỘI DUNG CỐT LÕI</p>
                <h2>Đủ ý để hiểu — gọn lớp để nhớ</h2>
              </div>
              <span>{coreContent.sections.length} luận điểm trọng tâm</span>
            </header>
            <p className="core-content-lead">{coreContent.lead}</p>
            <div className="core-content-grid">
              {coreContent.sections.map((section, index) => (
                <article key={`${lesson.id}-core-${index + 1}`}>
                  <div className="core-content-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3>{section.title}</h3>
                    <p>{section.summary}</p>
                    {section.points?.length > 0 && (
                      <ul>
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className="core-content-note">
              Chế độ “Đọc đầy đủ” chuyển các luận điểm về một cột để đọc sâu;
              chế độ “Bằng sơ đồ” đặt chúng cạnh nhau để so sánh nhanh.
            </p>
          </section>

          {historyFeature && (
            <figure
              className={`history-feature${
                historyFeature.image.endsWith(".svg") ? " is-diagram" : ""
              }`}
            >
              <div className="history-feature-image">
                <img
                  src={historyFeature.image}
                  alt={historyFeature.alt}
                  width="1200"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: historyFeature.focalPoint }}
                />
                <span>{historyFeature.year}</span>
              </div>
              <figcaption>
                <p className="eyebrow">DẪN CHỨNG / SƠ ĐỒ ĐỐI CHIẾU</p>
                <h2>{historyFeature.title}</h2>
                <p>{historyFeature.caption}</p>
                <a
                  href={historyFeature.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {historyFeature.credit} <ExternalLinkIcon />
                </a>
              </figcaption>
            </figure>
          )}

          <section className="visual-stack">
            <div className="visual-stack-head">
              <div>
                <p className="eyebrow light">QUAN HỆ / SƠ ĐỒ KHÁI NIỆM</p>
                <h2>{profile.relationTitle}</h2>
              </div>
              <span>CHỌN TỪNG KHỐI ĐỂ LÀM NỔI LUẬN ĐIỂM</span>
            </div>
            <div className="condition-chain">
              {blocks.map((block, index) => (
                <button
                  type="button"
                  className={`condition-block${activeBlock === index ? " active" : ""}`}
                  key={`${lesson.id}-block-${index + 1}`}
                  aria-pressed={activeBlock === index}
                  onClick={() => setActiveBlock(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                  {index < blocks.length - 1 && (
                    <i className="chain-arrow" aria-hidden="true">
                      →
                    </i>
                  )}
                </button>
              ))}
            </div>
            <div className="chain-result">
              <span className="result-cross" aria-hidden="true">
                ×
              </span>
              <div>
                <small>KẾT LUẬN CẦN GIỮ</small>
                <strong>{profile.thesis}</strong>
              </div>
              <span>{lesson.number}</span>
            </div>
          </section>

          <section className="article-section" id="discoveries">
            <div className="section-number">02</div>
            <div className="article-copy">
              <p className="eyebrow">HỆ KHÁI NIỆM</p>
              <h2>{lesson.subtitle}</h2>
              <p>{profile.relationIntro}</p>
              <div className="lesson-term-cloud" aria-label="Khái niệm trọng tâm">
                {terms.slice(0, 4).map((term) => (
                  <TermButton key={term} onOpen={openTerm}>
                    {term}
                  </TermButton>
                ))}
              </div>
              <div className="reader-note">
                <Sparkles size={18} />
                <div>
                  <strong>Điểm cần tránh</strong>
                  <p>{profile.caution}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="discovery-grid" id="relations">
            {profile.lenses.map((lens, index) => {
              const relatedTerm = terms[index] ?? terms[0] ?? lens.title;

              return (
                <article key={`${lesson.id}-${lens.code}`}>
                  <div className="discovery-code">{lens.code}</div>
                  <span>GÓC NHÌN 0{index + 1}</span>
                  <p>{lens.label}</p>
                  <h3>{lens.title}</h3>
                  <button type="button" onClick={() => openTerm(relatedTerm)}>
                    Mở thuật ngữ <ArrowRight size={15} />
                  </button>
                </article>
              );
            })}
          </section>

          <section className="audio-inline">
            <button
              type="button"
              className="audio-inline-play"
              onClick={() => playAudio(audio)}
              aria-label="Phát audio bài học"
            >
              <Play size={21} fill="currentColor" />
            </button>
            <div>
              <p className="eyebrow light">
                NGHE LẠI TRONG {audio?.duration ?? "05:00"}
              </p>
              <h3>{audio?.title ?? lesson.title}</h3>
            </div>
            <div className="waveform" aria-hidden="true">
              {[2, 5, 3, 8, 4, 10, 6, 4, 9, 3, 7, 5, 2, 8, 4, 6].map(
                (height, index) => (
                  <i key={index} style={{ height: `${height * 3}px` }} />
                ),
              )}
            </div>
            <span>{audio?.duration ?? "05:00"}</span>
          </section>

          <section className="quiz-section" id="quiz">
            <div className="quiz-section-title">
              <p className="eyebrow">PHẢN TƯ & TỰ NHỚ LẠI</p>
              <h2>Ba câu để nối chắc mạch vừa học</h2>
              <p>Không trừ điểm. Mỗi câu sai sẽ dẫn về đúng khối kiến thức trực quan.</p>
            </div>
            <QuizPanel
              key={lesson.id}
              questions={profile.quiz}
              sourcePages={lesson.sourcePages}
            />
          </section>
        </article>

        <aside className="lesson-inspector">
          <div className="inspector-card">
            <div className="inspector-icon">
              <Sparkles size={18} />
            </div>
            <p className="eyebrow">TRỢ LÝ GROUP 2 ĐANG THEO BÀI</p>
            <h3>Gặp một thuật ngữ khó?</h3>
            <p>
              Chạm vào từ có gạch cyan để nhận giải thích theo đúng ngữ cảnh.
            </p>
            <button
              type="button"
              onClick={() => openTerm(terms[0])}
            >
              Thử Term Lens
            </button>
          </div>
          <div className="inspector-card compact">
            <Network size={18} />
            <div>
              <small>ĐANG KẾT NỐI</small>
              <strong>{terms.length} khái niệm</strong>
            </div>
          </div>
          <div className="inspector-card compact">
            <Volume2 size={18} />
            <div>
              <small>CÓ BÀI NGHE</small>
              <strong>{audio?.duration ?? "≈ 05 phút"}</strong>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ZapIcon() {
  return <span aria-hidden="true">⚡</span>;
}
