import { DEFAULT_DIFFICULTY, ENGLISH_MODE, DEFAULT_WORDS_COUNT } from "@/constants";

export const wordsGenerator = (
	htmlContent: any
	// wordsCount: any,
	// difficulty: any,
	// languageMode: any
) => {
	// const verses = [];
	// console.log("🚀 ~ verses:", verses)

	// const extractTextContent = (htmlContent: any) => {
	// 	const div = document.createElement("div");
	// 	div.innerHTML = htmlContent;
	// 	return div.textContent || div.innerText || "";
	// };

	// const textContent = extractTextContent(htmlContent);
	// console.log("🚀 ~ textContent:", textContent)
	// // Use a regular expression to split the text into words
	// const wordsArray = textContent.split(/\s+|(?=[.,;:'"])|(?<=[.,;:'"])/);

	// // Remove empty strings from the array
	// const filteredWordsArray = wordsArray.filter((word) => word.trim() !== "");

	// // Push the words into the verses array
	// verses.push(...filteredWordsArray);
	// console.log("VERSES: ", verses);

	// if (languageMode === ENGLISH_MODE) {
	// 	if (difficulty === DEFAULT_DIFFICULTY) {
	// 		// Adjust this part based on your requirements
	// 		// For now, it's an array of common words for demonstration
	// 		const EnglishWordList = ["common", "words", "array"];
	// 		console.log(textContent);
	// 		return EnglishWordList;
	// 	}

	// 	// Adjust this part based on your requirements
	// 	// For now, it's an array of random words for demonstration
	// 	const randomWordsGenerated = ["random", "words", "array"];
	// 	return randomWordsGenerated;
	// }

	// return verses;
};

// const chineseWordsGenerator = (difficulty, languageMode) => {
// 	if (languageMode === CHINESE_MODE) {
// 		if (difficulty === DEFAULT_DIFFICULTY) {
// 			const ChineseWordList = [];
// 			for (let i = 0; i < DEFAULT_WORDS_COUNT; i++) {
// 				const rand = randomIntFromRange(0, 5000);
// 				if (COMMON_CHINESE_WORDS[rand] && COMMON_CHINESE_WORDS[rand].val) {
// 					ChineseWordList.push(COMMON_CHINESE_WORDS[rand]);
// 				}
// 			}

// 			return ChineseWordList;
// 		}

// 		const ChineseIdiomsList = [];
// 		for (let i = 0; i < DEFAULT_WORDS_COUNT; i++) {
// 			const rand = randomIntFromRange(0, 5000);
// 			if (COMMON_CHINESE_IDIOMS_WORDS[rand] && COMMON_CHINESE_IDIOMS_WORDS[rand].val) {
// 				ChineseIdiomsList.push(COMMON_CHINESE_IDIOMS_WORDS[rand]);
// 			}
// 		}

// 		return ChineseIdiomsList;
// 	}
// };

// const wordsCardVocabGenerator = (vocabSource, chapter) => {
// 	const wordsList = [];
// 	const chapterCatalog = DICTIONARY_SOURCE_CATALOG[vocabSource];
// 	const chapterStartIndex = chapterCatalog[chapter][0];
// 	const chapterEndIndex = chapterCatalog[chapter][1];
// 	for (let i = chapterStartIndex; i < chapterEndIndex + 1; i++) {
// 		wordsList.push(VOCAB_DICTIONARIES[vocabSource][i]);
// 	}
// 	return wordsList;
// };

// export { wordsGenerator, chineseWordsGenerator, wordsCardVocabGenerator };
