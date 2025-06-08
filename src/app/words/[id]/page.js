'use client'

import WordCard from "@/components/common/WordCard"
// import getWord from "@/data/words"
import { wordsList } from "@/utils/data"
import { useParams } from "next/navigation"

export default async function WordsPage() {
  const params = useParams()
  const word = wordsList.find((w) => w.id = params.id)
  // const word = await getWord(params.id)

  return (
    <div>
      <section className="mt-8">
        <WordCard word={word} showDate />
      </section>
    </div>
  )
}
