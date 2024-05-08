let {
    HOST, PORT,
    TEMP, LIGH, HUMI, MOTI, RGBB, DBTN,
    PIEZ, EPAP, SEG7,
    IPConnection, BrickletPTCV2, BrickletAmbientLightV3, BrickletHumidityV2,
    BrickletMotionDetectorV2, BrickletRGBLEDButton, BrickletDualButtonV2, BrickletPiezoSpeakerV2,
    BrickletEPaper296x128, BrickletSegmentDisplay4x7V2
} = require('./assets/content');

function setup() {
    if (getBrightness() >= 50) {
        displayTime();
    }
    setRgbButtonColor(127, 255, 0);
}

function temperatureHandler(temperature) {
    var temperatureFloat = temperature / 100.0;
    var temperatureString = temperatureFloat.toString();

    if (temperatureFloat >= 30.0) {
        if (getBrightness() >= 50) {
            displayTemperature(temperatureString);
        }
        ringAlarm();
        setRgbButtonColor(255, 0, 0);
        tmpMail(temperatureString);
    } else {
        displayTime();
    }
}

function displayTemperature(temperatureString) {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var segmentDisplay = new BrickletSegmentDisplay4x7V2(SEG7, ipcon);

    segmentDisplay.setBrightness(7);
    segmentDisplay.setNumericValue([temperatureString[0], temperatureString[1], temperatureString[3]]);
    segmentDisplay.setSelectedSegment(15, true);
    segmentDisplay.setSelectedSegment(24, true);
    segmentDisplay.setSelectedSegment(27, true);
    segmentDisplay.setSelectedSegment(28, true);
    segmentDisplay.setSelectedSegment(29, true);
}

function displayTime() {
    if (getBrightness() >= 50) {
        var ipcon = new IPConnection();
        ipcon.connect(HOST, PORT);
        var segmentDisplay = new BrickletSegmentDisplay4x7V2(SEG7, ipcon);

        var currentTime = time.strftime('%H:%M');

        segmentDisplay.setBrightness(7);
        segmentDisplay.setNumericValue([currentTime[0], currentTime[1], currentTime[3], currentTime[4]]);
        segmentDisplay.setSelectedSegment(32, true);
        segmentDisplay.setSelectedSegment(33, true);

        ipcon.disconnect();
    }
}

function ringAlarm() {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var ps = new BrickletPiezoSpeakerV2(PIEZ, ipcon);

    ps.setAlarm(800, 2000, 10, 1, 2, 3000);

    ipcon.disconnect();
}

function setRgbButtonColor(r, g, b) {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var rgbButton = new BrickletRGBLEDButton(RGBB, ipcon);

    rgbButton.setColor(r, g, b);

    ipcon.disconnect();
}

function rgbButtonPressed() {
    ePaper();
    setRgbButtonColor(70, 130, 180);
}

function getBrightness() {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var ambientLight = new BrickletAmbientLightV3(LIGH, ipcon);

    return ambientLight.getIlluminance() / 100;
}

function motionDetectorHandler() {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var motionDetector = new BrickletMotionDetectorV2(MOTI, ipcon);

    motMail();
    motionDetector.setIndicator(255, 255, 255);
    time.sleep(2);
    motionDetector.setIndicator(0, 0, 0);

    ipcon.disconnect();
}

function humidityHandler(humidity) {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var humidityBricklet = new BrickletHumidityV2(HUMI, ipcon);

    var humidityFloat = humidity / 100;
    var humidityString = humidityFloat.toString();

    if (humidityFloat >= 50) {
        if (getBrightness() >= 50) {
            displayHumidity(humidityString);
        }
        humMail(humidityString);
        ringAlarm();
        setRgbButtonColor(255, 0, 0);
    }

    ipcon.disconnect();
}

function displayHumidity(humidityString) {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var segmentDisplay = new BrickletSegmentDisplay4x7V2(SEG7, ipcon);

    segmentDisplay.setBrightness(7);
    segmentDisplay.setNumericValue([-1, humidityString[0], humidityString[1]]);
    segmentDisplay.setSelectedSegment(23, true);
    segmentDisplay.setSelectedSegment(24, true);
    segmentDisplay.setSelectedSegment(25, true);
    segmentDisplay.setSelectedSegment(28, true);
    segmentDisplay.setSelectedSegment(29, true);
    segmentDisplay.setSelectedSegment(30, true);

    ipcon.disconnect();
}

function dualButtonPressedHandler(buttonL, buttonR, ledL, ledR) {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);
    var dualButton = new BrickletDualButtonV2(DBTN, ipcon);
    var temperatureBricklet = new BrickletPTCV2(TEMP, ipcon);
    var humidityBricklet = new BrickletHumidityV2(HUMI, ipcon);

    if (buttonL === dualButton.BUTTON_STATE_PRESSED) {
        displayTemperature((temperatureBricklet.getTemperature() / 100).toString());
        ledL.setSelectedLEDState(0, 2);
    } else if (buttonL === BrickletDualButtonV2.BUTTON_STATE_RELEASED) {
        displayTime();
        ledL.setSelectedLEDState(0, 3);
    }

    if (buttonR === dualButton.BUTTON_STATE_PRESSED) {
        displayHumidity((humidityBricklet.getHumidity() / 100).toString());
        ledR.setSelectedLEDState(1, 2);
    } else if (buttonR === BrickletDualButtonV2.BUTTON_STATE_RELEASED) {
        displayTime();
        ledR.setSelectedLEDState(1, 3);
    }

    ipcon.disconnect();
}

function ePaper() {
    var ipcon = new IPConnection();
    ipcon.connect(HOST, PORT);

    var ep = new BrickletEPaper296x128(EPAP, ipcon);
    var temperatureBricklet = new BrickletPTCV2(TEMP, ipcon);
    var humidityBricklet = new BrickletHumidityV2(HUMI, ipcon);
    var temperatureString = (temperatureBricklet.getTemperature() / 100).toString();
    var humidityString = (humidityBricklet.getHumidity() / 100).toString();

    ep.fillDisplay(ep.COLOR_WHITE);
    ep.drawText(8, 32, ep.FONT_16X24, ep.COLOR_BLACK, ep.ORIENTATION_HORIZONTAL,
        "Temperatur   : " + temperatureString + "°C");
    ep.drawText(8, 80, ep.FONT_16x24, ep.COLOR_BLACK, ep.ORIENTATION_HORIZONTAL,
        "Feuchtigkeit : " + humidityString + "%");
    ep.draw();

    ipcon.disconnect();
}

module.exports = {
    setup,
    temperatureHandler,
    displayTemperature,
    displayTime,
    ringAlarm,
    setRgbButtonColor,
    rgbButtonPressed,
    getBrightness,
    motionDetectorHandler,
    humidityHandler,
    displayHumidity,
    dualButtonPressedHandler,
    ePaper
};