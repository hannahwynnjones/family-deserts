angular
  .module('family-deserts')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';

  $authProvider.facebook({
    clientId: '1438994726408286',
    url: '/api/oauth/facebook'
  });

  $authProvider.tokenPrefix = '';
}
