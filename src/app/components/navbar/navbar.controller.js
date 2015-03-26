(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController() {
    var vm = this;

    vm.date = new Date();
  }
})();
