sidebar = angular.module 'eqx.sidebar.directives.sidebar', []

sidebar.directive 'eqxSidebar', ->
  restrict: 'E',
  link: ->
    console.log 'linking the eqxSidebar'

