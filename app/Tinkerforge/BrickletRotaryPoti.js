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

BrickletRotaryPoti.DEVICE_IDENTIFIER = 215;
BrickletRotaryPoti.DEVICE_DISPLAY_NAME = 'Rotary Poti Bricklet';
BrickletRotaryPoti.CALLBACK_POSITION = 13;
BrickletRotaryPoti.CALLBACK_ANALOG_VALUE = 14;
BrickletRotaryPoti.CALLBACK_POSITION_REACHED = 15;
BrickletRotaryPoti.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletRotaryPoti.FUNCTION_GET_POSITION = 1;
BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD = 3;
BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD = 4;
BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD = 7;
BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD = 8;
BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletRotaryPoti.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletRotaryPoti.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletRotaryPoti.FUNCTION_GET_IDENTITY = 255;
BrickletRotaryPoti.THRESHOLD_OPTION_OFF = 'x';
BrickletRotaryPoti.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletRotaryPoti.THRESHOLD_OPTION_INSIDE = 'i';
BrickletRotaryPoti.THRESHOLD_OPTION_SMALLER = '<';
BrickletRotaryPoti.THRESHOLD_OPTION_GREATER = '>';

function BrickletRotaryPoti(uid, ipcon) {
	//300° rotary potentiometer

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletRotaryPoti.DEVICE_IDENTIFIER, BrickletRotaryPoti.DEVICE_DISPLAY_NAME);
	BrickletRotaryPoti.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRotaryPoti.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRotaryPoti.CALLBACK_POSITION] = [10, 'h'];
	this.callbackFormats[BrickletRotaryPoti.CALLBACK_ANALOG_VALUE] = [10, 'H'];
	this.callbackFormats[BrickletRotaryPoti.CALLBACK_POSITION_REACHED] = [10, 'h'];
	this.callbackFormats[BrickletRotaryPoti.CALLBACK_ANALOG_VALUE_REACHED] = [10, 'H'];



	this.getPosition = function(returnCallback, errorCallback) {
		/*
		Returns the position of the rotary potentiometer. The value is
		between -150° (turned left) and 150° (turned right).
		
		If you want to get the position periodically, it is recommended to use the
		:cb:`Position` callback and set the period with
		:func:`Set Position Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_POSITION, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		
		.. note::
		 The value returned by :func:`Get Position` is averaged over several samples
		 to yield less noise, while :func:`Get Analog Value` gives back raw
		 unfiltered analog values. The only reason to use :func:`Get Analog Value` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the
		:cb:`Analog Value` callback and set the period with
		:func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setPositionCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Position` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Position` callback is only triggered if the position has changed since
		the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPositionCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Position Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Analog Value` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Analog Value` callback is only triggered if the analog value has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setPositionCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Position Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the position is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the position is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the position is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the position is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_POSITION_CALLBACK_THRESHOLD, [option, min, max], 'c h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPositionCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Position Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_POSITION_CALLBACK_THRESHOLD, [], '', 13, 'c h h', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Analog Value Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the analog value is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the analog value is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the analog value is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the analog value is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Analog Value Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`Position Reached`,
		* :cb:`Analog Value Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Position Callback Threshold`,
		* :func:`Set Analog Value Callback Threshold`
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRotaryPoti.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletRotaryPoti;
