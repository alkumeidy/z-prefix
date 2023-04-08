const express = require("express");
const cors = require("cors");
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

const postNewItem = (item) => {
  return knex("inventory").insert(item);
};

app.get('/inventory', function(req, res) {
    knex
      .select('*')
      .from('inventory')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

  app.get('/inventory/:id', (req, res) => {
    let { inv_id } = req.params;
    console.log(inv_id)
    knex
      .select('*')
      .from('inventory')
      .where({id:inv_id})
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  })

  app.post("/inventory", (req, res) => {
    postNewItem(req.body)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  });

  app.delete("/inventory/:id", (req, res) => {
    knex
      .del()
      .from('inventory')
      .where({id:req.params.id})
      .then(data => res.status(200).json(data))
  })

  app.patch("/inventory/:id", (req, res) => {
    knex
      .del()
      .from('inventory')
      .where({id:req.params.id})
      .then(data => res.status(200).json(data))
  })

  app.get('/users', function(req, res) {
    knex
      .select('*')
      .from('users')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

  const postNewUser = (item) => {
    return knex("users").insert(item);
  };

  app.post("/users", (req, res) => {
    postNewUser(req.body)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.error(err);
        res.send(err);
      });
  });

  app.get('/my-inventory/:id', (req, res) => {
    console.log("req: ", req)
    knex
      .select('*')
      .from('inventory')
      .where({user_id:req.params.id})
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  })

  app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
  });