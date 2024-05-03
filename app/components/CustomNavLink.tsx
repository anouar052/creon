import Link from "next/link";

type Props = {
	item: {
		title: string;
		badge: boolean;
		link: string;
	};
};
const CustomNavLink = ({ item }: Props) => {
	const { link, badge, title } = item;
	return (
		<Link
			href={link}
			className="relative whitespace-nowrap border-t border-t-white border-opacity-10 py-4 font-bold transition-colors last:border-b last:border-white last:border-opacity-10 hover:text-brand-blue lg:border-none lg:text-sm   "
		>
			{title}
			{badge && (
				<p className="relative -right-1 -top-1.5 inline translate-x-2 rounded-full bg-black px-1.5  py-[1]  text-xs font-bold  text-brand-purple">
					soon
				</p>
			)}
		</Link>
	);
};

export default CustomNavLink;
