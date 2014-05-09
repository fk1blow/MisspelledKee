require './modules/sidebar/index'

app = angular.module 'MisspelledKee', [
    'ke.sidebar'
]

app.run ->
    console.log 'app running...'
