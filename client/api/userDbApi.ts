import request from 'superagent'

export async function getUsersByAuthApi(authId: string) {
  const result = await request.get(`/api/v1/users/auth/${authId}`)
  return result.body
}
