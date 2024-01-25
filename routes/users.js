var express = require('express');
var router = express.Router();

let users = { items: [] }

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(users);
});

router.post('/', (req, res) => {
  users.items.push(req.body)
  res.send('Ok!');
});

router.delete('/:email', (req, res) => {
  users = { items: users.items.filter(x => x.email !== req.params.email) }
  res.json(users);
});

module.exports = router;