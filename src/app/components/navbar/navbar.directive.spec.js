(function() {
  'use strict';

  describe('directive navbar', function() {
    var $compile;
    var $rootScope;
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('gulpAngular'));
    beforeEach(inject(function(_$compile_, _$rootScope_, _$window_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      // spyOn(_$window_, 'moment').and.callThrough();
      // $window = _$window_;

      timeInMs = new Date();
      timeInMs = timeInMs.setHours(timeInMs.getHours() - 24);

      el = angular.element('<acme-navbar creation-date="' + timeInMs + '"></acme-navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
      // ctrl = el.controller('acmeNavbar');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have one isolate scope instanciate', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
      expect(vm.creationDate).toEqual(timeInMs);

      expect(vm.relativeDate).toEqual(jasmine.any(String));
      expect(vm.relativeDate).toEqual('a day ago');
    });

    // it('should call Moment', function() {
    //   console.log($window.moment)
    //   expect($window.moment).toHaveBeenCalled();
    // });
  });
})();
