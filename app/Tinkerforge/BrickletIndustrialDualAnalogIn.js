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

BrickletIndustrialDualAnalogIn.DEVICE_IDENTIFIER = 249;
BrickletIndustrialDualAnalogIn.DEVICE_DISPLAY_NAME = 'Industrial Dual Analog In Bricklet';
BrickletIndustrialDualAnalogIn.CALLBACK_VOLTAGE = 13;
BrickletIndustrialDualAnalogIn.CALLBACK_VOLTAGE_REACHED = 14;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE = 1;
BrickletIndustrialDualAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD = 2;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD = 3;
BrickletIndustrialDualAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD = 4;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD = 5;
BrickletIndustrialDualAnalogIn.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletIndustrialDualAnalogIn.FUNCTION_SET_SAMPLE_RATE = 8;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_SAMPLE_RATE = 9;
BrickletIndustrialDualAnalogIn.FUNCTION_SET_CALIBRATION = 10;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_CALIBRATION = 11;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_ADC_VALUES = 12;
BrickletIndustrialDualAnalogIn.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDualAnalogIn.THRESHOLD_OPTION_OFF = 'x';
BrickletIndustrialDualAnalogIn.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletIndustrialDualAnalogIn.THRESHOLD_OPTION_INSIDE = 'i';
BrickletIndustrialDualAnalogIn.THRESHOLD_OPTION_SMALLER = '<';
BrickletIndustrialDualAnalogIn.THRESHOLD_OPTION_GREATER = '>';
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_976_SPS = 0;
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_488_SPS = 1;
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_244_SPS = 2;
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_122_SPS = 3;
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_61_SPS = 4;
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_4_SPS = 5;
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_2_SPS = 6;
BrickletIndustrialDualAnalogIn.SAMPLE_RATE_1_SPS = 7;

function BrickletIndustrialDualAnalogIn(uid, ipcon) {
	//Measures two DC voltages between -35V and +35V with 24bit resolution each

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialDualAnalogIn.DEVICE_IDENTIFIER, BrickletIndustrialDualAnalogIn.DEVICE_DISPLAY_NAME);
	BrickletIndustrialDualAnalogIn.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_SET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_ADC_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogIn.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialDualAnalogIn.CALLBACK_VOLTAGE] = [13, 'B i'];
	this.callbackFormats[BrickletIndustrialDualAnalogIn.CALLBACK_VOLTAGE_REACHED] = [13, 'B i'];



	this.getVoltage = function(channel, returnCallback, errorCallback) {
		/*
		Returns the voltage for the given channel.
		
		If you want to get the voltage periodically, it is recommended to use the
		:cb:`Voltage` callback and set the period with
		:func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE, [channel], 'B', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackPeriod = function(channel, period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Voltage` callback is triggered
		periodically for the given channel. A value of 0 turns the callback off.
		
		The :cb:`Voltage` callback is only triggered if the voltage has changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_PERIOD, [channel, period], 'B I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackPeriod = function(channel, returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Voltage Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_PERIOD, [channel], 'B', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackThreshold = function(channel, option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Voltage Reached` callback for the given
		channel.
		
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
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_SET_VOLTAGE_CALLBACK_THRESHOLD, [channel, option, min, max], 'B c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackThreshold = function(channel, returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Voltage Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_VOLTAGE_CALLBACK_THRESHOLD, [channel], 'B', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Voltage Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Voltage Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setSampleRate = function(rate, returnCallback, errorCallback) {
		/*
		Sets the sample rate. The sample rate can be between 1 sample per second
		and 976 samples per second. Decreasing the sample rate will also decrease the
		noise on the data.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_SET_SAMPLE_RATE, [rate], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSampleRate = function(returnCallback, errorCallback) {
		/*
		Returns the sample rate as set by :func:`Set Sample Rate`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_SAMPLE_RATE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setCalibration = function(offset, gain, returnCallback, errorCallback) {
		/*
		Sets offset and gain of MCP3911 internal calibration registers.
		
		See MCP3911 datasheet 7.7 and 7.8. The Industrial Dual Analog In Bricklet
		is already factory calibrated by Tinkerforge. It should not be necessary
		for you to use this function
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_SET_CALIBRATION, [offset, gain], 'i2 i2', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the calibration as set by :func:`Set Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_CALIBRATION, [], '', 24, 'i2 i2', returnCallback, errorCallback, false, true);
	};
	this.getADCValues = function(returnCallback, errorCallback) {
		/*
		Returns the ADC values as given by the MCP3911 IC. This function
		is needed for proper calibration, see :func:`Set Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_ADC_VALUES, [], '', 16, 'i2', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogIn.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialDualAnalogIn;
