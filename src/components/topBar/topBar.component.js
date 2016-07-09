// <top-bar>
// ==
// The Top Bar component is responsible for the global navigation bar at the
// top of the interface.

// Setup
// --
// All component bindings are one-way:
// * `ministry`: The ministry object associated with the user.
// * `ministries`: Additional ministries the user is authorized to manage.
// * `user`: The currently logged-in user.
angular.module('bethel.ui.topBar', []).component('topBar', {
  bindings: {
    ministry: '<',
    ministries: '<',
    user: '<'
  },
  template: require('./topBar.template.html'),
  controller: TopNavComponent
});

// Controller
// --
function TopNavComponent($rootScope, $state) {

  // The title of the page is determined by the `$state` data. If a title is not
  // set or the state cannot be determined, the title remains empty.
  this.$postLink = () => {
    if (!$state.current || !$state.current.data) return;
    this.title = $state.current.data.pageTitle || '';
  };

  // `$stateChangeSuccess` is called whenever the route changes in order to
  // update the title of the navbar. The title shown is provided by the state
  // configuration for that route.
  // https://github.com/angular-ui/ui-router/wiki#state-change-events
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    this.title = toState.data && toState.data.pageTitle || '';
  });

  // Emit an event to toggle between the expanded and collapsed nav states.
  this.toggleNav = () => {
    $rootScope.$emit('bethel:nav:toggle');
  };

  // Both of these functions allow the user menu to trigger state transition or
  // load the logout route on the server. @TODO: This solution is not
  // sufficiently isolated to be a component; investigate doing this through a
  // multi-slot transclusion.
  this.userMenu = $state.go;
  this.logout = () => {
    window.location.href = '/session/destroy';
  };

}

TopNavComponent.$inject = ['$rootScope', '$state'];
