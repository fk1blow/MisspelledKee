require '../common/vpxSidebar/index'
require '../common/vpxGroups/index'

app = angular.module 'MisspelledKee', [
  'templates'
  'ke.sidebar'
  'ke.groups'
]

app.constant 'MOCKS_URL', 'http://localhost:9001/mocks'

app.directive 'vpxTestDirective', ->
  restrict: 'E'
  templateUrl: 'app/xmodule/xtemplate.html'

app.run ->
  console.log 'app running...'
