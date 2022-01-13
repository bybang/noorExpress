const filterByPrice = (db) => {
  return async (req, res) => {
    try {
      const { highToLow } = req.params;
      // console.log("Filterriny by Price", highToLow, typeof highToLow);
      let text = `SELECT * FROM public.items ORDER BY price `;
      if (highToLow == 1) {
        text = `${text}DESC`;
      } else {
        text = `${text}ASC`;
      }
      const query = {
        text,
      };
      const response = await db.query(query);
      res.status(200).send(response.rows);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
};

module.exports = filterByPrice;
