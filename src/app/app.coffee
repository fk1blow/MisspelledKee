require './states/app_states'

app = angular.module 'misspelledkee', [
  'templates'

  'misspelledkee.states'

  'ui.router'
  # 'ke.sidebar'
  # 'ke.groups'
]

app.config ($locationProvider, $urlRouterProvider) ->
  $locationProvider.html5Mode true
  # $urlRouterProvider.when('/', '/dashboard')
  # $urlRouterProvider.when('/groups/:id', '/groups')

app.run ->
  console.log 'app running...'
