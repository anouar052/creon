import Image from "next/image";

const Profiting = () => {
	return (
		<section className=" flex h-screen w-full flex-col gap-6 px-4 py-20 md:px-8 lg:px-24 xl:px-48  ">
			<h2 className="font-title text-6xl uppercase">Profiting Through</h2>
			<h3 className="w-fit self-end bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text font-title text-3xl uppercase text-transparent">
				AI Innovation & Decentralization
			</h3>
			<div className="mt-8 flex h-fit ">
				<div className="relative mr-8 w-full flex-[2.5] ">
					<div className="absolute inset-0 z-[2] bg-gradient-to-r from-brand-purple to-brand-blue mix-blend-soft-light" />
					<Image
						className="h-full w-full object-cover object-center"
						src="/profitImg.jpg"
						alt="Profiting Image"
						fill
					/>
				</div>
				<div className=" flex-1 space-y-4 border-x border-x-white border-opacity-10 px-6 py-16 leading-[1.3]">
					<h4 className="text-lg font-bold">
						The dynamic community driven business model of the future.
					</h4>
					<p className="text-sm">
						At Creon, we blend the power of AI tools with the dynamic crypto and
						NFT markets, utilizing an innovative business model to drive
						profitability. This approach empowers our community, as our NFT and
						token holders directly benefit from the growth and prosperity of the
						Creon network, creating a win-win scenario for both our community
						and for the projects we launch.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Profiting;
