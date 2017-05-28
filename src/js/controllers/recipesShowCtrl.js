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


//   //=============  Add recipe  ======================
//
//   function toggleBaking() {
//   const index = vm.event.attendee_ids.indexOf(vm.currentUser.id);
//   if (index > -1) {
//     vm.event.attendee_ids.splice(index, 1);
//     vm.event.attendees.splice(index, 1);
//   } else {
//     vm.event.attendee_ids.push(vm.currentUser.id);
//     vm.event.attendees.push(vm.currentUser);
//   }
//   eventsUpdate();
// }
//
// vm.toggleBaking = toggleBaking;
//
// function isBaking() {
//   return $auth.getPayload() && vm.event.$resolved && vm.event.attendee_ids.includes(vm.currentUser.id);
// }
//
// vm.isBaking = isBaking;
// }

}
