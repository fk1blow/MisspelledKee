require '../common/vpxSidebar/index'
require '../common/vpxGroups/index'

app = angular.module 'MisspelledKee', [
  'ke.sidebar'
  'ke.groups'
]

app.constant 'MOCKS_URL', 'http://localhost:9001/mocks'

app.run ->
  console.log 'app running...'
