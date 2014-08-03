class SidebarController
    @$inject: [ '$scope','$http' ]

    constructor: (@scope, @http) ->
      @scope.groups = {}
      @_populateGroupsList()
      @scope.$on 'favoriteGroup.selected', @_handleGroupSelected

    _handleGroupSelected: (evt, groupId) =>
      console.log 'SidebarController : favoriteGroup.selected', groupId

    _populateGroupsList: ->
      @http.get("/mocks/groups-list.json")
        .success (res) => @scope.groups.list = res

angular.module 'ke.sidebar.controllers.sidebar', []
    .controller 'SidebarCtrl', SidebarController

