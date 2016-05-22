import './style/importer.scss';
import '../components';
import './services';

angular.module('bethel.ui', [
  'ngMaterial',
  'bethel.ui.components',
  'bethel.ui.services'
])
.config(['$mdThemingProvider', function($mdThemingProvider) {

  $mdThemingProvider.definePalette('brandBlue', $mdThemingProvider.extendPalette('blue', {
    '500': '1591b5',
    '800': '106982'
  }));

  $mdThemingProvider.theme('default')
    .primaryPalette('brandBlue')
    .accentPalette('blue-grey');

}])

.run(function() {

  var style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = 'https://fonts.googleapis.com/css?family=Montserrat:400,700';

  var head = angular.element(document.querySelector('head'));
  head.append(style);

});
