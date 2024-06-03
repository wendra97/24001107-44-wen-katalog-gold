/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("catalogues", (table) => {
    table.increments("catalogue_id").primary();
    table.string("name").notNullable();
    table.string("price").notNullable();
    table.string("category").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.hasTable("catalogues").then(function (exists) {
    if (!exists) {
      return console.log("Table users not found");
    }
    return knex.schema.dropTable("catalogues");
  });
};
