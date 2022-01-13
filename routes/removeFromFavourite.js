const removeFromFavourites = (db) => {
  return async (req, res) => {
    try {
      const { userId, itemId } = req.body;
      const query = {
        text: `DELETE FROM public.favourites WHERE user_id=$1 and item_id=$2 RETURNING *`,
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

module.exports = removeFromFavourites;
