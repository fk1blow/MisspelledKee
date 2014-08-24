angular.module 'misspelledkee.states.groups', []
  .config ($stateProvider) ->
    $stateProvider
      .state 'groups',
        url: "/groups"
        templateUrl: 'app/states/groups/templates/groups.html'
        controller: ->
          console.log 'accessing groups state'
