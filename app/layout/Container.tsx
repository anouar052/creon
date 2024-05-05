import { cn } from "@/lib/utils";

const Container = ({
	children,
	className,
}: { className?: string; children: React.ReactNode }) => {
	return (
		<section
			className={cn("min-h-screen w-full px-4 md:px-8 lg:px-[10vw]", className)}
		>
			{children}
		</section>
	);
};

export default Container;
