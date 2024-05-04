import Container from "../layout/Container";
import GradientOverlay from "./GradientOverlay";

const Profiting = () => {
	return (
		<Container className=" flex h-screen w-full flex-col gap-6 py-20  ">
			<h2 className="font-title text-6xl uppercase">Profiting Through</h2>
			<h3 className="w-fit self-end bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text font-title text-3xl uppercase text-transparent">
				AI Innovation & Decentralization
			</h3>
			<div className="mt-8 flex h-fit ">
				<div className="relative mr-8 w-full flex-[2.5] ">
					<GradientOverlay />
					<video
						controls
						src="/videos/creon-logo.mp4"
						className="absolute -z-[1] h-full w-full object-cover"
					/>
				</div>
				<div className=" flex-1 space-y-4 border-x border-x-white border-opacity-10 px-6 py-[5.5rem] leading-[1.3]">
					<h4 className="text-lg font-bold leading-[1.3]">
						The dynamic community driven business model of the future.
					</h4>
					<p className="text-sm leading-[1.3]">
						At Creon, we blend the power of AI tools with the dynamic crypto and
						NFT markets, utilizing an innovative business model to drive
						profitability. This approach empowers our community, as our NFT and
						token holders directly benefit from the growth and prosperity of the
						Creon network, creating a win-win scenario for both our community
						and for the projects we launch.
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Profiting;
