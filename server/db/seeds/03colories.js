/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex('calories').del()
  await knex('calories').insert([
    {
      id: 1,
      user_id: 2,
      totalCalories: 2000,
      protien_percentage: 40,
      fat_percentage: 30,
      carbs_percentage: 40,
      created_at: 1711581923,
    },
    {
      id: 2,
      user_id: 4,
      totalCalories: 1800,
      protien_percentage: 40,
      fat_percentage: 40,
      carbs_percentage: 30,
      created_at: 1711581923,
    },
    {
      id: 3,
      user_id: 5,
      totalCalories: 1600,
      protien_percentage: 50,
      fat_percentage: 30,
      carbs_percentage: 20,
      created_at: 1711581923,
    },
    {
      id: 4,
      user_id: 1,
      totalCalories: 2000,
      protien_percentage: 40,
      fat_percentage: 30,
      carbs_percentage: 40,
      created_at: 1711581923,
    },
  ])
}
