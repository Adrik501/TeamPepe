const {
    BrickletPTCV2,
    BrickletAmbientLightV3,
    BrickletHumidityV2,
    BrickletMotionDetectorV2,
    BrickletRGBLEDButton,
    BrickletDualButtonV2,
    BrickletSegmentDisplay4x7V2,
    BrickletPiezoSpeakerV2,
    BrickletEPaper296x128,
    IPConnection
} = require('./assets/content');
const { tmp_mail, mot_mail, hum_mail } = require('./assets/mails');
const { time } = require('node:timers/promises');

// Setup and handlers
async function setup() {
    if (await get_brightness() >= 50) {
        await display_time();
    }
    await set_rgb_button_color(127, 255, 0);
}

