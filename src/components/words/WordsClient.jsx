'use client'

import WordCard from "@/components/common/WordCard"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function WordsClient({ initialWords }) {
  const [words, setWords] = useState(initialWords)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState()
  const [prevSearchQuery, setPrevSearchQuery] = useState('')
  // console.log(words)

  const search = () => {
    // console.log(searchQuery)
    const query = searchQuery.toLowerCase()
    
    if (query != '') {
      const results = words.filter((w) => w.word.toLowerCase().includes(query) || w.translation.toLowerCase().includes(query))
      // console.log('res: ', results)
      
      setPrevSearchQuery(query)
      return setSearchResults(results)
    }
    setSearchResults()
  }

  const handleTyping = (str) => {
    setSearchQuery(str)
  }

  useEffect(() => {
    search()
  }, [searchQuery])

  return (
    <div>
      <div className="flex pr-4 pl-1 py-1 rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <div className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-300">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
          </svg>
        </div>
        <input type="text" placeholder="Search something..." id="searchBar" className="w-full outline-none dark:text-white text-sm" onChange={(e) => handleTyping(e.target.value)} />
      </div>

      <section className="mt-8">
        {!searchResults ? (
          <div className="flex flex-col gap-4">
            {words.map(item => {
              return (
                <a href={`/words/${item.id}`} key={item.id}>
                  <WordCard word={item} showDate />
                </a>
              )
            })}
          </div>
        ) : searchResults.length > 0 ? (
          <>
            <h1 className="h1">{searchResults.length} results for &quot;{prevSearchQuery}&quot;</h1>
            <div className="flex flex-col gap-4">
              {searchResults.map(item => {
                return (
                  <a href={`/words/${item.id}`} key={item.id}>
                    <WordCard word={item} showDate />
                  </a>
                )
              })}
            </div>
          </>
        ) : (
          <>
            <h1 className="h1">No results for &quot;{prevSearchQuery}&quot;</h1>
            <p className="text-gray-400">Can't find the term you are looking for? <Link href="/add" className="text-sky-500 underline">Add it now</Link></p>
          </>
        )}
      </section>
    </div>
  )
}
