angular
  .module('family-deserts')
  .controller('AuthCtrl', AuthCtrl);

AuthCtrl.$inject = ['$auth', '$state'];
function AuthCtrl($auth, $state) {
  const vm = this;
  vm.user = {};
  vm.credentials = {};

  function register() {
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }

  // function register() {
  //   $auth.signup({ user: vm.user })
  //         .$promise
  //         .then(() => $state.go('login'));
  // }

  vm.register = register;

  function submit() {
    $auth.login(vm.credentials)
    .then(() => {
      if($auth.getPayload()) return $state.go('recipesIndex');
      $state.go('login');
    });
  }

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(() => $state.go('recipesIndex'));
  }

  vm.authenticate = authenticate;
  vm.submit = submit;
}
