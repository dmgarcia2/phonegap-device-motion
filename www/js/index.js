
var application = {};

application.app = {

    initialize: function() {
        document.addEventListener('deviceready', application.app.onDeviceReady, false);
    },

    onDeviceReady: function() {
        StatusBar.hide();
        FastClick.attach(document.body);
    },

    getCurrentAcceleration: function() {
        navigator.accelerometer.getCurrentAcceleration(application.app.showAccel, application.app.onError);
    },

    showAccel: function(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
                'Acceleration Y: ' + acceleration.y + '\n' +
                'Acceleration Z: ' + acceleration.z + '\n' +
                'Timestamp: ' + acceleration.timestamp + '\n');
    },

    onError: function() {
        alert("Error recuperando datos de acelerómetro.");
    }

};
