"use client";

import React from "react";
import { useRef, useEffect, useState } from "react";
// @ts-expect-error
import useSound from "use-sound";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

type DefaultKeyboardProps = {
	soundType: string;
	soundMode: boolean;
};

const DefaultKeyboard: React.FC<DefaultKeyboardProps> = ({ soundType, soundMode }) => {
	const keyboardRef = useRef<HTMLInputElement | null>(null);
	const [inputChar, setInputChar] = useState("");
	const [correctCount, setCorrectCount] = useState(0);
	const [incorrectCount, setIncorrectCount] = useState(0);
	const [play] = useSound("/src/assets/sound/keyboard.wav", { volume: 0.5 });

	const accuracy =
		correctCount + incorrectCount === 0
			? 0
			: Math.floor((correctCount / (correctCount + incorrectCount)) * 100);
	const keys = [..." abcdefghijklmnopqrstuvwxyz "];
	const resetStats = () => {
		setCorrectCount(0);
		setIncorrectCount(0);
	};

	useEffect(() => {
		keyboardRef.current && keyboardRef.current.focus();
	});
	const handleInputBlur = () => {
		keyboardRef.current && keyboardRef.current.focus();
	};
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (soundMode) {
			play();
		}
		setInputChar(event.key);
		event.preventDefault();
		return;
	};
	const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
		setInputChar("");
		if (event.key === randomKey) {
			let newRandom = getRandomKeyIndex();
			let newKey = keys[newRandom];
			if (newKey === randomKey) {
				if (newRandom === 0 || newRandom === keys.length - 1) {
					newRandom = 1;
				} else {
					newRandom = newRandom + 1;
				}
			}
			setRandomKey(keys[newRandom]);
			setCorrectCount(correctCount + 1);
			return;
		}

		setIncorrectCount(incorrectCount + 1);

		event.preventDefault();
		return;
	};
	const getRandomKeyIndex = () => {
		return Math.floor(Math.random() * 27);
	};

	const [randomKey, setRandomKey] = useState(() => {
		return keys[getRandomKeyIndex()];
	});

	const getClassName = (keyString: string) => {
		if (keyString !== randomKey) {
			if (inputChar !== "" && inputChar === keyString) {
				return "UNITKEY VIBRATE-ERROR";
			}
			return "UNITKEY";
		}
		if (inputChar !== "" && inputChar === keyString) {
			return "UNITKEY NOVIBRATE-CORRECT";
		}
		return "UNITKEY VIBRATE";
	};
	const getSpaceKeyClassName = () => {
		if (" " !== randomKey) {
			if (inputChar !== "" && inputChar === " ") {
				return "SPACEKEY VIBRATE-ERROR";
			}
			return "SPACEKEY";
		}
		if (inputChar !== "" && inputChar === " ") {
			return "SPACEKEY NOVIBRATE-CORRECT";
		}
		return "SPACEKEY VIBRATE";
	};

	return (
		<div>
			<div className="font-sans flex flex-col items-center justify-center">
				<input
					className="hidden"
					onBlur={handleInputBlur}
					onKeyDown={handleKeyDown}
					onKeyUp={handleKeyUp}
					ref={keyboardRef}
				></input>
				<ul className="grid grid-cols-12 gap-9">
					<div className={getClassName("q")} id="Q">
						Q
					</div>
					<div className={getClassName("w")} id="W">
						W
					</div>
					<div className={getClassName("e")} id="E">
						E
					</div>
					<div className={getClassName("r")} id="R">
						R
					</div>
					<div className={getClassName("t")} id="T">
						T
					</div>
					<div className={getClassName("y")} id="Y">
						Y
					</div>
					<div className={getClassName("u")} id="U">
						U
					</div>
					<div className={getClassName("i")} id="I">
						I
					</div>
					<div className={getClassName("o")} id="O">
						O
					</div>
					<div className={getClassName("p")} id="P">
						P
					</div>
					<div className={getClassName("[")}>[</div>
					<div className={getClassName("]")}>]</div>
				</ul>
				<ul className="grid grid-cols-12 gap-12 ml-[7rem]">
					<div className={getClassName("a")} id="A">
						A
					</div>
					<div className={getClassName("s")} id="S">
						S
					</div>
					<div className={getClassName("d")} id="D">
						D
					</div>
					<div className={getClassName("f")} id="F">
						F
					</div>
					<div className={getClassName("g")} id="G">
						G
					</div>
					<div className={getClassName("h")} id="H">
						H
					</div>
					<div className={getClassName("j")} id="J">
						J
					</div>
					<div className={getClassName("k")} id="K">
						K
					</div>
					<div className={getClassName("l")} id="L">
						L
					</div>
					<div className={getClassName(";")}>;</div>
					<div className={getClassName("'")}>'</div>
				</ul>
				<ul className="grid grid-cols-12 gap-9 ml-[5rem]">
					<div className={getClassName("z")} id="Z">
						Z
					</div>
					<div className={getClassName("x")} id="X">
						X
					</div>
					<div className={getClassName("c")} id="C">
						C
					</div>
					<div className={getClassName("v")} id="V">
						V
					</div>
					<div className={getClassName("b")} id="B">
						B
					</div>
					<div className={getClassName("n")} id="N">
						N
					</div>
					<div className={getClassName("m")} id="M">
						M
					</div>
					<div className={getClassName(",")}>,</div>
					<div className={getClassName(".")}>.</div>
					<div className={getClassName("/")}>/</div>
				</ul>
				<ul className="flex">
					<div className={getSpaceKeyClassName()} id="SPACE">
						SPACE
					</div>
				</ul>{" "}
			</div>
			<div className="flex max-w-[1000px] mt-50 mb-20 mx-auto text-[theme.stats] bottom-10% justify-center text-center">
				<div className="flex space-x-6">
					<h3>Accuracy: {accuracy} %</h3>
					<h3>
						<span className="text-green-500">{correctCount}</span>
						{"  "} {"/"} {"  "}
						<span className="text-red-500">{incorrectCount}</span>
					</h3>
					<Button
						aria-label="restart"
						onClick={() => {
							resetStats();
						}}
						className="bg-transparent"
					>
						<Icons.refresh className="text-foreground h-6 w-6" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DefaultKeyboard;
