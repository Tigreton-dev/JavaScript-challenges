import ChallengeListModal from "./components/ChallengeListModal/ChallengeListModal"

export default function Home() {

	return (
		<main className="h-[100vh] flex flex-col overflow-hidden">
			<ChallengeListModal openOnRender={true} />
		</main>
	);
}
