import { cn } from "@/lib/utils";

const Container = ({
	children,
	className,
}: { className?: string; children: React.ReactNode }) => {
	return (
		<section
			className={cn(
				"h-screen w-full px-4 md:px-8 lg:px-24 xl:px-44",
				className,
			)}
		>
			{children}
		</section>
	);
};

export default Container;
