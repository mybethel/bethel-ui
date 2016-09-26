// <expansion-panel>
// ==
angular.module('bethel.ui.expansionPanel', []).component('expansionPanel', {
  bindings: {
    ngModel: '='
  },
  controller: ['$element', '$scope', function($element, $scope) {
    this.ngModel.$expanded = this.ngModel.$expanded || false;

    this.ngModel.$toggle = () => {
      this.ngModel.$expanded = !this.ngModel.$expanded;
      $element[this.ngModel.$expanded ? 'addClass' : 'removeClass']('expanded');
      $scope.$applyAsync();
    };

    // On click of the header element we toggle the expanded state of the panel.
    // If the panel is expanded and a button has the attribute `cancel`, the
    // click handler of this element will be triggered instead. It is assumed
    // that the click handler for this element calls the `$toggle()` function.
    $element.find('header').on('click', () => {
      var cancelButton = $element[0].querySelectorAll('button[cancel]');
      if (cancelButton[0] && $element.hasClass('expanded')) {
        angular.element(cancelButton[0]).triggerHandler('click');
        return;
      }
      this.ngModel.$toggle();
    });
  }]
});
