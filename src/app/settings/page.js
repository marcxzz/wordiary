'use client'

import { useEffect, useState } from "react"

export default function SettingsPage() {
  // TODO: CHANGE NAMES 'from' AND 'to'
  const [defaultFromLanguage, setDefaultFromLanguage] = useState('default')
  const [defaultToLanguage, setDefaultToLanguage] = useState('default')
  
  useEffect(() => {
    const storedFromLang = localStorage.getItem('defaultFromLanguage') || 'default'
    const storedToLang = localStorage.getItem('defaultToLanguage') || 'default'

    if (storedFromLang) setDefaultFromLanguage(storedFromLang)
    if (storedToLang) setDefaultToLanguage(storedToLang)
  }, [])

  const handleDefaultFromLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    setDefaultFromLanguage(selectedLanguage)
    localStorage.setItem('defaultFromLanguage', selectedLanguage)
  }

  const handleDefaultToLanguageChange = (e) => {
    const selectedLanguage = e.target.value
    setDefaultToLanguage(selectedLanguage)
    localStorage.setItem('defaultToLanguage', selectedLanguage)
  }

  return (
    <div>
      <h1 className="h1">Settings</h1>

      <section>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg> */}
        <h2 className="h2">Languages</h2>
        <p className="text-gray-500">Set your default languages for adding new words.</p>
        
        <div className="mt-6 flex flex-row items-center justify-between">
          <label htmlFor="defaultLanguage" className="block text-md font-medium text-gray-400">Default from language</label>
          <form className="max-w-sm">
            <select id="defaultLanguage" value={defaultFromLanguage || 'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-2xl w-auto h-full p-2 dark:bg-gray-700" onChange={(e) => handleDefaultFromLanguageChange(e)}>
              <option value='default' disabled>From</option>
              <option value="enUS">EN (US)</option>
              <option value="enUK">EN (UK)</option>
              <option value="itIT">IT</option>
              <option value="frFR">FR</option>
              <option value="esES">ES</option>
            </select>
          </form>
        </div>
        
        <div className="mt-4 flex flex-row items-center justify-between">
          <label htmlFor="defaultLanguage" className="block text-md font-medium text-gray-400">Default to language</label>
          <form className="max-w-sm">
            <select id="defaultLanguage" value={defaultToLanguage || 'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-2xl w-auto h-full p-2 dark:bg-gray-700" onChange={(e) => handleDefaultToLanguageChange(e)}>
              <option value='default' disabled>To</option>
              <option value="enUS">EN (US)</option>
              <option value="enUK">EN (UK)</option>
              <option value="itIT">IT</option>
              <option value="frFR">FR</option>
              <option value="esES">ES</option>
            </select>
          </form>
        </div>
      </section>
    </div>
  )
}
