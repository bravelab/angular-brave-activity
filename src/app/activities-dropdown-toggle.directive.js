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
