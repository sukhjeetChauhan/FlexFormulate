import db from './connections.ts'

export async function getUsersByAuth(authId: string) {
  return await db('users').where('user_auth', authId).select()
}
