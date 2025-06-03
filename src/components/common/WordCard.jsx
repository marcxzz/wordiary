export default function WordCard({ word, showDate }) {
  return (
    <a href={`/words/${word.id}`}>
      <div className="card w-full" key={word.date}>
        <div className="flex flex-row mb-3">
          <p className="card-footer italic text-xs!">#{word.id}</p>
          {showDate ? (
            <p className="card-footer text-xs! ml-auto">{new Date(word.date * 1000).toLocaleDateString()}</p>
          ) : (<></>)}
        </div>
        <div className="flex flex-row columns-2">
          <div className="flex flex-col mr-auto">
            <h2 className="h2 font-serif italic">{word.word}</h2>
            <p className="card-footer">{word.fromLang}</p>
          </div>
          <div className="flex flex-col ml-auto text-right">
            <h2 className="h2 card-footer normal-case! italic text-lg! text-white!">{word.translation}</h2>
            <p className="card-footer">{word.toLang}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
