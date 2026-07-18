import { allModules } from "./stateContent.js";

export const lessonProfiles = Object.fromEntries(
  allModules.map((module) => [
    module.id,
    {
      thesis: module.thesis,
      thesisDetail: module.thesisDetail,
      sectionEyebrow: module.sectionEyebrow,
      sectionTitle: module.sectionTitle,
      contextParagraphs: module.contextParagraphs,
      blocks: module.blocks,
      relationTitle: module.relationTitle,
      relationIntro: module.relationIntro,
      lenses: module.lenses,
      caution: module.caution,
      quiz: module.quiz,
    },
  ]),
);

export default lessonProfiles;
