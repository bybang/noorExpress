const addToFavourites = (db) => {
  return async (req, res) => {
    try {
      const { userId, itemId } = req.body;
      const query = {
        text: `INSERT INTO public.favourites(user_id, item_id) VALUES($1, $2) RETURNING *`,
        values: [userId, itemId],
      };
      const response = await db.query(query);
      res.status(200).send(response.rows);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
};

module.exports = addToFavourites;
