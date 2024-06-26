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

BrickletIndustrialCounter.DEVICE_IDENTIFIER = 293;
BrickletIndustrialCounter.DEVICE_DISPLAY_NAME = 'Industrial Counter Bricklet';
BrickletIndustrialCounter.CALLBACK_ALL_COUNTER = 19;
BrickletIndustrialCounter.CALLBACK_ALL_SIGNAL_DATA = 20;
BrickletIndustrialCounter.FUNCTION_GET_COUNTER = 1;
BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER = 2;
BrickletIndustrialCounter.FUNCTION_SET_COUNTER = 3;
BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER = 4;
BrickletIndustrialCounter.FUNCTION_GET_SIGNAL_DATA = 5;
BrickletIndustrialCounter.FUNCTION_GET_ALL_SIGNAL_DATA = 6;
BrickletIndustrialCounter.FUNCTION_SET_COUNTER_ACTIVE = 7;
BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER_ACTIVE = 8;
BrickletIndustrialCounter.FUNCTION_GET_COUNTER_ACTIVE = 9;
BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER_ACTIVE = 10;
BrickletIndustrialCounter.FUNCTION_SET_COUNTER_CONFIGURATION = 11;
BrickletIndustrialCounter.FUNCTION_GET_COUNTER_CONFIGURATION = 12;
BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER_CALLBACK_CONFIGURATION = 13;
BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER_CALLBACK_CONFIGURATION = 14;
BrickletIndustrialCounter.FUNCTION_SET_ALL_SIGNAL_DATA_CALLBACK_CONFIGURATION = 15;
BrickletIndustrialCounter.FUNCTION_GET_ALL_SIGNAL_DATA_CALLBACK_CONFIGURATION = 16;
BrickletIndustrialCounter.FUNCTION_SET_CHANNEL_LED_CONFIG = 17;
BrickletIndustrialCounter.FUNCTION_GET_CHANNEL_LED_CONFIG = 18;
BrickletIndustrialCounter.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIndustrialCounter.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIndustrialCounter.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIndustrialCounter.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIndustrialCounter.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIndustrialCounter.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIndustrialCounter.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIndustrialCounter.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIndustrialCounter.FUNCTION_RESET = 243;
BrickletIndustrialCounter.FUNCTION_WRITE_UID = 248;
BrickletIndustrialCounter.FUNCTION_READ_UID = 249;
BrickletIndustrialCounter.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialCounter.CHANNEL_0 = 0;
BrickletIndustrialCounter.CHANNEL_1 = 1;
BrickletIndustrialCounter.CHANNEL_2 = 2;
BrickletIndustrialCounter.CHANNEL_3 = 3;
BrickletIndustrialCounter.COUNT_EDGE_RISING = 0;
BrickletIndustrialCounter.COUNT_EDGE_FALLING = 1;
BrickletIndustrialCounter.COUNT_EDGE_BOTH = 2;
BrickletIndustrialCounter.COUNT_DIRECTION_UP = 0;
BrickletIndustrialCounter.COUNT_DIRECTION_DOWN = 1;
BrickletIndustrialCounter.COUNT_DIRECTION_EXTERNAL_UP = 2;
BrickletIndustrialCounter.COUNT_DIRECTION_EXTERNAL_DOWN = 3;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_1 = 0;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_2 = 1;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_4 = 2;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_8 = 3;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_16 = 4;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_32 = 5;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_64 = 6;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_128 = 7;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_256 = 8;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_512 = 9;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_1024 = 10;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_2048 = 11;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_4096 = 12;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_8192 = 13;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_16384 = 14;
BrickletIndustrialCounter.DUTY_CYCLE_PRESCALER_32768 = 15;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_128_MS = 0;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_256_MS = 1;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_512_MS = 2;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_1024_MS = 3;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_2048_MS = 4;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_4096_MS = 5;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_8192_MS = 6;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_16384_MS = 7;
BrickletIndustrialCounter.FREQUENCY_INTEGRATION_TIME_32768_MS = 8;
BrickletIndustrialCounter.CHANNEL_LED_CONFIG_OFF = 0;
BrickletIndustrialCounter.CHANNEL_LED_CONFIG_ON = 1;
BrickletIndustrialCounter.CHANNEL_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialCounter.CHANNEL_LED_CONFIG_SHOW_CHANNEL_STATUS = 3;
BrickletIndustrialCounter.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIndustrialCounter.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIndustrialCounter.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIndustrialCounter.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIndustrialCounter.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIndustrialCounter.BOOTLOADER_STATUS_OK = 0;
BrickletIndustrialCounter.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIndustrialCounter.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIndustrialCounter.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIndustrialCounter.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIndustrialCounter.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIndustrialCounter.STATUS_LED_CONFIG_OFF = 0;
BrickletIndustrialCounter.STATUS_LED_CONFIG_ON = 1;
BrickletIndustrialCounter.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialCounter.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIndustrialCounter(uid, ipcon) {
	//4 channel counter up to 4MHz

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialCounter.DEVICE_IDENTIFIER, BrickletIndustrialCounter.DEVICE_DISPLAY_NAME);
	BrickletIndustrialCounter.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_COUNTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_COUNTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_SIGNAL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_ALL_SIGNAL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_COUNTER_ACTIVE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER_ACTIVE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_COUNTER_ACTIVE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER_ACTIVE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_COUNTER_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_COUNTER_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_ALL_SIGNAL_DATA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_ALL_SIGNAL_DATA_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_CHANNEL_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_CHANNEL_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialCounter.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialCounter.CALLBACK_ALL_COUNTER] = [40, 'q4'];
	this.callbackFormats[BrickletIndustrialCounter.CALLBACK_ALL_SIGNAL_DATA] = [65, 'H4 Q4 I4 ?4'];



	this.getCounter = function(channel, returnCallback, errorCallback) {
		/*
		Returns the current counter value for the given channel.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_COUNTER, [channel], 'B', 16, 'q', returnCallback, errorCallback, false, true);
	};
	this.getAllCounter = function(returnCallback, errorCallback) {
		/*
		Returns the current counter values for all four channels.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER, [], '', 40, 'q4', returnCallback, errorCallback, false, true);
	};
	this.setCounter = function(channel, counter, returnCallback, errorCallback) {
		/*
		Sets the counter value for the given channel.
		
		The default value for the counters on startup is 0.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_COUNTER, [channel, counter], 'B q', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setAllCounter = function(counter, returnCallback, errorCallback) {
		/*
		Sets the counter values for all four channels.
		
		The default value for the counters on startup is 0.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER, [counter], 'q4', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSignalData = function(channel, returnCallback, errorCallback) {
		/*
		Returns the signal data (duty cycle, period, frequency and value) for the
		given channel.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_SIGNAL_DATA, [channel], 'B', 23, 'H Q I ?', returnCallback, errorCallback, false, true);
	};
	this.getAllSignalData = function(returnCallback, errorCallback) {
		/*
		Returns the signal data (duty cycle, period, frequency and value) for all four
		channels.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_ALL_SIGNAL_DATA, [], '', 65, 'H4 Q4 I4 ?4', returnCallback, errorCallback, false, true);
	};
	this.setCounterActive = function(channel, active, returnCallback, errorCallback) {
		/*
		Activates/deactivates the counter of the given channel.
		
		true = activate, false = deactivate.
		
		By default all channels are activated.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_COUNTER_ACTIVE, [channel, active], 'B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setAllCounterActive = function(active, returnCallback, errorCallback) {
		/*
		Activates/deactivates the counter of all four channels.
		
		true = activate, false = deactivate.
		
		By default all channels are activated.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER_ACTIVE, [active], '?4', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCounterActive = function(channel, returnCallback, errorCallback) {
		/*
		Returns the activation state of the given channel.
		
		true = activated, false = deactivated.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_COUNTER_ACTIVE, [channel], 'B', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getAllCounterActive = function(returnCallback, errorCallback) {
		/*
		Returns the activation state of all four channels.
		
		true = activated, false = deactivated.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER_ACTIVE, [], '', 9, '?4', returnCallback, errorCallback, false, true);
	};
	this.setCounterConfiguration = function(channel, countEdge, countDirection, dutyCyclePrescaler, frequencyIntegrationTime, returnCallback, errorCallback) {
		/*
		Sets the counter configuration for the given channel.
		
		* Count Edge: Counter can count on rising, falling or both edges.
		* Count Direction: Counter can count up or down. You can also use
		  another channel as direction input, see
		  `here <https://www.tinkerforge.com/en/doc/Hardware/Bricklets/Industrial_Counter.html#external-count-direction>`__
		  for details.
		* Duty Cycle Prescaler: Sets a divider for the internal clock. See
		  `here <https://www.tinkerforge.com/en/doc/Hardware/Bricklets/Industrial_Counter.html#duty-cycle-prescaler-and-frequency-integration-time>`__
		  for details.
		* Frequency Integration Time: Sets the integration time for the
		  frequency measurement. See
		  `here <https://www.tinkerforge.com/en/doc/Hardware/Bricklets/Industrial_Counter.html#duty-cycle-prescaler-and-frequency-integration-time>`__
		  for details.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_COUNTER_CONFIGURATION, [channel, countEdge, countDirection, dutyCyclePrescaler, frequencyIntegrationTime], 'B B B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCounterConfiguration = function(channel, returnCallback, errorCallback) {
		/*
		Returns the counter configuration as set by :func:`Set Counter Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_COUNTER_CONFIGURATION, [channel], 'B', 12, 'B B B B', returnCallback, errorCallback, false, true);
	};
	this.setAllCounterCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`All Counter`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_ALL_COUNTER_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllCounterCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set All Counter Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_ALL_COUNTER_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setAllSignalDataCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`All Signal Data`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_ALL_SIGNAL_DATA_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllSignalDataCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set All Signal Data Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_ALL_SIGNAL_DATA_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.setChannelLEDConfig = function(channel, config, returnCallback, errorCallback) {
		/*
		Each channel has a corresponding LED. You can turn the LED off, on or show a
		heartbeat. You can also set the LED to "Channel Status". In this mode the
		LED is on if the channel is high and off otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_CHANNEL_LED_CONFIG, [channel, config], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getChannelLEDConfig = function(channel, returnCallback, errorCallback) {
		/*
		Returns the channel LED configuration as set by :func:`Set Channel LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_CHANNEL_LED_CONFIG, [channel], 'B', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialCounter.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialCounter;
