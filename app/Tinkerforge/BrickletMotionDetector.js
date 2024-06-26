/* ***********************************************************
 * This file was automatically generated on 2024-02-27.      *
 *                                                           *
 * JavaScript Bindings Version 2.1.35                        *
 *                                                           *
 * If you have a bugfix for this file and want to commit it, *
 * please fix the bug in the generator. You can find a link  *
 * to the generators git repository on tinkerforge.com       *
 *************************************************************/

var Device = require('./Device');
var IPConnection = require('./IPConnection');

BrickletMotionDetector.DEVICE_IDENTIFIER = 233;
BrickletMotionDetector.DEVICE_DISPLAY_NAME = 'Motion Detector Bricklet';
BrickletMotionDetector.CALLBACK_MOTION_DETECTED = 2;
BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED = 3;
BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED = 1;
BrickletMotionDetector.FUNCTION_SET_STATUS_LED_CONFIG = 4;
BrickletMotionDetector.FUNCTION_GET_STATUS_LED_CONFIG = 5;
BrickletMotionDetector.FUNCTION_GET_IDENTITY = 255;
BrickletMotionDetector.MOTION_NOT_DETECTED = 0;
BrickletMotionDetector.MOTION_DETECTED = 1;
BrickletMotionDetector.STATUS_LED_CONFIG_OFF = 0;
BrickletMotionDetector.STATUS_LED_CONFIG_ON = 1;
BrickletMotionDetector.STATUS_LED_CONFIG_SHOW_STATUS = 2;

function BrickletMotionDetector(uid, ipcon) {
	//Passive infrared (PIR) motion sensor with 7m range

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletMotionDetector.DEVICE_IDENTIFIER, BrickletMotionDetector.DEVICE_DISPLAY_NAME);
	BrickletMotionDetector.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetector.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotionDetector.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetector.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletMotionDetector.CALLBACK_MOTION_DETECTED] = [8, ''];
	this.callbackFormats[BrickletMotionDetector.CALLBACK_DETECTION_CYCLE_ENDED] = [8, ''];



	this.getMotionDetected = function(returnCallback, errorCallback) {
		/*
		Returns 1 if a motion was detected. How long this returns 1 after a motion
		was detected can be adjusted with one of the small potentiometers on the
		Motion Detector Bricklet, see :ref:`here
		<motion_detector_bricklet_sensitivity_delay_block_time>`.
		
		There is also a blue LED on the Bricklet that is on as long as the Bricklet is
		in the "motion detected" state.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_GET_MOTION_DETECTED, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status led configuration.
		
		By default the status LED turns on if a motion is detected and off is no motion
		is detected.
		
		You can also turn the LED permanently on/off.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Bricklet is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position can be 'a', 'b', 'c', 'd', 'e', 'f', 'g' or 'h' (Bricklet Port).
		A Bricklet connected to an :ref:`Isolator Bricklet <isolator_bricklet>` is always at
		position 'z'.
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetector.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletMotionDetector;
