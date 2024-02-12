"use client";

import { ChapterType, Meta, VerseType } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { getVerse, getVerses } from "@/app/actions";
import useLocalPersistState from "@/hooks/useLocalPersistState";
// import TypeBox from "./features/TypeBox/TypeBox";
import { DEFAULT_SOUND_TYPE, DEFAULT_SOUND_TYPE_KEY, SOUND_MODE } from "./features/sound/sound";
import DefaultKeyboard from "./features/Keyboard/DefaultKeyboard";
import { GAME_MODE, GAME_MODE_DEFAULT, GAME_MODE_SENTENCE } from "@/constants";
import FreeTypingBox from "./features/FreeTypingBox";
type VerseProps = {
	data: ChapterType;
	meta: Meta;
};

export default function Verse({ data, meta }: VerseProps) {
	const [verseData, setVerseData] = useState<VerseType | null>(null);
	const [verseMeta, setVerseMeta] = useState<Meta | null>(null);
	const bibleVersionID = data.bibleId;
	const chapterID = data.id;
	const chapterReference = data.reference;

	useEffect(() => {
		if (typeof window !== "undefined" && window._BAPI) {
			const fumsId = meta.fumsId;
			window._BAPI.t(fumsId);

			(async () => {
				try {
					const verses = await getVerses({ bibleVersionID, chapterID });
					if (verses && verses.length > 0) {
						console.log(verses);
						const verse = await getVerse({ bibleVersionID, bibleVerseID: verses[0].id });
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

	const [soundMode, setSoundMode] = useLocalPersistState(false, SOUND_MODE);
	const [soundType, setSoundType] = useLocalPersistState(
		DEFAULT_SOUND_TYPE,
		DEFAULT_SOUND_TYPE_KEY
	);
	const [gameMode, setGameMode] = useLocalPersistState(GAME_MODE_DEFAULT, GAME_MODE);
	const handleGameModeChange = (currGameMode: any) => {
		setGameMode(currGameMode);
	};
	// localStorage persist focusedMode setting
	const [isFocusedMode, setIsFocusedMode] = useState(
		typeof window !== "undefined" && localStorage.getItem("focused-mode") === "true"
	);
	// musicMode setting
	const [isMusicMode, setIsMusicMode] = useState(false);

	// coffeeMode setting
	const [isCoffeeMode, setIsCoffeeMode] = useState(false);

	// trainer mode setting
	const [isTrainerMode, setIsTrainerMode] = useState(false);

	// words card mode
	const [isWordsCardMode, setIsWordsCardMode] = useLocalPersistState(
		false,
		"IsInWordsCardMode"
	);

	const isWordGameMode =
		gameMode === GAME_MODE_DEFAULT && !isCoffeeMode && !isTrainerMode && !isWordsCardMode;
	const isSentenceGameMode =
		gameMode === GAME_MODE_SENTENCE && !isCoffeeMode && !isTrainerMode && !isWordsCardMode;

	const toggleFocusedMode = () => {
		setIsFocusedMode(!isFocusedMode);
	};

	const toggleSoundMode = () => {
		setSoundMode(!soundMode);
	};

	const toggleMusicMode = () => {
		setIsMusicMode(!isMusicMode);
	};

	const toggleCoffeeMode = () => {
		setIsCoffeeMode(!isCoffeeMode);
		setIsTrainerMode(false);
		setIsWordsCardMode(false);
	};

	const toggleTrainerMode = () => {
		setIsTrainerMode(!isTrainerMode);
		setIsCoffeeMode(false);
		setIsWordsCardMode(false);
	};

	const toggleWordsCardMode = () => {
		setIsTrainerMode(false);
		setIsCoffeeMode(false);
		setIsWordsCardMode(!isWordsCardMode);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("focused-mode", JSON.stringify(isFocusedMode));
		}
	}, [isFocusedMode]);
	const textInputRef = useRef<HTMLInputElement>(null);
	const focusTextInput = () => {
		textInputRef.current && textInputRef.current.focus();
	};

	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const focusTextArea = () => {
		textAreaRef.current && textAreaRef.current.focus();
	};

	const sentenceInputRef = useRef<HTMLInputElement>(null);
	const focusSentenceInput = () => {
		sentenceInputRef.current && sentenceInputRef.current.focus();
	};

	useEffect(() => {
		if (isWordGameMode) {
			focusTextInput();
			return;
		}
		if (isSentenceGameMode) {
			focusSentenceInput();
			return;
		}
		if (isCoffeeMode) {
			focusTextArea();
			return;
		}
		return;
	}, [
		isFocusedMode,
		isMusicMode,
		isCoffeeMode,
		isWordGameMode,
		isSentenceGameMode,
		soundMode,
		soundType,
	]);

	if (!verseData || !verseMeta) {
		return <p className="font-mono font-light">Loading Verse...</p>;
	}

	const { content, verseCount } = verseData;

	return (
		<div className="font-mono font-light">
			{/* <TypeBox
				textInputRef={textInputRef}
				isFocusedMode={isFocusedMode}
				soundMode={soundMode}
				soundType={soundType}
				verse={content}
				key="type-box"
				handleInputFocus={() => focusTextInput()}
			></TypeBox> */}
			<DefaultKeyboard soundMode={soundMode} soundType={soundType}></DefaultKeyboard>
			<FreeTypingBox textAreaRef={textAreaRef} soundMode={soundMode} soundType={soundType} />

			<h1 className="text-teal-500">
				{chapterReference}:{verseCount}
			</h1>
			<div className="" dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}
