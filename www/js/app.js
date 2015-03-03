// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.platform.android.tabs.position("bottom");
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })


            .state('tab.js', {//JS 测试的Tab
                url: '/js',
                abstract: true,
                views: {
                    'tab-js': {
                        templateUrl: 'templates/tab-js.html',
                        controller: 'JsCtrl'
                    }
                }
            })

            .state('tab.js.actionsheet', { //actionseet  活动表格 测试
                url: "/actionsheet",
                views: {
                    'menuContent': {
                        templateUrl: "templates/jsdome/action-sheet.html"
                        , controller: 'ActionSheetCtrl'
                    }
                }
            })
            .state('tab.js.backdrop', {//backdrop 背景变暗测试
                url: "/backdrop",
                views: {
                    'menuContent': {
                        templateUrl: "templates/jsdome/backdrop.html"
                        , controller: 'BackdropCtrl'
                    }
                }
            })

            .state('tab.js.content', { //content 组件测试
                url: "/content",
                views: {
                    'menuContent': {
                        templateUrl: "templates/jsdome/content.html"
                        , controller: 'ContentCtrl'
                    }
                }
            })
            .state('tab.js.events', { //events 测试
                url: "/events",
                views: {
                    'menuContent': {
                        templateUrl: "templates/jsdome/events.html"
                        , controller: 'EventsCtrl'
                    }
                }
            })
            .state('tab.js.ion_refresher', { //events 测试
                url: "/ion_refresher",
                views: {
                    'menuContent': {
                        templateUrl: "templates/jsdome/ion_refresher.html"
                        , controller: 'IonRefresherCtrl'
                    }
                }
            })
    .state('tab.js.ion_infinite_scroll', { //events 测试
                url: "/ion_infinite_scroll",
                views: {
                    'menuContent': {
                        templateUrl: "templates/jsdome/ion_infinite_scroll.html"
                        , controller: 'InfiniteScrollCtrl'
                    }
                }
            })

        ;


        // if none of the above states are matched, use this as the fallback
      //  $urlRouterProvider.otherwise('/tab/dash');
        $urlRouterProvider.otherwise('/tab/js/actionsheet');

    });
