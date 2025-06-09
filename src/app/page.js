import WordCard from "@/components/common/WordCard"
import Flashcard from "@/components/home/Flashcard"
import { getWords } from "@/data/words"

export default async function Home() {
  const words = await getWords('DESC')
  // console.log(await words)  

  return (
    <div>
      {words && words.length > 0 ? (
        <>
          <section id="dailyFlashcard">
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
              {words.map((item) => {
                return (
                  <a href={`/words/${item.id}`} key={item.id}>
                    <WordCard word={item} />
                  </a>
                )
              })}
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
