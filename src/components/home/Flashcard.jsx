'use client'

import { languageCodes } from "@/utils/language-codes"
import { useEffect, useState } from "react"

export default function Flashcard({ words }) {

  // console.log(words);
  const [randomWord, setRandomWord] = useState('')
  const [prevIndex, setPrevIndex] = useState(-1)
  
  const generateWord = () => {
    if (words.length < 2) return words[0]

    const w = words[Math.floor(Math.random() * words.length)]
    const index = words.findIndex(i => i == w)
    // console.log(prevIndex, index)

    if (index == prevIndex) return generateWord()
    
    setPrevIndex(index)
    return w
  }
  const updateWord = () => setRandomWord(generateWord())
  const fromLangCode = languageCodes[randomWord.fromLang]
  const toLangCode = languageCodes[randomWord.toLang]
  
  useEffect(() => {
    updateWord()
  }, [])
  
  return (
    <>
      {randomWord && (
        <div className="card p-2!">
          <div className="p-2">
            <h2 className="h2 font-serif italic text-center text-xl!">{randomWord.word}</h2>
            <p className="card-footer normal-case! font-sans text-center text-lg!">{randomWord.translation}</p>
          </div>
          
          <div className="flex mt-4 items-end">
            <p className="card-footer h-fit! pl-2 pb-2">{fromLangCode} → {toLangCode}</p>
            <div className="ml-auto flex row gap-1">
              <div className="p-2 rounded-xl hover:bg-gray-600 active:bg-gray-500 cursor-pointer h-fit! apply-transition">
                <div onClick={updateWord}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
              </div>
              <div className="p-2 rounded-xl hover:bg-gray-600 active:bg-gray-500 cursor-pointer h-fit apply-transition">
                <a href={`/words/${randomWord.id}`}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
