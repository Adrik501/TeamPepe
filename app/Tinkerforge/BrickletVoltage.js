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

BrickletVoltage.DEVICE_IDENTIFIER = 218;
BrickletVoltage.DEVICE_DISPLAY_NAME = 'Voltage Bricklet';
BrickletVoltage.CALLBACK_VOLTAGE = 13;
BrickletVoltage.CALLBACK_ANALOG_VALUE = 14;
BrickletVoltage.CALLBACK_VOLTAGE_REACHED = 15;
BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletVoltage.FUNCTION_GET_VOLTAGE = 1;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 3;
BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 4;
BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 7;
BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 8;
BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletVoltage.FUNCTION_GET_IDENTITY = 255;
BrickletVoltage.THRESHOLD_OPTION_OFF = 'x';
BrickletVoltage.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletVoltage.THRESHOLD_OPTION_INSIDE = 'i';
BrickletVoltage.THRESHOLD_OPTION_SMALLER = '<';
BrickletVoltage.THRESHOLD_OPTION_GREATER = '>';

function BrickletVoltage(uid, ipcon) {
	//Measures DC voltage between 0V and 50V

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletVoltage.DEVICE_IDENTIFIER, BrickletVoltage.DEVICE_DISPLAY_NAME);
	BrickletVoltage.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletVoltage.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletVoltage.CALLBACK_VOLTAGE] = [10, 'H'];
	this.callbackFormats[BrickletVoltage.CALLBACK_ANALOG_VALUE] = [10, 'H'];
	this.callbackFormats[BrickletVoltage.CALLBACK_VOLTAGE_REACHED] = [10, 'H'];
	this.callbackFormats[BrickletVoltage.CALLBACK_ANALOG_VALUE_REACHED] = [10, 'H'];



	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage of the sensor.
		
		If you want to get the voltage periodically, it is recommended to use the
		:cb:`Voltage` callback and set the period with
		:func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		
		.. note::
		 The value returned by :func:`Get Voltage` is averaged over several samples
		 to yield less noise, while :func:`Get Analog Value` gives back raw
		 unfiltered analog values. The only reason to use :func:`Get Analog Value` is,
		 if you need the full resolution of the analog-to-digital converter.
		
		If you want the analog value periodically, it is recommended to use the
		:cb:`Analog Value` callback and set the period with
		:func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Voltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Voltage` callback is only triggered if the voltage has changed since
		the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Analog Value` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Analog Value` callback is only triggered if the analog value has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Voltage Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the voltage is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the voltage is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the voltage is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the voltage is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Voltage Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Analog Value Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`Voltage Reached`,
		* :cb:`Analog Value Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Voltage Callback Threshold`,
		* :func:`Set Analog Value Callback Threshold`
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletVoltage.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletVoltage;
