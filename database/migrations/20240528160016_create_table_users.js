/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.hasTable("users").then(function (exists) {
    if (!exists) {
      return console.log("Table users not found");
    }
    return knex.schema.dropTable("users");
  });
};
