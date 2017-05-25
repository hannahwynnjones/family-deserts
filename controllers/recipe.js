const Recipe = require('../models/recipe');

function indexRoute(req, res, next) {
  Recipe
    .find()
    .populate('createdBy')
    .then((recipes) => res.json(recipes))
    .catch(next);
}

function createRoute(req, res, next) {
  if(req.file) req.body.image = req.file.filename;
  req.body.createdBy = req.user;
  Recipe
    .create(req.body)
    .then((recipe) => res.status(201).json(recipe))
    .catch(next);
}

function showRoute(req, res, next) {
  Recipe
    .findById(req.params.id)
    .then((recipe) => {
      if(!recipe) return res.notFound();
      res.json(recipe);
    })
    .catch(next);
}

function updateRoute(req, res, next) {

  if(req.file) req.body.image = req.file.filename;
  Recipe
    .findById(req.params.id)
    .exec()
    .then((recipe) => {
      if(!recipe) return res.notFound();

      for(const field in req.body) {
        recipe[field] = req.body[field];
      }

      return recipe.save();
    })
    .then((recipe) => res.json(recipe))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Recipe
    .findById(req.params.id)
    .exec()
    .then((recipe) => {
      if(!recipe) return res.notFound();
      return recipe.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
