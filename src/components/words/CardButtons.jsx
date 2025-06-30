'use client'

import { deleteWord } from "@/data/words"
import { redirect } from "next/navigation"
import { useState } from "react"

export default function CardButtons({ id }) {
  const [showAlert, setShowAlert] = useState(false)

  const handleDelete = async () => {
    // event.preventDefault()
    if (window.confirm("Are you sure you want to delete this word? This action cannot be undone.")) {
      const res = await deleteWord(id)
      if (res) {
        console.log('Word deleted:', id)
        
        setShowAlert(true)
        setTimeout(() => {
          redirect('/words')
        }, 3000)
      }
    }
  }

  return (
    <>
      <div className="flex flex-row gap-4 mt-4">
        <button className="button button-outline w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 my-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg>
          Edit
        </button>

        <button className="button button-danger w-1/2" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 my-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
          Delete
        </button>
      </div>

      {showAlert && (
        <div className="flex items-center p-4 mt-8 text-sm rounded-2xl bg-red-900/25 text-red-400 border border-red-800" role="alert">
          <svg className="shrink-0 inline w-4 h-4 me-3 my-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Success!</span> Word successfully deleted.
          </div>
        </div>
      )}
    </>
  )
}
