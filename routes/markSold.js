const markSold = (db) => {
    return async (req, res) => {
      try {
        const { itemId } = req.params;
        const query = {
          text: `UPDATE public.items SET is_sold=$1 WHERE id=$2 RETURNING *`,
          values: [true, itemId],
        };
        const response = await db.query(query);
        res.status(200).send(response.rows);
      } catch (e) {
        console.error(e);
        res.status(500).send(e);
      }
    };
  };
  
  module.exports = markSold;
  