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

BrickletThermocoupleV2.DEVICE_IDENTIFIER = 2109;
BrickletThermocoupleV2.DEVICE_DISPLAY_NAME = 'Thermocouple Bricklet 2.0';
BrickletThermocoupleV2.CALLBACK_TEMPERATURE = 4;
BrickletThermocoupleV2.CALLBACK_ERROR_STATE = 8;
BrickletThermocoupleV2.FUNCTION_GET_TEMPERATURE = 1;
BrickletThermocoupleV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION = 2;
BrickletThermocoupleV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION = 3;
BrickletThermocoupleV2.FUNCTION_SET_CONFIGURATION = 5;
BrickletThermocoupleV2.FUNCTION_GET_CONFIGURATION = 6;
BrickletThermocoupleV2.FUNCTION_GET_ERROR_STATE = 7;
BrickletThermocoupleV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletThermocoupleV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletThermocoupleV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletThermocoupleV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletThermocoupleV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletThermocoupleV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletThermocoupleV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletThermocoupleV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletThermocoupleV2.FUNCTION_RESET = 243;
BrickletThermocoupleV2.FUNCTION_WRITE_UID = 248;
BrickletThermocoupleV2.FUNCTION_READ_UID = 249;
BrickletThermocoupleV2.FUNCTION_GET_IDENTITY = 255;
BrickletThermocoupleV2.THRESHOLD_OPTION_OFF = 'x';
BrickletThermocoupleV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletThermocoupleV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletThermocoupleV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletThermocoupleV2.THRESHOLD_OPTION_GREATER = '>';
BrickletThermocoupleV2.AVERAGING_1 = 1;
BrickletThermocoupleV2.AVERAGING_2 = 2;
BrickletThermocoupleV2.AVERAGING_4 = 4;
BrickletThermocoupleV2.AVERAGING_8 = 8;
BrickletThermocoupleV2.AVERAGING_16 = 16;
BrickletThermocoupleV2.TYPE_B = 0;
BrickletThermocoupleV2.TYPE_E = 1;
BrickletThermocoupleV2.TYPE_J = 2;
BrickletThermocoupleV2.TYPE_K = 3;
BrickletThermocoupleV2.TYPE_N = 4;
BrickletThermocoupleV2.TYPE_R = 5;
BrickletThermocoupleV2.TYPE_S = 6;
BrickletThermocoupleV2.TYPE_T = 7;
BrickletThermocoupleV2.TYPE_G8 = 8;
BrickletThermocoupleV2.TYPE_G32 = 9;
BrickletThermocoupleV2.FILTER_OPTION_50HZ = 0;
BrickletThermocoupleV2.FILTER_OPTION_60HZ = 1;
BrickletThermocoupleV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletThermocoupleV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletThermocoupleV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletThermocoupleV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletThermocoupleV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletThermocoupleV2.BOOTLOADER_STATUS_OK = 0;
BrickletThermocoupleV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletThermocoupleV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletThermocoupleV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletThermocoupleV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletThermocoupleV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletThermocoupleV2.STATUS_LED_CONFIG_OFF = 0;
BrickletThermocoupleV2.STATUS_LED_CONFIG_ON = 1;
BrickletThermocoupleV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletThermocoupleV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletThermocoupleV2(uid, ipcon) {
	//Measures temperature with thermocouples

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletThermocoupleV2.DEVICE_IDENTIFIER, BrickletThermocoupleV2.DEVICE_DISPLAY_NAME);
	BrickletThermocoupleV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_ERROR_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletThermocoupleV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletThermocoupleV2.CALLBACK_TEMPERATURE] = [12, 'i'];
	this.callbackFormats[BrickletThermocoupleV2.CALLBACK_ERROR_STATE] = [10, '? ?'];



	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the thermocouple. The value is given in °C/100,
		e.g. a value of 4223 means that a temperature of 42.23 °C is measured.
		
		If you want to get the temperature periodically, it is recommended
		to use the :cb:`Temperature` callback and set the period with
		:func:`Set Temperature Callback Configuration`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Temperature` callback. You can set the callback configuration
		with :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_TEMPERATURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(averaging, thermocoupleType, filter, returnCallback, errorCallback) {
		/*
		You can configure averaging size, thermocouple type and frequency
		filtering.
		
		Available averaging sizes are 1, 2, 4, 8 and 16 samples.
		
		As thermocouple type you can use B, E, J, K, N, R, S and T. If you have a
		different thermocouple or a custom thermocouple you can also use
		G8 and G32. With these types the returned value will not be in °C/100,
		it will be calculated by the following formulas:
		
		* G8: ``value = 8 * 1.6 * 2^17 * Vin``
		* G32: ``value = 32 * 1.6 * 2^17 * Vin``
		
		where Vin is the thermocouple input voltage.
		
		The frequency filter can be either configured to 50Hz or to 60Hz. You should
		configure it according to your utility frequency.
		
		The conversion time depends on the averaging and filter configuration, it can
		be calculated as follows:
		
		* 60Hz: ``time = 82 + (samples - 1) * 16.67``
		* 50Hz: ``time = 98 + (samples - 1) * 20``
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_SET_CONFIGURATION, [averaging, thermocoupleType, filter], 'B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_CONFIGURATION, [], '', 11, 'B B B', returnCallback, errorCallback, false, true);
	};
	this.getErrorState = function(returnCallback, errorCallback) {
		/*
		Returns the current error state. There are two possible errors:
		
		* Over/Under Voltage and
		* Open Circuit.
		
		Over/Under Voltage happens for voltages below 0V or above 3.3V. In this case
		it is very likely that your thermocouple is defective. An Open Circuit error
		indicates that there is no thermocouple connected.
		
		You can use the :cb:`Error State` callback to automatically get triggered
		when the error state changes.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_ERROR_STATE, [], '', 10, '? ?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletThermocoupleV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletThermocoupleV2;
