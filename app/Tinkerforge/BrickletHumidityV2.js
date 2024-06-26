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

BrickletHumidityV2.DEVICE_IDENTIFIER = 283;
BrickletHumidityV2.DEVICE_DISPLAY_NAME = 'Humidity Bricklet 2.0';
BrickletHumidityV2.CALLBACK_HUMIDITY = 4;
BrickletHumidityV2.CALLBACK_TEMPERATURE = 8;
BrickletHumidityV2.FUNCTION_GET_HUMIDITY = 1;
BrickletHumidityV2.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION = 2;
BrickletHumidityV2.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION = 3;
BrickletHumidityV2.FUNCTION_GET_TEMPERATURE = 5;
BrickletHumidityV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION = 6;
BrickletHumidityV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION = 7;
BrickletHumidityV2.FUNCTION_SET_HEATER_CONFIGURATION = 9;
BrickletHumidityV2.FUNCTION_GET_HEATER_CONFIGURATION = 10;
BrickletHumidityV2.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION = 11;
BrickletHumidityV2.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION = 12;
BrickletHumidityV2.FUNCTION_SET_SAMPLES_PER_SECOND = 13;
BrickletHumidityV2.FUNCTION_GET_SAMPLES_PER_SECOND = 14;
BrickletHumidityV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletHumidityV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletHumidityV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletHumidityV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletHumidityV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletHumidityV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletHumidityV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletHumidityV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletHumidityV2.FUNCTION_RESET = 243;
BrickletHumidityV2.FUNCTION_WRITE_UID = 248;
BrickletHumidityV2.FUNCTION_READ_UID = 249;
BrickletHumidityV2.FUNCTION_GET_IDENTITY = 255;
BrickletHumidityV2.THRESHOLD_OPTION_OFF = 'x';
BrickletHumidityV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletHumidityV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletHumidityV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletHumidityV2.THRESHOLD_OPTION_GREATER = '>';
BrickletHumidityV2.HEATER_CONFIG_DISABLED = 0;
BrickletHumidityV2.HEATER_CONFIG_ENABLED = 1;
BrickletHumidityV2.SPS_20 = 0;
BrickletHumidityV2.SPS_10 = 1;
BrickletHumidityV2.SPS_5 = 2;
BrickletHumidityV2.SPS_1 = 3;
BrickletHumidityV2.SPS_02 = 4;
BrickletHumidityV2.SPS_01 = 5;
BrickletHumidityV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletHumidityV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletHumidityV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletHumidityV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletHumidityV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletHumidityV2.BOOTLOADER_STATUS_OK = 0;
BrickletHumidityV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletHumidityV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletHumidityV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletHumidityV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletHumidityV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletHumidityV2.STATUS_LED_CONFIG_OFF = 0;
BrickletHumidityV2.STATUS_LED_CONFIG_ON = 1;
BrickletHumidityV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletHumidityV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletHumidityV2(uid, ipcon) {
	//Measures relative humidity

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletHumidityV2.DEVICE_IDENTIFIER, BrickletHumidityV2.DEVICE_DISPLAY_NAME);
	BrickletHumidityV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 2];
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_HEATER_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_HEATER_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_SAMPLES_PER_SECOND] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_SAMPLES_PER_SECOND] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletHumidityV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletHumidityV2.CALLBACK_HUMIDITY] = [10, 'H'];
	this.callbackFormats[BrickletHumidityV2.CALLBACK_TEMPERATURE] = [10, 'h'];



	this.getHumidity = function(returnCallback, errorCallback) {
		/*
		Returns the humidity measured by the sensor.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Humidity` callback. You can set the callback configuration
		with :func:`Set Humidity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_HUMIDITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setHumidityCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Humidity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Humidity` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getHumidityCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Humidity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c H H', returnCallback, errorCallback, false, true);
	};
	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature measured by the sensor.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Temperature` callback. You can set the callback configuration
		with :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Temperature` callback.
		
		The following options are possible:
		
		.. csv-table::
		 :header: "Option", "Description"
		 :widths: 10, 100
		
		 "'x'",    "Threshold is turned off"
		 "'o'",    "Threshold is triggered when the value is *outside* the min and max values"
		 "'i'",    "Threshold is triggered when the value is *inside* or equal to the min and max values"
		 "'<'",    "Threshold is triggered when the value is smaller than the min value (max is ignored)"
		 "'>'",    "Threshold is triggered when the value is greater than the min value (max is ignored)"
		
		If the option is set to 'x' (threshold turned off) the callback is triggered with the fixed period.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c h h', returnCallback, errorCallback, false, true);
	};
	this.setHeaterConfiguration = function(heaterConfig, returnCallback, errorCallback) {
		/*
		Enables/disables the heater. The heater can be used to dry the sensor in
		extremely wet conditions.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_HEATER_CONFIGURATION, [heaterConfig], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getHeaterConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the heater configuration as set by :func:`Set Heater Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_HEATER_CONFIGURATION, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setMovingAverageConfiguration = function(movingAverageLengthHumidity, movingAverageLengthTemperature, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the humidity and temperature.
		
		Setting the length to 1 will turn the averaging off. With less
		averaging, there is more noise on the data.
		
		New data is gathered every 50ms*. With a moving average of length 1000 the resulting
		averaging window has a length of 50s. If you want to do long term measurements the longest
		moving average will give the cleanest results.
		
		\* In firmware version 2.0.3 we added the :func:`Set Samples Per Second` function. It
		configures the measurement frequency. Since high frequencies can result in self-heating
		of th IC, changed the default value from 20 samples per second to 1. With 1 sample per second
		a moving average length of 1000 would result in an averaging window of 1000 seconds!
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION, [movingAverageLengthHumidity, movingAverageLengthTemperature], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMovingAverageConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the moving average configuration as set by :func:`Set Moving Average Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.setSamplesPerSecond = function(sps, returnCallback, errorCallback) {
		/*
		Sets the samples per second that are gathered by the humidity/temperature sensor HDC1080.
		
		We added this function since we found out that a high measurement frequency can lead to
		self-heating of the sensor. Which can distort the temperature measurement.
		
		If you don't need a lot of measurements, you can use the lowest available measurement
		frequency of 0.1 samples per second for the least amount of self-heating.
		
		Before version 2.0.3 the default was 20 samples per second. The new default is 1 sample per second.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_SAMPLES_PER_SECOND, [sps], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSamplesPerSecond = function(returnCallback, errorCallback) {
		/*
		Returnes the samples per second, as set by :func:`Set Samples Per Second`.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_SAMPLES_PER_SECOND, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Bricklet side. All
		Bricks have a similar function that returns the errors on the Brick side.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
	};
	this.setBootloaderMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the bootloader mode and returns the status after the requested
		mode change was instigated.
		
		You can change from bootloader mode to firmware mode and vice versa. A change
		from bootloader mode to firmware mode will only take place if the entry function,
		device identifier and CRC are present and correct.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeFirmware = function(data, returnCallback, errorCallback) {
		/*
		Writes 64 Bytes of firmware at the position as written by
		:func:`Set Write Firmware Pointer` before. The firmware is written
		to flash every 4 chunks.
		
		You can only write firmware in bootloader mode.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletHumidityV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletHumidityV2;
