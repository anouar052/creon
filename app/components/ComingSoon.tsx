import Card from "./Card";
import Container from "./Container";

const cardsContent = [
	{
		title: "Token",
		subtitle: "The Gateway token to the world of AI",
		image: "/Token.jpg",
		description:
			"Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
		badge: true,
	},
	{
		title: "Revenue",
		subtitle: "Driving income and growth through decentralization",
		image: "/revenueImg.jpg",
		description:
			"CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
		badge: true,
	},
	{
		title: "Launchpad",
		subtitle: "Driving the future of AI Innovation",
		image: "/lanchpadImg.jpg",
		description:
			"The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
		badge: true,
	},
];

const ComingSoon = () => {
	return (
		<Container className=" flex   flex-col gap-6  py-20     ">
			<ul className="grid h-[90%] w-full grid-cols-2 flex-wrap justify-between gap-8 [grid-auto-rows:8rem,10rem,10rem] md:grid-cols-4 lg:grid-cols-6">
				{cardsContent.map((card, index) => (
					<Card card={card} key={index} />
				))}
			</ul>
		</Container>
	);
};

export default ComingSoon;
