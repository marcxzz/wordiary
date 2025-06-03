'use client'

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
  
  useEffect(() => {
    updateWord()
  }, [])
  
  return (
    <div className="card shadow-md shadow-gray-700" onClick={updateWord}>
      <h2 className="h2 font-serif italic text-center text-xl!">{randomWord.word}</h2>
      <p className="card-footer normal-case! font-sans text-center text-lg!">{randomWord.translation}</p>
      <p className="card-footer m-0!">{randomWord.fromLang} → {randomWord.toLang}</p>
    </div>
  )
}
