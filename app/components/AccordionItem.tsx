import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionIcon from "./AccordionIcon";
type Props = {
	item: {
		trigger: string;
		body: string;
		icon: JSX.Element;
	};
	index: number;
};

const AccordionComponent = ({ item, index }: Props) => {
	return (
		<div className="flex w-full  ">
			<AccordionItem
				className="peer flex-[3] border-b-brand-gray"
				value={`item-${index}`}
			>
				<AccordionTrigger className="group">
					<div className="group-has-[data-state=open]:scale-150 flex items-center gap-4">
						<AccordionIcon>{item.icon}</AccordionIcon>
						<p className="text-left text-lg">{item.trigger}</p>
					</div>
				</AccordionTrigger>
				<AccordionContent className="  pl-28">{item.body}</AccordionContent>
			</AccordionItem>
		</div>
	);
};

export default AccordionComponent;
