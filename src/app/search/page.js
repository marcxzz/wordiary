'use client'

import { wordsList } from "@/utils/data"
import { useState } from "react"

export default function Search() {
  // console.log(wordsList)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState()
  const [prevSearchQuery, setPrevSearchQuery] = useState('')

  const search = () => {
    setSearchQuery(document.getElementById('searchBar').value)
    // console.log(searchQuery)
    
    if (searchQuery != '') {
      const results = wordsList.filter((w) => w.word.includes(searchQuery))
      // console.log('res: ', results)
      setPrevSearchQuery(searchQuery)
      return setSearchResults(results)
    }
    setSearchResults([])
  }

  const handleTyping = (str) => {
    setSearchQuery(str)
  }

  return (
    <div>
      <div className="flex pl-4 pr-1 py-1 rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <input type="text" placeholder="Search something..." id="searchBar" className="w-full outline-none dark:text-white text-sm" onChange={(e) => handleTyping(e.target.value)} />
        <button type="submit" className="p-2 rounded-xl hover:bg-gray-600 active:bg-gray-500" onClick={search}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 fill-white">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <section className="mt-8">
        {!searchResults ? (
          <></>
        ) : searchResults.length > 0 ? (
          <>
            <h1>{searchResults.length} results for "{prevSearchQuery}"</h1>
            <div className="flex flex-col gap-4">
              {searchResults.map(item => {
                return (
                  <a href={`/words/${item.id}`} key={item.id}>
                    <div className="card w-full">
                      <h2 className="font-serif italic">{item.word} <span className="card-footer not-italic! font-sans ml-4 mb-3">{item.fromLang} → {item.toLang}</span></h2>
                      <p className="card-footer mb-3 normal-case!">{item.translation}</p>
                      <p className="card-footer">{new Date(item.date * 1000).toLocaleDateString()}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </>
        ) : (
          <p>No results for "{prevSearchQuery}"</p>
        )}
      </section>
    </div>
  )
}
