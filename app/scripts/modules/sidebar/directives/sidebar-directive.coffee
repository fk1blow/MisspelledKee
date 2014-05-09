sidebar = angular.module 'ke.sidebar.directives.sidebar', []

sidebar.directive 'keSidebar', ->
  restrict: 'E',
  link: ->
    console.log 'linking the eqxSidebar'

