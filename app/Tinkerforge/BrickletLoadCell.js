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

BrickletLoadCell.DEVICE_IDENTIFIER = 253;
BrickletLoadCell.DEVICE_DISPLAY_NAME = 'Load Cell Bricklet';
BrickletLoadCell.CALLBACK_WEIGHT = 17;
BrickletLoadCell.CALLBACK_WEIGHT_REACHED = 18;
BrickletLoadCell.FUNCTION_GET_WEIGHT = 1;
BrickletLoadCell.FUNCTION_SET_WEIGHT_CALLBACK_PERIOD = 2;
BrickletLoadCell.FUNCTION_GET_WEIGHT_CALLBACK_PERIOD = 3;
BrickletLoadCell.FUNCTION_SET_WEIGHT_CALLBACK_THRESHOLD = 4;
BrickletLoadCell.FUNCTION_GET_WEIGHT_CALLBACK_THRESHOLD = 5;
BrickletLoadCell.FUNCTION_SET_DEBOUNCE_PERIOD = 6;
BrickletLoadCell.FUNCTION_GET_DEBOUNCE_PERIOD = 7;
BrickletLoadCell.FUNCTION_SET_MOVING_AVERAGE = 8;
BrickletLoadCell.FUNCTION_GET_MOVING_AVERAGE = 9;
BrickletLoadCell.FUNCTION_LED_ON = 10;
BrickletLoadCell.FUNCTION_LED_OFF = 11;
BrickletLoadCell.FUNCTION_IS_LED_ON = 12;
BrickletLoadCell.FUNCTION_CALIBRATE = 13;
BrickletLoadCell.FUNCTION_TARE = 14;
BrickletLoadCell.FUNCTION_SET_CONFIGURATION = 15;
BrickletLoadCell.FUNCTION_GET_CONFIGURATION = 16;
BrickletLoadCell.FUNCTION_GET_IDENTITY = 255;
BrickletLoadCell.THRESHOLD_OPTION_OFF = 'x';
BrickletLoadCell.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletLoadCell.THRESHOLD_OPTION_INSIDE = 'i';
BrickletLoadCell.THRESHOLD_OPTION_SMALLER = '<';
BrickletLoadCell.THRESHOLD_OPTION_GREATER = '>';
BrickletLoadCell.RATE_10HZ = 0;
BrickletLoadCell.RATE_80HZ = 1;
BrickletLoadCell.GAIN_128X = 0;
BrickletLoadCell.GAIN_64X = 1;
BrickletLoadCell.GAIN_32X = 2;

function BrickletLoadCell(uid, ipcon) {
	//Measures weight with a load cell

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletLoadCell.DEVICE_IDENTIFIER, BrickletLoadCell.DEVICE_DISPLAY_NAME);
	BrickletLoadCell.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletLoadCell.FUNCTION_GET_WEIGHT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_SET_WEIGHT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_GET_WEIGHT_CALLBACK_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_SET_WEIGHT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_GET_WEIGHT_CALLBACK_THRESHOLD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_SET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLoadCell.FUNCTION_GET_MOVING_AVERAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_LED_ON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLoadCell.FUNCTION_LED_OFF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLoadCell.FUNCTION_IS_LED_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLoadCell.FUNCTION_TARE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLoadCell.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLoadCell.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLoadCell.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLoadCell.CALLBACK_WEIGHT] = [12, 'i'];
	this.callbackFormats[BrickletLoadCell.CALLBACK_WEIGHT_REACHED] = [12, 'i'];



	this.getWeight = function(returnCallback, errorCallback) {
		/*
		Returns the currently measured weight.
		
		If you want to get the weight periodically, it is recommended
		to use the :cb:`Weight` callback and set the period with
		:func:`Set Weight Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_GET_WEIGHT, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setWeightCallbackPeriod = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`Weight` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		The :cb:`Weight` callback is only triggered if the weight has changed since the
		last triggering.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_SET_WEIGHT_CALLBACK_PERIOD, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getWeightCallbackPeriod = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set Weight Callback Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_GET_WEIGHT_CALLBACK_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setWeightCallbackThreshold = function(option, min, max, returnCallback, errorCallback) {
		/*
		Sets the thresholds for the :cb:`Weight Reached` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Callback is turned off"
		 "'o'",    "Callback is triggered when the weight is *outside* the min and max values"
		 "'i'",    "Callback is triggered when the weight is *inside* the min and max values"
		 "'<'",    "Callback is triggered when the weight is smaller than the min value (max is ignored)"
		 "'>'",    "Callback is triggered when the weight is greater than the min value (max is ignored)"
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_SET_WEIGHT_CALLBACK_THRESHOLD, [option, min, max], 'c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getWeightCallbackThreshold = function(returnCallback, errorCallback) {
		/*
		Returns the threshold as set by :func:`Set Weight Callback Threshold`.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_GET_WEIGHT_CALLBACK_THRESHOLD, [], '', 17, 'c i i', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the period with which the threshold callback
		
		* :cb:`Weight Reached`
		
		is triggered, if the threshold
		
		* :func:`Set Weight Callback Threshold`
		
		keeps being reached.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setMovingAverage = function(average, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the weight value.
		
		Setting the length to 1 will turn the averaging off. With less
		averaging, there is more noise on the data.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_SET_MOVING_AVERAGE, [average], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMovingAverage = function(returnCallback, errorCallback) {
		/*
		Returns the length moving average as set by :func:`Set Moving Average`.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_GET_MOVING_AVERAGE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.ledOn = function(returnCallback, errorCallback) {
		/*
		Turns the LED on.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_LED_ON, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.ledOff = function(returnCallback, errorCallback) {
		/*
		Turns the LED off.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_LED_OFF, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isLEDOn = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the led is on, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_IS_LED_ON, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.calibrate = function(weight, returnCallback, errorCallback) {
		/*
		To calibrate your Load Cell Bricklet you have to
		
		* empty the scale and call this function with 0 and
		* add a known weight to the scale and call this function with the weight.
		
		The calibration is saved in the EEPROM of the Bricklet and only
		needs to be done once.
		
		We recommend to use the Brick Viewer for calibration, you don't need
		to call this function in your source code.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_CALIBRATE, [weight], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.tare = function(returnCallback, errorCallback) {
		/*
		Sets the currently measured weight as tare weight.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_TARE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(rate, gain, returnCallback, errorCallback) {
		/*
		The measurement rate and gain are configurable.
		
		The rate can be either 10Hz or 80Hz. A faster rate will produce more noise.
		It is additionally possible to add a moving average
		(see :func:`Set Moving Average`) to the measurements.
		
		The gain can be 128x, 64x or 32x. It represents a measurement range of
		±20mV, ±40mV and ±80mV respectively. The Load Cell Bricklet uses an
		excitation voltage of 5V and most load cells use an output of 2mV/V. That
		means the voltage range is ±15mV for most load cells (i.e. gain of 128x
		is best). If you don't know what all of this means you should keep it at
		128x, it will most likely be correct.
		
		The configuration is saved in the EEPROM of the Bricklet and only
		needs to be done once.
		
		We recommend to use the Brick Viewer for configuration, you don't need
		to call this function in your source code.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_SET_CONFIGURATION, [rate, gain], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_GET_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLoadCell.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletLoadCell;
