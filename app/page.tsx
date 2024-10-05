import { Paper } from "@/sanity.types";
import { Cv_entry } from "@/sanity.types";
import { getPapers } from "@/sanity/groq-queries";
import { getCvEntry } from "@/sanity/groq-queries";
import { PortableText, PortableTextComponents } from "next-sanity";

const components : PortableTextComponents = {
	block: {
		normal: ({ children }) => <h1 className="text-lg font-thin leading-7">{ children }</h1>
	},
	marks: {
    link: ({value, children}) => {
      return (
        <a href={value?.href} target='_blank' className="underline">
          {children}
        </a>
      )
    },
  },
}
export default async function Home() {
	const list: Paper[] = await getPapers()
	const cvEntries: Cv_entry[] = await getCvEntry()
	return <h1>Roberto Loss</h1>
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
			{cvEntries && cvEntries.map(entry => entry.content?.map(cvEntry =>
				<PortableText components={components} value={cvEntry}/>
			))}
			<div className="h-20"></div>
			{list && list.map((paper: Paper) => (
				<h1>{paper.title}</h1>
			))}	
    </main>
  );
}
