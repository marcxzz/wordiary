'use server'

import { neon } from '@neondatabase/serverless'

export async function getWords() {
  const sql = neon(process.env.DATABASE_URL)
  const res = await sql.query(`SELECT * FROM "tblWords"`)
  return res
}

export async function getWord(id) {
  const sql = neon(process.env.DATABASE_URL)
  const res = await sql.query(`SELECT * FROM "tblWords" WHERE id = $1`, [id])
  return res
}


// export async function createWord() {
//   'use server'
//   // Connect to the Neon database
//   const sql = neon(`${process.env.DATABASE_URL}`)
//   const res = await sql(`INSERT INTO "tblWords" ("word", "translation", "creationDate", "fromLang", "toLang") VALUES ('cane', 'dog', '2025-01-31', 'itIT', 'enUS'),"`)
  
//   return res
// }

// export async function updateWord() {}