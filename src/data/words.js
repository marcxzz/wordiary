'use server'

import { neon } from '@neondatabase/serverless'

export async function getWords(direction) {
  if (!direction) direction = 'ASC'

  try {
    const sql = neon(process.env.DATABASE_URL)
    const res = await sql.query(`SELECT * FROM "tblWords" ORDER BY "id" ${direction}, "creationDate" ${direction}`)
    console.log(res)
    return res
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function getWord(id) {
  if (!id) return

  try {
    const sql = neon(process.env.DATABASE_URL)
    const res = await sql.query(`SELECT * FROM "tblWords" WHERE id = $1`, [id])
    console.log(res)
    return res
  } catch (err) {
    console.error(err)
    return null
  }
}


export async function createWord({ word, translation, fromLang, toLang }) {
  // console.log('DB URL:', process.env.DATABASE_URL)
  // if (!word || !translation || !fromLang || !toLang) return
    
  const date = new Date().toISOString().split("T")[0] // Format: YYYY-MM-DD
  console.log('data:', word, translation, fromLang, toLang, date)

  try {
    const sql = neon(`${process.env.DATABASE_URL}`)
    const res = await sql.query(`INSERT INTO "tblWords" ("word", "translation", "creationDate", "fromLang", "toLang") VALUES ($1, $2, $3, $4, $5) RETURNING *`, [word, translation, date, fromLang, toLang])
    console.log(res)
    return res
  } catch (err) {
    console.error(err)
    return null
  }
}

export async function importWords(words) {
  if (!Array.isArray(words) || words.length === 0) return null

  const sql = neon(process.env.DATABASE_URL)
  const date = new Date().toISOString().split("T")[0]

  const values = []
  const placeholders = words.map((wordObj, index) => {
    const base = index * 5
    values.push(
      wordObj.word,
      wordObj.translation,
      date,
      wordObj.fromLang,
      wordObj.toLang
    )
    return `($${base + 1}, $${base + 2}, $${base + 3}, $${base + 4}, $${base + 5})`
  }).join(', ')

  const query = `
    INSERT INTO "tblWords" 
    ("word", "translation", "creationDate", "fromLang", "toLang")
    VALUES ${placeholders}
    RETURNING *;
  `

  try {
    const res = await sql.query(query, values)
    console.log(res)
    return res
  } catch (err) {
    console.error(err)
    return null
  }
}

// export async function updateWord() {}

// export async function deleteWord() {}