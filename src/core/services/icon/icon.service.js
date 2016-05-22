import mdIcons from './materialIcons';

angular.module('bethel.ui.services.icon', [])
.value('mdIconSet', mdIcons)
.run(['$templateCache', function($templateCache) {

  angular.forEach(mdIcons, function(value, type) {
    angular.forEach(value, function(icon) {
      $templateCache.put('md/' + icon + '.svg', require('md-icons/' + type + '/svg/production/ic_' + icon + '_24px.svg'));
    });
  });

}]);
