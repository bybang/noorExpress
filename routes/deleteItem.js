const deleteItem = (db) => {
  return async (req, res) => {
    try {
      const { itemId, userId } = req.params;
      const userQuery = {
        text: `SELECT is_admin FROM public.users WHERE id=$1`,
        values: [userId],
      };
      const res1 = await db.query(userQuery);

      if (!res1.rows[0]?.is_admin) {
        res
          .status(401)
          .send({ message: "User don't have access to delete the item" });
        return;
      }
      const deleteFavQuery = {
        text: `DELETE FROM public.favourites WHERE id=$1`,
        values: [itemId],  
      }

      await db.query(deleteFavQuery);

      const query = {
        text: `DELETE FROM public.items WHERE id=$1 RETURNING *`,
        values: [itemId],
      };

      const response = await db.query(query);
      res.status(200).send(response.rows);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
};

module.exports = deleteItem;
