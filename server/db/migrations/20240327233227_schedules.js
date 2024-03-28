/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('schedules', function (table) {
    table.increments()
    table.string('monday')
    table.string('tuesday')
    table.string('wednesday')
    table.string('thursday')
    table.string('friday')
    table.string('saturday')
    table.string('sunday')
    table.integer('created_by').references('users.id').onDelete('CASCADE')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('schedules')
}
