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

BrickletColorV2.DEVICE_IDENTIFIER = 2128;
BrickletColorV2.DEVICE_DISPLAY_NAME = 'Color Bricklet 2.0';
BrickletColorV2.CALLBACK_COLOR = 4;
BrickletColorV2.CALLBACK_ILLUMINANCE = 8;
BrickletColorV2.CALLBACK_COLOR_TEMPERATURE = 12;
BrickletColorV2.FUNCTION_GET_COLOR = 1;
BrickletColorV2.FUNCTION_SET_COLOR_CALLBACK_CONFIGURATION = 2;
BrickletColorV2.FUNCTION_GET_COLOR_CALLBACK_CONFIGURATION = 3;
BrickletColorV2.FUNCTION_GET_ILLUMINANCE = 5;
BrickletColorV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_CONFIGURATION = 6;
BrickletColorV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_CONFIGURATION = 7;
BrickletColorV2.FUNCTION_GET_COLOR_TEMPERATURE = 9;
BrickletColorV2.FUNCTION_SET_COLOR_TEMPERATURE_CALLBACK_CONFIGURATION = 10;
BrickletColorV2.FUNCTION_GET_COLOR_TEMPERATURE_CALLBACK_CONFIGURATION = 11;
BrickletColorV2.FUNCTION_SET_LIGHT = 13;
BrickletColorV2.FUNCTION_GET_LIGHT = 14;
BrickletColorV2.FUNCTION_SET_CONFIGURATION = 15;
BrickletColorV2.FUNCTION_GET_CONFIGURATION = 16;
BrickletColorV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletColorV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletColorV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletColorV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletColorV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletColorV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletColorV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletColorV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletColorV2.FUNCTION_RESET = 243;
BrickletColorV2.FUNCTION_WRITE_UID = 248;
BrickletColorV2.FUNCTION_READ_UID = 249;
BrickletColorV2.FUNCTION_GET_IDENTITY = 255;
BrickletColorV2.THRESHOLD_OPTION_OFF = 'x';
BrickletColorV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletColorV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletColorV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletColorV2.THRESHOLD_OPTION_GREATER = '>';
BrickletColorV2.GAIN_1X = 0;
BrickletColorV2.GAIN_4X = 1;
BrickletColorV2.GAIN_16X = 2;
BrickletColorV2.GAIN_60X = 3;
BrickletColorV2.INTEGRATION_TIME_2MS = 0;
BrickletColorV2.INTEGRATION_TIME_24MS = 1;
BrickletColorV2.INTEGRATION_TIME_101MS = 2;
BrickletColorV2.INTEGRATION_TIME_154MS = 3;
BrickletColorV2.INTEGRATION_TIME_700MS = 4;
BrickletColorV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletColorV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletColorV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletColorV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletColorV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletColorV2.BOOTLOADER_STATUS_OK = 0;
BrickletColorV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletColorV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletColorV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletColorV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletColorV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletColorV2.STATUS_LED_CONFIG_OFF = 0;
BrickletColorV2.STATUS_LED_CONFIG_ON = 1;
BrickletColorV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletColorV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletColorV2(uid, ipcon) {
	//Measures color (RGB value), illuminance and color temperature

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletColorV2.DEVICE_IDENTIFIER, BrickletColorV2.DEVICE_DISPLAY_NAME);
	BrickletColorV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletColorV2.FUNCTION_GET_COLOR] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_COLOR_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_COLOR_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_ILLUMINANCE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_COLOR_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_COLOR_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_COLOR_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_LIGHT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_LIGHT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColorV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColorV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletColorV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletColorV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletColorV2.CALLBACK_COLOR] = [16, 'H H H H'];
	this.callbackFormats[BrickletColorV2.CALLBACK_ILLUMINANCE] = [12, 'I'];
	this.callbackFormats[BrickletColorV2.CALLBACK_COLOR_TEMPERATURE] = [10, 'H'];



	this.getColor = function(returnCallback, errorCallback) {
		/*
		Returns the measured color of the sensor.
		
		The red (r), green (g), blue (b) and clear (c) colors are measured
		with four different photodiodes that are responsive at different
		wavelengths:
		
		.. image:: /Images/Bricklets/bricklet_color_wavelength_chart_600.jpg
		   :scale: 100 %
		   :alt: Chart Responsivity / Wavelength
		   :align: center
		   :target: ../../_images/Bricklets/bricklet_color_wavelength_chart_600.jpg
		
		If you want to get the color periodically, it is recommended
		to use the :cb:`Color` callback and set the period with
		:func:`Set Color Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_COLOR, [], '', 16, 'H H H H', returnCallback, errorCallback, false, true);
	};
	this.setColorCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Color`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change within the
		period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_COLOR_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getColorCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set Color Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_COLOR_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.getIlluminance = function(returnCallback, errorCallback) {
		/*
		Returns the illuminance affected by the gain and integration time as
		set by :func:`Set Configuration`. To get the illuminance in Lux apply this formula::
		
		 lux = illuminance * 700 / gain / integration_time
		
		To get a correct illuminance measurement make sure that the color
		values themselves are not saturated. The color value (R, G or B)
		is saturated if it is equal to the maximum value of 65535.
		In that case you have to reduce the gain, see :func:`Set Configuration`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Illuminance` callback. You can set the callback configuration
		with :func:`Set Illuminance Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_ILLUMINANCE, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setIlluminanceCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Illuminance` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Illuminance` callback.
		
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
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_ILLUMINANCE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c I I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getIlluminanceCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Illuminance Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_ILLUMINANCE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c I I', returnCallback, errorCallback, false, true);
	};
	this.getColorTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the color temperature.
		
		To get a correct color temperature measurement make sure that the color
		values themselves are not saturated. The color value (R, G or B)
		is saturated if it is equal to the maximum value of 65535.
		In that case you have to reduce the gain, see :func:`Set Configuration`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Color Temperature` callback. You can set the callback configuration
		with :func:`Set Color Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_COLOR_TEMPERATURE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setColorTemperatureCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Color Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Color Temperature` callback.
		
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
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_COLOR_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getColorTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Color Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_COLOR_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c H H', returnCallback, errorCallback, false, true);
	};
	this.setLight = function(enable, returnCallback, errorCallback) {
		/*
		Turns the white LED on the Bricklet on/off.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_LIGHT, [enable], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getLight = function(returnCallback, errorCallback) {
		/*
		Returns the value as set by :func:`Set Light`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_LIGHT, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(gain, integrationTime, returnCallback, errorCallback) {
		/*
		Sets the configuration of the sensor. Gain and integration time
		can be configured this way.
		
		For configuring the gain:
		
		* 0: 1x Gain
		* 1: 4x Gain
		* 2: 16x Gain
		* 3: 60x Gain
		
		For configuring the integration time:
		
		* 0: 2.4ms
		* 1: 24ms
		* 2: 101ms
		* 3: 154ms
		* 4: 700ms
		
		Increasing the gain enables the sensor to detect a
		color from a higher distance.
		
		The integration time provides a trade-off between conversion time
		and accuracy. With a longer integration time the values read will
		be more accurate but it will take longer to get the conversion
		results.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_CONFIGURATION, [gain, integrationTime], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletColorV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletColorV2;
