import Image from "next/image";
import Container from "../layout/Container";
import CustomAccordion from "./CustomAccordion";

const Mission = () => {
	return (
		<Container className="flex h-auto min-h-[110vh] w-full flex-col gap-8 py-20 md:mt-36  md:flex-row md:gap-4 lg:my-0 ">
			<div className="flex w-fit flex-[1.2] flex-col  ">
				<h3 className="font-title  text-2xl uppercase leading-[1.3] tracking-wide lg:text-3xl ">
					<span>
						Our vision is to support the innovation of AI blockchain projects{" "}
					</span>
					<span className="bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
						{" "}
						while prioritizing communities and democratizing profits
					</span>
				</h3>
				<div
					className="relative hidden flex-1 md:block md:w-3/4 lg:-mr-[20%]  lg:ml-[20%] lg:w-[120%]"
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
			<div className=" z-10 flex-1 -translate-y-6 lg:ml-[10vw] ">
				<CustomAccordion />
			</div>
		</Container>
	);
};

export default Mission;
