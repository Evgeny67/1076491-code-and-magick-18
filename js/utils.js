'use strict';

(function () {
  window.utils = {};
  window.utils.getRandomElement = function (list) {
    return list[Math.floor(Math.random() * list.length)];
  };

})();
