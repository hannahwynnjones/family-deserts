angular
  .module('family-deserts')
  .controller('recipeEditCtrl', recipeEditCtrl);

recipeEditCtrl.$inject = ['Recipe', '$stateParams', '$state'];
function recipeEditCtrl(Recipe, $stateParams, $state) {
  const vm = this;

  vm.recipe = Recipe.get($stateParams);

  function recipesUpdate() {
    // The vm.recipe gives us the full object user so I had to reassign the createdBy to an single Object.id inorder for the form to work because it only takes a Singledatavalue
    vm.recipe.createdBy = vm.recipe.createdBy.id;

    vm.recipe
      .$update()
      .then(() => $state.go('recipesShow', $stateParams));
  }

  vm.update = recipesUpdate;
}
