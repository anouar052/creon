import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	className?: string;
};
const CustomButton = ({ text, className, ...props }: Props) => {
	return (
		<button
			className={cn(
				"group  h-10  gap-4 overflow-hidden  rounded-md border-2 px-8 py-1.5 font-bold transition-all hover:border-brand-blue  hover:bg-brand-blue",
				className,
			)}
			{...props}
		>
			<div className=" flex  flex-col gap-4 transition-all duration-500 group-hover:-translate-y-[62.5%]">
				<span>{text}</span>
				<span>{text}</span>
			</div>
		</button>
	);
};

export default CustomButton;
