const fetchCategories = (db) => {
    return async (req, res) => {
      try {
          const query = {
            text: `SELECT * FROM public.categories`,
            values: [],
          };
          const response = await db.query(query);
        res.status(200).send(response.rows);
      } catch (e) {
        console.error(e);
        res.status(500).send(e);
      }
    };
  };
  
  module.exports = fetchCategories;
  