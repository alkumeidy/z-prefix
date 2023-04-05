const express = require("express");
const cors = require("cors");
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

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

  app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
  });