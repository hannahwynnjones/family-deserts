angular
  .module('family-deserts')
  .factory('Recipe', Recipe);

// Recipe.$inject = ['$resource'];
// function Recipe($resource) {
//   return new $resource('/api/recipes/:id', { id: '@id' }, {
//     'get': {method: 'GET', isArray: true}
//   });
// }
//
// Recipe.$inject = ['$resource'];
// function Recipe($resource){
//   return new $resource('/api/recipes/:id', { id: '@id'}, {
//     'get': { method: 'GET' },
//
//     'update': { method: 'PUT' }
//   });
// }


Recipe.$inject = ['$resource'];
function Recipe($resource) {
  return new $resource('/api/recipe/:id', { id: '@id' }, {
    'update': { method: 'PUT' }
  });
}
