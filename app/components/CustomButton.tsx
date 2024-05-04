import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	text: string;
	className?: string;
	variant?: "primary" | "secondary";
};
const CustomButton = ({
	variant = "primary",
	text,
	className,
	...props
}: Props) => {
	return (
		<button
			className={cn(
				"group  h-10  gap-4 overflow-hidden  rounded-md  px-8 py-1 font-bold transition-colors hover:bg-brand-blue lg:text-sm",
				className,
				{
					"primary-button": variant === "primary",
					"border-2 hover:border-brand-blue": variant === "secondary",
				},
			)}
			{...props}
		>
			<div className=" flex flex-col gap-3 overflow-hidden pt-1 transition-all duration-500 group-hover:-translate-y-[58%] ">
				<span className="h-full">{text}</span>
				<span className="h-full">{text}</span>
			</div>
		</button>
	);
};

export default CustomButton;
