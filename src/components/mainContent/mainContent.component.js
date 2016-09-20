// <main-content>
// ==
// Responsible for the application viewport and left hand main navigation.

// Setup
// --
// All component bindings are one-way:
// * `admin`: Whether or not to show the admin links.
angular.module('bethel.ui.mainContent', ['ui.router'])
.component('mainContent', {
  bindings: {
    admin: '<',
    links: '<',
    static: '<'
  },
  controller: MainContentController,
  template: require('./mainContent.template.html'),
  transclude: true
});

// Controller
// --
function MainContentController($mdSidenav, $rootScope, $state, $transclude) {

  // We use the built-in `.toggle()` function for both the expande/collapse
  // animation on Desktop and the show/hide animation on Mobile.
  this.toggle = function() {
    $mdSidenav('main-left').toggle();
  };

  // (UI Router)[https://angular-ui.github.io/ui-router/] resolves all links.
  this.navigateTo = $state.go;

  // To toggle the nav menu from any other controller, call:
  // ```
  // $rootScope.$emit('bethel:nav:toggle', '');
  // ```
  $rootScope.$on('bethel:nav:toggle', this.toggle);

}

MainContentController.$inject = ['$mdSidenav', '$rootScope', '$state', '$transclude'];
