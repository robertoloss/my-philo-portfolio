import { Paper } from "@/sanity.types";
import { Cv_entry } from "@/sanity.types";
import { getPapers } from "@/sanity/groq-queries";
import { getCvEntry } from "@/sanity/groq-queries";
import { PortableText, PortableTextComponents } from "next-sanity";
import Link from "next/link";

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
	return (
		<div className="flex flex-col w-full gap-y-4 h-screen justify-center items-center text-3xl font-extralight">
			<h1 className="font-semibold text-5xl">Roberto Loss - Philosophy</h1>
			<h1 className="mt-6 text-2xl">🚧 Site under construction 🚧</h1>
			<h1 className="text-lg text-gray-200 mt-10">(you can find my developer website at &nbsp; 
				<Link 
					href="https://robertoloss.netlify.app"
					className="text-blue-400 hover:text-blue-200 transition-all"
				>
					 robertoloss.netlify.app
				</Link>)
			</h1>
		</div>
	)
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
