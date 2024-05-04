import { cn } from "@/lib/utils";

type Props = {
	blendMode?: "overlay" | "softlight" | "color";
	className?: string;
};
const GradientOverlay = ({ blendMode = "softlight", className }: Props) => {
	return (
		<div
			aria-hidden
			className={cn(
				"absolute inset-0 z-[2] bg-gradient-to-t from-brand-blueDark to-brand-purpleDark  ",
				className,
				{
					"mix-blend-overlay": blendMode === "overlay",
					"mix-blend-soft-light": blendMode === "softlight",
					"mix-blend-color": blendMode === "color",
				},
			)}
		/>
	);
};

export default GradientOverlay;
