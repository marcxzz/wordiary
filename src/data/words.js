'use server'

import { neon } from '@neondatabase/serverless'

export async function getWords(direction) {
  if (!direction) direction = 'ASC'

  try {
    const sql = neon(process.env.DATABASE_URL)
    const res = await sql.query(`SELECT * FROM "tblWords" ORDER BY id ${direction}, "creationDate" ${direction}`)
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
  if (!word || !translation || !fromLang || !toLang) return
    
  try {
    const sql = neon(process.env.DATABASE_URL)
    const date = new Date().toISOString().split("T")[0] // Format: YYYY-MM-DD
    const res = await sql.query(`INSERT INTO "tblWords" ("word", "translation", "creationDate", "fromLang", "toLang") VALUES ($1, $2, $3, $4, $5)`, [word, translation, date, fromLang, toLang])
    console.log(res)
    return res
  } catch (err) {
    console.error(err)
    return null
  }
}

// export async function updateWord() {}

// export async function deleteWord() {}