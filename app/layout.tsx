import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Stat Erudit",
	description: "Stat Erudit | Start Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-hidden w-screen h-screen flex place-items-center justify-center`}>
				{children}
			</body>
		</html>
	);
}
