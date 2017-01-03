(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.getting-started', {
        url: '/getting-started',
        views: {
          '@': {
            templateUrl: 'src/app/getting-started/getting-started.tpl.html',
            controller: 'GettingStartedCtrl as docs'
          }
        }
      });
  }

  angular.module('getting-started', [])
    .config(config)
    .controller('GettingStartedCtrl', ['$log', 'vexflow', function($log, vexflow){
      vexflow();
    }])

})();
