const User = require('../models/user');
const Recipe = require('../models/recipe');
const Promise = require('bluebird');

function addIngredientsToUser(req, res) {

  req.body.createdBy = req.user;

  Recipe
  .findById(req.params.id)
  .exec()
  .then((recipe)=>{
    if(!recipe) return res.notFound();
    const baking = User.recipes.create(req.body);
    User.recipes.push(baking); // create an embedded record
    return User.save()
    .then(()=> res.json(recipe));
  });
}

function profileRoute(req, res, next){
  return Promise.props({
    user: User.findById(req.user.id).exec()
  })
  .then((data) => res.json(data))
  .catch(next);
}

function indexRoute(req, res, next) {
  User
    .find()
    .then((users) => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  if(req.file) req.body.image = req.file.filename;
  User
    .findById(req.params.id)
    .then((user) => {
      if(!user) return res.notFound();

      for(const field in req.body) {
        user[field] = req.body[field];
      }

      return user.save();
    })
    .then((user) => res.status(204).json(user))
    .catch(next);
}

function deleteRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then((user) => {
      if(!user) return res.notFound();
      return user.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  profile: profileRoute,
  bakeIt: addIngredientsToUser
};
