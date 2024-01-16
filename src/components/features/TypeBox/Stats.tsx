import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { TOOLTIPS } from "@/constants";
import React from "react";

interface StatsProps {
	status: string;
	wpm: number;
	countDown: number;
	countDownConstant: number;
	statsCharCount: number[];
	rawKeyStrokes: number;
}

const Stats: React.FC<StatsProps> = ({
	status,
	wpm,
	countDown,
	countDownConstant,
	statsCharCount,
	rawKeyStrokes,
}) => {
	return (
		<>
			<h3>{countDown} s </h3>
			<div className="flex">
				<h3>WPM: {Math.round(wpm)}</h3>
				{status === "finished" && <h4>Accuracy: {Math.round(statsCharCount[0])} %</h4>}
				{status === "finished" && (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="outline">{}</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Add to library</p>
								Char: <span className="correct-char-stats">{statsCharCount[1]}</span>/
								<span className="incorrect-char-stats">{statsCharCount[2]}</span>/
								<span className="missing-char-stats">{statsCharCount[3]}</span>/
								<span className="correct-char-stats">{statsCharCount[4]}</span>/
								<span className="incorrect-char-stats">{statsCharCount[5]}</span>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)}
				{status === "finished" && (
					<h4>
						Raw KPM:{" "}
						{Math.round(
							(rawKeyStrokes / (countDownConstant)) * 60.0 // countDownConstant || COUNT_DOWN_DEFAULT
						)}
					</h4>
				)}
			</div>
		</>
	);
};

export default Stats;
