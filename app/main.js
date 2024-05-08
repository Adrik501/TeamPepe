// Import the required functions and modules
let {
    HOST, PORT,
    LIGH, HUMI, MOTI, RGBB, DBTN, PIEZ,
    BrickletPTCV2, BrickletAmbientLightV3, BrickletHumidityV2,
    BrickletMotionDetectorV2, BrickletRGBLEDButton, BrickletDualButtonV2,
    ipcon, temp, light, humi, moti, rgbb, dbtn, piez, epap, seg7, IPConnection, BrickletPiezoSpeakerV2
} = require('./assets/content');


const {
    setup,
    temperatureHandler,
    rgbButtonPressed,
    motionDetectorHandler,
    humidityHandler,
    dualButtonPressedHandler,
    ringAlarm
} = require('./functions.js');


// Instantiate all sensors
const speaker = new BrickletPiezoSpeakerV2(PIEZ, ipcon)
const ambientLight = new BrickletAmbientLightV3(LIGH, ipcon);
const humidityBricklet = new BrickletHumidityV2(HUMI, ipcon);
const motionDetector = new BrickletMotionDetectorV2(MOTI, ipcon);
const rgbButton = new BrickletRGBLEDButton(RGBB, ipcon);
const dualButton = new BrickletDualButtonV2(DBTN, ipcon);

ipcon.connect(HOST, PORT,
    function (error) {
    console.log(error);
    })

setup();



// Setup callbacks for all sensors
temp.on(BrickletPTCV2.CALLBACK_TEMPERATURE, temperatureHandler);
temp.setTemperatureCallbackConfiguration(5000, false, "x", 0, 0); // updates temperature every 5 seconds

rgbb.on(rgbButton.CALLBACK_BUTTON_STATE_CHANGED, rgbButtonPressed);

moti.on(motionDetector.CALLBACK_MOTION_DETECTED, motionDetectorHandler);

humi.on(humidityBricklet.CALLBACK_HUMIDITY, humidityHandler);
humi.setHumidityCallbackConfiguration(5000, false, "x", 0, 0); // updates humidity every 5 seconds

dbtn.on(dualButton.CALLBACK_STATE_CHANGED, dualButtonPressedHandler);

// Program stays open and waits for callbacks to handle until it is exited
console.log('Press any button to exit the program...');
process.stdin.once('data', () => {
    console.log('Program exited!');
    ipcon.disconnect();
});
