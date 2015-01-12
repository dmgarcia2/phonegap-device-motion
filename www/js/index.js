
var application = {};

application.app = {

    initialize: function() {
        document.addEventListener('deviceready', application.app.onDeviceReady, false);
    },

    onDeviceReady: function() {
        StatusBar.hide();
        FastClick.attach(document.body);
    }

};
