angular
  .module('family-deserts')
  .controller('recipesShowCtrl', recipesShowCtrl);

recipesShowCtrl.$inject = ['Recipe', '$stateParams', '$state'];
function recipesShowCtrl(Recipe, $stateParams, $state){
  const vm = this;
  vm.recipe = Recipe.get($stateParams);
  console.log(vm.recipe, 'vm.recipe');
  //===================DELETE Recipe==============

  function recipesDelete() {
    vm.recipe
      .$remove()
      .then(() => $state.go('recipesIndex'));
  }
  vm.delete = recipesDelete;

}
