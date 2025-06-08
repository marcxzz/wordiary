import WordCard from "@/components/common/WordCard"
import Flashcard from "@/components/home/Flashcard"
import { getWords } from "@/data/words"
// import { dictionaries, wordsList } from "@/utils/data"

export default async function Home() {
  const words = await getWords()
  console.log(await words)
  

  return (
    <div>
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
              <WordCard word={item} key={item.id} />
            )
          })}
        </div>
      </section>
    </div>
  )
}
