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
		<Container className="relative h-fit  justify-start gap-12 py-20 md:flex md:min-h-screen  ">
			<div className="relative z-[2] w-full">
				<h2 className="border-b border-b-white border-opacity-10 py-6 font-title text-4xl uppercase lg:text-[3.5vw] lg:leading-none">
					creon pass nft
				</h2>
				<h3 className="font- bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text py-6 font-bold text-transparent lg:text-lg ">
					The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
					and a ticket to generate passive income through AI-driven tools
				</h3>
				<ul className="space-y-3">
					{itemsList.map((item, i) => (
						<li
							key={i}
							className="w-fit rounded-md border border-white border-opacity-10 px-6 py-3 text-sm font-normal lg:text-base"
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
			<div className="absolute inset-0 -z-[1] min-h-[80vh] w-full shadow-inner shadow-red-800 brightness-[20%] md:relative md:z-0   md:flex md:brightness-100 ">
				<div className="absolute inset-0 bg-gradient-to-t from-[rgba(61,139,255,0.44)] to-brand-purple mix-blend-soft-light " />
				<div
					className="absolute inset-0 h-full w-full "
					style={{ boxShadow: "inset -10px -10px 20px 40px black " }}
				/>
				<video
					muted
					autoPlay
					loop
					src="/videos/nft-video.mp4"
					className="absolute -z-[2] h-full w-full object-cover"
				/>
			</div>
		</Container>
	);
};

export default CreonPass;
