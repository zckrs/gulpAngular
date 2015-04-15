/* global malarkey:false */
(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey() {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '=',
      },
      template: '<div></div>',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      var concatedValue = vm.values.concat(scope.extraValues);

      angular.forEach(concatedValue, function(value) {
        typist.type(value).pause().delete();
      });
    }

  }

  /** @ngInject */
  function MalarkeyController() {
    var vm = this;

    // Fetch top 10 contributors of generator-gulp-angular
    vm.values = ['swiip!', 'zckrs', '....'];
  }

})();
