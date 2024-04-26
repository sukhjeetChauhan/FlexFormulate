import db from './connections.ts'

export async function getAllUsers() {
  return await db('users').select()
}

export async function addUser(data: any) {
  await db('users').insert(data)
}

export async function getUserById(id: number) {
  return await db('users').where({ id }).select()
}

export async function updateUserById(id: number, data: any) {
  await db('users').update(data).where({ id })
}

export async function delUserById(id: number) {
  await db('users').del().where({ id })
}

export async function getAllSchedules() {
  return await db('schedules').select()
}

export async function addSchedule(data: any) {
  await db('schedules').insert(data)
}

export async function getScheduleByUserId(id: number) {
  return await db('schedules').where('created_by', id).select().first()
}

export async function updateScheduleById(id: number, data: any) {
  await db('schedules').update(data).where({ id })
}

export async function delScheduleById(id: number) {
  await db('schedules').del().where({ id })
}

export async function getAllCalories() {
  return await db('calories').select()
}

export async function addCalories(data: any) {
  await db('calories').insert(data)
}

export async function getCaloriesById(id: number) {
  return await db('calories').where({ id }).select()
}

export async function updateCaloriesById(id: number, data: any) {
  await db('calories').update(data).where({ id })
}

export async function delCaloriesById(id: number) {
  await db('calories').del().where({ id })
}
