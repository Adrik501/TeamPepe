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

BrickletIndustrialAnalogOutV2.DEVICE_IDENTIFIER = 2116;
BrickletIndustrialAnalogOutV2.DEVICE_DISPLAY_NAME = 'Industrial Analog Out Bricklet 2.0';
BrickletIndustrialAnalogOutV2.FUNCTION_SET_ENABLED = 1;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_ENABLED = 2;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_VOLTAGE = 3;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_VOLTAGE = 4;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_CURRENT = 5;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_CURRENT = 6;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_CONFIGURATION = 7;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_CONFIGURATION = 8;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_OUT_LED_CONFIG = 9;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_OUT_LED_CONFIG = 10;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_OUT_LED_STATUS_CONFIG = 11;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_OUT_LED_STATUS_CONFIG = 12;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIndustrialAnalogOutV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIndustrialAnalogOutV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIndustrialAnalogOutV2.FUNCTION_RESET = 243;
BrickletIndustrialAnalogOutV2.FUNCTION_WRITE_UID = 248;
BrickletIndustrialAnalogOutV2.FUNCTION_READ_UID = 249;
BrickletIndustrialAnalogOutV2.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialAnalogOutV2.VOLTAGE_RANGE_0_TO_5V = 0;
BrickletIndustrialAnalogOutV2.VOLTAGE_RANGE_0_TO_10V = 1;
BrickletIndustrialAnalogOutV2.CURRENT_RANGE_4_TO_20MA = 0;
BrickletIndustrialAnalogOutV2.CURRENT_RANGE_0_TO_20MA = 1;
BrickletIndustrialAnalogOutV2.CURRENT_RANGE_0_TO_24MA = 2;
BrickletIndustrialAnalogOutV2.OUT_LED_CONFIG_OFF = 0;
BrickletIndustrialAnalogOutV2.OUT_LED_CONFIG_ON = 1;
BrickletIndustrialAnalogOutV2.OUT_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialAnalogOutV2.OUT_LED_CONFIG_SHOW_OUT_STATUS = 3;
BrickletIndustrialAnalogOutV2.OUT_LED_STATUS_CONFIG_THRESHOLD = 0;
BrickletIndustrialAnalogOutV2.OUT_LED_STATUS_CONFIG_INTENSITY = 1;
BrickletIndustrialAnalogOutV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIndustrialAnalogOutV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIndustrialAnalogOutV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIndustrialAnalogOutV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIndustrialAnalogOutV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIndustrialAnalogOutV2.BOOTLOADER_STATUS_OK = 0;
BrickletIndustrialAnalogOutV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIndustrialAnalogOutV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIndustrialAnalogOutV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIndustrialAnalogOutV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIndustrialAnalogOutV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIndustrialAnalogOutV2.STATUS_LED_CONFIG_OFF = 0;
BrickletIndustrialAnalogOutV2.STATUS_LED_CONFIG_ON = 1;
BrickletIndustrialAnalogOutV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialAnalogOutV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIndustrialAnalogOutV2(uid, ipcon) {
	//Generates configurable DC voltage and current, 0V to 10V and 4mA to 20mA

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialAnalogOutV2.DEVICE_IDENTIFIER, BrickletIndustrialAnalogOutV2.DEVICE_DISPLAY_NAME);
	BrickletIndustrialAnalogOutV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_ENABLED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_CURRENT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_OUT_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_OUT_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_OUT_LED_STATUS_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_OUT_LED_STATUS_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialAnalogOutV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;



	this.setEnabled = function(enabled, returnCallback, errorCallback) {
		/*
		Enables/disables the output of voltage and current.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_ENABLED, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if output of voltage and current is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the output voltage.
		
		The output voltage and output current are linked. Changing the output voltage
		also changes the output current.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_VOLTAGE, [voltage], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the voltage as set by :func:`Set Voltage`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setCurrent = function(current, returnCallback, errorCallback) {
		/*
		Sets the output current.
		
		The output current and output voltage are linked. Changing the output current
		also changes the output voltage.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_CURRENT, [current], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current as set by :func:`Set Current`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_CURRENT, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(voltageRange, currentRange, returnCallback, errorCallback) {
		/*
		Configures the voltage and current range.
		
		Possible voltage ranges are:
		
		* 0V to 5V
		* 0V to 10V
		
		Possible current ranges are:
		
		* 4mA to 20mA
		* 0mA to 20mA
		* 0mA to 24mA
		
		The resolution will always be 12 bit. This means, that the
		precision is higher with a smaller range.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_CONFIGURATION, [voltageRange, currentRange], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.setOutLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		You can turn the Out LED off, on or show a
		heartbeat. You can also set the LED to "Out Status". In this mode the
		LED can either be turned on with a pre-defined threshold or the intensity
		of the LED can change with the output value (voltage or current).
		
		You can configure the channel status behavior with :func:`Set Out LED Status Config`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_OUT_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getOutLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the Out LED configuration as set by :func:`Set Out LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_OUT_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setOutLEDStatusConfig = function(min, max, config, returnCallback, errorCallback) {
		/*
		Sets the Out LED status config. This config is used if the Out LED is
		configured as "Out Status", see :func:`Set Out LED Config`.
		
		For each channel you can choose between threshold and intensity mode.
		
		In threshold mode you can define a positive or a negative threshold.
		For a positive threshold set the "min" parameter to the threshold value in mV or
		µA above which the LED should turn on and set the "max" parameter to 0. Example:
		If you set a positive threshold of 5V, the LED will turn on as soon as the
		output value exceeds 5V and turn off again if it goes below 5V.
		For a negative threshold set the "max" parameter to the threshold value in mV or
		µA below which the LED should turn on and set the "min" parameter to 0. Example:
		If you set a negative threshold of 5V, the LED will turn on as soon as the
		output value goes below 5V and the LED will turn off when the output value
		exceeds 5V.
		
		In intensity mode you can define a range mV or µA that is used to scale the brightness
		of the LED. Example with min=2V, max=8V: The LED is off at 2V and below, on at
		8V and above and the brightness is linearly scaled between the values 2V and 8V.
		If the min value is greater than the max value, the LED brightness is scaled the
		other way around.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_OUT_LED_STATUS_CONFIG, [min, max, config], 'H H B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getOutLEDStatusConfig = function(returnCallback, errorCallback) {
		/*
		Returns the Out LED status configuration as set by :func:`Set Out LED Status Config`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_OUT_LED_STATUS_CONFIG, [], '', 13, 'H H B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialAnalogOutV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialAnalogOutV2;
