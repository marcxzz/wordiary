import Flashcard from "@/components/home/Flashcard"
import { dictionaries, wordsList } from "@/utils/data"

export default function Home() {
  return (
    <>
      {/* <div>Page top</div> */}
      <div>
        <section id="dailyFlashcard">
          <h1>Flashcard</h1>

          <Flashcard words={wordsList} />
        </section>

        <section id="yourDictionaries">
          <h1>Your dictionaries</h1>

          <div className="flex flex-row gap-4 overflow-x-auto">
            {dictionaries.map((item) => {
              return (
                <div className="card" key={item.title}>
                  <h2 className="break-keep whitespace-nowrap">{item.title}</h2>
                  <p className="card-footer">{item.nWords} words</p>
                </div>
              )
            })}
          </div>
        </section>

        <section id="recentWords">
          <h1>Recent words</h1>

          <div className="flex flex-col gap-4 overflow-y-auto">
            {wordsList.map((item) => {
              return (
                <div className="card w-full" key={item.date}>
                  <div className="flex flex-row columns-2">
                    <div className="flex flex-col mr-auto">
                      <h2 className="font-serif italic">{item.word}</h2>
                      <p className="card-footer">{item.fromLang}</p>
                    </div>
                    <div className="flex flex-col ml-auto text-right">
                      <h2 className="card-footer normal-case! italic text-lg!">{item.translation}</h2>
                      <p className="card-footer">{item.toLang}</p>
                    </div>
                  </div>
                  {/* <p className="card-footer text-xs!">{new Date(item.date * 1000).toLocaleDateString()}</p> */}
                </div>
              )
            })}
          </div>
        </section>
      </div>

      {/* <div>Page bottom</div> */}
    </>
  )
}
