"use client";

import { ChapterType, Meta, VerseType } from "@/types";
import React, { useEffect, useState } from "react";
import { getVerse, getVerses } from "@/app/actions";
type VerseProps = {
	data: ChapterType;
	meta: Meta;
};

export default function Verse({ data, meta }: VerseProps) {
	const [verseData, setVerseData] = useState<VerseType | null>(null);
	const [verseMeta, setVerseMeta] = useState<Meta | null>(null);
	const bibleVersionID = data.bibleId;
	const chapterID = data.id;
	const chapterReference = data.reference

	useEffect(() => {
		if (typeof window !== "undefined" && window._BAPI) {
			const fumsId = meta.fumsId;
			window._BAPI.t(fumsId);

			(async () => {
				try {
					const verses = await getVerses({ bibleVersionID, chapterID });
					if (verses && verses.length > 0) {
						console.log(verses);
						const verse = await getVerse({ bibleVersionID, bibleVerseID: verses[1].id });
						const { data, meta } = verse;
						setVerseData(data);
						setVerseMeta(meta);
					} else {
						console.error("No verses found.");
					}
				} catch (error) {
					console.error("Error fetching verses:", error);
				}
			})();
		}
	}, [bibleVersionID, chapterID, meta]);

	if (!verseData || !verseMeta) {
		// Render loading or fallback content if data and meta are not available yet
		return <p className="font-mono font-light">Loading Verse...</p>;
	}

	const { content, reference, verseCount } = verseData;

	return (
		<div className="font-mono font-light text-wrap">
			<h1>
				{chapterReference}
			</h1>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}
