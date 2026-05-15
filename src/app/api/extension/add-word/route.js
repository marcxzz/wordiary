import { createWord } from "@/data/words"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-api-key",
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  })
}

export async function POST(req) {
  console.log("[API] Received API request", {
    request: req
  })

  const apiKey = req.headers.get("x-api-key")

  if (apiKey !== process.env.EXTENSION_API_KEY) {
    return Response.json({
      error: "Unauthorized"
    }, {
      status: 401,
      headers: corsHeaders,
    })
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

    return Response.json({
      success: true,
      result: res
    }, {
      headers: corsHeaders,
    })

  } catch (error) {
    console.error("[API] Word insertion error", error)

    return Response.json({
      error: "Error during word insertion"
    }, {
      status: 500,
      headers: corsHeaders,
    })
  }
}