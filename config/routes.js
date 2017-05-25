const router = require('express').Router();
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');
const imageUpload = require('../lib/imageUpload');
const userController = require('../controllers/user');
const recipeController = require('../controllers/recipe');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/users')
  .get(userController.index); //landing page

router.route('/users/:id')
  .get(userController.show)
  .put(imageUpload, userController.update)
  .delete(secureRoute,userController.delete);

router.route('/recipe')
  .get(recipeController.index)
  .post(secureRoute, imageUpload, recipeController.create);

router.route('/recipe/:id')
  .get(recipeController.show)
  .put(imageUpload, recipeController.update)
  .delete(secureRoute,recipeController.delete);

router.route('/profile')
  .get(secureRoute, userController.profile);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('*'), (req, res) => res.notFound();

module.exports = router;
