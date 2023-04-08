/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
      {
        "first_name": "John",
        "last_name": "Doe",
        "username": "johndoe",
        "password": "password123"
      },
      {
        "first_name": "Jane",
        "last_name": "Doe",
        "username": "janedoe",
        "password": "qwerty123"
      },
      {
        "first_name": "Bob",
        "last_name": "Smith",
        "username": "bobsmith",
        "password": "ilovepie"
      },
      {
        "first_name": "Alice",
        "last_name": "Jones",
        "username": "alicejones",
        "password": "password123"
      },
      {
        "first_name": "David",
        "last_name": "Lee",
        "username": "davidlee",
        "password": "12345678"
      }
    ]);
};
