import { DifficultyType, GameModeType, ModeType, PacingType, Tooltips } from "@/types";

const DEFAULT_WORDS_COUNT: number = 200;
const COUNT_DOWN_90: number = 90;
const COUNT_DOWN_60: number = 60;
const COUNT_DOWN_30: number = 30;
const COUNT_DOWN_15: number = 15;
const DEFAULT_COUNT_DOWN: number = COUNT_DOWN_60;

const DEFAULT_DIFFICULTY: DifficultyType = "normal";
const HARD_DIFFICULTY: DifficultyType = "hard";
const FOCUS_MODE: string = "Focus mode";
const AUTHOR = "author: @Samezzz\n";
const GITHUB_REPO_LINK = "project: @Github\n";
const MUSIC_MODE: string =
	"Spotify player. You will need to login spotify first to use the full feature.";
const FREE_MODE: string = "Free typing mode\nType anything, no pressure, it's coffee time!";
const ENGLISH_MODE: ModeType = "ENGLISH_MODE";
const GAME_MODE: ModeType = "GAME_MODE";
const GAME_MODE_DEFAULT: GameModeType = "WORD_MODE";
const GAME_MODE_SENTENCE: GameModeType = "SENTENCE_MODE";
const WORD_MODE_LABEL: string = "word";
const SENTENCE_MODE_LABEL: string = "sentence";
const TRAINER_MODE: ModeType = "QWERTY keyboard practice mode";
const DEFAULT_SENTENCES_COUNT: number = 5;
const TEN_SENTENCES_COUNT: number = 10;
const FIFTEEN_SENTENCES_COUNT: number = 15;
const ENGLISH_SENTENCE_MODE_TOOLTIP_TITLE: string = "English Sentence Mode";
const CHINESE_SENTENCE_MODE_TOOLTIP_TITLE: string = "Chinese Sentence Mode";
const WORDS_CARD_MODE: string = "Words Card mode, learn something in typing!";
const SELECT_ONE_OR_MORE_CHAPTERS =
	"Open to select one or more chapters. Pick the chapters in the typing area.";

const PACING_CARET: PacingType = "caret";
const PACING_PULSE: PacingType = "pulse";

export {
	DEFAULT_WORDS_COUNT,
	DEFAULT_COUNT_DOWN,
	COUNT_DOWN_60,
	COUNT_DOWN_30,
	COUNT_DOWN_15,
	COUNT_DOWN_90,
	DEFAULT_DIFFICULTY,
	HARD_DIFFICULTY,
	FOCUS_MODE,
	MUSIC_MODE,
	ENGLISH_MODE,
	FREE_MODE,
	GAME_MODE,
	GAME_MODE_DEFAULT,
	GAME_MODE_SENTENCE,
	WORD_MODE_LABEL,
	SENTENCE_MODE_LABEL,
	DEFAULT_SENTENCES_COUNT,
	TEN_SENTENCES_COUNT,
	FIFTEEN_SENTENCES_COUNT,
	ENGLISH_SENTENCE_MODE_TOOLTIP_TITLE,
	CHINESE_SENTENCE_MODE_TOOLTIP_TITLE,
	AUTHOR,
	GITHUB_REPO_LINK,
	TRAINER_MODE,
	WORDS_CARD_MODE,
	SELECT_ONE_OR_MORE_CHAPTERS,
	PACING_CARET,
	PACING_PULSE,
};

export const TOOLTIPS: Tooltips = {
	RESTART_BUTTON_TOOLTIP_TITLE: "[Tab] + [Enter] to quickly restart",
	REDO_BUTTON_TOOLTIP_TITLE: "[Tab] + [Space] to quickly redo",
	RESTART_BUTTON_TOOLTIP_TITLE_WORDSCARD: "[Tab] + [Enter] to quick restart the chapter",
	SELECT_ONE_OR_MORE_CHAPTERS:
		"Open to select one or more chapters. Pick the chapters in the typing area.",
	RECITE_MODE_TITLE: "hide the word BLABLABLAAA",
	DEFAULT_DIFFICULTY_TOOLTIP_TITLE:
		"normal mode generates random words from top 1000 most frequently used words in English dataset.",
	HARD_DIFFICULTY_TOOLTIP_TITLE:
		"hard mode generates random words from blog posts words data, so you may encounter longer and less frequently used word.",
	CHAR_TOOLTIP_TITLE: "correct/incorrect/missing/extra\n extras are recorded even if deleted.",
	SENTENCE_CHAR_TOOLTIP_TITLE: "correct/incorrect/extra\n",
	GITHUB_TOOLTIP_TITLE:
		"Dear visitors: \n For feature requests or bug reports, please submit an issue to the github repo. \n Welcome contributing with a fork. \n If you like my works, please star the project. \n Thanks! \n",
	TOOLTIP_TITLE: "",
	SUPPORT_TOOLTIP_TITLE:
		"Help me keep the site live with your support : D \n Appreciate with love! \n",
	PACING_CARET_TOOLTIP: 'type the word with a caret "|" , character by character.',
	PACING_PULSE_TOOLTIP:
		'type the word with a pulse "____", this helps improving wpm and your speed typing pace habit.',
};
