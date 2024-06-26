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

BrickletDualButton.DEVICE_IDENTIFIER = 230;
BrickletDualButton.DEVICE_DISPLAY_NAME = 'Dual Button Bricklet';
BrickletDualButton.CALLBACK_STATE_CHANGED = 4;
BrickletDualButton.FUNCTION_SET_LED_STATE = 1;
BrickletDualButton.FUNCTION_GET_LED_STATE = 2;
BrickletDualButton.FUNCTION_GET_BUTTON_STATE = 3;
BrickletDualButton.FUNCTION_SET_SELECTED_LED_STATE = 5;
BrickletDualButton.FUNCTION_GET_IDENTITY = 255;
BrickletDualButton.LED_STATE_AUTO_TOGGLE_ON = 0;
BrickletDualButton.LED_STATE_AUTO_TOGGLE_OFF = 1;
BrickletDualButton.LED_STATE_ON = 2;
BrickletDualButton.LED_STATE_OFF = 3;
BrickletDualButton.BUTTON_STATE_PRESSED = 0;
BrickletDualButton.BUTTON_STATE_RELEASED = 1;
BrickletDualButton.LED_LEFT = 0;
BrickletDualButton.LED_RIGHT = 1;

function BrickletDualButton(uid, ipcon) {
	//Two tactile buttons with built-in blue LEDs

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletDualButton.DEVICE_IDENTIFIER, BrickletDualButton.DEVICE_DISPLAY_NAME);
	BrickletDualButton.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletDualButton.FUNCTION_SET_LED_STATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDualButton.FUNCTION_GET_LED_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDualButton.FUNCTION_GET_BUTTON_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDualButton.FUNCTION_SET_SELECTED_LED_STATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDualButton.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletDualButton.CALLBACK_STATE_CHANGED] = [12, 'B B B B'];



	this.setLEDState = function(ledL, ledR, returnCallback, errorCallback) {
		/*
		Sets the state of the LEDs. Possible states are:
		
		* 0 = AutoToggleOn: Enables auto toggle with initially enabled LED.
		* 1 = AutoToggleOff: Activates auto toggle with initially disabled LED.
		* 2 = On: Enables LED (auto toggle is disabled).
		* 3 = Off: Disables LED (auto toggle is disabled).
		
		In auto toggle mode the LED is toggled automatically at each press of a button.
		
		If you just want to set one of the LEDs and don't know the current state
		of the other LED, you can get the state with :func:`Get LED State` or you
		can use :func:`Set Selected LED State`.
		*/
		this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_SET_LED_STATE, [ledL, ledR], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getLEDState = function(returnCallback, errorCallback) {
		/*
		Returns the current state of the LEDs, as set by :func:`Set LED State`.
		*/
		this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_GET_LED_STATE, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.getButtonState = function(returnCallback, errorCallback) {
		/*
		Returns the current state for both buttons. Possible states are:
		
		* 0 = pressed
		* 1 = released
		*/
		this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_GET_BUTTON_STATE, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.setSelectedLEDState = function(led, state, returnCallback, errorCallback) {
		/*
		Sets the state of the selected LED (0 or 1).
		
		The other LED remains untouched.
		*/
		this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_SET_SELECTED_LED_STATE, [led, state], 'B B', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDualButton.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletDualButton;
