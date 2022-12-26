exports.up = function (knex) {
  return knex.schema.createTable("knex_migrations_loc", (table) => {
    table.increments("index").primary();
    table.decimal("is_locked").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("knex_migrations_loc");
};
