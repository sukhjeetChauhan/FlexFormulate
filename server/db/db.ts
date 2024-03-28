import db from './connections.ts'

export async function getAllUsers() {
  return await db('users').select()
}
