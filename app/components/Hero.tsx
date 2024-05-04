import Container from "../layout/Container";

const Hero = () => {
	return (
		<Container className="relative flex h-screen flex-col gap-8  py-20 ">
			<div className="absolute inset-0 -z-10 h-full w-full object-cover  ">
				<video
					muted
					autoPlay
					loop
					src="/videos/main-background-video.mp4"
					className="absolute h-full w-full object-cover"
				/>
			</div>
			{/* <Image */}
			{/* 	src="/heroImg.jpg" */}
			{/* 	className="z-0 h-full w-full object-cover object-center" */}
			{/* 	alt="heroImg" */}
			{/* 	fill */}
			{/* /> */}
			<div className="via-47% to-99% absolute inset-0 z-[1] bg-gradient-to-t from-black via-brand-blue to-brand-purple mix-blend-soft-light  " />
			<h1 className="z-10 mt-auto font-title text-3xl uppercase leading-[1.1] md:text-4xl lg:text-5xl xl:text-6xl">
				The world's first platform for Tokenizing AI blockchain projects
			</h1>
			<h2 className="relative z-10 w-fit border-y border-y-transparent bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-lg font-semibold text-transparent before:absolute before:-top-1 before:left-0 before:h-[1] before:w-full before:bg-white before:bg-gradient-to-r before:from-brand-blue before:to-brand-purple after:absolute after:-bottom-1 after:left-0 after:h-[1] after:w-full after:bg-white after:bg-gradient-to-r after:from-brand-blue after:to-brand-purple ">
				Hold the Creon Pass NFT and earn passive income from AI Tools
			</h2>
		</Container>
	);
};

export default Hero;
