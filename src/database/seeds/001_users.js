/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("users").del();
    // Inserts seed entries
    await knex("users").insert([
        { username: "usuario1" },
        { username: "usuario2" },
        { username: "usuario3" },
    ]);
};
