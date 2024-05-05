import Image from "next/image";
import GradientOverlay from "./GradientOverlay";

type Props = {
	card: {
		title: string;
		image: string;
		description: string;
	};
};

const HorizontalCard = ({ card }: Props) => {
	const { title, image, description } = card;

	return (
		<li className="md:min-h-64 flex h-auto min-h-full flex-1 flex-col-reverse gap-4 rounded-md bg-brand-gray bg-opacity-[60%] leading-[1.3] md:flex-row">
			<div className=" flex-[2] space-y-4 p-4 md:p-8">
				<h4 className="font-title text-2xl md:text-[3vw] lg:text-2xl xl:text-[2vw] ">
					{title}
				</h4>
				<p className="text-sm xl:text-[0.938rem]">{description}</p>
			</div>
			<div className="md:min-h-auto relative  min-h-[20vh]   w-full flex-1   ">
				<GradientOverlay blendMode="overlay" />
				<Image
					src={image}
					alt="AI"
					className="h-full w-full object-cover object-center"
					fill
				/>
			</div>
		</li>
	);
};

export default HorizontalCard;
