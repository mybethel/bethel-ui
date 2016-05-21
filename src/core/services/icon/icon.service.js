angular.module('bethel.ui.services.icon', [])
.run(['$templateCache', function($templateCache) {

  $templateCache.put('md/arrow_drop_down.svg', require('md-icons/navigation/svg/production/ic_arrow_drop_down_24px.svg'));
  $templateCache.put('md/arrow_drop_up.svg', require('md-icons/navigation/svg/production/ic_arrow_drop_up_24px.svg'));
  $templateCache.put('md/settings.svg', require('md-icons/action/svg/production/ic_settings_24px.svg'));
  $templateCache.put('md/star.svg', require('md-icons/toggle/svg/production/ic_star_24px.svg'));
  $templateCache.put('md/lock.svg', require('md-icons/action/svg/production/ic_lock_24px.svg'));
  $templateCache.put('md/logout.svg', require('md-icons/action/svg/production/ic_exit_to_app_24px.svg'));
  $templateCache.put('md/menu.svg', require('md-icons/navigation/svg/production/ic_menu_24px.svg'));
  $templateCache.put('md/person.svg', require('md-icons/social/svg/production/ic_person_24px.svg'));

}]);
