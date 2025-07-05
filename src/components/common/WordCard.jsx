import { languageCodes } from "@/utils/language-codes"

export default function WordCard({ word, showDate }) {
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
      <div className="flex flex-row columns-2 gap-4">
        <div className="flex flex-col w-1/4 text-left">
          <h2 className="h2 font-serif italic">{word.word}</h2>
          <p className="card-footer mt-auto">{fromLangCode}</p>
        </div>
        <div className="flex flex-col w-3/4 text-right">
          <h2 className="h2 card-footer normal-case! italic text-lg! text-white!">{word.translation}</h2>
          <p className="card-footer mt-auto">{toLangCode}</p>
        </div>
      </div>
    </div>
  )
}
