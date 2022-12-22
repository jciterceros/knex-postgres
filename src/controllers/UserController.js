const knex = require("../database");

module.exports = {
  async index(request, response, next) {
    try {
      const { id } = request.query;
      const query = knex("users");
      id ? query.where({ id }) : query;

      const results = await query;
      return response.json(results);
    } catch (error) {
      next(error);
    }
  },
  async create(request, response, next) {
    try {
      const { username } = request.body;
      await knex("users").insert({ username });
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(request, response, next) {
    try {
      const { username } = request.body;
      const { id } = request.params;
      await knex("users").update({ username }).where({ id });
      return response.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(request, response, next) {
    try {
      const { id } = request.params;
      await knex("users").where({ id }).del();
      return response.send();
    } catch (error) {
      next(error);
    }
  },
};
