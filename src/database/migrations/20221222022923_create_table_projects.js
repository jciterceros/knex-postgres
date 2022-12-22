/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
    knex.schema.createTable("projects", (table) => {
        table.increments("id").primary();
        table
            .integer("user_id")
            .references("users.id")
            .notNullable()
            .onDelete("CASCADE");
        table.text("tittle");
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("projects");
