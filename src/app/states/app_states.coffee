require './dashboard/dashboard_state'
require './groups/groups_state'


angular.module('misspelledkee.states', [
    'ui.router'
    'misspelledkee.states.dashboard'
    'misspelledkee.states.groups'
  ])
  .config ($stateProvider, $urlRouterProvider) ->
     $urlRouterProvider.otherwise("/");

    #  Now set up the states
    # $stateProvider
    #   .state 'state1',
    #     url: "/state1"
    #     templateUrl: "partials/state1.html"

      # .state 'state1.list',
      #   url: "/list"
      #   templateUrl: "partials/state1.list.html"
      #   controller: ($scope) ->
      #     $scope.items = ["A", "List", "Of", "Items"]

      # .state 'state2',
      #   url: "/state2"
      #   templateUrl: "partials/state2.html"

      # .state 'state2.list',
      #   url: "/list"
      #   templateUrl: "partials/state2.list.html"
      #   controller: ($scope) ->
      #     $scope.things = ["A", "Set", "Of", "Things"]
