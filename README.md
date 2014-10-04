geo-app
=======

$ npm install
$ bower install ngCordova

index.html
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>

app.js
angular.module('myApp', ['ngCordova'])

$ cordova plugin add org.apache.cordova.geolocation

Run
$ ionic platform add android
$ ionic run android
