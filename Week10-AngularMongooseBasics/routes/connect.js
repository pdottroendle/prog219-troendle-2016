
var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        var url= 'mongodb://127.0.0.1:27017/test';
        connect.connected = true;
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    mlabConnect:function() {
        connect.connected = true;
        var userName = 'p94100687';
        var password = 'p94100687';
        var siteAndPort = 'ds013014.mlab.com:13014';
        var databaseName = 'prog219_troendle';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(useSimple) {
        var connectType = useSimple || true; // due to issue on local machine
        if (connectType) {
            connect.simpleConnect();
        } else {
            connect.mlabConnect();
        }
    }

};

module.exports = connect;