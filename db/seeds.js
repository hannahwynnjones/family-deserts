const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const User = require('../models/user');
const Recipe = require('../models/recipe');
User.collection.drop();
Recipe.collection.drop();

User
  .create([{

    username: 'Hannah',
    password: 'p',
    email: 'h@h',
    location: 'London',
    // profileImage: '/images/seed-pics/red.jpg',
    passwordConfirmation: 'p'

  }])

  .then((users) => {
    console.log(`${users.length} users created!`);

    return Recipe.create([{
      createdBy: users[0],
      name: 'Apple Pie',
      description: 'apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.',
      ingredients: [
        'aples',
        'pastry',
        'pie'
      ],
      steps: [
        'make apples sauce',
        'make pastry',
        'cook'
      ],
      time: '60 minutes',
      difficulty: 2,
      image: 'https://images-gmi-pmc.edge-generalmills.com/3efa9ab7-0db5-4220-a6f8-2d4ea0f8fb72.jpg'
    }, {
      createdBy: users[0],
      name: 'Cherry Pie',
      description: 'cherry pie description.  cherry pie description.  cherry pie description.  cherry pie description.  cherry pie description.  cherry pie description.  cherry pie description.',
      ingredients: [
        'aples',
        'pastry',
        'pie'
      ],
      steps: [
        'make apples sauce',
        'make pastry',
        'cook'
      ],
      time: '60 minutes',
      difficulty: 2,
      image: 'https://images-gmi-pmc.edge-generalmills.com/3efa9ab7-0db5-4220-a6f8-2d4ea0f8fb72.jpg'
    }, {
      createdBy: users[0],
      name: 'Apple Pie',
      description: 'apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.',
      ingredients: [
        'aples',
        'pastry',
        'pie'
      ],
      steps: [
        'make apples sauce',
        'make pastry',
        'cook'
      ],
      time: '60 minutes',
      difficulty: 2,
      image: 'https://images-gmi-pmc.edge-generalmills.com/3efa9ab7-0db5-4220-a6f8-2d4ea0f8fb72.jpg'
    }, {
      createdBy: users[0],
      name: 'Apple Pie',
      description: 'apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.',
      ingredients: [
        'aples',
        'pastry',
        'pie'
      ],
      steps: [
        'make apples sauce',
        'make pastry',
        'cook'
      ],
      time: '60 minutes',
      difficulty: 2,
      image: 'https://images-gmi-pmc.edge-generalmills.com/3efa9ab7-0db5-4220-a6f8-2d4ea0f8fb72.jpg'
    }, {
      createdBy: users[0],
      name: 'Apple Pie',
      description: 'apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.',
      ingredients: [
        'aples',
        'pastry',
        'pie'
      ],
      steps: [
        'make apples sauce',
        'make pastry',
        'cook'
      ],
      time: '60 minutes',
      difficulty: 2,
      image: 'https://images-gmi-pmc.edge-generalmills.com/3efa9ab7-0db5-4220-a6f8-2d4ea0f8fb72.jpg'
    }, {
      createdBy: users[0],
      name: 'Apple Pie',
      description: 'apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.  apple pie description.',
      ingredients: [
        'aples',
        'pastry',
        'pie'
      ],
      steps: [
        'make apples sauce',
        'make pastry',
        'cook'
      ],
      time: '60 minutes',
      difficulty: 2,
      image: 'https://images-gmi-pmc.edge-generalmills.com/3efa9ab7-0db5-4220-a6f8-2d4ea0f8fb72.jpg'

    }])

    .then((recipes) => {
      console.log(`${recipes.length} recipes created!`);
    });
  })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
