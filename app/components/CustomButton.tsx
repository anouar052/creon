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
				"group  h-10  gap-4 overflow-hidden  rounded-md border-2 px-8 py-1 font-bold transition-all hover:border-brand-blue  hover:bg-brand-blue lg:text-sm",
				className,
			)}
			{...props}
		>
			<div className=" flex flex-col gap-2 overflow-hidden pt-1 transition-all duration-500 group-hover:-translate-y-1/2 ">
				<span className="h-full">{text}</span>
				<span className="h-full">{text}</span>
			</div>
		</button>
	);
};

export default CustomButton;
