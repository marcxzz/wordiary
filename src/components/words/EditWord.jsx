'use client'

import AlertSuccess from "@/components/common/alerts/AlertSuccess"
import { updateWord } from "@/data/words"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function EditWord({ fetchedWord, id }) {  
  const [word, setWord] = useState(fetchedWord?.word || '')
  const [translation, setTranslation] = useState(fetchedWord?.translation || '')

  const [fromLang, setFromLang] = useState(fetchedWord?.fromLang || 'default')
  const [toLang, setToLang] = useState(fetchedWord?.toLang || 'default')

  const [showSuccess, setShowSuccess] = useState(false)

  const handleWordUpdate = (e) => {
    const word = e.target.value
    setWord(word)
  }

  const handleTranslationUpdate = (e) => {
    const translation = e.target.value
    setTranslation(translation)
  }

  const handleFromLangChange = (e) => {
    const fromLang = e.target.value
    setFromLang(fromLang)
  }

  const handleToLangChange = (e) => {
    const toLang = e.target.value
    setToLang(toLang)
  }
  
  const handleEditBtnClick = async () => {    
    if (!word || !translation || fromLang == 'default' || toLang == 'default') return
    
    const res = await updateWord(
      id,
      word,
      translation,
      fromLang,
      toLang
    )
    // console.log('res', res)
    
    if (res) {
      setShowSuccess(true)
      setTimeout(() => {
        redirect(`/words/${id}`)
        setShowSuccess(false)
      }, 3000)
    }
  }

  return (
    <>
      <h1 className="h1">Edit word</h1>

      <div className="flex p-1 rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <div className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </div>
        <input type="text" placeholder="Type the original word..." value={word || ''} id="wordInput" className="w-full outline-none dark:text-white text-sm" required maxLength={50} onChange={(event) => handleWordUpdate(event)} />

        <form className="max-w-sm mx-auto">
          <select id="fromLangSelect" value={fromLang || 'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-xl w-auto h-full px-1 dark:bg-gray-700" onChange={(event) => handleFromLangChange(event)}>
            <option value='default' disabled>From</option>
            <option value="enUS">EN (US)</option>
            <option value="enUK">EN (UK)</option>
            <option value="itIT">IT</option>
            <option value="frFR">FR</option>
            <option value="esES">ES</option>
          </select>
        </form>
      </div>

      <div className="flex p-1 mt-2 rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <div className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
        </div>
        <input type="text" placeholder="Type the translation..." value={translation || ''} id="translationInput" className="w-full outline-none dark:text-white text-sm" required maxLength={50} onChange={(event) => handleTranslationUpdate(event)} />

        <form className="max-w-sm mx-auto">
          <select id="toLangSelect" value={toLang || 'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-xl w-auto h-full px-1 dark:bg-gray-700" onChange={(event) => handleToLangChange(event)}>
            <option value='default' disabled>To</option>
            <option value="enUS">EN (US)</option>
            <option value="enUK">EN (UK)</option>
            <option value="itIT">IT</option>
            <option value="frFR">FR</option>
            <option value="esES">ES</option>
          </select>
        </form>
      </div>

      <button type="button" className="button button-primary w-full mt-4" onClick={() => handleEditBtnClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>

        Edit word
      </button>

      {showSuccess && (
        <AlertSuccess message="Word successfully edited." showLink={false} />
      )}
    </>
  )
}
