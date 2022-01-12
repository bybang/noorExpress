const fetchFavourites = (db) => {
  return async (req, res) => {
    try {
      const { userId } = req.params;
      const query = {
        text: `SELECT item_id FROM public.favourites WHERE user_id=$1`,
        values: [userId],
      };
      const response = await db.query(query);
      const data = [];
      for (let i = 0; i < response.rows.length; i++) {
        const { item_id } = response.rows[i];
        const itemQuery = {
          text: `SELECT * FROM public.items where id=$1`,
          values: [item_id],
        };
        const res2 = await db.query(itemQuery);
        data.push(...res2.rows);
      }
      res.status(200).send(data);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
};

module.exports = fetchFavourites;
