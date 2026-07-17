import { audioScriptsChapter1 } from "./audioScriptsChapter1.js";
import { audioScriptsChapter2 } from "./audioScriptsChapter2.js";
import { audioScriptsChapter3 } from "./audioScriptsChapter3.js";
import {
  countAudioWords,
  formatAudioDuration,
} from "../utils/audioScript.js";

const rawAudioScripts = {
  ...audioScriptsChapter1,
  ...audioScriptsChapter2,
  ...audioScriptsChapter3,
};

export const lessonAudioScripts = Object.fromEntries(
  Object.entries(rawAudioScripts).map(([lessonId, script]) => [
    lessonId,
    {
      ...script,
      id: `full-audio-${lessonId}`,
      lessonId,
      wordCount: countAudioWords(script.transcript),
      duration: formatAudioDuration(script.transcript),
    },
  ]),
);

export default lessonAudioScripts;
