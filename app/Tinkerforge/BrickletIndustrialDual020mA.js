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

BrickletIndustrialDual020mA.DEVICE_IDENTIFIER = 228;
BrickletIndustrialDual020mA.DEVICE_DISPLAY_NAME = 'Industrial Dual 0-20mA Bricklet';
BrickletIndustrialDual020mA.CALLBACK_CURRENT = 10;
BrickletIndustrialDual020mA.CALLBACK_CURRENT_REACHED = 11;
BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT = 1;
BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_PERIOD = 2;
BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_PERIOD = 3;
BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD = 4;
BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD = 5;
BrickletIndustrialDual020mA.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletIndustrialDual020mA.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletIndustrialDual020mA.FUNCTION_SET_SAMPLE_RATE = 8;
BrickletIndustrialDual020mA.FUNCTION_GET_SAMPLE_RATE = 9;
BrickletIndustrialDual020mA.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDual020mA.THRESHOLD_OPTION_OFF = 'x';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_INSIDE = 'i';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_SMALLER = '<';
BrickletIndustrialDual020mA.THRESHOLD_OPTION_GREATER = '>';
BrickletIndustrialDual020mA.SAMPLE_RATE_240_SPS = 0;
BrickletIndustrialDual020mA.SAMPLE_RATE_60_SPS = 1;
BrickletIndustrialDual020mA.SAMPLE_RATE_15_SPS = 2;
BrickletIndustrialDual020mA.SAMPLE_RATE_4_SPS = 3;

function BrickletIndustrialDual020mA(uid, ipcon) {
	//Measures two DC currents between 0mA and 20mA (IEC 60381-1)

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialDual020mA.DEVICE_IDENTIFIER, BrickletIndustrialDual020mA.DEVICE_DISPLAY_NAME);
	BrickletIndustrialDual020mA.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_SET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDual020mA.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialDual020mA.CALLBACK_CURRENT] = [13, 'B i'];
	this.callbackFormats[BrickletIndustrialDual020mA.CALLBACK_CURRENT_REACHED] = [13, 'B i'];



	this.getCurrent = function(sensor, returnCallback, errorCallback) {
		/*
		Returns the current of the specified sensor.
		
		It is possible to detect if an IEC 60381-1 compatible sensor is connected
		and if it works properly.
		
		If the returned current is below 4mA, there is likely no sensor connected
		or the sensor may be defect. If the returned current is over 20mA, there might
		be a short circuit or the sensor may be defect.
		
		If you want to get the current periodically, it is recommended to use the
		:cb:`Current` callback and set the period with
		:func:`Set Current Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT, [sensor], 'B', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setCurrentCallbackPeriod = function(sensor, period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Current` callback is triggered
		periodically for the given sensor. A value of 0 turns the callback off.
		
		The :cb:`Current` callback is only triggered if the current has changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_PERIOD, [sensor, period], 'B I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentCallbackPeriod = function(sensor, returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Current Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_PERIOD, [sensor], 'B', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setCurrentCallbackThreshold = function(sensor, option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Current Reached` callback for the given
		sensor.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the current is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the current is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the current is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the current is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_CURRENT_CALLBACK_THRESHOLD, [sensor, option, min, max], 'B c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentCallbackThreshold = function(sensor, returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Current Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_CURRENT_CALLBACK_THRESHOLD, [sensor], 'B', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Current Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Current Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setSampleRate = function(rate, returnCallback, errorCallback) {
		/*
		Sets the sample rate to either 240, 60, 15 or 4 samples per second.
		The resolution for the rates is 12, 14, 16 and 18 bit respectively.
		
		.. csv-table::
		 :header: "Value", "Description"
		 :widths: 10, 100
		
		 "0",    "240 samples per second, 12 bit resolution"
		 "1",    "60 samples per second, 14 bit resolution"
		 "2",    "15 samples per second, 16 bit resolution"
		 "3",    "4 samples per second, 18 bit resolution"
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_SET_SAMPLE_RATE, [rate], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSampleRate = function(returnCallback, errorCallback) {
		/*
		Returns the sample rate as set by :func:`Set Sample Rate`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_SAMPLE_RATE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDual020mA.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialDual020mA;
