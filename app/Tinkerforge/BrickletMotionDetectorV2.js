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

BrickletMotionDetectorV2.DEVICE_IDENTIFIER = 292;
BrickletMotionDetectorV2.DEVICE_DISPLAY_NAME = 'Motion Detector Bricklet 2.0';
BrickletMotionDetectorV2.CALLBACK_MOTION_DETECTED = 6;
BrickletMotionDetectorV2.CALLBACK_DETECTION_CYCLE_ENDED = 7;
BrickletMotionDetectorV2.FUNCTION_GET_MOTION_DETECTED = 1;
BrickletMotionDetectorV2.FUNCTION_SET_SENSITIVITY = 2;
BrickletMotionDetectorV2.FUNCTION_GET_SENSITIVITY = 3;
BrickletMotionDetectorV2.FUNCTION_SET_INDICATOR = 4;
BrickletMotionDetectorV2.FUNCTION_GET_INDICATOR = 5;
BrickletMotionDetectorV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletMotionDetectorV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletMotionDetectorV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletMotionDetectorV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletMotionDetectorV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletMotionDetectorV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletMotionDetectorV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletMotionDetectorV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletMotionDetectorV2.FUNCTION_RESET = 243;
BrickletMotionDetectorV2.FUNCTION_WRITE_UID = 248;
BrickletMotionDetectorV2.FUNCTION_READ_UID = 249;
BrickletMotionDetectorV2.FUNCTION_GET_IDENTITY = 255;
BrickletMotionDetectorV2.MOTION_NOT_DETECTED = 0;
BrickletMotionDetectorV2.MOTION_DETECTED = 1;
BrickletMotionDetectorV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletMotionDetectorV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletMotionDetectorV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletMotionDetectorV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletMotionDetectorV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletMotionDetectorV2.BOOTLOADER_STATUS_OK = 0;
BrickletMotionDetectorV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletMotionDetectorV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletMotionDetectorV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletMotionDetectorV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletMotionDetectorV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletMotionDetectorV2.STATUS_LED_CONFIG_OFF = 0;
BrickletMotionDetectorV2.STATUS_LED_CONFIG_ON = 1;
BrickletMotionDetectorV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletMotionDetectorV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletMotionDetectorV2(uid, ipcon) {
	//Passive infrared (PIR) motion sensor with 12m range and dimmable backlight

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletMotionDetectorV2.DEVICE_IDENTIFIER, BrickletMotionDetectorV2.DEVICE_DISPLAY_NAME);
	BrickletMotionDetectorV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_MOTION_DETECTED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_SET_SENSITIVITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_SENSITIVITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_SET_INDICATOR] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_INDICATOR] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotionDetectorV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletMotionDetectorV2.CALLBACK_MOTION_DETECTED] = [8, ''];
	this.callbackFormats[BrickletMotionDetectorV2.CALLBACK_DETECTION_CYCLE_ENDED] = [8, ''];



	this.getMotionDetected = function(returnCallback, errorCallback) {
		/*
		Returns 1 if a motion was detected. It returns 1 approx. for 1.8 seconds
		until the sensor checks for a new movement.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_MOTION_DETECTED, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setSensitivity = function(sensitivity, returnCallback, errorCallback) {
		/*
		Sets the sensitivity of the PIR sensor. At full
		sensitivity (100), the Bricklet can detect motion in a range of approximately 12m.
		
		The actual range depends on many things in the environment (e.g. reflections) and the
		size of the object to be detected. While a big person might be detected in a range
		of 10m a cat may only be detected at 2m distance with the same setting.
		
		So you will have to find a good sensitivity for your application by trial and error.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_SET_SENSITIVITY, [sensitivity], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensitivity = function(returnCallback, errorCallback) {
		/*
		Returns the sensitivity as set by :func:`Set Sensitivity`.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_SENSITIVITY, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setIndicator = function(topLeft, topRight, bottom, returnCallback, errorCallback) {
		/*
		Sets the blue backlight of the fresnel lens. The backlight consists of
		three LEDs. The brightness of each LED can be controlled with a 8-bit value
		(0-255). A value of 0 turns the LED off and a value of 255 turns the LED
		to full brightness.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_SET_INDICATOR, [topLeft, topRight, bottom], 'B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getIndicator = function(returnCallback, errorCallback) {
		/*
		Returns the indicator configuration as set by :func:`Set Indicator`.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_INDICATOR, [], '', 11, 'B B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotionDetectorV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletMotionDetectorV2;
