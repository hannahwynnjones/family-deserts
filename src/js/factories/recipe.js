angular
  .module('family-deserts')
  .factory('Recipe', Recipe);

Recipe.$inject = ['$resource'];
function Recipe($resource) {
  return new $resource('/api/recipes/:id', { id: '@id' }, {
    'get': {method: 'GET', isArray: true}
  
  });
}
