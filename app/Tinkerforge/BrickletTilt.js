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

BrickletTilt.DEVICE_IDENTIFIER = 239;
BrickletTilt.DEVICE_DISPLAY_NAME = 'Tilt Bricklet';
BrickletTilt.CALLBACK_TILT_STATE = 5;
BrickletTilt.FUNCTION_GET_TILT_STATE = 1;
BrickletTilt.FUNCTION_ENABLE_TILT_STATE_CALLBACK = 2;
BrickletTilt.FUNCTION_DISABLE_TILT_STATE_CALLBACK = 3;
BrickletTilt.FUNCTION_IS_TILT_STATE_CALLBACK_ENABLED = 4;
BrickletTilt.FUNCTION_GET_IDENTITY = 255;
BrickletTilt.TILT_STATE_CLOSED = 0;
BrickletTilt.TILT_STATE_OPEN = 1;
BrickletTilt.TILT_STATE_CLOSED_VIBRATING = 2;

function BrickletTilt(uid, ipcon) {
	//Detects inclination of Bricklet (tilt switch open/closed)

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletTilt.DEVICE_IDENTIFIER, BrickletTilt.DEVICE_DISPLAY_NAME);
	BrickletTilt.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletTilt.FUNCTION_GET_TILT_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTilt.FUNCTION_ENABLE_TILT_STATE_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTilt.FUNCTION_DISABLE_TILT_STATE_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletTilt.FUNCTION_IS_TILT_STATE_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletTilt.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletTilt.CALLBACK_TILT_STATE] = [9, 'B'];



	this.getTiltState = function(returnCallback, errorCallback) {
		/*
		Returns the current tilt state. The state can either be
		
		* 0 = Closed: The ball in the tilt switch closes the circuit.
		* 1 = Open: The ball in the tilt switch does not close the circuit.
		* 2 = Closed Vibrating: The tilt switch is in motion (rapid change between open and close).
		
		.. image:: /Images/Bricklets/bricklet_tilt_mechanics.jpg
		   :scale: 100 %
		   :alt: Tilt states
		   :align: center
		   :target: ../../_images/Bricklets/bricklet_tilt_mechanics.jpg
		*/
		this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_GET_TILT_STATE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.enableTiltStateCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Tilt State` callback.
		*/
		this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_ENABLE_TILT_STATE_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableTiltStateCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Tilt State` callback.
		*/
		this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_DISABLE_TILT_STATE_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isTiltStateCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Tilt State` callback is enabled.
		*/
		this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_IS_TILT_STATE_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletTilt.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletTilt;
