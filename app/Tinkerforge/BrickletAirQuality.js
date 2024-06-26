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

BrickletAirQuality.DEVICE_IDENTIFIER = 297;
BrickletAirQuality.DEVICE_DISPLAY_NAME = 'Air Quality Bricklet';
BrickletAirQuality.CALLBACK_ALL_VALUES = 6;
BrickletAirQuality.CALLBACK_IAQ_INDEX = 10;
BrickletAirQuality.CALLBACK_TEMPERATURE = 14;
BrickletAirQuality.CALLBACK_HUMIDITY = 18;
BrickletAirQuality.CALLBACK_AIR_PRESSURE = 22;
BrickletAirQuality.FUNCTION_GET_ALL_VALUES = 1;
BrickletAirQuality.FUNCTION_SET_TEMPERATURE_OFFSET = 2;
BrickletAirQuality.FUNCTION_GET_TEMPERATURE_OFFSET = 3;
BrickletAirQuality.FUNCTION_SET_ALL_VALUES_CALLBACK_CONFIGURATION = 4;
BrickletAirQuality.FUNCTION_GET_ALL_VALUES_CALLBACK_CONFIGURATION = 5;
BrickletAirQuality.FUNCTION_GET_IAQ_INDEX = 7;
BrickletAirQuality.FUNCTION_SET_IAQ_INDEX_CALLBACK_CONFIGURATION = 8;
BrickletAirQuality.FUNCTION_GET_IAQ_INDEX_CALLBACK_CONFIGURATION = 9;
BrickletAirQuality.FUNCTION_GET_TEMPERATURE = 11;
BrickletAirQuality.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION = 12;
BrickletAirQuality.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION = 13;
BrickletAirQuality.FUNCTION_GET_HUMIDITY = 15;
BrickletAirQuality.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION = 16;
BrickletAirQuality.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION = 17;
BrickletAirQuality.FUNCTION_GET_AIR_PRESSURE = 19;
BrickletAirQuality.FUNCTION_SET_AIR_PRESSURE_CALLBACK_CONFIGURATION = 20;
BrickletAirQuality.FUNCTION_GET_AIR_PRESSURE_CALLBACK_CONFIGURATION = 21;
BrickletAirQuality.FUNCTION_REMOVE_CALIBRATION = 23;
BrickletAirQuality.FUNCTION_SET_BACKGROUND_CALIBRATION_DURATION = 24;
BrickletAirQuality.FUNCTION_GET_BACKGROUND_CALIBRATION_DURATION = 25;
BrickletAirQuality.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletAirQuality.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletAirQuality.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletAirQuality.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletAirQuality.FUNCTION_WRITE_FIRMWARE = 238;
BrickletAirQuality.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletAirQuality.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletAirQuality.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletAirQuality.FUNCTION_RESET = 243;
BrickletAirQuality.FUNCTION_WRITE_UID = 248;
BrickletAirQuality.FUNCTION_READ_UID = 249;
BrickletAirQuality.FUNCTION_GET_IDENTITY = 255;
BrickletAirQuality.ACCURACY_UNRELIABLE = 0;
BrickletAirQuality.ACCURACY_LOW = 1;
BrickletAirQuality.ACCURACY_MEDIUM = 2;
BrickletAirQuality.ACCURACY_HIGH = 3;
BrickletAirQuality.THRESHOLD_OPTION_OFF = 'x';
BrickletAirQuality.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletAirQuality.THRESHOLD_OPTION_INSIDE = 'i';
BrickletAirQuality.THRESHOLD_OPTION_SMALLER = '<';
BrickletAirQuality.THRESHOLD_OPTION_GREATER = '>';
BrickletAirQuality.DURATION_4_DAYS = 0;
BrickletAirQuality.DURATION_28_DAYS = 1;
BrickletAirQuality.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletAirQuality.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletAirQuality.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletAirQuality.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletAirQuality.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletAirQuality.BOOTLOADER_STATUS_OK = 0;
BrickletAirQuality.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletAirQuality.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletAirQuality.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletAirQuality.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletAirQuality.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletAirQuality.STATUS_LED_CONFIG_OFF = 0;
BrickletAirQuality.STATUS_LED_CONFIG_ON = 1;
BrickletAirQuality.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletAirQuality.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletAirQuality(uid, ipcon) {
	//Measures IAQ index, temperature, humidity and air pressure

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletAirQuality.DEVICE_IDENTIFIER, BrickletAirQuality.DEVICE_DISPLAY_NAME);
	BrickletAirQuality.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_ALL_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_TEMPERATURE_OFFSET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_TEMPERATURE_OFFSET] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_ALL_VALUES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_ALL_VALUES_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_IAQ_INDEX] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_IAQ_INDEX_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_IAQ_INDEX_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_HUMIDITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_AIR_PRESSURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_AIR_PRESSURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_REMOVE_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_BACKGROUND_CALIBRATION_DURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_BACKGROUND_CALIBRATION_DURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAirQuality.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAirQuality.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletAirQuality.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletAirQuality.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletAirQuality.CALLBACK_ALL_VALUES] = [25, 'i B i i i'];
	this.callbackFormats[BrickletAirQuality.CALLBACK_IAQ_INDEX] = [13, 'i B'];
	this.callbackFormats[BrickletAirQuality.CALLBACK_TEMPERATURE] = [12, 'i'];
	this.callbackFormats[BrickletAirQuality.CALLBACK_HUMIDITY] = [12, 'i'];
	this.callbackFormats[BrickletAirQuality.CALLBACK_AIR_PRESSURE] = [12, 'i'];



	this.getAllValues = function(returnCallback, errorCallback) {
		/*
		Returns all values measured by the Air Quality Bricklet. The values are
		IAQ (Indoor Air Quality) Index (higher value means greater level of air pollution), IAQ Index Accuracy, Temperature, Humidity and
		Air Pressure.
		
		.. image:: /Images/Misc/bricklet_air_quality_iaq_index.png
		   :scale: 100 %
		   :alt: Air Quality Index description
		   :align: center
		   :target: ../../_images/Misc/bricklet_air_quality_iaq_index.png
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_ALL_VALUES, [], '', 25, 'i B i i i', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureOffset = function(offset, returnCallback, errorCallback) {
		/*
		Sets a temperature offset. A offset of 10 will decrease the measured temperature by 0.1 °C.
		
		If you install this Bricklet into an enclosure and you want to measure the ambient
		temperature, you may have to decrease the measured temperature by some value to
		compensate for the error because of the heating inside of the enclosure.
		
		We recommend that you leave the parts in the enclosure running for at least
		24 hours such that a temperature equilibrium can be reached. After that you can measure
		the temperature directly outside of enclosure and set the difference as offset.
		
		This temperature offset is used to calculate the relative humidity and
		IAQ index measurements. In case the Bricklet is installed in an enclosure, we
		recommend to measure and set the temperature offset to improve the accuracy of
		the measurements.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_TEMPERATURE_OFFSET, [offset], 'i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureOffset = function(returnCallback, errorCallback) {
		/*
		Returns the temperature offset as set by
		:func:`Set Temperature Offset`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_TEMPERATURE_OFFSET, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setAllValuesCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`All Values`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after at least one of the values has changed. If the values didn't
		change within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_ALL_VALUES_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllValuesCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set All Values Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_ALL_VALUES_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.getIAQIndex = function(returnCallback, errorCallback) {
		/*
		Returns the IAQ index and accuracy. The higher the IAQ index, the greater the level of air pollution.
		
		.. image:: /Images/Misc/bricklet_air_quality_iaq_index.png
		   :scale: 100 %
		   :alt: IAQ index description
		   :align: center
		   :target: ../../_images/Misc/bricklet_air_quality_iaq_index.png
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`IAQ Index` callback. You can set the callback configuration
		with :func:`Set IAQ Index Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_IAQ_INDEX, [], '', 13, 'i B', returnCallback, errorCallback, false, true);
	};
	this.setIAQIndexCallbackConfiguration = function(period, valueHasToChange, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`IAQ Index`
		callback is triggered periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after at least one of the values has changed. If the values didn't
		change within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_IAQ_INDEX_CALLBACK_CONFIGURATION, [period, valueHasToChange], 'I ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getIAQIndexCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Set IAQ Index Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_IAQ_INDEX_CALLBACK_CONFIGURATION, [], '', 13, 'I ?', returnCallback, errorCallback, false, true);
	};
	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns temperature.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Temperature` callback. You can set the callback configuration
		with :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_TEMPERATURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setTemperatureCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Temperature` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Temperature` callback.
		
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
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.getHumidity = function(returnCallback, errorCallback) {
		/*
		Returns relative humidity.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Humidity` callback. You can set the callback configuration
		with :func:`Set Humidity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_HUMIDITY, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setHumidityCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Humidity` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Humidity` callback.
		
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
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_HUMIDITY_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getHumidityCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Humidity Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_HUMIDITY_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.getAirPressure = function(returnCallback, errorCallback) {
		/*
		Returns air pressure.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Air Pressure` callback. You can set the callback configuration
		with :func:`Set Air Pressure Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_AIR_PRESSURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setAirPressureCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Air Pressure` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Air Pressure` callback.
		
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
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_AIR_PRESSURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAirPressureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Air Pressure Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_AIR_PRESSURE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.removeCalibration = function(returnCallback, errorCallback) {
		/*
		Deletes the calibration from flash. After you call this function,
		you need to power cycle the Air Quality Bricklet.
		
		On the next power up the Bricklet will start a new calibration, as
		if it was started for the very first time.
		
		The calibration is based on the data of the last four days, so it takes
		four days until a full calibration is re-established.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_REMOVE_CALIBRATION, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setBackgroundCalibrationDuration = function(duration, returnCallback, errorCallback) {
		/*
		The Air Quality Bricklet uses an automatic background calibration mechanism to
		calculate the IAQ Index. This calibration mechanism considers a history of
		measured data. The duration of this history can be configured to either be
		4 days or 28 days.
		
		If you keep the Bricklet mostly at one place and it does not get moved around
		to different environments, we recommend that you use a duration of 28 days.
		
		If you change the duration, the current calibration will be discarded and
		the calibration will start from beginning again. The configuration of the
		duration is saved in flash, so you should only have to call this function
		once in the lifetime of the Bricklet.
		
		The Bricklet has to be power cycled after this function is called
		for a duration change to take effect.
		
		Before firmware version 2.0.3 this was not configurable and the duration was
		4 days.
		
		The default value (since firmware version 2.0.3) is 28 days.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_BACKGROUND_CALIBRATION_DURATION, [duration], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getBackgroundCalibrationDuration = function(returnCallback, errorCallback) {
		/*
		Returns the background calibration duration as set by
		:func:`Set Background Calibration Duration`.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_BACKGROUND_CALIBRATION_DURATION, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletAirQuality.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletAirQuality;
