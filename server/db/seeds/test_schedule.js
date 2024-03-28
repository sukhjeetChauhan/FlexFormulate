/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('schedules').del()
  await knex('schedules').insert([
    {
      id: 1,
      monday: 'chest_lower%20arms',
      tuesday: 'back_upper%20arms',
      wednesday: 'shoulders_neck',
      friday: 'upper%20legs_lower%20legs',
      saturday: 'cardio_waist',
      created_by: 1,
    },
    {
      id: 2,
      monday: 'chest_cardio',
      tuesday: 'back_upper%20arms',
      wednesday: 'shoulders_neck',
      friday: 'upper%20legs_lower%20legs',

      created_by: 2,
    },
    {
      id: 3,
      monday: 'chest_shoulders_neck',
      tuesday: 'back_upper%20arms_lower%20arms',

      thursday: 'upper%20legs_lower%20legs_cardio',

      created_by: 4,
    },
  ])
}
