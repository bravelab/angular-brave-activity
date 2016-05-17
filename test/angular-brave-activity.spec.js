(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name ngBraveActivity
   * @description ngBraveActivity tests
   *
   */
  describe('ngBraveActivity module', function () {

    beforeEach(module('ngBraveActivity'));

    describe('value - version', function () {
      it('should return current version', inject(function (version) {
        expect(version).toEqual('0.0.1');
      }));
    });

  });
})();

