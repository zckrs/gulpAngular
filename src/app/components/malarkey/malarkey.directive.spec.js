(function() {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * The `link` function is not tested.
   * (malarkey usage, addClass, $watch, $destroy)
   */
  describe('directive malarkey', function() {
    var $compile;
    var $rootScope;
    var vm;
    var el;

    beforeEach(module('gulpAngular'));
    beforeEach(inject(function(_$compile_, _$rootScope_, _githubContributor_, _$log_, _$q_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      spyOn(_githubContributor_, 'getContributors').and.callFake(function() {
        var deferred = _$q_.defer();
        deferred.resolve([{}, {}, {}, {}, {}, {}]);

        return deferred.promise;
      });

      el = angular.element('<acme-malarkey extra-values="[\'Poney\', \'Monkey\']"></acme-malarkey>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));

      expect(vm.contributors).toEqual(jasmine.any(Array));
      expect(vm.contributors.length).toEqual(6);
    });
  });
})();
