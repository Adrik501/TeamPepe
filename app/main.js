const {
    BrickletPTCV2,
    BrickletAmbientLightV3,
    BrickletHumidityV2,
    BrickletMotionDetectorV2,
    BrickletRGBLEDButton,
    BrickletDualButtonV2,
    IPConnection
} = require('./assets/content');
const { setup, temperature_handler, rgb_button_pressed, motion_detector_handler, humidity_handler, dual_button_pressed_handler } = require('./functions');


(async () => {
    const ipcon = new IPConnection(); // establish connection
    await ipcon.connect(HOST, PORT);

    const temperature_bricklet = new BrickletPTCV2(TEMP, ipcon); // instantiate all sensors
    const ambient_light = new BrickletAmbientLightV3(LIGH, ipcon);
    const humidity_bricklet = new BrickletHumidityV2(HUMI, ipcon);
    const motion_detector = new BrickletMotionDetectorV2(MOTI, ipcon);
    const rgb_button = new BrickletRGBLEDButton(RGBB, ipcon);
    const dual_button = new BrickletDualButtonV2(DBTN, ipcon);

    setup(); // function to set up some settings

    temperature_bricklet.registerCallback(temperature_bricklet.CALLBACK_TEMPERATURE, temperature_handler);
    temperature_bricklet.setTemperatureCallbackConfiguration(5000, false, 'x', 0, 0); // updates temperature every 5 seconds

    rgb_button.registerCallback(rgb_button.CALLBACK_BUTTON_STATE_CHANGED, rgb_button_pressed);

    motion_detector.registerCallback(motion_detector.CALLBACK_MOTION_DETECTED, motion_detector_handler);

    humidity_bricklet.registerCallback(humidity_bricklet.CALLBACK_HUMIDITY, humidity_handler);
    humidity_bricklet.setHumidityCallbackConfiguration(5000, false, 'x', 0, 0); // updates humidity every 5 seconds

    dual_button.registerCallback(dual_button.CALLBACK_STATE_CHANGED, dual_button_pressed_handler);

    console.log('Press any key to exit program...');
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on('data', () => {
        console.log('Program exited!');
        ipcon.disconnect();
        process.exit();
    });
})();