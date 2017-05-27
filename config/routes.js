const router = require('express').Router();
const recipeController = require('../controllers/recipe');
const userController = require('../controllers/user');
const auth = require('../controllers/auth');
const oauth = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');
const imageUpload = require('../lib/imageUpload');


// router.get('/', (req, res) => res.render('statics/index'));

router.route('/users')
  .get(userController.index);

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
  .post(imageUpload, auth.register);

router.route('/login')
  .post(auth.login);

router.route('/oauth/facebook')
.post(oauth.facebook);

router.all('*'), (req, res) => res.notFound();

module.exports = router;
