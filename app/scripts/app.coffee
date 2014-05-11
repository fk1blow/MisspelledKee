require './modules/sidebar/index'
require './modules/groups/index'

app = angular.module 'MisspelledKee', [
  'ke.sidebar'
  'ke.groups'
]

app.constant 'MOCKS_URL', 'http://localhost:9001/mocks'

app.run ->
  console.log 'app running...'
