import { useCallback, useEffect, useState } from "react";
import AppShell from "./components/AppShell";
import TermDrawer from "./components/TermDrawer";
import AudioPlayer from "./components/AudioPlayer";
import HomePage from "./pages/HomePage";
import LearningHubPage from "./pages/LearningHubPage";
import LessonPage from "./pages/LessonPage";
import GameArenaPage from "./pages/GameArenaPage";
import { featuredLesson, glossary } from "./data/learningContent";

const VALID_ROUTES = new Set(["home", "hub", "lesson", "games"]);

function canonicalTerm(value) {
  return value
    .toLocaleLowerCase("vi")
    .normalize("NFC")
    .replace(/[–—-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function navigationFromHash() {
  const [hashRoute, encodedLessonId] = window.location.hash
    .replace(/^#\/?/, "")
    .split("/");
  const route = VALID_ROUTES.has(hashRoute) ? hashRoute : "home";
  let lessonId = featuredLesson?.id ?? null;

  if (route === "lesson" && encodedLessonId) {
    try {
      lessonId = decodeURIComponent(encodedLessonId);
    } catch {
      lessonId = encodedLessonId;
    }
  }

  return { route, lessonId };
}

export default function App() {
  const [{ route, lessonId }, setNavigation] = useState(navigationFromHash);
  const [activeTerm, setActiveTerm] = useState(null);
  const [activeAudio, setActiveAudio] = useState(null);

  useEffect(() => {
    const handleHashChange = () => setNavigation(navigationFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    setActiveAudio(null);
    setActiveTerm(null);
  }, [route, lessonId]);

  const navigate = useCallback((nextRoute, nextLessonId) => {
    const safeRoute = VALID_ROUTES.has(nextRoute) ? nextRoute : "home";
    const resolvedLessonId =
      safeRoute === "lesson"
        ? nextLessonId || featuredLesson?.id || null
        : featuredLesson?.id ?? null;
    const lessonPath =
      safeRoute === "lesson" && nextLessonId
        ? `/${encodeURIComponent(nextLessonId)}`
        : "";

    window.location.hash = `/${safeRoute}${lessonPath}`;
    setNavigation({ route: safeRoute, lessonId: resolvedLessonId });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openTerm = useCallback((termName) => {
    const normalized = canonicalTerm(termName);
    const found = glossary.find((item) => {
      const label = item.term ?? item.title ?? "";
      return canonicalTerm(label) === normalized;
    });
    setActiveTerm(
      found ?? {
        term: termName,
        definition:
          "Thuật ngữ này đang được biên tập. Group 2 sẽ chỉ hiển thị nội dung sau khi đã đối chiếu với giáo trình.",
        source: "Chờ kiểm duyệt học thuật",
      },
    );
  }, []);

  const pageProps = {
    navigate,
    openTerm,
    playAudio: setActiveAudio,
  };

  const pages = {
    home: <HomePage {...pageProps} />,
    hub: <LearningHubPage {...pageProps} />,
    lesson: <LessonPage {...pageProps} lessonId={lessonId} />,
    games: <GameArenaPage {...pageProps} />,
  };

  return (
    <>
      <AppShell
        activeRoute={route}
        navigate={navigate}
        onOpenAssistant={() => openTerm("Chủ nghĩa xã hội khoa học")}
      >
        {pages[route]}
      </AppShell>

      <TermDrawer
        term={activeTerm}
        onClose={() => setActiveTerm(null)}
      />

      <AudioPlayer audio={activeAudio} onClose={() => setActiveAudio(null)} />
    </>
  );
}
