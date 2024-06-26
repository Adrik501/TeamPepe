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

BrickletParticulateMatter.DEVICE_IDENTIFIER = 2110;
BrickletParticulateMatter.DEVICE_DISPLAY_NAME = 'Particulate Matter Bricklet';
BrickletParticulateMatter.CALLBACK_PM_CONCENTRATION = 10;
BrickletParticulateMatter.CALLBACK_PM_COUNT = 11;
BrickletParticulateMatter.FUNCTION_GET_PM_CONCENTRATION = 1;
BrickletParticulateMatter.FUNCTION_GET_PM_COUNT = 2;
BrickletParticulateMatter.FUNCTION_SET_ENABLE = 3;
BrickletParticulateMatter.FUNCTION_GET_ENABLE = 4;
BrickletParticulateMatter.FUNCTION_GET_SENSOR_INFO = 5;
BrickletParticulateMatter.FUNCTION_SET_PM_CONCENTRATION_CALLBACK_CONFIGURATION = 6;
BrickletParticulateMatter.FUNCTION_GET_PM_CONCENTRATION_CALLBACK_CONFIGURATION = 7;
BrickletParticulateMatter.FUNCTION_SET_PM_COUNT_CALLBACK_CONFIGURATION = 8;
BrickletParticulateMatter.FUNCTION_GET_PM_COUNT_CALLBACK_CONFIGURATION = 9;
BrickletParticulateMatter.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletParticulateMatter.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletParticulateMatter.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletParticulateMatter.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletParticulateMatter.FUNCTION_WRITE_FIRMWARE = 238;
BrickletParticulateMatter.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletParticulateMatter.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletParticulateMatter.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletParticulateMatter.FUNCTION_RESET = 243;
BrickletParticulateMatter.FUNCTION_WRITE_UID = 248;
BrickletParticulateMatter.FUNCTION_READ_UID = 249;
BrickletParticulateMatter.FUNCTION_GET_IDENTITY = 255;
BrickletParticulateMatter.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletParticulateMatter.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletParticulateMatter.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletParticulateMatter.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletParticulateMatter.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletParticulateMatter.BOOTLOADER_STATUS_OK = 0;
BrickletParticulateMatter.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletParticulateMatter.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletParticulateMatter.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletParticulateMatter.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletParticulateMatter.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletParticulateMatter.STATUS_LED_CONFIG_OFF = 0;
BrickletParticulateMatter.STATUS_LED_CONFIG_ON = 1;
BrickletParticulateMatter.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletParticulateMatter.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletParticulateMatter(uid, ipcon) {
	//Measures Particulate Matter concentration (PM1.0, PM2.5 and PM10)

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletParticulateMatter.DEVICE_IDENTIFIER, BrickletParticulateMatter.DEVICE_DISPLAY_NAME);
	BrickletParticulateMatter.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_PM_CONCENTRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_PM_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_SET_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_ENABLE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_SENSOR_INFO] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_SET_PM_CONCENTRATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_PM_CONCENTRATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_SET_PM_COUNT_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_PM_COUNT_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletParticulateMatter.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletParticulateMatter.CALLBACK_PM_CONCENTRATION] = [14, 'H H H'];
	this.callbackFormats[BrickletParticulateMatter.CALLBACK_PM_COUNT] = [20, 'H H H H H H'];



	this.getPMConcentration = function(returnCallback, errorCallback) {
		/*
		Returns the particulate matter concentration, broken down as:
		
		* PM\ :sub:`1.0`\ ,
		* PM\ :sub:`2.5`\  and
		* PM\ :sub:`10.0`\ .
		
		If the sensor is disabled (see :func:`Set Enable`) then the last known good
		values from the sensor are returned.
		
		If you want to get the values periodically, it is recommended to use the
		:cb:`PM Concentration` callback. You can set the callback configuration
		with :func:`Set PM Concentration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_PM_CONCENTRATION, [], '', 14, 'H H H', returnCallback, errorCallback, false, true);
	};
	this.getPMCount = function(returnCallback, errorCallback) {
		/*
		Returns the number of particulates in 100 ml of air, broken down by their
		diameter:
		
		* greater 0.3µm,
		* greater 0.5µm,
		* greater 1.0µm,
		* greater 2.5µm,
		* greater 5.0µm and
		* greater 10.0µm.
		
		If the sensor is disabled (see :func:`Set Enable`) then the last known good
		value from the sensor is returned.
		
		If you want to get the values periodically, it is recommended to use the
		:cb:`PM Count` callback. You can set the callback configuration
		with :func:`Set PM Count Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_PM_COUNT, [], '', 20, 'H H H H H H', returnCallback, errorCallback, false, true);
	};
	this.setEnable = function(enable, returnCallback, errorCallback) {
		/*
		Enables/Disables the fan and the laser diode of the sensors.
		
		The sensor takes about 30 seconds after it is enabled to settle and produce stable
		values.
		
		The laser diode has a lifetime of about 8000 hours. If you want to measure in
		an interval with a long idle time (e.g. hourly) you should turn the
		laser diode off between the measurements.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_SET_ENABLE, [enable], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEnable = function(returnCallback, errorCallback) {
		/*
		Returns the state of the sensor as set by :func:`Set Enable`.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_ENABLE, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getSensorInfo = function(returnCallback, errorCallback) {
		/*
		Returns information about the sensor:
		
		* the sensor version number,
		* the last error code reported by the sensor (0 means no error) and
		* the number of framing and checksum errors that occurred in the communication
		  with the sensor.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_SENSOR_INFO, [], '', 12, 'B B B B', returnCallback, errorCallback, false, true);
	};
	this.setPMConcentrationCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`PM Concentration`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_SET_PM_CONCENTRATION_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPMConcentrationCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set PM Concentration Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_PM_CONCENTRATION_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setPMCountCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`PM Count` callback
		is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_SET_PM_COUNT_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPMCountCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set PM Count Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_PM_COUNT_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletParticulateMatter.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletParticulateMatter;
