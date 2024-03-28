/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('calories', function (table) {
    table.increments()
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.integer('totalCalories')
    table.integer('protien_percentage')
    table.integer('fat_percentage')
    table.integer('carbs_percentage')
    table.timestamps('created_at')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('calories')
}
