const addItems = (db) => {
  return async (req, res) => {
    console.log("Request in controller");
    try {
      const {
        userId,
        categoryId,
        price,
        name,
        image,
        description,
        stock,
        isSold,
        isFeatured,
        isAdmin,
      } = req.body;
      // If user is not admin, he cannot add item
      if (!isAdmin) {
        res
          .status(401)
          .send({ message: "User don't have access to add items" });
        return;
      }
      const query = {
        text: `INSERT INTO public.items(category_id, user_id, price, "name", image, create_date, description, stock, is_sold, is_featured) 
               VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
        values: [
          categoryId,
          userId,
          price,
          name,
          image,
          (new Date()),
          description,
          stock,
          isSold,
          isFeatured,
        ],
      };
      const response = await db.query(query);
      res.status(200).send(response.rows);
    } catch (e) {
      console.error(e);
      res.status(500).send(e);
    }
  };
};

module.exports = addItems;
