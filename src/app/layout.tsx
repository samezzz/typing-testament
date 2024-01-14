import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import MenuBar from "@/components/menu-bar";
import FumsScript from "./FumScript";
import Script from "next/script";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={cn(GeistSans.variable, GeistMono.variable)}>
			<head>
				{/* <Script
					// integrity="1U6Q5HNn2sv4WQApQqkJo1rwImVwKJXPcFT5XYsQwgGA7+mQB18GzW0h0JEQnRSd%"
					// crossOrigin="anonymous"
					src="http://cdn.scripture.api.bible/fums/fumsv2.min.js"
					strategy="beforeInteractive"
				/> */}
				{/* <FumsScript /> */}
			</head>
			<body className="flex flex-col max-w-[1200px] min-h-screen mx-auto px-4 md:px-10">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="flex-grow flex flex-col items-center">
						<Navbar />
						<div className="flex items-center my-auto">{children}</div>
						<MenuBar />
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
