"use strict";

(function() {
  angular
  .module("roomietrack", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    "$httpProvider",
    routerFunction
  ])
  .directive("navBar", function() {
    return {
      templateUrl: "views/navBarTemplate.html"
    };
  });

  function routerFunction($stateProvider, $httpProvider) {

    $httpProvider.interceptors.push('authInterceptor');

    $stateProvider
    .state("welcome", {
      url: "/",
      controller: "welcomeController",
      controllerAs: "VM",
      templateUrl: "views/welcome.html"
    })
    .state("sessionNew", {
      url: "/session/new",
      controller: "sessionNewController",
      controllerAs: "VM",
      templateUrl: "views/session/new.html"
    })
    .state("sessionDestroy", {
      url: "/session/destroy",
      controller: "sessionDestroyController",
      controllerAs: "VM",
      templateUrl: "views/session/destroy.html"
    })
    .state("userNew", {
      url: "/user/new",
      controller: "userNewController",
      controllerAs: "VM",
      templateUrl: "views/user/new.html"
    })
    .state("userEdit", {
      url: "/user/edit",
      controller: "userEditController",
      controllerAs: "VM",
      templateUrl: "views/user/edit.html"
    })
    .state("userIndex", {
      url: "/user",
      controller: "userIndexController",
      controllerAs: "VM",
      templateUrl: "views/user/index.html"
    })
    .state("userShow", {
      url: "/user/dashboard",
      controller: "userShowController",
      controllerAs: "VM",
      templateUrl: "views/user/show.html"
    })
    .state("roommateRequestIndex", {
      url: "/user/roommate/requests",
      controller: "roommateRequestIndexController",
      controllerAs: "VM",
      templateUrl: "views/roommate/index.html"
    })
    .state("error", {
      url: "/404",
      controller: "error404Controller",
      controllerAs: "VM",
      templateUrl: "views/error/404.html"
    })
  }
}())
