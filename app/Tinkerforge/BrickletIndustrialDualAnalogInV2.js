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

BrickletIndustrialDualAnalogInV2.DEVICE_IDENTIFIER = 2121;
BrickletIndustrialDualAnalogInV2.DEVICE_DISPLAY_NAME = 'Industrial Dual Analog In Bricklet 2.0';
BrickletIndustrialDualAnalogInV2.CALLBACK_VOLTAGE = 4;
BrickletIndustrialDualAnalogInV2.CALLBACK_ALL_VOLTAGES = 17;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_VOLTAGE = 1;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_CONFIGURATION = 2;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_CONFIGURATION = 3;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_SAMPLE_RATE = 5;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_SAMPLE_RATE = 6;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CALIBRATION = 7;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CALIBRATION = 8;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ADC_VALUES = 9;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CHANNEL_LED_CONFIG = 10;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHANNEL_LED_CONFIG = 11;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CHANNEL_LED_STATUS_CONFIG = 12;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHANNEL_LED_STATUS_CONFIG = 13;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ALL_VOLTAGES = 14;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_ALL_VOLTAGES_CALLBACK_CONFIGURATION = 15;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ALL_VOLTAGES_CALLBACK_CONFIGURATION = 16;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletIndustrialDualAnalogInV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletIndustrialDualAnalogInV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletIndustrialDualAnalogInV2.FUNCTION_RESET = 243;
BrickletIndustrialDualAnalogInV2.FUNCTION_WRITE_UID = 248;
BrickletIndustrialDualAnalogInV2.FUNCTION_READ_UID = 249;
BrickletIndustrialDualAnalogInV2.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDualAnalogInV2.THRESHOLD_OPTION_OFF = 'x';
BrickletIndustrialDualAnalogInV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletIndustrialDualAnalogInV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletIndustrialDualAnalogInV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletIndustrialDualAnalogInV2.THRESHOLD_OPTION_GREATER = '>';
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_976_SPS = 0;
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_488_SPS = 1;
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_244_SPS = 2;
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_122_SPS = 3;
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_61_SPS = 4;
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_4_SPS = 5;
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_2_SPS = 6;
BrickletIndustrialDualAnalogInV2.SAMPLE_RATE_1_SPS = 7;
BrickletIndustrialDualAnalogInV2.CHANNEL_LED_CONFIG_OFF = 0;
BrickletIndustrialDualAnalogInV2.CHANNEL_LED_CONFIG_ON = 1;
BrickletIndustrialDualAnalogInV2.CHANNEL_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialDualAnalogInV2.CHANNEL_LED_CONFIG_SHOW_CHANNEL_STATUS = 3;
BrickletIndustrialDualAnalogInV2.CHANNEL_LED_STATUS_CONFIG_THRESHOLD = 0;
BrickletIndustrialDualAnalogInV2.CHANNEL_LED_STATUS_CONFIG_INTENSITY = 1;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_STATUS_OK = 0;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletIndustrialDualAnalogInV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletIndustrialDualAnalogInV2.STATUS_LED_CONFIG_OFF = 0;
BrickletIndustrialDualAnalogInV2.STATUS_LED_CONFIG_ON = 1;
BrickletIndustrialDualAnalogInV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletIndustrialDualAnalogInV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletIndustrialDualAnalogInV2(uid, ipcon) {
	//Measures two DC voltages between -35V and +35V with 24bit resolution each

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialDualAnalogInV2.DEVICE_IDENTIFIER, BrickletIndustrialDualAnalogInV2.DEVICE_DISPLAY_NAME);
	BrickletIndustrialDualAnalogInV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_SAMPLE_RATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ADC_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CHANNEL_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHANNEL_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CHANNEL_LED_STATUS_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHANNEL_LED_STATUS_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ALL_VOLTAGES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_ALL_VOLTAGES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ALL_VOLTAGES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDualAnalogInV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialDualAnalogInV2.CALLBACK_VOLTAGE] = [13, 'B i'];
	this.callbackFormats[BrickletIndustrialDualAnalogInV2.CALLBACK_ALL_VOLTAGES] = [16, 'i2'];



	this.getVoltage = function(channel, returnCallback, errorCallback) {
		/*
		Returns the voltage for the given channel.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Voltage` callback. You can set the callback configuration
		with :func:`Set Voltage Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_VOLTAGE, [channel], 'B', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setVoltageCallbackConfiguration = function(channel, period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Voltage` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Voltage` callback.
		
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
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_VOLTAGE_CALLBACK_CONFIGURATION, [channel, period, valueHasToChange, option, min, max], 'B I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVoltageCallbackConfiguration = function(channel, returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Voltage Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_VOLTAGE_CALLBACK_CONFIGURATION, [channel], 'B', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.setSampleRate = function(rate, returnCallback, errorCallback) {
		/*
		Sets the sample rate. The sample rate can be between 1 sample per second
		and 976 samples per second. Decreasing the sample rate will also decrease the
		noise on the data.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_SAMPLE_RATE, [rate], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSampleRate = function(returnCallback, errorCallback) {
		/*
		Returns the sample rate as set by :func:`Set Sample Rate`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_SAMPLE_RATE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setCalibration = function(offset, gain, returnCallback, errorCallback) {
		/*
		Sets offset and gain of MCP3911 internal calibration registers.
		
		See MCP3911 datasheet 7.7 and 7.8. The Industrial Dual Analog In Bricklet 2.0
		is already factory calibrated by Tinkerforge. It should not be necessary
		for you to use this function
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CALIBRATION, [offset, gain], 'i2 i2', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the calibration as set by :func:`Set Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CALIBRATION, [], '', 24, 'i2 i2', returnCallback, errorCallback, false, true);
	};
	this.getADCValues = function(returnCallback, errorCallback) {
		/*
		Returns the ADC values as given by the MCP3911 IC. This function
		is needed for proper calibration, see :func:`Set Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ADC_VALUES, [], '', 16, 'i2', returnCallback, errorCallback, false, true);
	};
	this.setChannelLEDConfig = function(channel, config, returnCallback, errorCallback) {
		/*
		Each channel has a corresponding LED. You can turn the LED off, on or show a
		heartbeat. You can also set the LED to "Channel Status". In this mode the
		LED can either be turned on with a pre-defined threshold or the intensity
		of the LED can change with the measured value.
		
		You can configure the channel status behavior with :func:`Set Channel LED Status Config`.
		
		By default all channel LEDs are configured as "Channel Status".
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CHANNEL_LED_CONFIG, [channel, config], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getChannelLEDConfig = function(channel, returnCallback, errorCallback) {
		/*
		Returns the channel LED configuration as set by :func:`Set Channel LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHANNEL_LED_CONFIG, [channel], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setChannelLEDStatusConfig = function(channel, min, max, config, returnCallback, errorCallback) {
		/*
		Sets the channel LED status config. This config is used if the channel LED is
		configured as "Channel Status", see :func:`Set Channel LED Config`.
		
		For each channel you can choose between threshold and intensity mode.
		
		In threshold mode you can define a positive or a negative threshold.
		For a positive threshold set the "min" parameter to the threshold value in mV
		above which the LED should turn on and set the "max" parameter to 0. Example:
		If you set a positive threshold of 10V, the LED will turn on as soon as the
		voltage exceeds 10V and turn off again if it goes below 10V.
		For a negative threshold set the "max" parameter to the threshold value in mV
		below which the LED should turn on and set the "min" parameter to 0. Example:
		If you set a negative threshold of 10V, the LED will turn on as soon as the
		voltage goes below 10V and the LED will turn off when the voltage exceeds 10V.
		
		In intensity mode you can define a range in mV that is used to scale the brightness
		of the LED. Example with min=4V, max=20V: The LED is off at 4V, on at 20V
		and the brightness is linearly scaled between the values 4V and 20V. If the
		min value is greater than the max value, the LED brightness is scaled the other
		way around.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_CHANNEL_LED_STATUS_CONFIG, [channel, min, max, config], 'B i i B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getChannelLEDStatusConfig = function(channel, returnCallback, errorCallback) {
		/*
		Returns the channel LED status configuration as set by
		:func:`Set Channel LED Status Config`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHANNEL_LED_STATUS_CONFIG, [channel], 'B', 17, 'i i B', returnCallback, errorCallback, false, true);
	};
	this.getAllVoltages = function(returnCallback, errorCallback) {
		/*
		Returns the voltages for all channels.
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`All Voltages` callback. You can set the callback configuration
		with :func:`Set All Voltages Callback Configuration`.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ALL_VOLTAGES, [], '', 16, 'i2', returnCallback, errorCallback, false, true);
	};
	this.setAllVoltagesCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`All Voltages`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after at least one of the values has changed. If the values didn't
		change within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_ALL_VOLTAGES_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllVoltagesCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set All Voltages Callback Configuration`.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_ALL_VOLTAGES_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDualAnalogInV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialDualAnalogInV2;
