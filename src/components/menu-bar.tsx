import { Button } from "@/components/ui/button";
import { InboxIcon, LayersIcon, MenuIcon, MessageCircleIcon, ShareIcon } from "./icons";
import { ModeToggle } from "./mode-toggle";

export default function MenuBar() {
	return (
		<div className="mb-24 flex items-center justify-between rounded-full bg-zinc-800 p-2 max-w-max">
			<div className="flex space-x-1 md:space-x-2 lg:space-x-3 border-r border-zinc-600 pr-1">
				<Button
					className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
					size="icon"
					variant="ghost"
				>
					<MessageCircleIcon className="h-6 w-6 stroke-1" />
					<span className="sr-only">Create a comment</span>
				</Button>
				<div className="relative">
					<Button
						className="text-zinc-100 relative rounded-full hover:bg-gray-600 hover:text-zinc-100"
						size="icon"
						variant="ghost"
					>
						<InboxIcon className="h-6 w-6 stroke-1" />
						<span className="sr-only">Open inbox</span>
						<span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-blue-500" />
					</Button>
				</div>
				<Button
					className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
					size="icon"
					variant="ghost"
				>
					<LayersIcon className="h-6 w-6 stroke-1" />
					<span className="sr-only">Edit</span>
				</Button>
			</div>
			<div className="flex space-x-2 border-r border-zinc-600 px-3">
				<img
					alt="Avatar 1"
					className="rounded-full border-2 border-red-500 bg-gray-500"
					height="32"
					src="/placeholder.svg"
					style={{
						aspectRatio: "32/32",
						objectFit: "cover",
					}}
					width="32"
				/>
				<img
					alt="Avatar 2"
					className="rounded-full border-2 border-green-500 bg-gray-500"
					height="32"
					src="/placeholder.svg"
					style={{
						aspectRatio: "32/32",
						objectFit: "cover",
					}}
					width="32"
				/>
				<div className="relative">
					<img
						alt="Avatar 3"
						className="rounded-full border-2 border-[#666666] bg-gray-700 opacity-50"
						height="32"
						src="/placeholder.svg"
						style={{
							aspectRatio: "32/32",
							objectFit: "cover",
						}}
						width="32"
					/>
					<span className="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white text-xs font-bold">
						9+
					</span>
				</div>
			</div>
			<div className="flex items-center justify-center space-x-2 pl-1">
				<Button
					className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
					size="icon"
					variant="ghost"
				>
					<ShareIcon className="h-6 w-6 stroke-1" />
					<span className="sr-only">Open share UI</span>
				</Button>
				<Button
					className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
					size="icon"
					variant="ghost"
				>
					<ModeToggle />
					<span className="sr-only">Open menu</span>
				</Button>
				<Button
					className="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
					size="icon"
					variant="ghost"
				>
					<ModeToggle />
					<span className="sr-only">Open menu</span>
				</Button>
			</div>
		</div>
	);
}
