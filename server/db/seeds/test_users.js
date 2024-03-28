/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'John Keys',
      age: 18,
      weight_kgs: 67,
      height_cm: 168,
      activity_level: '4-5 times',
      bmr_cals: 1635,
    },
    {
      id: 2,
      name: 'Christopher Luxton',
      age: 25,
      weight_kgs: 75,
      height_cm: 180,
      activity_level: '1-3 times',
      bmr_cals: 1755,
    },
    {
      id: 3,
      name: 'Winston Peters',
      age: 33,
      weight_kgs: 85,
      height_cm: 180,
      activity_level: 'no exercise',
      bmr_cals: 1815,
    },
    {
      id: 4,
      name: 'Jacinda Arden',
      age: 18,
      weight_kgs: 60,
      height_cm: 168,
      activity_level: '1-3 times',
      bmr_cals: 1399,
    },
    {
      id: 5,
      name: 'Judith Colins',
      age: 25,
      weight_kgs: 65,
      height_cm: 160,
      activity_level: '1-3 times',
      bmr_cals: 1364,
    },
    {
      id: 6,
      name: 'Helen Clark',
      age: 40,
      weight_kgs: 75,
      height_cm: 175,
      activity_level: 'no exercise',
      bmr_cals: 1438,
    },
  ])
}
