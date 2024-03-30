/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments()
    table.string('name')
    table.integer('age')
    table.integer('weight_kgs')
    table.integer('height_cm')
    table.string('activity_level')
    table.integer('bmr_cals')
    table.string('user_auth')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('users')
}
