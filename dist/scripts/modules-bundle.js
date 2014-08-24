(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app;

require('../common/vpxSidebar/index');

require('../common/vpxGroups/index');

app = angular.module('MisspelledKee', ['templates', 'ke.sidebar', 'ke.groups']);

app.constant('MOCKS_URL', 'http://localhost:9001/mocks');

app.directive('vpxTestDirective', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/xmodule/xtemplate.html'
  };
});

app.run(function() {
  return console.log('app running...');
});


},{"../common/vpxGroups/index":5,"../common/vpxSidebar/index":7}],2:[function(require,module,exports){
var keFavoriteGroupsDirective;

keFavoriteGroupsDirective = function($window, $document) {
  return {
    templateUrl: './scripts/modules/groups/templates/favorite-groups.html',
    restrict: 'AE',
    scope: {
      "groups": "=source"
    },
    compile: function(el, attrs) {
      el.css({
        'display': 'block',
        'max-height': $window.innerHeight - 240
      });
      return angular.element($window).on('resize', _.debounce(function() {
        return el.css({
          'max-height': $window.innerHeight - 160
        });
      }, 350));
    },
    controller: function($scope) {
      return $scope.selectGroup = function(groupId) {
        $scope.activeGroup = groupId;
        return $scope.$emit('favoriteGroup.selected', groupId);
      };
    }
  };
};

angular.module('ke.groups.directives.favorite-groups', []).directive('keFavoriteGroups', ['$window', keFavoriteGroupsDirective]);


},{}],3:[function(require,module,exports){
var sidebar;

sidebar = angular.module('ke.groups.directives.groups-item', []);

sidebar.directive('keGroupsItem', function() {
  return {
    restrict: 'E',
    templateUrl: './scripts/modules/groups/templates/groups-item.html',
    link: function(scope) {}
  };
});


},{}],4:[function(require,module,exports){
var sidebar;

sidebar = angular.module('ke.groups.directives.groups-list', []);

sidebar.directive('keGroupsList', function() {
  return {
    templateUrl: './scripts/modules/groups/templates/groups-list.html',
    restrict: 'E',
    scope: {
      "groups": "=source"
    },
    link: function(scope) {}
  };
});


},{}],5:[function(require,module,exports){
require('./directives/groups-list-directive');

require('./directives/groups-item-directive');

require('./directives/favorite-groups-directive');

angular.module('ke.groups', ['ke.groups.directives.groups-list', 'ke.groups.directives.groups-item', 'ke.groups.directives.favorite-groups']);


},{"./directives/favorite-groups-directive":2,"./directives/groups-item-directive":3,"./directives/groups-list-directive":4}],6:[function(require,module,exports){
var SidebarController,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SidebarController = (function() {
  SidebarController.$inject = ['$scope', '$http'];

  function SidebarController(scope, http) {
    this.scope = scope;
    this.http = http;
    this._handleGroupSelected = __bind(this._handleGroupSelected, this);
    this.scope.groups = {};
    this._populateGroupsList();
    this.scope.$on('favoriteGroup.selected', this._handleGroupSelected);
  }

  SidebarController.prototype._handleGroupSelected = function(evt, groupId) {
    return console.log('SidebarController : favoriteGroup.selected', groupId);
  };

  SidebarController.prototype._populateGroupsList = function() {
    return this.http.get("/mocks/groups-list.json").success((function(_this) {
      return function(res) {
        return _this.scope.groups.list = res;
      };
    })(this));
  };

  return SidebarController;

})();

angular.module('ke.sidebar.controllers.sidebar', []).controller('SidebarCtrl', SidebarController);


},{}],7:[function(require,module,exports){
require('./controllers/sidebar-controller');

angular.module('ke.sidebar', ['ke.sidebar.controllers.sidebar']);


},{"./controllers/sidebar-controller":6}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kcmFnb3N0dWRvcmFjaGUvUGxheWdyb3VuZC9NaXNzcGVsbGVkS2VlL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9kcmFnb3N0dWRvcmFjaGUvUGxheWdyb3VuZC9NaXNzcGVsbGVkS2VlL3NyYy9hcHAvYXBwLmNvZmZlZSIsIi9Vc2Vycy9kcmFnb3N0dWRvcmFjaGUvUGxheWdyb3VuZC9NaXNzcGVsbGVkS2VlL3NyYy9jb21tb24vdnB4R3JvdXBzL2RpcmVjdGl2ZXMvZmF2b3JpdGUtZ3JvdXBzLWRpcmVjdGl2ZS5jb2ZmZWUiLCIvVXNlcnMvZHJhZ29zdHVkb3JhY2hlL1BsYXlncm91bmQvTWlzc3BlbGxlZEtlZS9zcmMvY29tbW9uL3ZweEdyb3Vwcy9kaXJlY3RpdmVzL2dyb3Vwcy1pdGVtLWRpcmVjdGl2ZS5jb2ZmZWUiLCIvVXNlcnMvZHJhZ29zdHVkb3JhY2hlL1BsYXlncm91bmQvTWlzc3BlbGxlZEtlZS9zcmMvY29tbW9uL3ZweEdyb3Vwcy9kaXJlY3RpdmVzL2dyb3Vwcy1saXN0LWRpcmVjdGl2ZS5jb2ZmZWUiLCIvVXNlcnMvZHJhZ29zdHVkb3JhY2hlL1BsYXlncm91bmQvTWlzc3BlbGxlZEtlZS9zcmMvY29tbW9uL3ZweEdyb3Vwcy9pbmRleC5jb2ZmZWUiLCIvVXNlcnMvZHJhZ29zdHVkb3JhY2hlL1BsYXlncm91bmQvTWlzc3BlbGxlZEtlZS9zcmMvY29tbW9uL3ZweFNpZGViYXIvY29udHJvbGxlcnMvc2lkZWJhci1jb250cm9sbGVyLmNvZmZlZSIsIi9Vc2Vycy9kcmFnb3N0dWRvcmFjaGUvUGxheWdyb3VuZC9NaXNzcGVsbGVkS2VlL3NyYy9jb21tb24vdnB4U2lkZWJhci9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBLEdBQUE7O0FBQUEs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YUFBQSxTQUFDLEdBQUQsR0FBQTtlQUFTLEtBQUMsQ0FBQSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQWQsR0FBcUIsSUFBOUI7TUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQURYLEVBRG1CO0VBQUEsQ0FWckIsQ0FBQTs7MkJBQUE7O0lBREosQ0FBQTs7QUFBQSxPQWVPLENBQUMsTUFBUixDQUFlLGdDQUFmLEVBQWlELEVBQWpELENBQ0ksQ0FBQyxVQURMLENBQ2dCLGFBRGhCLEVBQytCLGlCQUQvQixDQWZBLENBQUE7Ozs7QUNBQSxPQUFBLENBQVEsa0NBQVIsQ0FBQSxDQUFBOztBQUFBLE9BRU8sQ0FBQyxNQUFSLENBQWUsWUFBZixFQUE2QixDQUN6QixnQ0FEeUIsQ0FBN0IsQ0FGQSxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUgJy4uL2NvbW1vbi92cHhTaWRlYmFyL2luZGV4J1xucmVxdWlyZSAnLi4vY29tbW9uL3ZweEdyb3Vwcy9pbmRleCdcblxuYXBwID0gYW5ndWxhci5tb2R1bGUgJ01pc3NwZWxsZWRLZWUnLCBbXG4gICd0ZW1wbGF0ZXMnXG4gICdrZS5zaWRlYmFyJ1xuICAna2UuZ3JvdXBzJ1xuXVxuXG5hcHAuY29uc3RhbnQgJ01PQ0tTX1VSTCcsICdodHRwOi8vbG9jYWxob3N0OjkwMDEvbW9ja3MnXG5cbmFwcC5kaXJlY3RpdmUgJ3ZweFRlc3REaXJlY3RpdmUnLCAtPlxuICByZXN0cmljdDogJ0UnXG4gIHRlbXBsYXRlVXJsOiAnYXBwL3htb2R1bGUveHRlbXBsYXRlLmh0bWwnXG5cbmFwcC5ydW4gLT5cbiAgY29uc29sZS5sb2cgJ2FwcCBydW5uaW5nLi4uJ1xuIiwia2VGYXZvcml0ZUdyb3Vwc0RpcmVjdGl2ZSA9ICgkd2luZG93LCAkZG9jdW1lbnQpIC0+XG4gIHRlbXBsYXRlVXJsOiAnLi9zY3JpcHRzL21vZHVsZXMvZ3JvdXBzL3RlbXBsYXRlcy9mYXZvcml0ZS1ncm91cHMuaHRtbCdcbiAgcmVzdHJpY3Q6ICdBRScsXG4gIHNjb3BlOiBcImdyb3Vwc1wiOiBcIj1zb3VyY2VcIlxuXG4gIGNvbXBpbGU6IChlbCwgYXR0cnMpIC0+XG4gICAgZWwuY3NzXG4gICAgICAnZGlzcGxheSc6ICdibG9jaycsXG4gICAgICAnbWF4LWhlaWdodCc6ICR3aW5kb3cuaW5uZXJIZWlnaHQgLSAyNDAsXG4gICAgICAjICdvdmVyZmxvdyc6ICdzY3JvbGwnXG5cbiAgICBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykub24gJ3Jlc2l6ZScsIF8uZGVib3VuY2UgLT5cbiAgICAgICAgZWwuY3NzICdtYXgtaGVpZ2h0JzogJHdpbmRvdy5pbm5lckhlaWdodCAtIDE2MCxcbiAgICAgICwgMzUwXG5cbiAgY29udHJvbGxlcjogKCRzY29wZSkgLT5cbiAgICAkc2NvcGUuc2VsZWN0R3JvdXAgPSAoZ3JvdXBJZCkgLT5cbiAgICAgICRzY29wZS5hY3RpdmVHcm91cCA9IGdyb3VwSWRcbiAgICAgICRzY29wZS4kZW1pdCAnZmF2b3JpdGVHcm91cC5zZWxlY3RlZCcsIGdyb3VwSWRcblxuYW5ndWxhci5tb2R1bGUgJ2tlLmdyb3Vwcy5kaXJlY3RpdmVzLmZhdm9yaXRlLWdyb3VwcycsIFtdXG4gIC5kaXJlY3RpdmUgJ2tlRmF2b3JpdGVHcm91cHMnLCBbJyR3aW5kb3cnLCBrZUZhdm9yaXRlR3JvdXBzRGlyZWN0aXZlXVxuIiwic2lkZWJhciA9IGFuZ3VsYXIubW9kdWxlICdrZS5ncm91cHMuZGlyZWN0aXZlcy5ncm91cHMtaXRlbScsIFtdXG5cbnNpZGViYXIuZGlyZWN0aXZlICdrZUdyb3Vwc0l0ZW0nLCAtPlxuICByZXN0cmljdDogJ0UnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2NyaXB0cy9tb2R1bGVzL2dyb3Vwcy90ZW1wbGF0ZXMvZ3JvdXBzLWl0ZW0uaHRtbCdcbiAgbGluazogKHNjb3BlKSAtPlxuIiwic2lkZWJhciA9IGFuZ3VsYXIubW9kdWxlICdrZS5ncm91cHMuZGlyZWN0aXZlcy5ncm91cHMtbGlzdCcsIFtdXG5cbnNpZGViYXIuZGlyZWN0aXZlICdrZUdyb3Vwc0xpc3QnLCAtPlxuICB0ZW1wbGF0ZVVybDogJy4vc2NyaXB0cy9tb2R1bGVzL2dyb3Vwcy90ZW1wbGF0ZXMvZ3JvdXBzLWxpc3QuaHRtbCdcbiAgcmVzdHJpY3Q6ICdFJyxcbiAgc2NvcGU6XG4gICAgXCJncm91cHNcIjogXCI9c291cmNlXCJcbiAgbGluazogKHNjb3BlKSAtPlxuIiwicmVxdWlyZSAnLi9kaXJlY3RpdmVzL2dyb3Vwcy1saXN0LWRpcmVjdGl2ZSdcbnJlcXVpcmUgJy4vZGlyZWN0aXZlcy9ncm91cHMtaXRlbS1kaXJlY3RpdmUnXG5yZXF1aXJlICcuL2RpcmVjdGl2ZXMvZmF2b3JpdGUtZ3JvdXBzLWRpcmVjdGl2ZSdcblxuYW5ndWxhci5tb2R1bGUgJ2tlLmdyb3VwcycsIFtcbiAgICAna2UuZ3JvdXBzLmRpcmVjdGl2ZXMuZ3JvdXBzLWxpc3QnXG4gICAgJ2tlLmdyb3Vwcy5kaXJlY3RpdmVzLmdyb3Vwcy1pdGVtJ1xuICAgICdrZS5ncm91cHMuZGlyZWN0aXZlcy5mYXZvcml0ZS1ncm91cHMnXG5dXG4iLCJjbGFzcyBTaWRlYmFyQ29udHJvbGxlclxuICAgIEAkaW5qZWN0OiBbICckc2NvcGUnLCckaHR0cCcgXVxuXG4gICAgY29uc3RydWN0b3I6IChAc2NvcGUsIEBodHRwKSAtPlxuICAgICAgQHNjb3BlLmdyb3VwcyA9IHt9XG4gICAgICBAX3BvcHVsYXRlR3JvdXBzTGlzdCgpXG4gICAgICBAc2NvcGUuJG9uICdmYXZvcml0ZUdyb3VwLnNlbGVjdGVkJywgQF9oYW5kbGVHcm91cFNlbGVjdGVkXG5cbiAgICBfaGFuZGxlR3JvdXBTZWxlY3RlZDogKGV2dCwgZ3JvdXBJZCkgPT5cbiAgICAgIGNvbnNvbGUubG9nICdTaWRlYmFyQ29udHJvbGxlciA6IGZhdm9yaXRlR3JvdXAuc2VsZWN0ZWQnLCBncm91cElkXG5cbiAgICBfcG9wdWxhdGVHcm91cHNMaXN0OiAtPlxuICAgICAgQGh0dHAuZ2V0KFwiL21vY2tzL2dyb3Vwcy1saXN0Lmpzb25cIilcbiAgICAgICAgLnN1Y2Nlc3MgKHJlcykgPT4gQHNjb3BlLmdyb3Vwcy5saXN0ID0gcmVzXG5cbmFuZ3VsYXIubW9kdWxlICdrZS5zaWRlYmFyLmNvbnRyb2xsZXJzLnNpZGViYXInLCBbXVxuICAgIC5jb250cm9sbGVyICdTaWRlYmFyQ3RybCcsIFNpZGViYXJDb250cm9sbGVyXG5cbiIsInJlcXVpcmUgJy4vY29udHJvbGxlcnMvc2lkZWJhci1jb250cm9sbGVyJ1xuXG5hbmd1bGFyLm1vZHVsZSAna2Uuc2lkZWJhcicsIFtcbiAgICAna2Uuc2lkZWJhci5jb250cm9sbGVycy5zaWRlYmFyJ1xuXVxuIl19
