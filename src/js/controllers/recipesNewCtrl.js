angular
  .module('family-deserts')
  .controller('recipesNewCtrl', recipesNewCtrl);

recipesNewCtrl.$inject = ['Recipe', '$state'];
function recipesNewCtrl(Recipe, $state){
  const vm = this;
  vm.recipe = {};

  function recipesCreate() {
    if(vm.newForm.$valid) {
      Recipe
        .save(vm.recipe)
        .$promise
        .then(() => $state.go('recipesIndex'));
    }

  }

  vm.create = recipesCreate;
}
