require './home_state'

angular.module 'misspelledkee.states.groups', []
  .config ($stateProvider) ->
    $stateProvider
      .state 'groups',
        url: "/groups"
        contoller: ->
          console.log 'accessing groups state'
        # templateUrl: "partials/state1.html"
