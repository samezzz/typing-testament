import UserTypings from "@/components/user-typings";
import Verses from "@/components/chapter";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center">
			<div className="items-center justify-center relative text-2xl leading-relaxed break-all ">
				<Verses />
			</div>
		</main>
	);
}
