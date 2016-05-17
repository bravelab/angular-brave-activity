(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [ngBraveActivity]
   * @description Show http errors by angular-activity
   */
  angular
    .module('ngBraveActivity', [])
    .value('version', '0.0.1');

})();

(function () {
  'use strict';

  angular
    .module('ngBraveActivity')
    .directive('activitiesDropdownToggle', function () {

      var link = function ($scope, $element) {
        var ajaxDropdown = null;

        $element.on('click', function () {
          var badge = $(this).find('.badge');

          if (badge.hasClass('bg-color-red')) {
            badge.removeClass('bg-color-red').text(0);
          }

          ajaxDropdown = $(this).next('.ajax-dropdown');

          if (!ajaxDropdown.is(':visible')) {
            ajaxDropdown.fadeIn(150);
            $(this).addClass('active');
          } else {
            ajaxDropdown.fadeOut(150);
            $(this).removeClass('active');
          }

        });

        $(document).mouseup(function (e) {
          if (ajaxDropdown && !ajaxDropdown.is(e.target) && ajaxDropdown.has(e.target).length === 0) {
            ajaxDropdown.fadeOut(150);
            $element.removeClass('active');
          }
        });
      };

      return {
        restrict: 'EA',
        link: link
      };
    });

})();

(function () {
  'use strict';

  angular
    .module('ngBraveActivity')
    .controller('ActivitiesCtrl', function ActivitiesCtrl($scope, $log, activityService) {

      $scope.activeTab = 'default';
      $scope.currentActivityItems = [];

      // Getting different type of activites
      activityService.get(function (data) {
        $scope.activities = data.activities;
      });

      $scope.isActive = function (tab) {
        return $scope.activeTab === tab;
      };

      $scope.setTab = function (activityType) {
        $scope.activeTab = activityType;

        activityService.getbytype(activityType, function (data) {
          $scope.currentActivityItems = data.data;
        });

      };

    });

})();

(function () {
  'use strict';

  angular
    .module('ngBraveActivity')
    .factory('activityService', function ($http, $log, APP_CONFIG) {

      function getActivities(callback) {

        $http.get(APP_CONFIG.apiRootUrl + '/activities/activity.json').success(function (data) {

          callback(data);

        }).error(function () {

          $log.log('Error');
          callback([]);

        });

      }

      function getActivitiesByType(type, callback) {
        $http.get(APP_CONFIG.apiRootUrl + '/activities/activity-' + type + '.json').success(function (data) {
          callback(data);
        }).error(function () {
          $log.log('Error');
          callback([]);
        });
      }

      return {
        get: function (callback) {
          getActivities(callback);
        },
        getbytype: function (type, callback) {
          getActivitiesByType(type, callback);
        }
      };
    });

})();
