import {
	getBibles,
	getBooks,
	getChapter,
	getChapters,
	getVerse,
	getVerses,
} from "@/app/actions";
import { BibleType } from "@/types";
import { cn } from "@/lib/utils";

const Verses = async () => {
	const biblesInAllLanguages: BibleType[] = await getBibles();
	// Filter bibles for English language
	const englishBibles = biblesInAllLanguages.filter(
		(bible) => bible.language.name === "English"
	);

	if (englishBibles.length === 0) {
		console.error("No English bibles found.");
		return null;
	}
	// Select the first English bible (you might want to adjust this based on your logic)
	const selectedBible = englishBibles[10];

	const books = await getBooks({ bibleVersionID: selectedBible.id });
	const chapters = await getChapters({
		bibleVersionID: selectedBible.id,
		bibleBookID: books[0].id,
	});
	const chapter = await getChapter({
		bibleVersionID: selectedBible.id,
		chapterID: chapters[0].id,
	});

	console.log(chapter)

	const verses = await getVerses({
		bibleVersionID: selectedBible.id,
		chapterID: chapter.data.id,
	});
	console.log("🚀 ~ Verses ~ verses:", verses);

	// const verse = await getVerse({
	// bibleVersionID: selectedBible.id,
	// bibleVerseID: verses[0].id,
	// });

	// Fetch details of the selected Bible
	// const bible: BibleType = await getBible(selectedBible.id);
	// console.log("Bible Details:", bible);

	// Assuming you want to get a verse from the selected Bible
	// const bibleVerseID = bible.id;
	// const { content, reference } = await getVerse(bible.id, bibleVerseID);
	// console.log("Verse:", verse);

	return (
		<div className={cn("font-mono font-light")}>
			{/* {bibles.map(
				(bible, index) =>
					bible.language.name === "English" && (
						<div key={index} className="mb-4">
							<p>{bible.nameLocal}</p>
							<p>{bible.abbreviationLocal}</p>
						</div>
					)
			)} */}
			{/* {books.map(
				(book, index) =>
				{
					return (
						<div key={index}>
							<h1>{ book.name}</h1>
						</div>
					)
					}
					)} */}
			{/* {verse.map((verse, index) => {
				return (
					<div key={index}>
						<h1>{verse.content}</h1>
					</div>
				);
			})} */}
			For God so loved the world, that he gave his only Son, that whoever believes in him should
			not perish but have eternal life.
		</div>
	);
};

export default Verses;
