import './cards';
import './expansion-panel/expansion-panel.component';
import './login/login.component';
import './logo/logo.component';
import './mainContent/mainContent.component';
import './timepair/timepair.directive';
import './topBar/topBar.component';

angular.module('bethel.ui.components', [
  'bethel.ui.components.cards',
  'bethel.ui.expansionPanel',
  'bethel.ui.login',
  'bethel.ui.logo',
  'bethel.ui.mainContent',
  'bethel.ui.timepair',
  'bethel.ui.topBar'
]);
