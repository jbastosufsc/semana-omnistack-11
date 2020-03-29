const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const logged_ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
      .where('ong_id', logged_ong_id)
      .select('*');

    return response.json(incidents);
  }
};
