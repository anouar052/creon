import Image from "next/image";
import GradientOverlay from "./GradientOverlay";

type Props = {
	card: {
		title: string;
		subtitle: string;
		description: string;
		image: string;
		badge?: boolean;
	};
};

const Card = ({ card }: Props) => {
	const { title, subtitle, description, image, badge } = card;
	return (
		<li className="min-w-72 grid-rows-subgrid group relative col-span-2  row-span-3 grid h-full  flex-1 flex-col gap-4 rounded-md bg-brand-gray bg-opacity-[60%]  p-6">
			<div className=" row-span-1  flex flex-col gap-2">
				<h4 className="font-title text-3xl uppercase">{title}</h4>
				<p className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-lg font-bold text-transparent transition-all duration-300 will-change-auto group-hover:text-[1.15rem]  group-hover:font-normal">
					{subtitle}
				</p>
			</div>
			<div className="relative row-span-1 my-4 -ml-6 h-48 w-[calc(100%+24px)] overflow-hidden rounded-r-md">
				<GradientOverlay blendMode="color" />
				<Image
					src={image}
					className="h-full w-full scale-105  object-cover object-center transition-transform duration-500 group-hover:scale-125"
					alt="token"
					fill
				/>
			</div>
			<p className="  max-w-full text-[0.938rem] leading-[130%] transition-all duration-500 will-change-auto group-hover:text-[1rem] ">
				{description}
			</p>
			{badge && (
				<span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-white px-2 text-xs font-bold text-black">
					Coming soon
				</span>
			)}
		</li>
	);
};

export default Card;
