angular.module 'misspelledkee.states.dashboard', []
  .config ($stateProvider) ->
    $stateProvider
      .state 'dashboard',
        url: "/"
        templateUrl: 'app/states/dashboard/templates/dashboard.html'
        controller: ($scope, $http, $resource) ->
          # Groups = $resource '/groups.json'
          Groups = $resource 'http://echo.jsontest.com/key/value/one/two'
          Groups.get (res) ->
            $scope.groups = res
          console.log 'accessing dashboard state'
