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
      $scope.$apply();
    };

    $element.find('header').on('click', this.ngModel.$toggle);
  }]
});
