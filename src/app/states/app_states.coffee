require './dashboard/dashboard_state'
require './groups/groups_state'

angular.module('misspelledkee.states', [
    'ui.router'
    'misspelledkee.states.dashboard'
    'misspelledkee.states.groups'
  ])
  .config ($stateProvider, $urlRouterProvider) ->
     $urlRouterProvider.otherwise("/");
