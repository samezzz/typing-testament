import { Icons } from "@/components/icons";

declare global {
	interface Window {
		_BAPI: {
			t: (string) => void;
		};
	}
}


type DifficultyType = "normal" | "hard";
type ModeType = "ENGLISH_MODE" | "GAME_MODE" | "TRAINER_MODE" | "QWERTY keyboard practice mode";
type GameModeType = "WORD_MODE" | "SENTENCE_MODE";
type PacingType = "caret" | "pulse";

export type SoundOptions = "keyboard" | "typewriter" | "cherry";

// Interface for the tooltips
interface Tooltips {
	[key: string]: string;
}

export type MenuItemType = {
	name: string;
	disabled: boolean;
	icon?: keyof typeof Icons;
};

export type Meta = {
	fums: string;
	fumsId: string;
	fumsJsInclude: string;
	fumsJs: string;
	fumsNoScript: string;
};

export type LanguageType = {
	id: string;
	name: string;
	nameLocal: string;
	script: string;
	scriptDirection: string;
};

export type AudioBibleSummaryType = {
	id: string;
	name: string;
	nameLocal: string;
	description: string;
	descriptionLocal: string;
};

export type BibleType = {
	id: string;
	dblId: string;
	abbreviation: string;
	abbreviationLocal: string;
	copyright: string;
	language: Language;
	countries: string[]; // Replace with the actual type if available
	name: string;
	nameLocal: string;
	description: string;
	descriptionLocal: string;
	info: string;
	type: string;
	updatedAt: string; // Replace with the actual type if available, considering it's a date-time
	relatedDbl: string;
	audioBibles: AudioBibleSummary[];
};

export type ChapterSummaryType = {
	id: string;
	bibleId: string;
	number: string;
	bookId: string;
	reference: string;
};

export type BookType = {
	id: string;
	bibleId: string;
	abbreviation: string;
	name: string;
	nameLong: string;
	chapters?: ChapterSummary[]; // Add the "?" if chapters is optional, replace with the actual type if available
};

export type ChapterType = {
	id: string;
	bibleId: string;
	number: string;
	bookId: string;
	content: string;
	reference: string;
	verseCount: number;
	next?: {
		id: string;
		bookId: string;
		number: string;
	};
	previous?: {
		id: string;
		bookId: string;
		number: string;
	};
	copyright: string;
};

export type LanguageType = {
	id: string;
	name: string;
	nameLocal: string;
	script: string;
	scriptDirection: string;
};

export type PassageType = {
	id: string;
	bibleId: string;
	orgId: string;
	content: string;
	reference: string;
	verseCount: number;
	copyright: string;
};

export type VerseType = {
	id: string;
	orgId: string;
	bibleId: string;
	bookId: string;
	chapterId: string;
	content: string;
	reference: string;
	verseCount: number;
	copyright: string;
	next?: {
		id: string;
		bookId: string;
	};
	previous?: {
		id: string;
		bookId: string;
	};
};

export type SectionSummaryType = {
	id: string;
	bibleId: string;
	bookId: string;
	title: string;
	firstVerseId: string;
	lastVerseId: string;
	firstVerseOrgId: string;
	lastVerseOrgId: string;
};

export type SectionType = {
	id: string;
	bibleId: string;
	bookId: string;
	chapterId: string;
	title: string;
	content: string;
	verseCount: number;
	firstVerseId: string;
	lastVerseId: string;
	firstVerseOrgId: string;
	lastVerseOrgId: string;
	copyright: string;
	next?: {
		id: string;
		title: string;
	};
	previous?: {
		id: string;
		title: string;
	};
};

export type VerseSummaryType = {
	id: string;
	orgId: string;
	bibleId: string;
	bookId: string;
	chapterId: string;
	reference: string;
};

export type SearchVerseType = {
	id: string;
	orgId: string;
	bibleId: string;
	bookId: string;
	chapterId: string;
	text: string;
	reference?: string; // Reference is marked as optional
};

export type SearchResponseType = {
	query: string;
	limit: number;
	offset: number;
	total: number;
	verseCount: number;
	verses: SearchVerse[];
	passages: Passage[];
};

export type AudioBibleType = {
	id: string;
	dblId: string;
	abbreviation: string;
	abbreviationLocal: string;
	copyright: string;
	language: Language;
	countries: string[]; // Replace with the actual type if available
	name: string;
	nameLocal: string;
	description: string;
	descriptionLocal: string;
	info: string;
	type: string;
	updatedAt: string; // Replace with the actual type if available, considering it's a date-time
	relatedDbl: string;
};

export type AudioChapterType = {
	id: string;
	bibleId: string;
	number: string;
	bookId: string;
	resourceUrl: string;
	timecodes: any[]; // Replace with the actual type if available
	expiresAt: number;
	reference: string;
	next?: {
		id: string;
		bookId: string;
		number: string;
	};
	previous?: {
		id: string;
		bookId: string;
		number: string;
	};
	copyright: string;
};
