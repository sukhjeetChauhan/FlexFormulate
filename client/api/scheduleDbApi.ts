import request from 'superagent'

export async function getScheduleById(id: number) {
  const result = await request.get(`/api/v1/schedules/${id}`)
  return result.body
}
export async function addSchedule(data) {
  await request.post(`/api/v1/schedules`).send(data)
}
