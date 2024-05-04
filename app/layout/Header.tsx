"use client";
import { FC, useState } from "react";
import Logo from "../components/Logo";
import CustomButton from "../components/CustomButton";
import CustomNavLink from "../components/CustomNavLink";
import Socials from "../components/Socials";

const navItems = [
	{ title: "Creon Pass", badge: false, link: "#" },
	{ title: "Token", badge: true, link: "#" },
	{ title: "AI Revenue", badge: true, link: "#" },
	{ title: "AI Launchpad", badge: true, link: "#" },
];

const Header: FC = () => {
	const [navOpen, setNavOpen] = useState(false);
	return (
		<header className="absolute left-0 top-0 z-30 flex h-[6.5rem] w-full items-center justify-between p-4 font-satoshi md:p-8">
			<Logo className="scale-90" />
			<nav className="flex items-center md:gap-4 lg:gap-10">
				<div
					className={` ${
						navOpen ? "translate-x-0" : "translate-x-full"
					} min-w-1/2 fixed right-0 top-0 flex h-screen w-2/3 flex-col bg-black pl-8 pt-8 transition-all duration-500 ease-out md:w-1/3 lg:static lg:h-auto   lg:w-full lg:translate-x-0  lg:flex-row lg:items-center lg:gap-10  lg:bg-transparent lg:pt-0  `}
				>
					<CustomButton
						type="button"
						className="mb-4 w-fit lg:order-last lg:mb-0 "
						text="Connect"
						variant="secondary"
					/>
					{navItems.map((item, index) => (
						<CustomNavLink item={item} key={index} />
					))}
					<Socials />
				</div>
			</nav>
			<button
				className={` ${
					navOpen ? "relative z-30 rounded-md bg-brand-blue p-3 lg:hidden" : ""
				} flex items-center justify-center p-3 lg:hidden`}
				onClick={() => setNavOpen(!navOpen)}
			>
				{navOpen ? (
					<svg
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1L7 7M13 13L7 7M7 7L13 1L1 13"
							stroke="white"
							stroke-width="2"
						/>
					</svg>
				) : (
					<svg
						width="39"
						height="9"
						viewBox="0 0 39 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M39 1.0542L0.433594 1.0542"
							stroke="white"
							stroke-width="2"
						/>
						<path
							d="M39 7.32031L18.1348 7.32031"
							stroke="white"
							stroke-width="2"
						/>
					</svg>
				)}
			</button>
		</header>
	);
};

export default Header;
