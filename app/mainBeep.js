const Tinkerforge = require('./Tinkerforge/Tinkerforge.js');

var  HOST = '172.20.10.242';
var PORT = 4223;
var speakerUID = 'R7M'; // Change XXYYZZ to the UID of your Stepper Brick

var ipcon = new Tinkerforge.IPConnection(); // Create IP connection
console.log(ipcon);
var ps = new Tinkerforge.BrickletPiezoSpeakerV2(speakerUID, ipcon); // Create device object

ipcon.connect(HOST, PORT,
    function (error) {
        console.log('Error: ' + error);
    }
); // Connect to brickd
// Don't use device before ipcon is connected

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED,
    function (connectReason) {
        ps.setBeep(2000, 0, 500);
    }
);

console.log('Press key to exit');
process.stdin.on('data',
    function (data) {
        ipcon.disconnect();
        process.exit(0);
    }
);

ipcon.connect(HOST, PORT);
