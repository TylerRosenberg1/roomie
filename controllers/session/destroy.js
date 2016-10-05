"use strict";

(function() {
  angular
  .module("roomietrack")
  .controller("sessionDestroyController", [
    "$http",
    "$window",
    "$location",
    sessionDestroyControllerFunction
  ])

  function sessionDestroyControllerFunction($http, $window, $location) {
    delete $window.sessionStorage.token;
    $location.path("/session/new");
  }
}());
