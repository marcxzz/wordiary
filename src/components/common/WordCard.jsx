import { languageCodes } from "@/utils/language-codes"

export default function WordCard({ word, showDate, truncate = true }) {
  const fromLangCode = languageCodes[word.fromLang]
  const toLangCode = languageCodes[word.toLang]

  return (
    <div className="card w-full" key={word.creationDate}>
      <div className="flex flex-row mb-3">
        <p className="card-footer italic text-xs!">#{word.id}</p>
        {showDate && (
          <p className="card-footer text-xs! ml-auto">{new Date(Date.parse(word.creationDate)).toLocaleDateString()}</p>
        )}
      </div>
      <div className="flex flex-row columns-2 gap-5">
        <div className="flex flex-col w-1/3 text-left">
          <h2 className="h2 font-serif italic">{word.word}</h2>
          <p className="card-footer mt-auto">{fromLangCode}</p>
        </div>
        <div className="flex flex-col w-2/3 text-right">
          <h2 className={`h2 card-footer normal-case! italic text-lg! text-white! ${truncate && "truncate"}`}>{word.translation}</h2>
          <p className="card-footer mt-auto">{toLangCode}</p>
        </div>
      </div>
    </div>
  )
}
