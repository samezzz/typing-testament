import React, { useEffect, useState } from "react";
// @ts-expect-error
import useSound from "use-sound";
// import { SOUND_MAP } from "./sound/sound";

const FreeTypingBox = ({ spaces = 4, textAreaRef, soundMode, soundType }: any) => {
	const [text, setText] = useState({ value: "", caret: -1, target: null });

	const [play] = useSound("/src/assets/sound/keyboard.wav", { volume: 0.5 });

	useEffect(() => {
		if (text.caret >= 0 && text.target) {
			// Use type assertion to tell TypeScript that text.target is an HTMLInputElement
			const inputElement = text.target as HTMLInputElement;
			inputElement.setSelectionRange(text.caret + spaces, text.caret + spaces);
		}
	}, [text, spaces]);

	const handleTab = (e: any) => {
		let content = e.target.value;
		let caret = e.target.selectionStart;

		if (e.key === "Tab") {
			e.preventDefault();

			let newText = content.substring(0, caret) + " ".repeat(spaces) + content.substring(caret);

			setText({ value: newText, caret: caret, target: e.target });
		}
	};

	const handleText = (e: any) => {
		if (soundMode) {
			play();
		}
		setText({ value: e.target.value, caret: -1, target: e.target });
	};

	return (
		<div className="w-80 h-full mx-auto relative block">
			<textarea
				onChange={handleText}
				onKeyDown={handleTab}
				value={text.value}
				ref={textAreaRef}
				className="text-[theme.textTypeBox] text-28 bg-transparent border-none caret-[theme.stats] font-[theme.fontFamily] overflow-auto resize-none w-full h-80% mx-auto relative outline-none rounded-4"
				spellCheck="false"
				placeholder=" ... "
			/>
		</div>
	);
};

export default FreeTypingBox;
