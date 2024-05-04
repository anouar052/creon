import Image from "next/image";

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
		<li className="flex h-64 gap-4  rounded-md bg-brand-gray bg-opacity-[60%] leading-[1.3]">
			<div className=" flex-[2] space-y-4 p-8">
				<h4 className="font-title text-4xl ">{title}</h4>
				<p className="text-[0.938rem]">{description}</p>
			</div>
			<div className="relative h-full flex-1   ">
				<div className="absolute inset-0 z-[2] bg-gradient-to-t from-brand-blueDark to-brand-purpleDark mix-blend-overlay   " />
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
