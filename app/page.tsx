import { Paper } from "@/sanity.types";
import { getPapers } from "@/sanity/groq-queries";

export default async function Home() {
	const list: Paper[] = await getPapers()
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
			{list && list.map((paper: Paper) => (
				<h1>{paper.title}</h1>
			))}	
    </main>
  );
}
