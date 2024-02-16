'use client'
import ProblemList from "./components/navBar/problemListModal";

export default function Home() {

	return (
		<main className="h-[100vh] flex flex-col overflow-hidden">
			<ProblemList openOnRender={true} />
		</main>
	);
}
