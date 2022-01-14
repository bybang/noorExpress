// const getMessages = (request, response) => {
//   pool.query(
//      "SELECT * FROM messages ORDER BY id DESC LIMIT 10",
//      (error, results) => {
//         if (error) {
//            throw error;
//         }
//         response.status(200).json(results.rows);
//      }
//   );
// };

// router.get("/", (req, res) => {
//   db.query(`SELECT * FROM users;`)
//     .then(data => {
//       const users = data.rows;
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });
// return router;

// const createMessage = (request, response) => {
//   const { text, username } = request.body;
//   pool.query(
//   "INSERT INTO messages (text, username) VALUES ($1, $2) RETURNING text, username, created_at",
//      [text, username],
//      (error, results) => {
//         if (error) {
//            throw error;
//         }
//         response.status(201).send(results.rows);
//         }
//   );
// };

// router.get("/", (req, res) => {
//   db.query(`SELECT * FROM users;`)
//     .then(data => {
//       const users = data.rows;
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });
// return router;

// module.exports = {
//   getMessages,
//   createMessage,
// };

// const express = require('express');
// const router  = express.Router();

// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     db.query(`SELECT * FROM users;`)
//       .then(data => {
//         const users = data.rows;
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };
