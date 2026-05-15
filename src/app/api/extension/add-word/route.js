import { createWord } from "@/data/words"

export async function POST(req) {
  console.log("[API] Received API request", {
    request: req
  })

  const apiKey = req.headers.get("x-api-key")

  if (apiKey !== process.env.EXTENSION_API_KEY) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  const body = await req.json()
  console.log("[API] Request body", body)

  const { word, translation, fromLanguage: fromLang, toLanguage: toLang } = body

  try {
    const res = await createWord({ word, translation, fromLang, toLang })

    res ?
      console.log("[API] Word insertion success", {
        result: res
      })
      : console.log("[API] Word insertion error", {
        result: res
      })
  } catch (error) {
    console.error("[API] Word insertion error", error)

    return Response.json(
      { error: "[API] Error during word insertion" },
      { status: 500 },
    )
  }

  return Response.json(
    {
      success: true
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }
  )
}