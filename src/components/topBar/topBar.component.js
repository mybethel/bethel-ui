// <top-bar>
// ===
// The Top Bar component is responsible for the global navigation bar at the
// top of the interface.

// Component Setup
// ---------------

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

// Component Controller
// --------------------
function TopNavComponent($rootScope) {

  var $ctrl = this;

  // `$stateChangeSuccess` is called whenever the route changes in order to
  // update the title of the navbar. The title shown is provided by the state
  // configuration for that route.
  // https://github.com/angular-ui/ui-router/wiki#state-change-events
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {
    if (!toState.data || !toState.data.pageTitle) {
      $ctrl.title = '';
      return;
    }
    $ctrl.title = toState.data.pageTitle;
  });

}

TopNavComponent.$inject = ['$rootScope'];
