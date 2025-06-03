'use client'

import WordCard from "@/components/common/WordCard"
import { wordsList } from "@/utils/data"
import { useParams } from "next/navigation"

export default function WordsPage() {
  const params = useParams()
  const word = wordsList.find((w) => w.id = params.id)

  return (
    <div>
      <section className="mt-8">
        <WordCard word={word} showDate />
      </section>
    </div>
  )
}
