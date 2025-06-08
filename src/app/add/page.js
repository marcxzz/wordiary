'use client'

import { createWord } from "@/data/words"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function AddPage() {
  const [word, setWord] = useState('')
  const [translation, setTranslation] = useState('')
  
  const [fromLang, setFromLang] = useState('default')
  const [toLang, setToLang] = useState('default')

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
  
  const handleBtnClick = async () => {
    if (!(word && translation && fromLang != 'default' && toLang != 'default')) return
    
    const res = await createWord({
      word,
      translation,
      fromLang,
      toLang
    })
    
    if (res) {
      setWord('')
      setTranslation('')
      setFromLang('default')
      setToLang('default')
      
      redirect('/words')

      // return (
      //   <div id="alert" className="flex items-center p-4 mt-8 text-sm rounded-xl text-emerald-800 bg-emerald-200 border border-emerald-500" role="alert">
      //     <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      //       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      //     </svg>
      //     <span className="sr-only">Info</span>
      //     <div>
      //       <span className="font-medium">Success!</span> Word successfully added.
      //     </div>
      //   </div>
      // )
    }
  }

  return (
    <>
      <div className="flex p-1 rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <div className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </div>
        <input type="text" placeholder="Type the original word..." value={word || ''} id="searchBar" className="w-full outline-none dark:text-white text-sm" required maxLength={50} onChange={(event) => handleWordUpdate(event)} />

        <form className="max-w-sm mx-auto">
          <select id="fromLang" value={fromLang || 'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-xl w-auto h-full px-1 dark:bg-gray-700" onChange={(event) => handleFromLangChange(event)}>
            <option value='default' disabled>--</option>
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
        <input type="text" placeholder="Type the translation..." value={translation || ''} id="searchBar" className="w-full outline-none dark:text-white text-sm" required maxLength={50} onChange={(event) => handleTranslationUpdate(event)} />

        <form className="max-w-sm mx-auto">
          <select id="toLang" value={toLang || 'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-xl w-auto h-full px-1 dark:bg-gray-700" onChange={(event) => handleToLangChange(event)}>
            <option value='default' disabled>--</option>
            <option value="enUS">EN (US)</option>
            <option value="enUK">EN (UK)</option>
            <option value="itIT">IT</option>
            <option value="frFR">FR</option>
            <option value="esES">ES</option>
          </select>
        </form>
      </div>

      <button type="button" className="button button-primary w-full mt-8" onClick={() => handleBtnClick()}>
        Add new word
      </button>
    </>
  )
}
