const express = require('express');

const helpers = require('../dbHelpers/usersModels.js');

const usersRoutes = express.Router();

const secured = require('../middleware/secured.js');

//endpoint route handler to get all of the users
usersRoutes.get('/', async (req, res) => {
  try {
    const users = await helpers.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

//endpoint route handler that gets a single user by id
usersRoutes.get('/:id', secured, async (req, res) => {
  try {
    const user = await helpers.getUserById(req.params.id);
    res.status(200).json(user);
  } 
    catch (error) {
    res.status(500).json(error);
  }
});

//endpoint route handler to create a new user
usersRoutes.post('/', async (req, res) => {
  try {
      
      if (req.body.name == null || req.body.password == null || req.body.email == null
          || req.body.phone == null || req.body.country == null || req.body.org_id == null
          || req.body.role_id == null) {
          res.status(400).json({errorMessage: "Please provide information for all of the form fields."});
      } else {
          const user = await helpers.createUser(req.body);
          res.status(201).json(user)
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: "There was an error while saving the user to the database"});
  }
});

usersRoutes.delete('/:id', (req, res) => {
  return helpers.deleteUser(req.params.id)
    .then(count => {
      if (count === 0) {
        res.status(404).json({ message: 'Elisha is working on an amazaing 404 page. In the meantime you get this boring message.'});
      } else {
        res.status(200).json({ message: 'User has been deleted.'});
      }
    })
    .catch(err => res.status(500).json({ message: 'This is embarrassing. Please try to refresh the page and/or Slack us.'}));
});

module.exports = usersRoutes;
