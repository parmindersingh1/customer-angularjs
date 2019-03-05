(function () {
  'use strict';
  angular
    .module('app.project')

    .filter('start', function () {
        return function (input, start) {
            if (!input || !input.length) { return; }
 
            start = +start;
            return input.slice(start);
        };
    })

})();