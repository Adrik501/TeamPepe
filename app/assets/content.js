// Net
const HOST = "172.20.10.242";  // Tinkerforge Gerät (wenn USB wert=localhost)
const PORT = 4223;            // Tinkerforge Standard Port

// UID Sensoren
const TEMP = "Wcg";       // Temperatur Sensor UID
const LIGH = "Pdw";       // Licht Sensor UID
const HUMI = "ViW";       // Feuchtigkeits Sensor UID
const MOTI = "ML4";       // Bewegungs Sensor UID
const RGBB = "23Qx";      // RGB Button UID
const DBTN = "Vd8";       // Dual Button UID

// UID Aktoren
const PIEZ = "R7M";       // Piezo Speaker UID
const EPAP = "XGL";       // E-Paper UID
const SEG7 = "Tre";       // 4x7 Segment UID

var tinkerforge = require('tinkerforge');
var IPConnection = tinkerforge.IPConnection;
var BrickletPTCV2 = tinkerforge.BrickletPTCV2;
var BrickletAmbientLightV3 = tinkerforge.BrickletAmbientLightV3;
var BrickletHumidityV2 = tinkerforge.BrickletHumidityV2;
var BrickletMotionDetectorV2 = tinkerforge.BrickletMotionDetectorV2;
var BrickletRGBLEDButton = tinkerforge.BrickletRGBLEDButton;
var BrickletDualButtonV2 = tinkerforge.BrickletDualButtonV2;
var BrickletPiezoSpeakerV2 = tinkerforge.BrickletPiezoSpeakerV2;
var BrickletEPaper296x128 = tinkerforge.BrickletEPaper296x128;
var BrickletSegmentDisplay4x7V2 = tinkerforge.BrickletSegmentDisplay4x7V2;

var ipcon = new IPConnection();
var temp = new BrickletPTCV2(TEMP, ipcon);
var light = new BrickletAmbientLightV3(LIGH, ipcon);
var humi = new BrickletHumidityV2(HUMI, ipcon);
var moti = new BrickletMotionDetectorV2(MOTI, ipcon);
var rgbb = new BrickletRGBLEDButton(RGBB, ipcon);
var dbtn = new BrickletDualButtonV2(DBTN, ipcon);
var piez = new BrickletPiezoSpeakerV2(PIEZ, ipcon);
var epap = new BrickletEPaper296x128(EPAP, ipcon);
var seg7 = new BrickletSegmentDisplay4x7V2(SEG7, ipcon);

module.exports = {
    HOST, PORT,
    TEMP, LIGH, HUMI, MOTI, RGBB, DBTN,
    PIEZ, EPAP, SEG7,
    tinkerforge, IPConnection, BrickletPTCV2, BrickletAmbientLightV3, BrickletHumidityV2,
    BrickletMotionDetectorV2, BrickletRGBLEDButton, BrickletDualButtonV2, BrickletPiezoSpeakerV2,
    BrickletEPaper296x128, BrickletSegmentDisplay4x7V2,
    ipcon, temp, light, humi, moti, rgbb, dbtn, piez, epap, seg7
};




