const knex = require("../database");

module.exports = {
    async index(request, response, next) {
        try {
            const { user_id } = request.query;
            const query = knex("projects");
            user_id
                ? query
                      .where({ user_id })
                      .join("users", "users.id", "=", "projects.user_id")
                      .select("projects.*", "users.username")
                : query;

            const results = await query;
            return response.json(results);
        } catch (error) {
            next(error);
        }
    },
    async create(request, response, next) {
        try {
            const { user_id, tittle } = request.body;
            await knex("projects").insert({ user_id, tittle });
            return response.status(201).send();
        } catch (error) {
            next(error);
        }
    },
    // async update(request, response, next) {
    //     try {
    //         const { username } = request.body;
    //         const { id } = request.params;
    //         await knex("users").update({ username }).where({ id });
    //         return response.send();
    //     } catch (error) {
    //         next(error);
    //     }
    // },
    // async delete(request, response, next) {
    //     try {
    //         const { id } = request.params;
    //         await knex("users").where({ id }).del();
    //         return response.send();
    //     } catch (error) {
    //         next(error);
    //     }
    // },
};
