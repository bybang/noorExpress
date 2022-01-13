const addCategories = (db) => {
    return async (req, res) => {
      try {
        const { categoryName } = req.body;
        const query = {
          text: `INSERT INTO public.categories(category_name) VALUES($1) RETURNING *`,
          values: [categoryName],
        };
        const response = await db.query(query);
        res.status(200).send(response.rows);
      } catch (e) {
        console.error(e);
        res.status(500).send(e);
      }
    };
  };
  
  module.exports = addCategories;
  