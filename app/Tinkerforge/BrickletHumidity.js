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

BrickletHumidity.DEVICE_IDENTIFIER = 27;
BrickletHumidity.DEVICE_DISPLAY_NAME = 'Humidity Bricklet';
BrickletHumidity.CALLBACK_HUMIDITY = 13;
BrickletHumidity.CALLBACK_ANALOG_VALUE = 14;
BrickletHumidity.CALLBACK_HUMIDITY_REACHED = 15;
BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED = 16;
BrickletHumidity.FUNCTION_GET_HUMIDITY = 1;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE = 2;
BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD = 3;
BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD = 4;
BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD = 5;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD = 6;
BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD = 7;
BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD = 8;
BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD = 9;
BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD = 10;
BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD = 11;
BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD = 12;
BrickletHumidity.FUNCTION_GET_IDENTITY = 255;
BrickletHumidity.THRESHOLD_OPTION_OFF = 'x';
BrickletHumidity.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletHumidity.THRESHOLD_OPTION_INSIDE = 'i';
BrickletHumidity.THRESHOLD_OPTION_SMALLER = '<';
BrickletHumidity.THRESHOLD_OPTION_GREATER = '>';

function BrickletHumidity(uid, ipcon) {
	//Measures relative humidity

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletHumidity.DEVICE_IDENTIFIER, BrickletHumidity.DEVICE_DISPLAY_NAME);
	BrickletHumidity.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidity.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletHumidity.CALLBACK_HUMIDITY] = [10, 'H'];
	this.callbackFormats[BrickletHumidity.CALLBACK_ANALOG_VALUE] = [10, 'H'];
	this.callbackFormats[BrickletHumidity.CALLBACK_HUMIDITY_REACHED] = [10, 'H'];
	this.callbackFormats[BrickletHumidity.CALLBACK_ANALOG_VALUE_REACHED] = [10, 'H'];



	this.getHumidity = function(returnCallback, errorCallback) {
		/*
		Returns the humidity of the sensor.
		
		If you want to get the humidity periodically, it is recommended to use the
		:cb:`Humidity` callback and set the period with
		:func:`Set Humidity Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValue = function(returnCallback, errorCallback) {
		/*
		Returns the value as read by a 12-bit analog-to-digital converter.
		
		.. note::
		 The value returned by :func:`Get Humidity` is averaged over several samples
		 to yield less noise, while :func:`Get Analog Value` gives back raw
		 unfiltered analog values. The returned humidity value is calibrated for
		 room temperatures, if you use the sensor in extreme cold or extreme
		 warm environments, you might want to calculate the humidity from
		 the analog value yourself. See the `HIH 5030 datasheet
		 <https://github.com/Tinkerforge/humidity-bricklet/raw/master/datasheets/hih-5030.pdf>`__.
		
		If you want the analog value periodically, it is recommended to use the
		:cb:`Analog Value` callback and set the period with
		:func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setHumidityCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Humidity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Humidity` callback is only triggered if the humidity has changed
		since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getHumidityCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Humidity Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAnalogValueCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Analog Value` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Analog Value` callback is only triggered if the analog value has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Analog Value Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setHumidityCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Humidity Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the humidity is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the humidity is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the humidity is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the humidity is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_HUMIDITY_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getHumidityCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Humidity Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_HUMIDITY_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_ANALOG_VALUE_CALLBACK_THRESHOLD, [option, min, max], 'c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAnalogValueCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Analog Value Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_ANALOG_VALUE_CALLBACK_THRESHOLD, [], '', 13, 'c H H', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callbacks
		
		* :cb:`Humidity Reached`,
		* :cb:`Analog Value Reached`
		
		are triggered, if the thresholds
		
		* :func:`Set Humidity Callback Threshold`,
		* :func:`Set Analog Value Callback Threshold`
		
		keep being reached.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletHumidity.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletHumidity;
