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

BrickletIO16V2.DEVICE_IDENTIFIER = 2114;
BrickletIO16V2.DEVICE_DISPLAY_NAME = 'IO-16 Bricklet 2.0';
BrickletIO16V2.CALLBACK_INPUT_VALUE = 15;
BrickletIO16V2.CALLBACK_ALL_INPUT_VALUE = 16;
BrickletIO16V2.CALLBACK_MONOFLOP_DONE = 17;
BrickletIO16V2.FUNCTION_SET_VALUE = 1;
BrickletIO16V2.FUNCTION_GET_VALUE = 2;
BrickletIO16V2.FUNCTION_SET_SELECTED_VALUE = 3;
BrickletIO16V2.FUNCTION_SET_CONFIGURATION = 4;
BrickletIO16V2.FUNCTION_GET_CONFIGURATION = 5;
BrickletIO16V2.FUNCTION_SET_INPUT_VALUE_CALLBACK_CONFIGURATION = 6;
BrickletIO16V2.FUNCTION_GET_INPUT_VALUE_CALLBACK_CONFIGURATION = 7;
BrickletIO16V2.FUNCTION_SET_ALL_INPUT_VALUE_CALLBACK_CONFIGURATION = 8;
BrickletIO16V2.FUNCTION_GET_ALL_INPUT_VALUE_CALLBACK_CONFIGURATION = 9;
BrickletIO16V2.FUNCTION_SET_MONOFLOP = 10;
BrickletIO16V2.FUNCTION_GET_MONOFLOP = 11;
BrickletIO16V2.FUNCTION_GET_EDGE_COUNT = 12;
BrickletIO16V2.FUNCTION_SET_EDGE_COUNT_CONFIGURATION = 13;
BrickletIO16V2.FUNCTION_GET_EDGE_COUNT_CONFIGURATION = 14;
BrickletIO16V2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIO16V2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIO16V2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIO16V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIO16V2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIO16V2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIO16V2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIO16V2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIO16V2.FUNCTION_RESET = 243;
BrickletIO16V2.FUNCTION_WRITE_UID = 248;
BrickletIO16V2.FUNCTION_READ_UID = 249;
BrickletIO16V2.FUNCTION_GET_IDENTITY = 255;
BrickletIO16V2.DIRECTION_IN = 'i';
BrickletIO16V2.DIRECTION_OUT = 'o';
BrickletIO16V2.EDGE_TYPE_RISING = 0;
BrickletIO16V2.EDGE_TYPE_FALLING = 1;
BrickletIO16V2.EDGE_TYPE_BOTH = 2;
BrickletIO16V2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIO16V2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIO16V2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIO16V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIO16V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIO16V2.BOOTLOADER_STATUS_OK = 0;
BrickletIO16V2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIO16V2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIO16V2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIO16V2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIO16V2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIO16V2.STATUS_LED_CONFIG_OFF = 0;
BrickletIO16V2.STATUS_LED_CONFIG_ON = 1;
BrickletIO16V2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIO16V2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIO16V2(uid, ipcon) {
	//16-channel digital input/output

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIO16V2.DEVICE_IDENTIFIER, BrickletIO16V2.DEVICE_DISPLAY_NAME);
	BrickletIO16V2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_SELECTED_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_INPUT_VALUE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_INPUT_VALUE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_ALL_INPUT_VALUE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_ALL_INPUT_VALUE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_EDGE_COUNT_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_EDGE_COUNT_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16V2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16V2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIO16V2.CALLBACK_INPUT_VALUE] = [11, 'B ? ?'];
	this.callbackFormats[BrickletIO16V2.CALLBACK_ALL_INPUT_VALUE] = [12, '?16 ?16'];
	this.callbackFormats[BrickletIO16V2.CALLBACK_MONOFLOP_DONE] = [10, 'B ?'];



	this.setValue = function(value, returnCallback, errorCallback) {
		/*
		Sets the output value of all sixteen channels. A value of *true* or *false* outputs
		logic 1 or logic 0 respectively on the corresponding channel.
		
		Use :func:`Set Selected Value` to change only one output channel state.
		
		For example: (True, True, False, False, ..., False) will turn the channels 0-1
		high and the channels 2-15 low.
		
		All running monoflop timers will be aborted if this function is called.
		
		.. note::
		 This function does nothing for channels that are configured as input. Pull-up
		 resistors can be switched on with :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_VALUE, [value], '?16', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getValue = function(returnCallback, errorCallback) {
		/*
		Returns the logic levels that are currently measured on the channels.
		This function works if the channel is configured as input as well as if it is
		configured as output.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_VALUE, [], '', 10, '?16', returnCallback, errorCallback, false, true);
	};
	this.setSelectedValue = function(channel, value, returnCallback, errorCallback) {
		/*
		Sets the output value of a specific channel without affecting the other channels.
		
		A running monoflop timer for the specific channel will be aborted if this
		function is called.
		
		.. note::
		 This function does nothing for channels that are configured as input. Pull-up
		 resistors can be switched on with :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_SELECTED_VALUE, [channel, value], 'B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(channel, direction, value, returnCallback, errorCallback) {
		/*
		Configures the value and direction of a specific channel. Possible directions
		are 'i' and 'o' for input and output.
		
		If the direction is configured as output, the value is either high or low
		(set as *true* or *false*).
		
		If the direction is configured as input, the value is either pull-up or
		default (set as *true* or *false*).
		
		For example:
		
		* (0, 'i', true) will set channel-0 as input pull-up.
		* (1, 'i', false) will set channel-1 as input default (floating if nothing is connected).
		* (2, 'o', true) will set channel-2 as output high.
		* (3, 'o', false) will set channel-3 as output low.
		
		A running monoflop timer for the specific channel will be aborted if this
		function is called.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_CONFIGURATION, [channel, direction, value], 'B c ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(channel, returnCallback, errorCallback) {
		/*
		Returns the channel configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_CONFIGURATION, [channel], 'B', 10, 'c ?', returnCallback, errorCallback, false, true);
	};
	this.setInputValueCallbackConfiguration = function(channel, period, valueHasToChange, returnCallback, errorCallback) {
		/*
		This callback can be configured per channel.
		
		The period is the period with which the :cb:`Input Value`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_INPUT_VALUE_CALLBACK_CONFIGURATION, [channel, period, valueHasToChange], 'B I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getInputValueCallbackConfiguration = function(channel, returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Input Value Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_INPUT_VALUE_CALLBACK_CONFIGURATION, [channel], 'B', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setAllInputValueCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`All Input Value`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_ALL_INPUT_VALUE_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllInputValueCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set All Input Value Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_ALL_INPUT_VALUE_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setMonoflop = function(channel, value, time, returnCallback, errorCallback) {
		/*
		Configures a monoflop of the specified channel.
		
		The second parameter is the desired value of the specified
		channel. A *true* means relay closed and a *false* means relay open.
		
		The third parameter indicates the time that the channels should hold
		the value.
		
		If this function is called with the parameters (0, 1, 1500) channel 0 will
		close and in 1.5s channel 0 will open again
		
		A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
		have a RS485 bus and a IO-16 Bricklet 2.0 connected to one of
		the slave stacks. You can now call this function every second, with a time
		parameter of two seconds and channel 0 closed. Channel 0 will be closed all the
		time. If now the RS485 connection is lost, then channel 0 will be opened in at
		most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_MONOFLOP, [channel, value, time], 'B ? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMonoflop = function(channel, returnCallback, errorCallback) {
		/*
		Returns (for the given channel) the current value and the time as set by
		:func:`Set Monoflop` as well as the remaining time until the value flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_MONOFLOP, [channel], 'B', 17, '? I I', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCount = function(channel, resetCounter, returnCallback, errorCallback) {
		/*
		Returns the current value of the edge counter for the selected channel. You can
		configure the edges that are counted with :func:`Set Edge Count Configuration`.
		
		If you set the reset counter to *true*, the count is set back to 0
		directly after it is read.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_EDGE_COUNT, [channel, resetCounter], 'B ?', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setEdgeCountConfiguration = function(channel, edgeType, debounce, returnCallback, errorCallback) {
		/*
		Configures the edge counter for a specific channel.
		
		The edge type parameter configures if rising edges, falling edges or
		both are counted if the channel is configured for input. Possible edge types are:
		
		* 0 = rising
		* 1 = falling
		* 2 = both
		
		Configuring an edge counter resets its value to 0.
		
		If you don't know what any of this means, just leave it at default. The
		default configuration is very likely OK for you.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_EDGE_COUNT_CONFIGURATION, [channel, edgeType, debounce], 'B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCountConfiguration = function(channel, returnCallback, errorCallback) {
		/*
		Returns the edge type and debounce time for the selected channel as set by
		:func:`Set Edge Count Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_EDGE_COUNT_CONFIGURATION, [channel], 'B', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIO16V2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIO16V2;
