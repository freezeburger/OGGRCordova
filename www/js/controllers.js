angular.module('cordova.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    $scope.loginData = {};

    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };
    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };
    $scope.doLogin = function() {
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [{
        title: 'Reggae',
        id: 1
    }, {
        title: 'Chill',
        id: 2
    }, {
        title: 'Dubstep',
        id: 3
    }, {
        title: 'Indie',
        id: 4
    }, {
        title: 'Rap',
        id: 5
    }, {
        title: 'Cowbell',
        id: 6
    }];
})

.controller('ContactCtrl', function($scope, $ionicPlatform, $cordovaContacts) {


    $scope.contacts = [1, 2, 3];
    $ionicPlatform.ready(function() {

        if (!navigator.contacts) return console.log('no contact');

        //All contacts
        $cordovaContacts.find({
            filter: '',
            multiple: true
        }).then(function(result) {
            $scope.contacts = result;
        }, function(error) {
            console.log("ERROR: " + error);
        });

    });

    $scope.pick = function(argument) {
        $cordovaContacts.pickContact().then(function(contactPicked) {
            $scope.contact = contactPicked;
        });
    }


})


.config(function($cordovaInAppBrowserProvider) {

    $cordovaInAppBrowserProvider.setDefaultOptions({
        location: 'no',
        clearcache: 'no',
        toolbar: 'no'
    })
})

//CSS inApp browser : https://github.com/apache/cordova-plugin-inappbrowser

.controller('BrowserCtrl', ['$scope', function($scope, $cordovaInAppBrowser) {

    $scope.openBrowser = function(argument) {
        window.open('http://apache.org', '_blank', 'location=yes');
    }

}])

.controller('CameraCtrl', ['$scope', function($scope, $cordovaCamera, $cordovaDialogs) {

    $scope.picture = {}

    $scope.getPicture = function(argument) {

        //$cordovaDialogs.beep(3);
        //cordova.plugins.notification.badge.set(10);
        navigator.notification.beep(3)

        $scope.picture.src = null;

        // var options = {
        //     quality: 50,
        //     destinationType: Camera.DestinationType.DATA_URL,
        //     sourceType: Camera.PictureSourceType.CAMERA,
        //     allowEdit: true,
        //     encodingType: Camera.EncodingType.JPG,
        //     targetWidth: 250,
        //     targetHeight: 250,
        //     popoverOptions: CameraPopoverOptions,
        //     saveToPhotoAlbum: false,
        //     saveToPhotoAlbum: true
        // };

        // $cordovaCamera.getPicture(options).then(function(imageData) {
        //     $scope.picture = "data:image/jpeg;base64," + imageData;
        // }, function(err) {
        //     alert(error)
        // });
        // 
        // 
        // 

        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            $scope.picture.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            console.log('Failed because: ' + message);
        }

    }

}])


.controller('DatePickerCtrl', ['$scope', function($scope) {


    $scope.form = {}

    $scope.pickDate = function(argument) {

        var options = {
            date: new Date(),
            mode: 'date'
        };

        function onSuccess(date) {
            $scope.form.date = date;
        }

        function onError(error) { // Android only
            console.log('Error: ' + error);
        }

        datePicker.show(options, onSuccess, onError);


    };

}])

.controller('GeoCtrl', ['$scope', function($scope) {

}])

.controller('PlatformCtrl', ['$scope', function($scope) {

    var deviceInformation = ionic.Platform.device();
    var isWebView = ionic.Platform.isWebView();
    var isIPad = ionic.Platform.isIPad();
    var isIOS = ionic.Platform.isIOS();
    var isAndroid = ionic.Platform.isAndroid();
    var isWindowsPhone = ionic.Platform.isWindowsPhone();
    var currentPlatform = ionic.Platform.platform();
    var currentPlatformVersion = ionic.Platform.version();

    console.log(currentPlatform)

}])
