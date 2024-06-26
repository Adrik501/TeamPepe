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

BrickletIndustrialDigitalOut4V2.DEVICE_IDENTIFIER = 2124;
BrickletIndustrialDigitalOut4V2.DEVICE_DISPLAY_NAME = 'Industrial Digital Out 4 Bricklet 2.0';
BrickletIndustrialDigitalOut4V2.CALLBACK_MONOFLOP_DONE = 6;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_VALUE = 1;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_VALUE = 2;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_SELECTED_VALUE = 3;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_MONOFLOP = 4;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_MONOFLOP = 5;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_CHANNEL_LED_CONFIG = 7;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_CHANNEL_LED_CONFIG = 8;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_PWM_CONFIGURATION = 9;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_PWM_CONFIGURATION = 10;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIndustrialDigitalOut4V2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIndustrialDigitalOut4V2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIndustrialDigitalOut4V2.FUNCTION_RESET = 243;
BrickletIndustrialDigitalOut4V2.FUNCTION_WRITE_UID = 248;
BrickletIndustrialDigitalOut4V2.FUNCTION_READ_UID = 249;
BrickletIndustrialDigitalOut4V2.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDigitalOut4V2.CHANNEL_LED_CONFIG_OFF = 0;
BrickletIndustrialDigitalOut4V2.CHANNEL_LED_CONFIG_ON = 1;
BrickletIndustrialDigitalOut4V2.CHANNEL_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialDigitalOut4V2.CHANNEL_LED_CONFIG_SHOW_CHANNEL_STATUS = 3;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_STATUS_OK = 0;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIndustrialDigitalOut4V2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIndustrialDigitalOut4V2.STATUS_LED_CONFIG_OFF = 0;
BrickletIndustrialDigitalOut4V2.STATUS_LED_CONFIG_ON = 1;
BrickletIndustrialDigitalOut4V2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialDigitalOut4V2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIndustrialDigitalOut4V2(uid, ipcon) {
	//4 galvanically isolated digital outputs

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialDigitalOut4V2.DEVICE_IDENTIFIER, BrickletIndustrialDigitalOut4V2.DEVICE_DISPLAY_NAME);
	BrickletIndustrialDigitalOut4V2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_SELECTED_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_CHANNEL_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_CHANNEL_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_PWM_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_PWM_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4V2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialDigitalOut4V2.CALLBACK_MONOFLOP_DONE] = [10, 'B ?'];



	this.setValue = function(value, returnCallback, errorCallback) {
		/*
		Sets the output value of all four channels. A value of *true* or *false* outputs
		logic 1 or logic 0 respectively on the corresponding channel.
		
		Use :func:`Set Selected Value` to change only one output channel state.
		
		All running monoflop timers and PWMs will be aborted if this function is called.
		
		For example: (True, True, False, False) will turn the channels 0-1 high and the
		channels 2-3 low.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_VALUE, [value], '?4', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getValue = function(returnCallback, errorCallback) {
		/*
		Returns the logic levels that are currently output on the channels.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_VALUE, [], '', 9, '?4', returnCallback, errorCallback, false, true);
	};
	this.setSelectedValue = function(channel, value, returnCallback, errorCallback) {
		/*
		Sets the output value of a specific channel without affecting the other channels.
		
		A running monoflop timer or PWM for the specified channel will be aborted if this
		function is called.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_SELECTED_VALUE, [channel, value], 'B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setMonoflop = function(channel, value, time, returnCallback, errorCallback) {
		/*
		The first parameter is the desired state of the channel (*true* means output *high*
		and *false* means output *low*). The second parameter indicates the time that
		the channel should hold the state.
		
		If this function is called with the parameters (true, 1500):
		The channel will turn on and in 1.5s it will turn off again.
		
		A PWM for the selected channel will be aborted if this function is called.
		
		A monoflop can be used as a failsafe mechanism. For example: Lets assume you
		have a RS485 bus and a IO-4 Bricklet is connected to one of the slave
		stacks. You can now call this function every second, with a time parameter
		of two seconds. The channel will be *high* all the time. If now the RS485
		connection is lost, the channel will turn *low* in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_MONOFLOP, [channel, value, time], 'B ? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMonoflop = function(channel, returnCallback, errorCallback) {
		/*
		Returns (for the given channel) the current value and the time as set by
		:func:`Set Monoflop` as well as the remaining time until the value flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_MONOFLOP, [channel], 'B', 17, '? I I', returnCallback, errorCallback, false, true);
	};
	this.setChannelLEDConfig = function(channel, config, returnCallback, errorCallback) {
		/*
		Each channel has a corresponding LED. You can turn the LED off, on or show a
		heartbeat. You can also set the LED to "Channel Status". In this mode the
		LED is on if the channel is high and off otherwise.
		
		By default all channel LEDs are configured as "Channel Status".
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_CHANNEL_LED_CONFIG, [channel, config], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getChannelLEDConfig = function(channel, returnCallback, errorCallback) {
		/*
		Returns the channel LED configuration as set by :func:`Set Channel LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_CHANNEL_LED_CONFIG, [channel], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setPWMConfiguration = function(channel, frequency, dutyCycle, returnCallback, errorCallback) {
		/*
		Activates a PWM for the given channel.
		
		To turn the PWM off again, you can set the frequency to 0 or any other
		function that changes a value of the channel (e.g. :func:`Set Selected Value`).
		
		The optocoupler of the Industrial Digital
		Out 4 Bricklet 2.0 has a rise time and fall time of 11.5us (each) at 24V. So the maximum
		useful frequency value is about 400000 (40kHz).
		
		A running monoflop timer for the given channel will be aborted if this function
		is called.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_PWM_CONFIGURATION, [channel, frequency, dutyCycle], 'B I H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPWMConfiguration = function(channel, returnCallback, errorCallback) {
		/*
		Returns the PWM configuration as set by :func:`Set PWM Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_PWM_CONFIGURATION, [channel], 'B', 14, 'I H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4V2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialDigitalOut4V2;
