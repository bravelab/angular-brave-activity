(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name app [ngBraveActivity]
   * @description Show http errors by angular-activity
   */
  angular
    .module('ngBraveActivity', [])
    .value('version', '0.0.1')
    .constant('activitiesConfig', {
      templates: {
        activities: 'bower_components/angular-brave-activity/src/app/activities.html'
      }
    })

})();
