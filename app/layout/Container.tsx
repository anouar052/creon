import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"section"> & {
	className?: string;
	children: React.ReactNode;
};

const Container = ({ children, className, ...props }: Props) => {
	return (
		<section
			className={cn("min-h-screen w-full px-4 md:px-8 lg:px-[10vw]", className)}
			{...props}
		>
			{children}
		</section>
	);
};

export default Container;
