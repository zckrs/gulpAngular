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
      template: '<div class="malarkey"></div>',
      link: function(scope, element, attributes) {
        var timeoutId = $timeout(function() {
          var elem = document.querySelectorAll('.malarkey')[0];
          var opts = {
            typeSpeed: 50,
            deleteSpeed: 50,
            pauseDelay: 2000,
            loop: true,
            postfix: ''
          };
          var typist = malarkey(elem, opts);
          typist.type('Say hello').pause().delete().type('Wave goodbye').pause().delete();
          $log.debug(typist);
        }, 1000);
      }
    };
  }

})();
