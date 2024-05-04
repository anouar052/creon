import GradientOverlay from "./GradientOverlay";
import HorizontalCard from "./HorizontalCard";

const cardsContent = [
	{
		title: "AI Prospects, Market Size, and Development Pace",
		image: "/ai_1.jpg",
		description:
			"The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
	},
	{
		title: "AI Tools and Market",
		image: "/ai_2.jpg",
		description:
			"AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
	},
	{
		title: "AI, Crypto, and NFT Market",
		image: "/ai_3.jpg",
		description:
			"Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
	},
];

const HorizontalList = () => {
	return (
		<section className="relative min-h-screen w-full px-4 pb-36 pt-20 md:px-8 lg:px-24 xl:px-44  ">
			<div
				className="absolute inset-0 -z-[1] h-full w-full bg-gradient-to-b from-black to-transparent"
				aria-hidden
			/>
			<div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20">
				<GradientOverlay />
				<video
					muted
					autoPlay
					loop
					src="/videos/roadmap-video.mp4"
					className="h-full w-full object-cover"
				/>
			</div>
			<ul className="z-[2] flex flex-col gap-6">
				{cardsContent &&
					cardsContent.map((card, index) => (
						<HorizontalCard key={index} card={card} />
					))}
			</ul>
		</section>
	);
};

export default HorizontalList;
