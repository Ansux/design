module.export = function (angular,newsJson,caseJson) {
  angular.module('myApp', [])
    .controller('myController', function ($scope, $window, $timeout) {
      $scope.news = newsJson;
      $scope.showNews = function (news) {
        $scope.nowNews = news;
        $scope.focusIndex = 0;
        $('#NewsModal').modal();
      };
      $scope.focus = function (n, index) {
        $scope.changeFocus = true;
        $timeout(function () {
          $scope.changeFocus = false;
        }, 500);
        $scope.focusIndex = index;
      };

      $scope.getResize = function () {
        var width = $window.innerWidth;
        if (width >= 992) {
          $scope.pageSize = 4;
        } else if (width < 992 && width > 768) {
          $scope.pageSize = 3;
        } else {
          $scope.pageSize = 2;
        }
      };
      $scope.getResize();

      $scope.pageIndex = 1;
      $scope.changePageIndex = function (i) {
        $scope.changeNews = true;
        $timeout(function () {
          $scope.changeNews = false;
        }, 500);
        $scope.pageIndex = i;
      };
      $scope.$watch("pageIndex", function (nv, ov) {
        $scope.newsByPage = $scope.news.slice((nv - 1) * $scope.pageSize, (nv - 1) * $scope.pageSize + $scope.pageSize);
        $scope.pager = $scope.pagerDesign($scope.news.length / $scope.pageSize);
      });
      $scope.$watch("pageSize", function (nv, ov) {
        $scope.pageIndex = 1;
        $scope.newsByPage = $scope.news.slice(0, nv);
      });

      $scope.cases = caseJson;

      $scope.showCase = function (model, name) {
        $scope.nowCase = undefined;
        $scope.nowCase = {
          model: model,
          name: name
        };
        console.log($scope.nowCase);
        $timeout(function () {
          $('#CaseModal').modal();
        }, 10);
      };

      $scope.showChild = function (flash) {
        $scope.showChildSection = !$scope.showChildSection;
        $scope.childFlash = flash;
      };

      $scope.hideChild = function () {
        $scope.showChildSection = false;
        $scope.childFlash = undefined;
      };

      $scope.pagerDesign = function (val) {
        var arr = [];
        for (var i = 0; i < val; i++) {
          arr.push(i + 1);
        }
        return arr;
      };

      angular.element($window).bind('resize', function () {
        $scope.getResize();
        $scope.$apply();
      });
    })
    .filter('toStrusted', function ($sce) {
      return function (html) {
        return $sce.trustAsHtml(html);
      };
    });
};