import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const satoshi = localFont({
	src: [
		{
			path: "../public/fonts/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});

const titleFont = localFont({
	src: "../public/fonts/MonumentExtended-Regular.woff2",
	variable: "--font-title",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Creon | NFT Platform",
	description: "Join the Creon community and discover, trade, and earn crypto.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`relative font-satoshi ${satoshi.variable} ${titleFont.variable}`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
