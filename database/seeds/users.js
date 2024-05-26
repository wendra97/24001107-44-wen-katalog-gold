/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      name: "Wendra Setiawan",
      email: "wendrasetiawan@katalog.com",
      username: "wendra",
      password: "setiawan",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Kevin Gautama",
      email: "kevingautama@katalog.com",
      username: "kevin",
      password: "gautama",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      name: "Ryan Gunawan",
      email: "ryangunawan@katalog.com",
      username: "ryan",
      password: "gunawan",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
};
