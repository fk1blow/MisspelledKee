require './states/app_states'

app = angular.module 'misspelledkee', [
  'templates'
  'ngResource'
  'misspelledkee.states'
]

app.config ($locationProvider) ->
  $locationProvider.html5Mode true

app.run ->
  console.log 'app running...'
