import { getBibles, getBooks, getChapter, getChapters } from "@/app/actions";
import { BibleType } from "@/types";
import Verse from "./verse";

const Chapter = async () => {
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
		chapterID: chapters[12].id,
	});

	return (
		<Verse
			data={chapter.data}
			meta={chapter.meta}
		/>
	);
};

export default Chapter;
