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

BrickletSolidStateRelayV2.DEVICE_IDENTIFIER = 296;
BrickletSolidStateRelayV2.DEVICE_DISPLAY_NAME = 'Solid State Relay Bricklet 2.0';
BrickletSolidStateRelayV2.CALLBACK_MONOFLOP_DONE = 5;
BrickletSolidStateRelayV2.FUNCTION_SET_STATE = 1;
BrickletSolidStateRelayV2.FUNCTION_GET_STATE = 2;
BrickletSolidStateRelayV2.FUNCTION_SET_MONOFLOP = 3;
BrickletSolidStateRelayV2.FUNCTION_GET_MONOFLOP = 4;
BrickletSolidStateRelayV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletSolidStateRelayV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletSolidStateRelayV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletSolidStateRelayV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletSolidStateRelayV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletSolidStateRelayV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletSolidStateRelayV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletSolidStateRelayV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletSolidStateRelayV2.FUNCTION_RESET = 243;
BrickletSolidStateRelayV2.FUNCTION_WRITE_UID = 248;
BrickletSolidStateRelayV2.FUNCTION_READ_UID = 249;
BrickletSolidStateRelayV2.FUNCTION_GET_IDENTITY = 255;
BrickletSolidStateRelayV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletSolidStateRelayV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletSolidStateRelayV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletSolidStateRelayV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletSolidStateRelayV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletSolidStateRelayV2.BOOTLOADER_STATUS_OK = 0;
BrickletSolidStateRelayV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletSolidStateRelayV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletSolidStateRelayV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletSolidStateRelayV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletSolidStateRelayV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletSolidStateRelayV2.STATUS_LED_CONFIG_OFF = 0;
BrickletSolidStateRelayV2.STATUS_LED_CONFIG_ON = 1;
BrickletSolidStateRelayV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletSolidStateRelayV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletSolidStateRelayV2(uid, ipcon) {
	//Controls AC and DC Solid State Relays

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletSolidStateRelayV2.DEVICE_IDENTIFIER, BrickletSolidStateRelayV2.DEVICE_DISPLAY_NAME);
	BrickletSolidStateRelayV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_SET_STATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSolidStateRelayV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSolidStateRelayV2.CALLBACK_MONOFLOP_DONE] = [9, '?'];



	this.setState = function(state, returnCallback, errorCallback) {
		/*
		Sets the state of the relays *true* means on and *false* means off.
		
		A running monoflop timer will be aborted if this function is called.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_SET_STATE, [state], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getState = function(returnCallback, errorCallback) {
		/*
		Returns the state of the relay, *true* means on and *false* means off.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_GET_STATE, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setMonoflop = function(state, time, returnCallback, errorCallback) {
		/*
		The first parameter  is the desired state of the relay (*true* means on
		and *false* means off). The second parameter indicates the time that
		the relay should hold the state.
		
		If this function is called with the parameters (true, 1500):
		The relay will turn on and in 1.5s it will turn off again.
		
		A monoflop can be used as a failsafe mechanism. For example: Lets assume you
		have a RS485 bus and a Solid State Relay Bricklet connected to one of the slave
		stacks. You can now call this function every second, with a time parameter
		of two seconds. The relay will be on all the time. If now the RS485
		connection is lost, the relay will turn off in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_SET_MONOFLOP, [state, time], '? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMonoflop = function(returnCallback, errorCallback) {
		/*
		Returns the current state and the time as set by
		:func:`Set Monoflop` as well as the remaining time until the state flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_GET_MONOFLOP, [], '', 17, '? I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSolidStateRelayV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletSolidStateRelayV2;
