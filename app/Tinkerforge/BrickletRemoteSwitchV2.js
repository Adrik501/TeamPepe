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

BrickletRemoteSwitchV2.DEVICE_IDENTIFIER = 289;
BrickletRemoteSwitchV2.DEVICE_DISPLAY_NAME = 'Remote Switch Bricklet 2.0';
BrickletRemoteSwitchV2.CALLBACK_SWITCHING_DONE = 2;
BrickletRemoteSwitchV2.CALLBACK_REMOTE_STATUS_A = 14;
BrickletRemoteSwitchV2.CALLBACK_REMOTE_STATUS_B = 15;
BrickletRemoteSwitchV2.CALLBACK_REMOTE_STATUS_C = 16;
BrickletRemoteSwitchV2.FUNCTION_GET_SWITCHING_STATE = 1;
BrickletRemoteSwitchV2.FUNCTION_SET_REPEATS = 3;
BrickletRemoteSwitchV2.FUNCTION_GET_REPEATS = 4;
BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_A = 5;
BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_B = 6;
BrickletRemoteSwitchV2.FUNCTION_DIM_SOCKET_B = 7;
BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_C = 8;
BrickletRemoteSwitchV2.FUNCTION_SET_REMOTE_CONFIGURATION = 9;
BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_CONFIGURATION = 10;
BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_A = 11;
BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_B = 12;
BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_C = 13;
BrickletRemoteSwitchV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletRemoteSwitchV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletRemoteSwitchV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletRemoteSwitchV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletRemoteSwitchV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletRemoteSwitchV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletRemoteSwitchV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletRemoteSwitchV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletRemoteSwitchV2.FUNCTION_RESET = 243;
BrickletRemoteSwitchV2.FUNCTION_WRITE_UID = 248;
BrickletRemoteSwitchV2.FUNCTION_READ_UID = 249;
BrickletRemoteSwitchV2.FUNCTION_GET_IDENTITY = 255;
BrickletRemoteSwitchV2.SWITCHING_STATE_READY = 0;
BrickletRemoteSwitchV2.SWITCHING_STATE_BUSY = 1;
BrickletRemoteSwitchV2.SWITCH_TO_OFF = 0;
BrickletRemoteSwitchV2.SWITCH_TO_ON = 1;
BrickletRemoteSwitchV2.REMOTE_TYPE_A = 0;
BrickletRemoteSwitchV2.REMOTE_TYPE_B = 1;
BrickletRemoteSwitchV2.REMOTE_TYPE_C = 2;
BrickletRemoteSwitchV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletRemoteSwitchV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletRemoteSwitchV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletRemoteSwitchV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletRemoteSwitchV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletRemoteSwitchV2.BOOTLOADER_STATUS_OK = 0;
BrickletRemoteSwitchV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletRemoteSwitchV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletRemoteSwitchV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletRemoteSwitchV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletRemoteSwitchV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletRemoteSwitchV2.STATUS_LED_CONFIG_OFF = 0;
BrickletRemoteSwitchV2.STATUS_LED_CONFIG_ON = 1;
BrickletRemoteSwitchV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletRemoteSwitchV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletRemoteSwitchV2(uid, ipcon) {
	//Controls remote mains switches and receives signals from remotes

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletRemoteSwitchV2.DEVICE_IDENTIFIER, BrickletRemoteSwitchV2.DEVICE_DISPLAY_NAME);
	BrickletRemoteSwitchV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_SWITCHING_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SET_REPEATS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_REPEATS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_A] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_B] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_DIM_SOCKET_B] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_C] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SET_REMOTE_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_A] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_B] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_C] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRemoteSwitchV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRemoteSwitchV2.CALLBACK_SWITCHING_DONE] = [8, ''];
	this.callbackFormats[BrickletRemoteSwitchV2.CALLBACK_REMOTE_STATUS_A] = [13, 'B B B H'];
	this.callbackFormats[BrickletRemoteSwitchV2.CALLBACK_REMOTE_STATUS_B] = [17, 'I B B B H'];
	this.callbackFormats[BrickletRemoteSwitchV2.CALLBACK_REMOTE_STATUS_C] = [13, 'c B B H'];



	this.getSwitchingState = function(returnCallback, errorCallback) {
		/*
		Returns the current switching state. If the current state is busy, the
		Bricklet is currently sending a code to switch a socket. It will not
		accept any calls of switch socket functions until the state changes to ready.
		
		How long the switching takes is dependent on the number of repeats, see
		:func:`Set Repeats`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_SWITCHING_STATE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setRepeats = function(repeats, returnCallback, errorCallback) {
		/*
		Sets the number of times the code is sent when one of the Switch Socket
		functions is called. The repeats basically correspond to the amount of time
		that a button of the remote is pressed.
		
		Some dimmers are controlled by the length of a button pressed,
		this can be simulated by increasing the repeats.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SET_REPEATS, [repeats], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getRepeats = function(returnCallback, errorCallback) {
		/*
		Returns the number of repeats as set by :func:`Set Repeats`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_REPEATS, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.switchSocketA = function(houseCode, receiverCode, switchTo, returnCallback, errorCallback) {
		/*
		To switch a type A socket you have to give the house code, receiver code and the
		state (on or off) you want to switch to.
		
		A detailed description on how you can figure out the house and receiver code
		can be found :ref:`here <remote_switch_bricklet_type_a_house_and_receiver_code>`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_A, [houseCode, receiverCode, switchTo], 'B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.switchSocketB = function(address, unit, switchTo, returnCallback, errorCallback) {
		/*
		To switch a type B socket you have to give the address, unit and the state
		(on or off) you want to switch to.
		
		To switch all devices with the same address use 255 for the unit.
		
		A detailed description on how you can teach a socket the address and unit can
		be found :ref:`here <remote_switch_bricklet_type_b_address_and_unit>`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_B, [address, unit, switchTo], 'I B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.dimSocketB = function(address, unit, dimValue, returnCallback, errorCallback) {
		/*
		To control a type B dimmer you have to give the address, unit and the
		dim value you want to set the dimmer to.
		
		A detailed description on how you can teach a dimmer the address and unit can
		be found :ref:`here <remote_switch_bricklet_type_b_address_and_unit>`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_DIM_SOCKET_B, [address, unit, dimValue], 'I B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.switchSocketC = function(systemCode, deviceCode, switchTo, returnCallback, errorCallback) {
		/*
		To switch a type C socket you have to give the system code, device code and the
		state (on or off) you want to switch to.
		
		A detailed description on how you can figure out the system and device code
		can be found :ref:`here <remote_switch_bricklet_type_c_system_and_device_code>`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SWITCH_SOCKET_C, [systemCode, deviceCode, switchTo], 'c B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setRemoteConfiguration = function(remoteType, minimumRepeats, callbackEnabled, returnCallback, errorCallback) {
		/*
		Sets the configuration for **receiving** data from a remote of type A, B or C.
		
		* Remote Type: A, B or C depending on the type of remote you want to receive.
		* Minimum Repeats: The minimum number of repeated data packets until the callback
		  is triggered (if enabled).
		* Callback Enabled: Enable or disable callback (see :cb:`Remote Status A` callback,
		  :cb:`Remote Status B` callback and :cb:`Remote Status C` callback).
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SET_REMOTE_CONFIGURATION, [remoteType, minimumRepeats, callbackEnabled], 'B H ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getRemoteConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the remote configuration as set by :func:`Set Remote Configuration`
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_CONFIGURATION, [], '', 12, 'B H ?', returnCallback, errorCallback, false, true);
	};
	this.getRemoteStatusA = function(returnCallback, errorCallback) {
		/*
		Returns the house code, receiver code, switch state (on/off) and number of
		repeats for remote type A.
		
		Repeats == 0 means there was no button press. Repeats >= 1 means there
		was a button press with the specified house/receiver code. The repeats are the
		number of received identical data packets. The longer the button is pressed,
		the higher the repeat number.
		
		Use the callback to get this data automatically when a button is pressed,
		see :func:`Set Remote Configuration` and :cb:`Remote Status A` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_A, [], '', 13, 'B B B H', returnCallback, errorCallback, false, true);
	};
	this.getRemoteStatusB = function(returnCallback, errorCallback) {
		/*
		Returns the address (unique per remote), unit (button number), switch state
		(on/off) and number of repeats for remote type B.
		
		If the remote supports dimming the dim value is used instead of the switch state.
		
		If repeats=0 there was no button press. If repeats >= 1 there
		was a button press with the specified address/unit. The repeats are the number of received
		identical data packets. The longer the button is pressed, the higher the repeat number.
		
		Use the callback to get this data automatically when a button is pressed,
		see :func:`Set Remote Configuration` and :cb:`Remote Status B` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_B, [], '', 17, 'I B B B H', returnCallback, errorCallback, false, true);
	};
	this.getRemoteStatusC = function(returnCallback, errorCallback) {
		/*
		Returns the system code, device code, switch state (on/off) and number of repeats for
		remote type C.
		
		If repeats=0 there was no button press. If repeats >= 1 there
		was a button press with the specified system/device code. The repeats are the number of received
		identical data packets. The longer the button is pressed, the higher the repeat number.
		
		Use the callback to get this data automatically when a button is pressed,
		see :func:`Set Remote Configuration` and :cb:`Remote Status C` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_REMOTE_STATUS_C, [], '', 13, 'c B B H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRemoteSwitchV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletRemoteSwitchV2;
