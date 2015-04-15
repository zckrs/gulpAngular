/* global malarkey:false */
(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .directive('acmeMalarkey', malarkeyWrapper);

  /** @ngInject */
  function malarkeyWrapper() {
    var directive = {
      restrict: 'E',
      scope: {
        values: '=',
      },
      template: '<div></div>',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, element) {
      var typist = malarkey(element[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      angular.forEach(scope.values, function(value) {
        typist.type(value).pause().delete();
      });
    }

  }

})();
