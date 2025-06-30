import EditWord from "@/components/words/EditWord"
import { getWord } from "@/data/words"

export default async function EditPage({ params }) {
  const id = await params.id
  const result = await getWord(id)
  
  if (!result || result.length === 0) return notFound()
  const word = result[0]

  return (
    <EditWord fetchedWord={word} id={id} />
  )
}
