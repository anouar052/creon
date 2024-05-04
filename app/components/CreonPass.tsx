import Container from "../layout/Container";
import CustomButton from "./CustomButton";

const itemsList = [
	"Pre-launch investment opportunities for upcoming AI projects",
	"Free and early access to Creon built AI projects",
	"Higher allocation limits on the Creon AI Launchpad",
	"Revenue share distribution from Creon built AI projects",
];

const CreonPass = () => {
	return (
		<Container className="flex  gap-12 py-20">
			<div className="w-full">
				<h2 className="border-b border-b-white border-opacity-10 py-6 font-title text-6xl uppercase">
					creon pass nft
				</h2>
				<h3 className="font- bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text py-6 text-lg font-bold text-transparent ">
					The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
					and a ticket to generate passive income through AI-driven tools
				</h3>
				<ul className="space-y-3">
					{itemsList.map((item, i) => (
						<li
							key={i}
							className="w-fit rounded-md border border-white border-opacity-10 px-6 py-3 font-normal"
						>
							{item}
						</li>
					))}
				</ul>
				<CustomButton
					variant="primary"
					text="Buy Creon Pass"
					className="mt-14 w-3/4"
				/>
			</div>
			<div
				style={{ boxShadow: "inset -10px -10px 20px 40px black " }}
				className="relative h-full w-full  shadow-inner  shadow-red-800 "
			>
				<div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,139,255,0.44)] to-brand-purple mix-blend-soft-light " />
				<video
					muted
					autoPlay
					loop
					src="/videos/nft-video.mp4"
					className="absolute -z-[1] h-full w-full object-cover"
				/>
			</div>
		</Container>
	);
};

export default CreonPass;
