(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .directive('malarkey', malarkeyWrapper);

  /** @ngInject */
  function malarkeyWrapper($log, $timeout) {

    return {
      restrict: 'AE',
      scope: {
        values: '=',
      },
      template: '<div></div>',
      link: function(scope, element, attributes) {
        var typist = malarkey(element[0], {
          typeSpeed: 40,
          deleteSpeed: 40,
          pauseDelay: 800,
          loop: true,
          postfix: ' '
        });

        angular.forEach(scope.values, function(value, index) {
          typist.type(value).pause().delete();
        })

        var timeoutId = $timeout(function() {

        }, 1000);
      }
    };
  }

})();
