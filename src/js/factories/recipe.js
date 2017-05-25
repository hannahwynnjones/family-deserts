angular
  .module('family-deserts')
  .factory('Recipe', Recipe);

Recipe.$inject = ['$resource'];
function Recipe($resource){
  return new $resource('/api/recipes/:id', { id: '@id'},
    { update: { method: 'PUT'}
    });

}
