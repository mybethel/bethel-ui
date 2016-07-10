import './cards';
import './login/login.component';
import './logo/logo.component';
import './mainContent/mainContent.component';
import './topBar/topBar.component';

angular.module('bethel.ui.components', [
  'bethel.ui.components.cards',
  'bethel.ui.login',
  'bethel.ui.logo',
  'bethel.ui.mainContent',
  'bethel.ui.topBar'
]);
