export function normalizeSearch(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

export function filterLearningChapters(
  chapters,
  {
    query = "",
    formatFilter = "all",
    chapterFilter = "all",
    durationFilter = "all",
  } = {},
) {
  const normalizedQuery = normalizeSearch(query);

  return chapters
    .map((chapter, chapterIndex) => {
      if (chapterFilter !== "all" && chapter.id !== chapterFilter) return null;

      const chapterSearchText = normalizeSearch(
        [
          chapter.title,
          chapter.shortTitle,
          chapter.description,
        ].join(" "),
      );
      const chapterMatches =
        normalizedQuery.length > 0 && chapterSearchText.includes(normalizedQuery);
      const modules = (chapter.modules ?? [])
        .map((module, sourceModuleIndex) => ({
          ...module,
          sourceModuleIndex,
        }))
        .filter((module) => {
          const matchesFormat =
            formatFilter === "all" || module.primaryFormat === formatFilter;
          const minutes = module.estimatedMinutes ?? 0;
          const matchesDuration =
            durationFilter === "all" ||
            (durationFilter === "short" && minutes < 15) ||
            (durationFilter === "long" && minutes >= 15);
          const moduleSearchText = normalizeSearch(
            [
              module.number,
              module.title,
              module.subtitle,
              module.summary,
              ...(module.keyConcepts ?? []),
              ...(module.learningOutcomes ?? []),
            ].join(" "),
          );
          const matchesQuery =
            !normalizedQuery ||
            chapterMatches ||
            moduleSearchText.includes(normalizedQuery);

          return matchesFormat && matchesDuration && matchesQuery;
        });

      if (modules.length === 0) return null;
      return { ...chapter, modules, sourceIndex: chapterIndex };
    })
    .filter(Boolean);
}

export function countFilteredModules(chapters) {
  return chapters.reduce(
    (total, chapter) => total + (chapter.modules?.length ?? 0),
    0,
  );
}
