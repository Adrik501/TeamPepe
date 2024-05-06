// Import the required functions and modules
var IPConnection = require('./assets/content').IPConnection;
var {
    setup,
    temperatureHandler,
    rgbButtonPressed,
    motionDetectorHandler,
    humidityHandler,
    dualButtonPressedHandler
} = require('./functions');
const ipcon = new IPConnection();
ipcon.connect(HOST, PORT);

// Instantiate all sensors
const temperatureBricklet = new BrickletPTCV2(TEMP, ipcon);
const ambientLight = new BrickletAmbientLightV3(LIGH, ipcon);
const humidityBricklet = new BrickletHumidityV2(HUMI, ipcon);
const motionDetector = new BrickletMotionDetectorV2(MOTI, ipcon);
const rgbButton = new BrickletRGBLEDButton(RGBB, ipcon);
const dualButton = new BrickletDualButtonV2(DBTN, ipcon);

// Setup some settings
setup();

// Setup callbacks for all sensors
temperatureBricklet.registerCallback(temperatureBricklet.CALLBACK_TEMPERATURE, temperatureHandler);
temperatureBricklet.setTemperatureCallbackConfiguration(5000, false, "x", 0, 0); // updates temperature every 5 seconds

rgbButton.registerCallback(rgbButton.CALLBACK_BUTTON_STATE_CHANGED, rgbButtonPressed);

motionDetector.registerCallback(motionDetector.CALLBACK_MOTION_DETECTED, motionDetectorHandler);

humidityBricklet.registerCallback(humidityBricklet.CALLBACK_HUMIDITY, humidityHandler);
humidityBricklet.setHumidityCallbackConfiguration(5000, false, "x", 0, 0); // updates humidity every 5 seconds

dualButton.registerCallback(dualButton.CALLBACK_STATE_CHANGED, dualButtonPressedHandler);

// Program stays open and waits for callbacks to handle until it is exited
console.log('Press any button to exit the program...');
process.stdin.once('data', () => {
    console.log('Program exited!');
    ipcon.disconnect();
});
