import { getWords } from "@/data/words"
import WordsClient from "@/components/words/WordsClient"

export default async function WordsPage() {
  const words = await getWords('DESC')

  return (
    <div>
      <WordsClient initialWords={words} />
    </div>
  )
}
