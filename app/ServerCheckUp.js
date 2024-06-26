var Tinkerforge = require('tinkerforge');
const { BrickletHumidityV2, BrickletPTCV2, BrickletPiezoSpeakerV2, BrickletMotionDetectorV2, BrickletAmbientLightV3} = Tinkerforge;

const sendAlertMail = require("./assets/mailer.js");

const HOST = "172.20.10.242";
const PORT = 4223;

const TEMP = "Wcg";
const HUMI = "ViW";
const MOTI = "ML4";
const PIEZ = "R7M";
const LIGHT = "Pdw";

const ALARM_THRESHOLD_TEMP = 25;
const ALARM_THRESHOLD_HUMI = 60;
const ALARM_THRESHOLD_ILLUMINANCE = 9;

let ipcon = new Tinkerforge.IPConnection();
let temperatureSensor = new BrickletPTCV2(TEMP, ipcon);
let humiditySensor = new BrickletHumidityV2(HUMI, ipcon);
let motionDetector = new BrickletMotionDetectorV2(MOTI, ipcon);
let speaker = new BrickletPiezoSpeakerV2(PIEZ, ipcon);
let lightSensor = new BrickletAmbientLightV3(LIGHT, ipcon);


function checkSensors() {
    let alertStatus = false;
    getMotionDetectedPromise().then((motionDetected) => {
            if (motionDetected) {
                speaker.setAlarm(250, 750, 1, 5, 0, 5000);
                console.log('Motions detected near the server!')
                let alertContext = "Motions detected near the server!";
                sendAlertMail(alertContext);
                alertStatus = true;
            }
        }).catch((error) => {
        console.error("Motion-Sensor error occurred:", error);
    });

    function getMotionDetectedPromise() {
        return new Promise((resolve, reject) => {
            motionDetector.getMotionDetected(
                (motionDetected) => {
                    resolve(motionDetected);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    getTemperaturePromise().then((temp) => {
            let realTemp = temp / 100;
        if (realTemp > ALARM_THRESHOLD_TEMP) {
            speaker.setAlarm(250, 750, 1, 5, 0, 5000);
            console.log("Temperature limit of " + ALARM_THRESHOLD_TEMP + " exceeded! Current Temperature: " +realTemp + "C")
            let alertContext = "Temperature limit of " + ALARM_THRESHOLD_TEMP + " exceeded! \n Current Temperature: " +realTemp + "C";
            sendAlertMail(alertContext);
            alertStatus = true;
        }
    }).catch((error) => {
        console.error("Temperature-Sensor error occurred:", error);
    });

    function getTemperaturePromise() {
        return new Promise((resolve, reject) => {
            temperatureSensor.getTemperature(
                (temp) => {
                    resolve(temp);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    getHumidityPromise().then((humi) => {
        let realHumi = humi /100;
        if (realHumi > ALARM_THRESHOLD_HUMI) {
            speaker.setAlarm(250, 750, 1, 5, 0, 5000);
            console.log("Humidity limit of " + ALARM_THRESHOLD_HUMI + " exceeded! Current humidity: " + realHumi + "%")
            let alertContext = "Humidity limit of " + ALARM_THRESHOLD_HUMI + " exceeded! \n Current humidity: " + realHumi + "%";
            sendAlertMail(alertContext);
            alertStatus = true;
        }
    }).catch((error) => {
        console.error("Humidity-Sensor error occurred:", error);
    });

    function getHumidityPromise() {
        return new Promise((resolve, reject) => {
            humiditySensor.getHumidity(
                (humi) => {
                    resolve(humi);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    getLightPromise().then((light) => {
        let realLight = light /100;
        if (light > ALARM_THRESHOLD_ILLUMINANCE) {
            speaker.setAlarm(250, 750, 1, 5, 0, 5000);
            console.log("Illuminance limit of " + ALARM_THRESHOLD_ILLUMINANCE + " exceeded! Current illuminance: " +realLight + "x")
            let alertContext = "Illuminance limit of " + ALARM_THRESHOLD_ILLUMINANCE + " exceeded! \n Current illuminance: " +realLight + "x";
            sendAlertMail(alertContext);
            alertStatus = true;
        }
    }).catch((error) => {
        console.error("Illuminance-Sensor error occurred:", error);
    });

    function getLightPromise() {
        return new Promise((resolve, reject) => {
            lightSensor.getIlluminance(
                (light) => {
                    resolve(light);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }
    return alertStatus;
}

ipcon.connect(HOST, PORT);

ipcon.on(Tinkerforge.IPConnection.CALLBACK_CONNECTED, function() {
    console.log('IP Connection established.');
    try {
        let intervalId = setInterval(() => {
            const result = checkSensors();
            if (result === true) {
                clearInterval(intervalId);
            }
        }, 6000);
    } catch (exception) {
        console.log("Error thrown while running the server checkups:\n " + exception);
    }
});

