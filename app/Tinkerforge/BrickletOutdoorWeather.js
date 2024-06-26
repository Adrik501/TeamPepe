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

BrickletOutdoorWeather.DEVICE_IDENTIFIER = 288;
BrickletOutdoorWeather.DEVICE_DISPLAY_NAME = 'Outdoor Weather Bricklet';
BrickletOutdoorWeather.CALLBACK_STATION_DATA = 9;
BrickletOutdoorWeather.CALLBACK_SENSOR_DATA = 10;
BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL = 1;
BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL = 2;
BrickletOutdoorWeather.FUNCTION_GET_STATION_DATA = 3;
BrickletOutdoorWeather.FUNCTION_GET_SENSOR_DATA = 4;
BrickletOutdoorWeather.FUNCTION_SET_STATION_CALLBACK_CONFIGURATION = 5;
BrickletOutdoorWeather.FUNCTION_GET_STATION_CALLBACK_CONFIGURATION = 6;
BrickletOutdoorWeather.FUNCTION_SET_SENSOR_CALLBACK_CONFIGURATION = 7;
BrickletOutdoorWeather.FUNCTION_GET_SENSOR_CALLBACK_CONFIGURATION = 8;
BrickletOutdoorWeather.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletOutdoorWeather.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletOutdoorWeather.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletOutdoorWeather.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletOutdoorWeather.FUNCTION_WRITE_FIRMWARE = 238;
BrickletOutdoorWeather.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletOutdoorWeather.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletOutdoorWeather.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletOutdoorWeather.FUNCTION_RESET = 243;
BrickletOutdoorWeather.FUNCTION_WRITE_UID = 248;
BrickletOutdoorWeather.FUNCTION_READ_UID = 249;
BrickletOutdoorWeather.FUNCTION_GET_IDENTITY = 255;
BrickletOutdoorWeather.WIND_DIRECTION_N = 0;
BrickletOutdoorWeather.WIND_DIRECTION_NNE = 1;
BrickletOutdoorWeather.WIND_DIRECTION_NE = 2;
BrickletOutdoorWeather.WIND_DIRECTION_ENE = 3;
BrickletOutdoorWeather.WIND_DIRECTION_E = 4;
BrickletOutdoorWeather.WIND_DIRECTION_ESE = 5;
BrickletOutdoorWeather.WIND_DIRECTION_SE = 6;
BrickletOutdoorWeather.WIND_DIRECTION_SSE = 7;
BrickletOutdoorWeather.WIND_DIRECTION_S = 8;
BrickletOutdoorWeather.WIND_DIRECTION_SSW = 9;
BrickletOutdoorWeather.WIND_DIRECTION_SW = 10;
BrickletOutdoorWeather.WIND_DIRECTION_WSW = 11;
BrickletOutdoorWeather.WIND_DIRECTION_W = 12;
BrickletOutdoorWeather.WIND_DIRECTION_WNW = 13;
BrickletOutdoorWeather.WIND_DIRECTION_NW = 14;
BrickletOutdoorWeather.WIND_DIRECTION_NNW = 15;
BrickletOutdoorWeather.WIND_DIRECTION_ERROR = 255;
BrickletOutdoorWeather.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletOutdoorWeather.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletOutdoorWeather.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletOutdoorWeather.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletOutdoorWeather.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletOutdoorWeather.BOOTLOADER_STATUS_OK = 0;
BrickletOutdoorWeather.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletOutdoorWeather.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletOutdoorWeather.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletOutdoorWeather.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletOutdoorWeather.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletOutdoorWeather.STATUS_LED_CONFIG_OFF = 0;
BrickletOutdoorWeather.STATUS_LED_CONFIG_ON = 1;
BrickletOutdoorWeather.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletOutdoorWeather.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletOutdoorWeather(uid, ipcon) {
	//433MHz receiver for outdoor weather station

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletOutdoorWeather.DEVICE_IDENTIFIER, BrickletOutdoorWeather.DEVICE_DISPLAY_NAME);
	BrickletOutdoorWeather.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_STATION_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_SENSOR_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_SET_STATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_STATION_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_SET_SENSOR_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_SENSOR_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOutdoorWeather.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletOutdoorWeather.CALLBACK_STATION_DATA] = [26, 'B h B I I I B ?'];
	this.callbackFormats[BrickletOutdoorWeather.CALLBACK_SENSOR_DATA] = [12, 'B h B'];


	this.streamStateObjects[BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL] = {
		'dataMapping': ['streamLength', 'streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': '',
			'unpackFormatString': 'H H B60',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL] = {
		'dataMapping': ['streamLength', 'streamChunkOffset', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': false
		},
		'responseProperties': {
			'running': false,
			'runningSubcall': false,
			'runningSubcallOOS': false,
			'waitingFirstChunk': true,
			'timeout': null,
			'data': [],
			'streamInChunkOffset': 0,
			'streamInChunkLength': 0,
			'streamInResponseEmpty': true,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': '',
			'unpackFormatString': 'H H B60',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.getStationIdentifiersLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the identifiers (number between 0 and 255) of all `stations
		<https://www.tinkerforge.com/en/shop/accessories/sensors/outdoor-weather-station-ws-6147.html>`__
		that have been seen since the startup of the Bricklet.
		
		Each station gives itself a random identifier on first startup.
		
		Since firmware version 2.0.2 a station is removed from the list if no data was received for
		12 hours.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', returnCallback, errorCallback, false, true);
	};
	this.getSensorIdentifiersLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the identifiers (number between 0 and 255) of all `sensors
		<https://www.tinkerforge.com/en/shop/accessories/sensors/temperature-humidity-sensor-th-6148.html>`__
		that have been seen since the startup of the Bricklet.
		
		Each sensor gives itself a random identifier on first startup.
		
		Since firmware version 2.0.2 a sensor is removed from the list if no data was received for
		12 hours.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', returnCallback, errorCallback, false, true);
	};
	this.getStationData = function(identifier, returnCallback, errorCallback) {
		/*
		Returns the last received data for a station with the given identifier.
		Call :func:`Get Station Identifiers` for a list of all available identifiers.
		
		The return values are:
		
		* Temperature,
		* Humidity,
		* Wind Speed,
		* Gust Speed,
		* Rain Fall (accumulated since station power-up),
		* Wind Direction,
		* Battery Low (true if battery is low) and
		* Last Change (seconds since the reception of this data).
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_STATION_DATA, [identifier], 'B', 27, 'h B I I I B ? H', returnCallback, errorCallback, false, true);
	};
	this.getSensorData = function(identifier, returnCallback, errorCallback) {
		/*
		Returns the last measured data for a sensor with the given identifier.
		Call :func:`Get Sensor Identifiers` for a list of all available identifiers.
		
		The return values are:
		
		* Temperature,
		* Humidity and
		* Last Change (seconds since the last reception of data).
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_SENSOR_DATA, [identifier], 'B', 13, 'h B H', returnCallback, errorCallback, false, true);
	};
	this.setStationCallbackConfiguration = function(enableCallback, returnCallback, errorCallback) {
		/*
		Turns callback for station data on or off.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_SET_STATION_CALLBACK_CONFIGURATION, [enableCallback], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStationCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Station Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_STATION_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setSensorCallbackConfiguration = function(enableCallback, returnCallback, errorCallback) {
		/*
		Turns callback for sensor data on or off.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_SET_SENSOR_CALLBACK_CONFIGURATION, [enableCallback], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSensorCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Sensor Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_SENSOR_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOutdoorWeather.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.getStationIdentifiers = function(returnCallback, errorCallback) {
		/*
		Returns the identifiers (number between 0 and 255) of all `stations
		<https://www.tinkerforge.com/en/shop/accessories/sensors/outdoor-weather-station-ws-6147.html>`__
		that have been seen since the startup of the Bricklet.
		
		Each station gives itself a random identifier on first startup.
		
		Since firmware version 2.0.2 a station is removed from the list if no data was received for
		12 hours.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[1];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var identifiersLength = null;
					var identifiersChunkData = null;
					var identifiersOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var identifiersChunkOffset = null;
					var payload = device.ipcon.getPayloadFromPacket(packetResponse);

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (payload.length === 0) {
						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					llvalues = device.ipcon.unpack(payload,
					                               streamStateObject['responseProperties']['unpackFormatString']);

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamChunkData') {
							identifiersChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							identifiersChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							identifiersLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((identifiersChunkOffset + 60) < identifiersLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							return;
						}

						if (streamStateObject['responseProperties']['errorCB']) {
							streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_STREAM_OUT_OF_SYNC);
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (streamStateObject['responseProperties']['waitingFirstChunk']) {
						streamStateObject['responseProperties']['waitingFirstChunk'] = false;
						identifiersOutOfSync = (identifiersChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = identifiersChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!identifiersOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < identifiersLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							identifiersOutOfSync =
								(identifiersChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!identifiersOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < identifiersLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(identifiersChunkData);

									if (streamStateObject['responseProperties']['data'].length >= identifiersLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, identifiersLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (identifiersOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, identifiersLength));
							}
							else if (rolesMappedData[i]['role'] === null) {
								result.push(rolesMappedData[i]['llvalue']);
							}
						}

						streamStateObject['responseProperties']['returnCB'].apply(device, result);
					}

					device.resetStreamStateObject(streamStateObject);

					if (streamStateObject['responseProperties']['callQueue'].length > 0) {
						streamStateObject['responseProperties']['callQueue'].shift()(device);
					}
					
				};

			streamStateObject['responseProperties']['responseHandler'] = responseHandler;
		}
		if (!streamStateObject['responseProperties']['running']) {
			streamStateObject['responseProperties']['running'] = true;
			streamStateObject['responseProperties']['returnCB'] = returnCallback;
			streamStateObject['responseProperties']['errorCB'] = errorCallback;
			this.ipcon.sendRequest(this,
			                       BrickletOutdoorWeather.FUNCTION_GET_STATION_IDENTIFIERS_LOW_LEVEL,
			                       [],
			                       '',
			                       72,
			                       'H H B60',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getStationIdentifiers.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.getSensorIdentifiers = function(returnCallback, errorCallback) {
		/*
		Returns the identifiers (number between 0 and 255) of all `sensors
		<https://www.tinkerforge.com/en/shop/accessories/sensors/temperature-humidity-sensor-th-6148.html>`__
		that have been seen since the startup of the Bricklet.
		
		Each sensor gives itself a random identifier on first startup.
		
		Since firmware version 2.0.2 a sensor is removed from the list if no data was received for
		12 hours.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[2];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var identifiersLength = null;
					var identifiersChunkData = null;
					var identifiersOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var identifiersChunkOffset = null;
					var payload = device.ipcon.getPayloadFromPacket(packetResponse);

					packetErrorFlag = device.ipcon.getEFromPacket(packetResponse);

					if (packetErrorFlag !== 0) {
						if (streamStateObject['responseProperties']['errorCB'] !== undefined) {
							if (packetErrorFlag === 1) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_INVALID_PARAMETER);
							}
							else if (packetErrorFlag === 2) {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_FUNCTION_NOT_SUPPORTED);
							}
							else {
								streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_UNKNOWN_ERROR);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					if (payload.length === 0) {
						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}

						return;
					}

					llvalues = device.ipcon.unpack(payload,
					                               streamStateObject['responseProperties']['unpackFormatString']);

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamChunkData') {
							identifiersChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							identifiersChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							identifiersLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((identifiersChunkOffset + 60) < identifiersLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							return;
						}

						if (streamStateObject['responseProperties']['errorCB']) {
							streamStateObject['responseProperties']['errorCB'].call(device, IPConnection.ERROR_STREAM_OUT_OF_SYNC);
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (streamStateObject['responseProperties']['waitingFirstChunk']) {
						streamStateObject['responseProperties']['waitingFirstChunk'] = false;
						identifiersOutOfSync = (identifiersChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = identifiersChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!identifiersOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < identifiersLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							identifiersOutOfSync =
								(identifiersChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!identifiersOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < identifiersLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(identifiersChunkData);

									if (streamStateObject['responseProperties']['data'].length >= identifiersLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, identifiersLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (identifiersOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, identifiersLength));
							}
							else if (rolesMappedData[i]['role'] === null) {
								result.push(rolesMappedData[i]['llvalue']);
							}
						}

						streamStateObject['responseProperties']['returnCB'].apply(device, result);
					}

					device.resetStreamStateObject(streamStateObject);

					if (streamStateObject['responseProperties']['callQueue'].length > 0) {
						streamStateObject['responseProperties']['callQueue'].shift()(device);
					}
					
				};

			streamStateObject['responseProperties']['responseHandler'] = responseHandler;
		}
		if (!streamStateObject['responseProperties']['running']) {
			streamStateObject['responseProperties']['running'] = true;
			streamStateObject['responseProperties']['returnCB'] = returnCallback;
			streamStateObject['responseProperties']['errorCB'] = errorCallback;
			this.ipcon.sendRequest(this,
			                       BrickletOutdoorWeather.FUNCTION_GET_SENSOR_IDENTIFIERS_LOW_LEVEL,
			                       [],
			                       '',
			                       72,
			                       'H H B60',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getSensorIdentifiers.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletOutdoorWeather;
