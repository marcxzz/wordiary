export const dynamic = 'force-dynamic'

import WordCard from "@/components/common/WordCard"
import Flashcard from "@/components/home/Flashcard"
import { getWords } from "@/data/words"
import Link from "next/link"

export default async function Home() {
  const words = await getWords('DESC')
  const lastWords = words.slice(0, 10) // Get the latest 10 words
  // console.log(await words)

  return (
    <div>
      {words && words.length > 0 ? (
        <>
          <section id="flashcard">
            <Flashcard words={words} />
          </section>
        
          {/* <section id="yourDictionaries">
            <h1 className="h1">Your dictionaries</h1>

            <div className="flex flex-row gap-4 overflow-x-auto">
              {dictionaries.map((item) => {
                return (
                  <div className="card" key={item.title}>
                    <h2 className="h2 break-keep whitespace-nowrap">{item.title}</h2>
                    <p className="card-footer">{item.nWords} words</p>
                  </div>
                )
              })}
            </div>
          </section> */}

          <section id="recentWords">
            <h1 className="h1">Recent words</h1>

            <div className="flex flex-col gap-4 overflow-y-auto">
              {lastWords.map((item) => {
                return (
                  <a href={`/words/${item.id}`} key={item.id}>
                    <WordCard word={item} />
                  </a>
                )
              })}
              <Link href="/words" className="button button-outline">
                See all words
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 my-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 my-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg> */}
              </Link>
            </div>
          </section>
        </>
      ) : (
        <div className="w-full text-center mt-4">
          <h1 className="h1">You have no words saved. <a href="/add" className="link">Add words</a></h1>
        </div>
      )}

    </div>
  )
}
