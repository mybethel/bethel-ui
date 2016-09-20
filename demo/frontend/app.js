angular.module('bethel', ['bethel.ui', 'ngMessages', 'ui.router'])
.controller('DemoAppController', function($scope) {

  $scope.navLinks = [
    { title: 'Dashboard', icon: 'dashboard', url: 'dashboard' },
    { title: 'Podcasting', icon: 'mic', url: 'podcast' },
    { title: 'Media', icon: 'play_circle_filled', url: 'beta' },
    { title: 'Mobile App', icon: 'phone_iphone', url: 'beta' },
    { title: 'Volunteers', icon: 'people', url: 'beta' },
    { title: 'Live Streaming', icon: 'videocam', url: 'streaming' },
    { title: 'Giving', icon: 'attach_money', url: 'beta' },
    { title: 'Social Media', icon: 'thumb_up', url: 'beta' }
  ];

});
