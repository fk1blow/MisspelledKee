angular.module 'misspelledkee.states.groups', []
  .config ($stateProvider) ->
    $stateProvider
      .state 'groups',
        url: "/groups"
        controller: ->
          console.log 'accessing groups state'
        # templateUrl: "partials/state1.html"
