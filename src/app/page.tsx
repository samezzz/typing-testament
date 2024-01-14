import { ModeToggle } from "@/components/mode-toggle";
import UserTypings from "@/components/user-typings";
import Verses from "@/components/verses";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24">
			<div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3">
				<Verses />
				<UserTypings className="absolute inset-0 mt-1" words={""} userInput={""} />
			</div>
			<ModeToggle />
		</main>
	);
}
