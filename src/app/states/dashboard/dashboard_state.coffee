angular.module 'misspelledkee.states.dashboard', []
  .config ($stateProvider) ->
    $stateProvider
      .state 'dashboard',
        url: "/"
        controller: ->
          console.log 'accessing dashboard state'
