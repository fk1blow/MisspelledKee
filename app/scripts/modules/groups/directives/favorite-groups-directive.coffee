keFavoriteGroupsDirective = ($window, $document) ->
  templateUrl: './scripts/modules/groups/templates/favorite-groups.html'
  restrict: 'AE',
  scope: "groups": "=source"

  compile: (el, attrs) ->
    el.css
      'display': 'block',
      'max-height': $window.innerHeight - 240,
      # 'overflow': 'scroll'

    angular.element($window).on 'resize', _.debounce ->
        el.css 'max-height': $window.innerHeight - 160,
      , 350

  controller: ($scope) ->
    $scope.selectGroup = (groupId) ->
      $scope.activeGroup = groupId
      $scope.$emit 'favoriteGroup.selected', groupId

angular.module 'ke.groups.directives.favorite-groups', []
  .directive 'keFavoriteGroups', ['$window', keFavoriteGroupsDirective]
