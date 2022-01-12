const featuredItems = (db) => {
  return  async (req, res) => {
    try {
      const query = {
        text: `SELECT * FROM public.items WHERE is_featured=$1`,
        values: [true],
      };
      const response = await  db.query(query);
      res.status(200).send(response.rows);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
};

module.exports = featuredItems;
