sidebar = angular.module 'ke.groups.directives.groups-item', []

sidebar.directive 'keGroupsItem', ->
  restrict: 'E',
  templateUrl: './scripts/modules/groups/templates/groups-item.html'
  link: (scope) ->
