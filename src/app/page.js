import Flashcard from "@/components/Flashcard"

export default function Home() {
  const headings = ['Daily flashcard', 'Your dictionaries', 'Recent words']
  const cardHeadings = [
    {title: 'IT → EN(US)', nWords: 149},
    {title: 'FR → IT', nWords: 51},
    {title: 'ES → IT', nWords: 94}
  ]
  const recentWords = [
    {word: 'cane', date: 1748874579, lang: 'IT → EN(US)'},
    {word: 'merci', date: 1748537094, lang: 'FR → IT'},
    {word: 'gracias', date: 1748142510, lang: 'ES → IT'}
  ]


  return (
    <>
      {/* <div>Page top</div> */}
      <div>
        <section id="dailyFlashcard">
          <h1>{headings[0]}</h1>

          <Flashcard words={recentWords} />
        </section>

        <section id="yourDictionaries">
          <h1>{headings[1]}</h1>

          <div className="flex flex-row gap-4 overflow-x-auto">
            {cardHeadings.map((item) => {
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
          <h1>{headings[2]}</h1>

          <div className="flex flex-col gap-4 overflow-y-auto">
            {recentWords.map((item, i) => {
              return (
                <div className="card w-full" key={item.date}>
                  <h2 className="font-serif italic">{item.word}</h2>
                  <p className="card-footer mb-2">{item.lang}</p>
                  <p className="card-footer">{new Date(item.date * 1000).toLocaleDateString()}</p>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      <div style={{height: '100px'}}></div>
      {/* <div>Page bottom</div> */}
    </>
  )
}
