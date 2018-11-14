'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'mainTabs',
  'map'
]);

myApp.controller('MyAppController', function MyAppController($scope) {
  
});