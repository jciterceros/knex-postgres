# npm i knex pg express nodemon

# npx knex init

# knex migrate:make migration_name

    npx knex migrate:make create_table_users

# npx knex migrate:latest

# npx knex seed:make seed_name

    npx knex seed:make 001_users
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
    npx knex seed:run

# migrate:latest seed:run
