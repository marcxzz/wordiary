'use client'

import { useState } from "react"

export default function Flashcard({ words }) {
  // console.log(words);
  
  const generateWord = () => {
    return words[Math.floor(Math.random() * words.length)]
  }
  const updateWord = () => {
    setRandomWord(generateWord())
  }
  const [randomWord, setRandomWord] = useState(generateWord())
  // console.log(randomWord);
  
  return (
    <div className="card shadow-md shadow-gray-700" onClick={updateWord}>
      <h2 className="font-serif italic text-center">{randomWord.word}</h2>
      <p className="card-footer m-0!">{randomWord.lang}</p>
    </div>
  )
}
