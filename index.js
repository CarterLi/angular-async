/** UMD **/void function (root, factory) {
/** UMD **/  'use strict';
/** UMD **/  /*global angular: false */
/** UMD **/
/** UMD **/  if (typeof module !== 'undefined' && module.exports) {
/** UMD **/    var ng = typeof angular === 'undefined' ? require('angular') : angular;
/** UMD **/    factory(ng);
/** UMD **/    module.exports = 'angular-async';
/** UMD **/  } else {
/** UMD **/    factory(root.angular);
/** UMD **/  }
/** UMD **/}(new Function('return this')(), function (angular) {

'use strict';

angular.module('angular-async', [])
.factory('$async', function $async($rootScope, $q) {
  return cb => $q((resolve, reject) => cb()
    .then(resolve)
    .catch(reject)
    .then(() => $rootScope.$applyAsync()));
})

/** UMD **/});
