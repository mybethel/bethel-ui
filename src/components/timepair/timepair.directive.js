// <timepair>
// ==
// Creates a "start" and "end" time component for specifying a time range.
// Similar to the component seen in Google Calendar, when a start time is
// selected, the end time will be displayed with the overall range length.
angular.module('bethel.ui.timepair', [])
.directive('timepair', [function() {

  var now = new Date().getHours();

  var floatToTime = function(float) {
    var hours = String(float).split('.').shift();
    var minutes = (float * 60) % 60;
    if (hours > 24) hours -= 24;
    var meridiem = (hours > 11 && hours < 24) ? 'PM' : 'AM';
    if (hours === 0) hours = 12;
    if (hours > 12) hours -= 12;
    return hours + ':' + ('0' + minutes).slice(-2) + meridiem;
  };

  var generateTimes = function(startTime, interval) {
    interval = interval || 0.5;
    var start = startTime || now,
        times = [];

    for (var i = 0; i < (1 / interval) * 24; i++) {
      var rawhour = Number(start) + (i * interval);
      times.push({ raw: rawhour, display: floatToTime(rawhour) });
    }
    return times;
  };

  return {
    restrict: 'EA',
    scope: {
      start: '=',
      end: '='
    },
    link: function(scope, element, attrs) {
      scope.interval = Number(attrs.interval) || 0.5;
      scope.startTimes = generateTimes(null, scope.interval);

      scope.timepairDuration = function(index) {
        var minutes = index * (60 * scope.interval);
        if (minutes < 60) {
          return minutes + ' mins';
        }
        var hours = minutes / 60;
        return hours > 1 ? hours + ' hrs' : '1 hr';
      };

      scope.$watch('start', function(newValue) {
        if (newValue > scope.end) {
          delete scope.end;
        }
        scope.endTimes = generateTimes(newValue, scope.interval);
      });
    },
    template: require('./timepair.template.html')
  };
}]);
