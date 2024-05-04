import Hero from "@/components/Hero";
import CreonPass from "./components/CreonPass";
import Profiting from "./components/Profiting";
import ComingSoon from "./components/ComingSoon";
import HorizontalList from "./components/HorizontalList";
import Mission from "./components/Mission";
export default function Home() {
	return (
		<main>
			<Hero />
			<CreonPass />
			<Profiting />
			<Mission />
			<ComingSoon />
			<HorizontalList />
		</main>
	);
}
