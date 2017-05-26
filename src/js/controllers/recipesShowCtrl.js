angular
  .module('family-deserts')
  .controller('recipesShowCtrl', recipesShowCtrl);

recipesShowCtrl.$inject = ['Recipe', '$stateParams', '$state', '$scope', '$http', '$auth'];
function recipesShowCtrl(Recipe, $stateParams, $state, $scope, $http, $auth){
  const vm = this;
  vm.recipe = Recipe.get($stateParams);


  //===================DELETE Recipe==============

  function recipesDelete() {
    vm.recipe
      .$remove()
      .then(() => $state.go('recipesIndex'));
  }
  vm.delete = recipesDelete;

}
