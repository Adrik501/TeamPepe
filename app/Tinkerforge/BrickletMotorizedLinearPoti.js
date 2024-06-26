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

BrickletMotorizedLinearPoti.DEVICE_IDENTIFIER = 267;
BrickletMotorizedLinearPoti.DEVICE_DISPLAY_NAME = 'Motorized Linear Poti Bricklet';
BrickletMotorizedLinearPoti.CALLBACK_POSITION = 4;
BrickletMotorizedLinearPoti.CALLBACK_POSITION_REACHED = 10;
BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION = 1;
BrickletMotorizedLinearPoti.FUNCTION_SET_POSITION_CALLBACK_CONFIGURATION = 2;
BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION_CALLBACK_CONFIGURATION = 3;
BrickletMotorizedLinearPoti.FUNCTION_SET_MOTOR_POSITION = 5;
BrickletMotorizedLinearPoti.FUNCTION_GET_MOTOR_POSITION = 6;
BrickletMotorizedLinearPoti.FUNCTION_CALIBRATE = 7;
BrickletMotorizedLinearPoti.FUNCTION_SET_POSITION_REACHED_CALLBACK_CONFIGURATION = 8;
BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION_REACHED_CALLBACK_CONFIGURATION = 9;
BrickletMotorizedLinearPoti.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletMotorizedLinearPoti.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletMotorizedLinearPoti.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletMotorizedLinearPoti.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletMotorizedLinearPoti.FUNCTION_WRITE_FIRMWARE = 238;
BrickletMotorizedLinearPoti.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletMotorizedLinearPoti.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletMotorizedLinearPoti.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletMotorizedLinearPoti.FUNCTION_RESET = 243;
BrickletMotorizedLinearPoti.FUNCTION_WRITE_UID = 248;
BrickletMotorizedLinearPoti.FUNCTION_READ_UID = 249;
BrickletMotorizedLinearPoti.FUNCTION_GET_IDENTITY = 255;
BrickletMotorizedLinearPoti.THRESHOLD_OPTION_OFF = 'x';
BrickletMotorizedLinearPoti.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletMotorizedLinearPoti.THRESHOLD_OPTION_INSIDE = 'i';
BrickletMotorizedLinearPoti.THRESHOLD_OPTION_SMALLER = '<';
BrickletMotorizedLinearPoti.THRESHOLD_OPTION_GREATER = '>';
BrickletMotorizedLinearPoti.DRIVE_MODE_FAST = 0;
BrickletMotorizedLinearPoti.DRIVE_MODE_SMOOTH = 1;
BrickletMotorizedLinearPoti.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletMotorizedLinearPoti.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletMotorizedLinearPoti.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletMotorizedLinearPoti.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletMotorizedLinearPoti.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletMotorizedLinearPoti.BOOTLOADER_STATUS_OK = 0;
BrickletMotorizedLinearPoti.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletMotorizedLinearPoti.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletMotorizedLinearPoti.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletMotorizedLinearPoti.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletMotorizedLinearPoti.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletMotorizedLinearPoti.STATUS_LED_CONFIG_OFF = 0;
BrickletMotorizedLinearPoti.STATUS_LED_CONFIG_ON = 1;
BrickletMotorizedLinearPoti.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletMotorizedLinearPoti.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletMotorizedLinearPoti(uid, ipcon) {
	//Motorized Linear Potentiometer

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletMotorizedLinearPoti.DEVICE_IDENTIFIER, BrickletMotorizedLinearPoti.DEVICE_DISPLAY_NAME);
	BrickletMotorizedLinearPoti.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_SET_POSITION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_SET_MOTOR_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_MOTOR_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_CALIBRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_SET_POSITION_REACHED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION_REACHED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletMotorizedLinearPoti.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletMotorizedLinearPoti.CALLBACK_POSITION] = [10, 'H'];
	this.callbackFormats[BrickletMotorizedLinearPoti.CALLBACK_POSITION_REACHED] = [10, 'H'];



	this.getPosition = function(returnCallback, errorCallback) {
		/*
		Returns the position of the linear potentiometer. The value is
		between 0 (slider down) and 100 (slider up).
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Position` callback. You can set the callback configuration
		with :func:`Set Position Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setPositionCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Position` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Position` callback.
		
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
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_SET_POSITION_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPositionCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Position Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c H H', returnCallback, errorCallback, false, true);
	};
	this.setMotorPosition = function(position, driveMode, holdPosition, returnCallback, errorCallback) {
		/*
		Sets the position of the potentiometer. The motorized potentiometer will
		immediately start to approach the position. Depending on the chosen drive mode,
		the position will either be reached as fast as possible or in a slow but smooth
		motion.
		
		The position has to be between 0 (slider down) and 100 (slider up).
		
		If you set the hold position parameter to true, the position will automatically
		be retained. If a user changes the position of the potentiometer, it will
		automatically drive back to the original set point.
		
		If the hold position parameter is set to false, the potentiometer can be changed
		again by the user as soon as the set point was reached once.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_SET_MOTOR_POSITION, [position, driveMode, holdPosition], 'H B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMotorPosition = function(returnCallback, errorCallback) {
		/*
		Returns the last motor position as set by :func:`Set Motor Position`. This is not
		the current position (use :func:`Get Position` to get the current position). This
		is the last used set point and configuration.
		
		The position reached parameter is true if the position has been reached at one point.
		The position may have been changed again in the meantime by the user.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_MOTOR_POSITION, [], '', 13, 'H B ? ?', returnCallback, errorCallback, false, true);
	};
	this.calibrate = function(returnCallback, errorCallback) {
		/*
		Starts a calibration procedure. The potentiometer will be driven to the extreme
		points to calibrate the potentiometer.
		
		The calibration is saved in flash, it does not have to be called on every start up.
		
		The Motorized Linear Poti Bricklet is already factory-calibrated during
		testing at Tinkerforge.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_CALIBRATE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setPositionReachedCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		Enables/Disables :cb:`Position Reached` callback.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_SET_POSITION_REACHED_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPositionReachedCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the :cb:`Position Reached` callback configuration
		as set by :func:`Set Position Reached Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_POSITION_REACHED_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletMotorizedLinearPoti.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletMotorizedLinearPoti;
