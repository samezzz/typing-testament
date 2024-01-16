"use client";

import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";
// import { nav } from "@/constants";
// import { MobileNav } from "./MobileNav";
import React, { useEffect, useState } from "react";
import { Icons } from "../icons";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
// import { UserAccountNav } from "./UserAccountNav";
// import { useSession } from "next-auth/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
	return (
		<nav className="w-full flex items-center justify-between mx-auto px-4 py-6 sticky top-0 z-50">
			<h2 className="text-2xl font-bold">Typing Testament</h2>
			{/* <Avatar>
				<AvatarImage src="/quietTime.jpeg" alt="@evangelistdagdevotionals" />
				<AvatarFallback>DC</AvatarFallback>
			</Avatar> */}

			{/* <ul className="hidden h-full gap-12 md:flex">
				{nav.map((link, index) => (
					<Link
						href={link.href}
						key={index}
						className=" text-gray-50 flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold duration-300 ease-in-out hover:dark:text-gray-200 hover:text-gray-800"
					>
						{link.name}
					</Link>
				))}
			</ul> */}

			{/* <div className="md:flex items-center justify-center hidden gap-x-3">
				<ModeToggle />
				{data ? (
					<UserAccountNav
						user={{
							name: data?.user.name,
							image: data?.user.image,
							email: data?.user.email,
						}}
					/>
				) : (
					<Link href="/login" className={cn(buttonVariants())}>
						Login
					</Link>
				)}

			</div> */}
			{/* <div className="md:hidden flex items-center gap-x-3">
				<ModeToggle />
				<button
					className="flex items-center space-x-2 md:hidden"
					onClick={() => setShowMobileMenu((prev) => !prev)}
				>
					{showMobileMenu ? (
						<Icons.close className="border border-border p-1 rounded-md h-[36px] w-[36px] hover:bg-secondary" />
					) : (
						<Icons.menu className="border border-border p-1 rounded-md h-[36px] w-[36px] hover:bg-secondary transition-all" />
					)}
				</button>
				{showMobileMenu && nav && <MobileNav items={nav} closeMenu={handleClick} />}
				{data ? (
					<UserAccountNav
						user={{
							name: data?.user.name,
							image: data?.user.image,
							email: data?.user.email,
						}}
					/>
				) : (
					<Link href="/login" className={cn(buttonVariants())}>
						Login
					</Link>
				)} */}
			{/* </div> */}
		</nav>
	);
}
