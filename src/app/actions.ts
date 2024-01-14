"use server";

import { BibleType, BookType, ChapterType, PassageType, SectionType, VerseType } from "@/types";

const BIBLE_API_SECRET = process.env.BIBLE_API_SECRET as string;

export async function getBibles(): Promise<BibleType[]> {
	const res = await fetch("https://api.scripture.api.bible/v1/bibles", {
		headers: {
			"api-key": BIBLE_API_SECRET,
		},
	});
	const bibles = await res.json();
	return bibles.data;
}

export async function getBible(bibleID: string): Promise<BibleType> {
	const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleID}`, {
		headers: {
			"api-key": BIBLE_API_SECRET,
		},
	});
	const bible = await res.json();
	return bible;
}

export async function getBooks(bibleVersionID: string): Promise<BookType[]> {
	const res = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books`, {
		headers: {
			"api-key": BIBLE_API_SECRET,
		},
	});
	const books = await res.json();
	return books.data;
}

export async function getBook(bibleVersionID: string, bookID: string): Promise<BookType> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bookID}`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const biblesData = await res.json();
	return biblesData.data;
}

export async function getChapters(
	bibleVersionID: string,
	bibleBookID: string
): Promise<ChapterType[]> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bibleBookID}/chapters`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const chapters = await res.json();
	return chapters.data;
}

export async function getChapter(
	bibleVersionID: string,
	chapterID: string
): Promise<ChapterType> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chapters/${chapterID}`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const biblesData = await res.json();
	return biblesData.data;
}

export async function getSections(
	bibleVersionID: string,
	bibleBookID: string
): Promise<SectionType[]> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/books/${bibleBookID}/sections`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const sections = await res.json();
	return sections.data;
}

export async function getSection(
	bibleVersionID: string,
	bibleSectionID: string
): Promise<SectionType> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/sections/${bibleSectionID}?include-chapter-numbers=true&include-verse-spans=true`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const section = await res.json();
	return section.data;
}

export async function getPassages(
	bibleVersionID: string,
	passageID: string
): Promise<PassageType> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/passages/${passageID}`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const passages = await res.json();
	return passages.data;
}

export async function getVerses(
	bibleVersionID: string,
	chapterID: string
): Promise<VerseType[]> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/chpaters/${chapterID}/verses`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const verses = await res.json();
	return verses.data;
}

export async function getVerse(
	bibleVersionID: string,
	bibleVerseID: string
): Promise<{ content: string; reference: string }> {
	const res = await fetch(
		`https://api.scripture.api.bible/v1/bibles/${bibleVersionID}/verses/${bibleVerseID}?include-chapter-numbers=false&include-verse-numbers=false`,
		{
			headers: {
				"api-key": BIBLE_API_SECRET,
			},
		}
	);
	const { data } = await res.json();
	const { content, reference } = data;

	return { content, reference };
}
