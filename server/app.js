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

const editItem = (item) => {
  return knex("inventory").update(item);
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
    knex
      .select('*')
      .from('inventory')
      .where({id:req.params.id})
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


  app.put("/inventory/:id", (req, res) => {
    // console.log(req.body)
    const { id, user_id, item_name, description, quantity} = req.body
    db.select('*')
        .from('inventory')
        .where('id', '=', id)
        .update({user_id:user_id, item_name:item_name, description:description, quantity:quantity})
        .then(data => res.status(200).json('Success'))
        .catch(err => console.log('Error', err));
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