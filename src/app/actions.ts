"use server";

import {
	BibleType,
	BookType,
	ChapterSummaryType,
	ChapterType,
	Meta,
	PassageType,
	SearchResponseType,
	SectionSummaryType,
	SectionType,
	VerseSummaryType,
	VerseType,
} from "@/types";

const BIBLE_API_SECRET = process.env.BIBLE_API_SECRET_DEV as string;

export async function getBibles(): Promise<BibleType[]> {
	const res = await fetch("https://api.scripture.api.bible/v1/bibles", {
		headers: {
			"Content-Type": "application/json",
			"api-key": BIBLE_API_SECRET,
		},
	});
	const bibles: { data: BibleType[] } = await res.json();
	return bibles.data;
}

export async function getBible({ bibleID }: { bibleID: string }): Promise<BibleType> {
	const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleID}`, {
		headers: {
			"Content-Type": "application/json",
			"api-key": BIBLE_API_SECRET,
		},
	});
	const bible: { data: BibleType } = await res.json();
	return bible.data;
}

export async function getBooks({
	bibleVersionID,
}: {
	bibleVersionID: string;
}): Promise<BookType[]> {
	const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books`, {
		headers: {
			"Content-Type": "application/json",
			"api-key": BIBLE_API_SECRET,
		},
	});
	const books: { data: BookType[] } = await res.json();
	return books.data;
}

export async function getBook({
	bibleVersionID,
	bookID,
}: {
	bibleVersionID: string;
	bookID: string;
}): Promise<BookType> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bookID}`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const biblesData: { data: BookType } = await res.json();
	return biblesData.data;
}

export async function getChapters({
	bibleVersionID,
	bibleBookID,
}: {
	bibleVersionID: string;
	bibleBookID: string;
}): Promise<ChapterSummaryType[]> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bibleBookID}/chapters`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const chapters: { data: ChapterSummaryType[] } = await res.json();
	return chapters.data;
}

export async function getChapter({
	bibleVersionID,
	chapterID,
}: {
	bibleVersionID: string;
	chapterID: string;
}): Promise<{ data: ChapterType; meta: Meta }> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chapters/${chapterID}`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const chapter: { data: ChapterType; meta: Meta } = await res.json();
	return chapter;
}

export async function getSectionsOfBooks({
	bibleVersionID,
	bibleBookID,
}: {
	bibleVersionID: string;
	bibleBookID: string;
}): Promise<SectionSummaryType[]> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bibleBookID}/sections`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const sections: { data: SectionSummaryType[] } = await res.json();
	return sections.data;
}

export async function getSectionsOfChapters({
	bibleVersionID,
	bibleChapterID,
}: {
	bibleVersionID: string;
	bibleChapterID: string;
}): Promise<SectionSummaryType[]> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chapters/${bibleChapterID}/sections`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const sections: { data: SectionSummaryType[] } = await res.json();
	return sections.data;
}

export async function getSection({
	bibleVersionID,
	bibleSectionID,
}: {
	bibleVersionID: string;
	bibleSectionID: string;
}): Promise<{ data: SectionType; meta: Meta }> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/sections/${bibleSectionID}?include-chapter-numbers=true&include-verse-spans=true`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const section: { data: SectionType; meta: Meta } = await res.json();
	return section;
}

export async function getPassages({
	bibleVersionID,
	passageID,
}: {
	bibleVersionID: string;
	passageID: string;
}): Promise<{ data: PassageType; meta: Meta }> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/passages/${passageID}`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const passages: { data: PassageType; meta: Meta } = await res.json();
	return passages;
}

export async function getVerses({
	bibleVersionID,
	chapterID,
}: {
	bibleVersionID: string;
	chapterID: string;
}): Promise<VerseSummaryType[]> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chapters/${chapterID}/verses`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const verses: { data: VerseSummaryType[] } = await res.json();
	return verses.data;
}

export async function getVerse({
	bibleVerseID,
	bibleVersionID,
}: {
	bibleVersionID: string;
	bibleVerseID: string;
}): Promise<{ data: VerseType; meta: Meta }> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/verses/${bibleVerseID}?include-chapter-numbers=false&include-verse-numbers=false`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const verse: { data: VerseType; meta: Meta } = await res.json();
	return verse;
}

export async function searchBible({
	bibleVersionID,
}: {
	bibleVersionID: string;
}): Promise<{ query: string; data: SearchResponseType; meta: Meta }> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/search`,
		{
			headers: {
				"Content-Type": "application/json",
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const verse: { query: string; data: SearchResponseType; meta: Meta } = await res.json();

	return verse;
}
