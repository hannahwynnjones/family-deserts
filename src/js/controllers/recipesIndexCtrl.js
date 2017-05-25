angular
  .module('family-deserts')
  .controller( 'recipieIndexCtrl', recipieIndexCtrl);

recipieIndexCtrl.$inject = ['Recipe','User', 'filterFilter', 'orderByFilter', '$scope', '$rootScope'];
function recipieIndexCtrl(Recipe, User, filterFilter, orderByFilter, $scope, $rootScope) {
  const vm = this;
  vm.all = Recipe.query();


  //
  // Recipe.query().$promise.then((recipies) => {
  //   vm.all = recipies;
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
// Recipe is injected from our Factory and makeing a GET request from the API api/recipie to find all the recipies
