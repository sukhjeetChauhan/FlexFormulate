import db from './connections.ts'

export async function getAllUsers() {
  return await db('users').select()
}

export async function addUser(data) {
  await db('users').insert(data)
}
