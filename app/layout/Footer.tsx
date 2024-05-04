import Socials from "@/components/Socials";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 flex w-full gap-8 px-4 py-8  md:px-8 lg:px-24 xl:px-44">
			<p>© Creon 2023. All rights reserved.</p>
			<Socials className="m-0" />
			<Link href="https://www.niftables.com/" className="group ml-auto  ">
				Powered by{" "}
				<span className="font-title uppercase transition-colors duration-500 group-hover:text-brand-blue">
					Niftables
				</span>
			</Link>
		</footer>
	);
};

export default Footer;
