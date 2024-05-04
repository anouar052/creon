import Image from "next/image";
import Container from "./Container";

const Mission = () => {
	return (
		<Container className="flex h-screen w-full gap-6 py-20 ">
			<div className="flex flex-[1.2] flex-col  ">
				<h3 className="font-title text-[2.1rem] uppercase  leading-[1.1] tracking-wide">
					<span>
						Our vision is to support the innovation of AI blockchain projects{" "}
					</span>
					<span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
						while prioritizing communities and democratizing profits
					</span>
				</h3>
				<div
					className="relative -mr-[20%] ml-[20%] flex-1"
					style={{ boxShadow: "inset 0px 0px 20px 40px black " }}
				>
					<Image
						src="/missionImg.jpg"
						className="-z-[1] h-full w-full object-cover object-center"
						alt="Creon Logo"
						fill
					/>
				</div>
			</div>
			<div className=" flex-1"></div>
		</Container>
	);
};

export default Mission;
