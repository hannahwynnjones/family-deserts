const mongoose = require('mongoose');
const s3 = require('../lib/s3');

const recipeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  servings: {type: String},
  ingredients: [{ type: String}],
  steps: [{type: String}],
  time: {type: String, required: true},
  difficulty: {type: Number, required: true},
  image: {type: String},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  createdAt: { type: Date, required: true, default: Date.now }
});

// const ingredientSchema = new mongoose.Schema({
//   name: {type: String, required: true}
// });

recipeSchema.methods.belongsTo = function recipeBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

recipeSchema
  .path('image')
  .set(function getPreviousImage(image){
    this._image = this.image;
    return image;
  });

recipeSchema
    .virtual('imageSRC')
    .get(function getImageSRC() {
      if(!this.image) return null;
      return `https://s3-eu-west-1.amazonaws.com/${process.env.AWS_BUCKET_NAME}/${this.image}`;
    });

recipeSchema.pre('save', function checkPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image }, next);
  }
  next();
});


recipeSchema.pre('remove', function deleteImage(next){
  if (this.image) return s3.deleteObject({Key: this.image}, next);
  next();
});

module.exports = mongoose.model('Recipe', recipeSchema);
