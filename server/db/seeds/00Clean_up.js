export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('calories').del()
  await knex('schedules').del()
  await knex('users').del()
}
