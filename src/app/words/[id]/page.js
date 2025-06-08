import WordCard from "@/components/common/WordCard"
import { getWord } from "@/data/words"
import { notFound } from "next/navigation"

export default async function WordPage({ params }) {
  const result = await getWord(params.id)

  if (!result || result.length === 0) {
    return notFound()
  }

  const word = result[0]

  return (
    <div>
      <section className="mt-8">
        <a href={`/words/${word.id}`}>
          <WordCard word={word} showDate />
        </a>
      </section>
    </div>
  )
}
