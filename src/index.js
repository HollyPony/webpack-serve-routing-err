import angular from 'angular'

import '@uirouter/angularjs'

angular
.module('demo', ['ui.router'])
.config(($stateProvider, $locationProvider) => {
  $locationProvider.html5Mode(true).hashPrefix('!')

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    })
    .state('about', {
      url: '/about',
      component: 'about'
    })
})
.component('home', {
  template: `
    <a ui-sref="about">Go to about</a><p class="about">This is the home view.</p>`
})
.component('about', {
  template: `<a ui-sref="home">Go to home</a><p class="about">This is the about view.</p>`
})
