sidebar = angular.module 'ke.groups.directives.groups-list', []

sidebar.directive 'keGroupsList', ->
  templateUrl: './scripts/modules/groups/templates/groups-list.html'
  restrict: 'E',
  scope:
    "groups": "=source"
  link: (scope) ->
