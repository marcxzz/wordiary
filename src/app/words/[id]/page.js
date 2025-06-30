import WordCard from "@/components/common/WordCard"
import CardButtons from "@/components/words/CardButtons"
import { getWord } from "@/data/words"
import { notFound } from "next/navigation"

export default async function WordPage({ params }) {
  const id = await params.id
  const result = await getWord(id)

  if (!result || result.length === 0) return notFound()
  const word = result[0]

  return (
    <div>
      <section className="mt-8">
        <WordCard word={word} showDate />
        
        <CardButtons id={id} />
      </section>
    </div>
  )
}
