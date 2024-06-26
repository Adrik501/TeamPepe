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

BrickletAccelerometer.DEVICE_IDENTIFIER = 250;
BrickletAccelerometer.DEVICE_DISPLAY_NAME = 'Accelerometer Bricklet';
BrickletAccelerometer.CALLBACK_ACCELERATION = 14;
BrickletAccelerometer.CALLBACK_ACCELERATION_REACHED = 15;
BrickletAccelerometer.FUNCTION_GET_ACCELERATION = 1;
BrickletAccelerometer.FUNCTION_SET_ACCELERATION_CALLBACK_PERIOD = 2;
BrickletAccelerometer.FUNCTION_GET_ACCELERATION_CALLBACK_PERIOD = 3;
BrickletAccelerometer.FUNCTION_SET_ACCELERATION_CALLBACK_THRESHOLD = 4;
BrickletAccelerometer.FUNCTION_GET_ACCELERATION_CALLBACK_THRESHOLD = 5;
BrickletAccelerometer.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletAccelerometer.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletAccelerometer.FUNCTION_GET_TEMPERATURE = 8;
BrickletAccelerometer.FUNCTION_SET_CONFIGURATION = 9;
BrickletAccelerometer.FUNCTION_GET_CONFIGURATION = 10;
BrickletAccelerometer.FUNCTION_LED_ON = 11;
BrickletAccelerometer.FUNCTION_LED_OFF = 12;
BrickletAccelerometer.FUNCTION_IS_LED_ON = 13;
BrickletAccelerometer.FUNCTION_GET_IDENTITY = 255;
BrickletAccelerometer.THRESHOLD_OPTION_OFF = 'x';
BrickletAccelerometer.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletAccelerometer.THRESHOLD_OPTION_INSIDE = 'i';
BrickletAccelerometer.THRESHOLD_OPTION_SMALLER = '<';
BrickletAccelerometer.THRESHOLD_OPTION_GREATER = '>';
BrickletAccelerometer.DATA_RATE_OFF = 0;
BrickletAccelerometer.DATA_RATE_3HZ = 1;
BrickletAccelerometer.DATA_RATE_6HZ = 2;
BrickletAccelerometer.DATA_RATE_12HZ = 3;
BrickletAccelerometer.DATA_RATE_25HZ = 4;
BrickletAccelerometer.DATA_RATE_50HZ = 5;
BrickletAccelerometer.DATA_RATE_100HZ = 6;
BrickletAccelerometer.DATA_RATE_400HZ = 7;
BrickletAccelerometer.DATA_RATE_800HZ = 8;
BrickletAccelerometer.DATA_RATE_1600HZ = 9;
BrickletAccelerometer.FULL_SCALE_2G = 0;
BrickletAccelerometer.FULL_SCALE_4G = 1;
BrickletAccelerometer.FULL_SCALE_6G = 2;
BrickletAccelerometer.FULL_SCALE_8G = 3;
BrickletAccelerometer.FULL_SCALE_16G = 4;
BrickletAccelerometer.FILTER_BANDWIDTH_800HZ = 0;
BrickletAccelerometer.FILTER_BANDWIDTH_400HZ = 1;
BrickletAccelerometer.FILTER_BANDWIDTH_200HZ = 2;
BrickletAccelerometer.FILTER_BANDWIDTH_50HZ = 3;

function BrickletAccelerometer(uid, ipcon) {
	//Measures acceleration in three axis

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletAccelerometer.DEVICE_IDENTIFIER, BrickletAccelerometer.DEVICE_DISPLAY_NAME);
	BrickletAccelerometer.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletAccelerometer.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_SET_ACCELERATION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_GET_ACCELERATION_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_SET_ACCELERATION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_GET_ACCELERATION_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_LED_ON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_LED_OFF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_IS_LED_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAccelerometer.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletAccelerometer.CALLBACK_ACCELERATION] = [14, 'h h h'];
	this.callbackFormats[BrickletAccelerometer.CALLBACK_ACCELERATION_REACHED] = [14, 'h h h'];



	this.getAcceleration = function(returnCallback, errorCallback) {
		/*
		Returns the acceleration in x, y and z direction. The values
		are given in gₙ/1000 (1gₙ = 9.80665m/s²). The range is
		configured with :func:`Set Configuration`.
		
		If you want to get the acceleration periodically, it is recommended
		to use the :cb:`Acceleration` callback and set the period with
		:func:`Set Acceleration Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_GET_ACCELERATION, [], '', 14, 'h h h', returnCallback, errorCallback, false, true);
	};
	this.setAccelerationCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Acceleration` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Acceleration` callback is only triggered if the acceleration has
		changed since the last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_SET_ACCELERATION_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAccelerationCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Acceleration Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_GET_ACCELERATION_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setAccelerationCallbackThreshold = function(option, minX, maxX, minY, maxY, minZ, maxZ, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Acceleration Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the acceleration is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the acceleration is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the acceleration is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the acceleration is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_SET_ACCELERATION_CALLBACK_THRESHOLD, [option, minX, maxX, minY, maxY, minZ, maxZ], 'c h h h h h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAccelerationCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Acceleration Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_GET_ACCELERATION_CALLBACK_THRESHOLD, [], '', 21, 'c h h h h h h', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Acceleration Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Acceleration Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the accelerometer.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_GET_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(dataRate, fullScale, filterBandwidth, returnCallback, errorCallback) {
		/*
		Configures the data rate, full scale range and filter bandwidth.
		Possible values are:
		
		* Data rate of 0Hz to 1600Hz.
		* Full scale range of ±2gₙ up to ±16gₙ.
		* Filter bandwidth between 50Hz and 800Hz.
		
		Decreasing data rate or full scale range will also decrease the noise on
		the data.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_SET_CONFIGURATION, [dataRate, fullScale, filterBandwidth], 'B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_GET_CONFIGURATION, [], '', 11, 'B B B', returnCallback, errorCallback, false, true);
	};
	this.ledOn = function(returnCallback, errorCallback) {
		/*
		Enables the LED on the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_LED_ON, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.ledOff = function(returnCallback, errorCallback) {
		/*
		Disables the LED on the Bricklet.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_LED_OFF, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isLEDOn = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the LED is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_IS_LED_ON, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAccelerometer.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletAccelerometer;
