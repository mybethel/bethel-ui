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
    admin: '<'
  },
  controller: MainContentController,
  template: require('./mainContent.template.html'),
  transclude: true
});

// Controller
// --
function MainContentController($mdSidenav, $rootScope, $state) {

  // We use the built-in `.toggle()` function for both the expande/collapse
  // animation on Desktop and the show/hide animation on Mobile.
  this.toggle = function() {
    $mdSidenav('main-left').toggle();
  };

  // These are the navigation links that will appear to the left of the
  // main body content. A "Settings" link will also appear below these.
  this.navigation = [
    { title: 'Dashboard', icon: 'dashboard', url: 'dashboard' },
    { title: 'Podcasting', icon: 'mic', url: 'podcast' },
    { title: 'Media', icon: 'play_circle_filled', url: 'beta' },
    { title: 'Mobile App', icon: 'phone_iphone', url: 'beta' },
    { title: 'Volunteers', icon: 'people', url: 'beta' },
    { title: 'Live Streaming', icon: 'videocam', url: 'streaming' },
    { title: 'Giving', icon: 'attach_money', url: 'beta' },
    { title: 'Social Media', icon: 'thumb_up', url: 'beta' }
  ];

  // (UI Router)[https://angular-ui.github.io/ui-router/] resolves all links.
  this.navigateTo = $state.go;

  // To toggle the nav menu from any other controller, call:
  // ```
  // $rootScope.$emit('bethel:nav:toggle', '');
  // ```
  $rootScope.$on('bethel:nav:toggle', this.toggle);

}

MainContentController.$inject = ['$mdSidenav', '$rootScope', '$state'];
