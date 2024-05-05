import Socials from "@/components/Socials";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bottom-0 flex w-full flex-col-reverse items-center gap-8 px-4 py-8 md:absolute md:flex-row md:items-start  md:px-8 lg:px-[10vw]">
			<p>© Creon 2023. All rights reserved.</p>
			<Socials className="m-0" />
			<Link href="https://www.niftables.com/" className="group md:ml-auto  ">
				Powered by{" "}
				<span className="font-title uppercase transition-colors duration-500 group-hover:text-brand-blue">
					Niftables
				</span>
			</Link>
		</footer>
	);
};

export default Footer;
