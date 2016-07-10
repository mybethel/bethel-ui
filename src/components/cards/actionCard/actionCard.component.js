// <action-card>
// ==
// The Action Card displays a single card with an image, title and subtitle that
// has an action associated with it. These cards were first used to display
// podcast entities but can be used for any visual grouping with action.

// Setup
// --
// All component bindings are one-way:
// * `img`: The background image of the card.
// In addition, the content of the card is trancluded. Currently only a title
// and subtitle are supported, but this method allows for additional variations
// on the action card in the future.
angular.module('bethel.ui.cards.actionCard', []).component('actionCard', {
  bindings: {
    img: '<'
  },
  template: require('./actionCard.template.html'),
  transclude: true
});

// Example
// --
// ```
// <action-card ng-click="do('something')" img="example.jpg">
//   <h2>Card Title</h2>
//   <p>Subtitle</p>
// </action-card>
// ```
