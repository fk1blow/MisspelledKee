require './directives/groups-list-directive'
require './directives/groups-item-directive'
require './directives/favorite-groups-directive'

angular.module 'ke.groups', [
    'ke.groups.directives.groups-list'
    'ke.groups.directives.groups-item'
    'ke.groups.directives.favorite-groups'
]
