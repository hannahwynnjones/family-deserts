angular
  .module('family-deserts')
  .controller('recipeShowCtrl', recipeShowCtrl);

recipeShowCtrl.$inject = ['Recipe', '$stateParams', '$state', '$scope', '$http', '$auth'];
function recipeShowCtrl(Recipe, $stateParams, $state, $scope, $http, $auth){
  const vm = this;
  vm.recipe = Recipe.get($stateParams);


  Recipe.get($stateParams,(data)=>{
    vm.recipe = data;
  });


  //===================DELETE Recipe==============

  function recipesDelete() {
    vm.recipe
      .$remove()
      .then(() => $state.go('recipesIndex'));
  }
  vm.delete = recipesDelete;

}
