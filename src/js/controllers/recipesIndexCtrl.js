angular
  .module('family-deserts')
  .controller( 'recipesIndexCtrl', recipesIndexCtrl);

recipesIndexCtrl.$inject = ['Recipe','User', 'filterFilter', 'orderByFilter', '$scope', '$rootScope'];
function recipesIndexCtrl(Recipe, User, filterFilter, orderByFilter, $scope, $rootScope) {
  const vm = this;
  // vm.user = User.query();
  vm.all = Recipe.query();


  //
  // Recipe.query().$promise.then((recipes) => {
  //   vm.all = recipes;
  //   filterRecipes();
  // });
  //
  //
  // function filterRecipes(){
  //   const params =  { name: vm.q };
  //   if(vm.catagory) params.catagory = vm.catagory;
  //   vm.filtered = filterFilter(vm.all, params);
  //   vm.filtered = orderByFilter(vm.filtered, vm.sort);
  // }
  //
  // $scope.$watchGroup([
  //   ()=> vm.catagory,
  //   ()=> vm.q,
  //   ()=> vm.sort
  // ],filterRecipes);

}
// Recipe is injected from our Factory and makeing a GET request from the API api/recipe to find all the recipes
