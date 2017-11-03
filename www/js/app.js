angular.module('starter', ['ionic', 'ngCordova', 'cordova.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.contact', {
        url: '/contact',
        views: {
            'menuContent': {
                templateUrl: 'templates/contact.html',
                controller: 'ContactCtrl'
            }
        }
    })

    .state('app.browser', {
            url: '/browser',
            views: {
                'menuContent': {
                    templateUrl: 'templates/browser.html',
                    controller: 'BrowserCtrl'
                }
            }
        })

    .state('app.camera', {
            url: '/camera',
            views: {
                'menuContent': {
                    templateUrl: 'templates/camera.html',
                    controller: 'CameraCtrl'
                }
            }
    })

    .state('app.datepicker', {
            url: '/datepicker',
            views: {
                'menuContent': {
                    templateUrl: 'templates/datepicker.html',
                    controller: 'DatePickerCtrl'
                }
            }
    })

    .state('app.geo', {
            url: '/geo',
            views: {
                'menuContent': {
                    templateUrl: 'templates/geo.html',
                    controller: 'GeoCtrl'
                }
            }
    })

    .state('app.file', {
        url: '/file',
        views: {
            'menuContent': {
                templateUrl: 'templates/file.html',
            }
        }
    })


    $urlRouterProvider.otherwise('/app/browser');
});
