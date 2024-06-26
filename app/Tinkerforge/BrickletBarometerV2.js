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

BrickletBarometerV2.DEVICE_IDENTIFIER = 2117;
BrickletBarometerV2.DEVICE_DISPLAY_NAME = 'Barometer Bricklet 2.0';
BrickletBarometerV2.CALLBACK_AIR_PRESSURE = 4;
BrickletBarometerV2.CALLBACK_ALTITUDE = 8;
BrickletBarometerV2.CALLBACK_TEMPERATURE = 12;
BrickletBarometerV2.FUNCTION_GET_AIR_PRESSURE = 1;
BrickletBarometerV2.FUNCTION_SET_AIR_PRESSURE_CALLBACK_CONFIGURATION = 2;
BrickletBarometerV2.FUNCTION_GET_AIR_PRESSURE_CALLBACK_CONFIGURATION = 3;
BrickletBarometerV2.FUNCTION_GET_ALTITUDE = 5;
BrickletBarometerV2.FUNCTION_SET_ALTITUDE_CALLBACK_CONFIGURATION = 6;
BrickletBarometerV2.FUNCTION_GET_ALTITUDE_CALLBACK_CONFIGURATION = 7;
BrickletBarometerV2.FUNCTION_GET_TEMPERATURE = 9;
BrickletBarometerV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION = 10;
BrickletBarometerV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION = 11;
BrickletBarometerV2.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION = 13;
BrickletBarometerV2.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION = 14;
BrickletBarometerV2.FUNCTION_SET_REFERENCE_AIR_PRESSURE = 15;
BrickletBarometerV2.FUNCTION_GET_REFERENCE_AIR_PRESSURE = 16;
BrickletBarometerV2.FUNCTION_SET_CALIBRATION = 17;
BrickletBarometerV2.FUNCTION_GET_CALIBRATION = 18;
BrickletBarometerV2.FUNCTION_SET_SENSOR_CONFIGURATION = 19;
BrickletBarometerV2.FUNCTION_GET_SENSOR_CONFIGURATION = 20;
BrickletBarometerV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletBarometerV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletBarometerV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletBarometerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletBarometerV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletBarometerV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletBarometerV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletBarometerV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletBarometerV2.FUNCTION_RESET = 243;
BrickletBarometerV2.FUNCTION_WRITE_UID = 248;
BrickletBarometerV2.FUNCTION_READ_UID = 249;
BrickletBarometerV2.FUNCTION_GET_IDENTITY = 255;
BrickletBarometerV2.THRESHOLD_OPTION_OFF = 'x';
BrickletBarometerV2.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletBarometerV2.THRESHOLD_OPTION_INSIDE = 'i';
BrickletBarometerV2.THRESHOLD_OPTION_SMALLER = '<';
BrickletBarometerV2.THRESHOLD_OPTION_GREATER = '>';
BrickletBarometerV2.DATA_RATE_OFF = 0;
BrickletBarometerV2.DATA_RATE_1HZ = 1;
BrickletBarometerV2.DATA_RATE_10HZ = 2;
BrickletBarometerV2.DATA_RATE_25HZ = 3;
BrickletBarometerV2.DATA_RATE_50HZ = 4;
BrickletBarometerV2.DATA_RATE_75HZ = 5;
BrickletBarometerV2.LOW_PASS_FILTER_OFF = 0;
BrickletBarometerV2.LOW_PASS_FILTER_1_9TH = 1;
BrickletBarometerV2.LOW_PASS_FILTER_1_20TH = 2;
BrickletBarometerV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletBarometerV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletBarometerV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletBarometerV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletBarometerV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletBarometerV2.BOOTLOADER_STATUS_OK = 0;
BrickletBarometerV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletBarometerV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletBarometerV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletBarometerV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletBarometerV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletBarometerV2.STATUS_LED_CONFIG_OFF = 0;
BrickletBarometerV2.STATUS_LED_CONFIG_ON = 1;
BrickletBarometerV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletBarometerV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletBarometerV2(uid, ipcon) {
	//Measures air pressure and altitude changes

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletBarometerV2.DEVICE_IDENTIFIER, BrickletBarometerV2.DEVICE_DISPLAY_NAME);
	BrickletBarometerV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_AIR_PRESSURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_AIR_PRESSURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_ALTITUDE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_ALTITUDE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_ALTITUDE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_REFERENCE_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_REFERENCE_AIR_PRESSURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_CALIBRATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_CALIBRATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_SENSOR_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_SENSOR_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletBarometerV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletBarometerV2.CALLBACK_AIR_PRESSURE] = [12, 'i'];
	this.callbackFormats[BrickletBarometerV2.CALLBACK_ALTITUDE] = [12, 'i'];
	this.callbackFormats[BrickletBarometerV2.CALLBACK_TEMPERATURE] = [12, 'i'];



	this.getAirPressure = function(returnCallback, errorCallback) {
		/*
		Returns the measured air pressure.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Air Pressure` callback. You can set the callback configuration
		with :func:`Set Air Pressure Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_AIR_PRESSURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_AIR_PRESSURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAirPressureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Air Pressure Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_AIR_PRESSURE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.getAltitude = function(returnCallback, errorCallback) {
		/*
		Returns the relative altitude of the air pressure sensor. The value
		is calculated based on the difference between the
		current air pressure and the reference air pressure that can be set
		with :func:`Set Reference Air Pressure`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Altitude` callback. You can set the callback configuration
		with :func:`Set Altitude Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_ALTITUDE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setAltitudeCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Altitude` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Altitude` callback.
		
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
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_ALTITUDE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAltitudeCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Altitude Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_ALTITUDE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.getTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature of the air pressure sensor.
		
		This temperature is used internally for temperature compensation
		of the air pressure measurement. It is not as accurate as the
		temperature measured by the :ref:`temperature_v2_bricklet` or the
		:ref:`temperature_ir_v2_bricklet`.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Temperature` callback. You can set the callback configuration
		with :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_TEMPERATURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_TEMPERATURE_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTemperatureCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Temperature Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_TEMPERATURE_CALLBACK_CONFIGURATION, [], '', 22, 'I ? c i i', returnCallback, errorCallback, false, true);
	};
	this.setMovingAverageConfiguration = function(movingAverageLengthAirPressure, movingAverageLengthTemperature, returnCallback, errorCallback) {
		/*
		Sets the length of a `moving averaging <https://en.wikipedia.org/wiki/Moving_average>`__
		for the air pressure and temperature measurements.
		
		Setting the length to 1 will turn the averaging off. With less
		averaging, there is more noise on the data.
		
		If you want to do long term measurements the longest moving average will give
		the cleanest results.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_MOVING_AVERAGE_CONFIGURATION, [movingAverageLengthAirPressure, movingAverageLengthTemperature], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMovingAverageConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the moving average configuration as set by
		:func:`Set Moving Average Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_MOVING_AVERAGE_CONFIGURATION, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.setReferenceAirPressure = function(airPressure, returnCallback, errorCallback) {
		/*
		Sets the reference air pressure for the altitude calculation.
		Setting the reference to the
		current air pressure results in a calculated altitude of 0mm. Passing 0 is
		a shortcut for passing the current air pressure as reference.
		
		Well known reference values are the Q codes
		`QNH <https://en.wikipedia.org/wiki/QNH>`__ and
		`QFE <https://en.wikipedia.org/wiki/Mean_sea_level_pressure#Mean_sea_level_pressure>`__
		used in aviation.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_REFERENCE_AIR_PRESSURE, [airPressure], 'i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getReferenceAirPressure = function(returnCallback, errorCallback) {
		/*
		Returns the reference air pressure as set by :func:`Set Reference Air Pressure`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_REFERENCE_AIR_PRESSURE, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setCalibration = function(measuredAirPressure, actualAirPressure, returnCallback, errorCallback) {
		/*
		Sets the one point calibration (OPC) values for the air pressure measurement.
		
		Before the Bricklet can be calibrated any previous calibration has to be removed
		by setting ``measured air pressure`` and ``actual air pressure`` to 0.
		
		Then the current air pressure has to be measured using the Bricklet
		(``measured air pressure``) and with an accurate reference barometer
		(``actual air pressure``) at the same time and passed to this function.
		
		After proper calibration the air pressure measurement can achieve an accuracy
		up to 0.2 hPa.
		
		The calibration is saved in the EEPROM of the Bricklet and only needs to be
		configured once.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_CALIBRATION, [measuredAirPressure, actualAirPressure], 'i i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCalibration = function(returnCallback, errorCallback) {
		/*
		Returns the air pressure one point calibration values as set by
		:func:`Set Calibration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_CALIBRATION, [], '', 16, 'i i', returnCallback, errorCallback, false, true);
	};
	this.setSensorConfiguration = function(dataRate, airPressureLowPassFilter, returnCallback, errorCallback) {
		/*
		Configures the data rate and air pressure low pass filter. The low pass filter
		cut-off frequency (if enabled) can be set to 1/9th or 1/20th of the configure
		data rate to decrease the noise on the air pressure data.
		
		The low pass filter configuration only applies to the air pressure measurement.
		There is no low pass filter for the temperature measurement.
		
		A higher data rate will result in a less precise temperature because of
		self-heating of the sensor. If the accuracy of the temperature reading is
		important to you, we would recommend the 1Hz data rate.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_SENSOR_CONFIGURATION, [dataRate, airPressureLowPassFilter], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the sensor configuration as set by :func:`Set Sensor Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_SENSOR_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletBarometerV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletBarometerV2;
