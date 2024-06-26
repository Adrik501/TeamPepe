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

BrickletOneWire.DEVICE_IDENTIFIER = 2123;
BrickletOneWire.DEVICE_DISPLAY_NAME = 'One Wire Bricklet';
BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL = 1;
BrickletOneWire.FUNCTION_RESET_BUS = 2;
BrickletOneWire.FUNCTION_WRITE = 3;
BrickletOneWire.FUNCTION_READ = 4;
BrickletOneWire.FUNCTION_WRITE_COMMAND = 5;
BrickletOneWire.FUNCTION_SET_COMMUNICATION_LED_CONFIG = 6;
BrickletOneWire.FUNCTION_GET_COMMUNICATION_LED_CONFIG = 7;
BrickletOneWire.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletOneWire.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletOneWire.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletOneWire.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletOneWire.FUNCTION_WRITE_FIRMWARE = 238;
BrickletOneWire.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletOneWire.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletOneWire.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletOneWire.FUNCTION_RESET = 243;
BrickletOneWire.FUNCTION_WRITE_UID = 248;
BrickletOneWire.FUNCTION_READ_UID = 249;
BrickletOneWire.FUNCTION_GET_IDENTITY = 255;
BrickletOneWire.STATUS_OK = 0;
BrickletOneWire.STATUS_BUSY = 1;
BrickletOneWire.STATUS_NO_PRESENCE = 2;
BrickletOneWire.STATUS_TIMEOUT = 3;
BrickletOneWire.STATUS_ERROR = 4;
BrickletOneWire.COMMUNICATION_LED_CONFIG_OFF = 0;
BrickletOneWire.COMMUNICATION_LED_CONFIG_ON = 1;
BrickletOneWire.COMMUNICATION_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletOneWire.COMMUNICATION_LED_CONFIG_SHOW_COMMUNICATION = 3;
BrickletOneWire.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletOneWire.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletOneWire.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletOneWire.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletOneWire.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletOneWire.BOOTLOADER_STATUS_OK = 0;
BrickletOneWire.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletOneWire.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletOneWire.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletOneWire.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletOneWire.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletOneWire.STATUS_LED_CONFIG_OFF = 0;
BrickletOneWire.STATUS_LED_CONFIG_ON = 1;
BrickletOneWire.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletOneWire.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletOneWire(uid, ipcon) {
	//Communicates with up 64 1-Wire devices

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletOneWire.DEVICE_IDENTIFIER, BrickletOneWire.DEVICE_DISPLAY_NAME);
	BrickletOneWire.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_RESET_BUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_WRITE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_READ] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_WRITE_COMMAND] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_SET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOneWire.FUNCTION_GET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOneWire.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOneWire.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOneWire.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOneWire.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOneWire.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;


	this.streamStateObjects[BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL] = {
		'dataMapping': ['streamLength', 'streamChunkOffset', 'streamChunkData', null],
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
			'unpackFormatString': 'H H Q7 B',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.searchBusLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns a list of up to 64 identifiers of the connected 1-Wire devices.
		Each identifier is 64-bit and consists of 8-bit family code, 48-bit ID and
		8-bit CRC.
		
		To get these identifiers the Bricklet runs the
		`SEARCH ROM algorithm <https://www.maximintegrated.com/en/app-notes/index.mvp/id/187>`__,
		as defined by Maxim.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL, [], '', 69, 'H H Q7 B', returnCallback, errorCallback, false, true);
	};
	this.resetBus = function(returnCallback, errorCallback) {
		/*
		Resets the bus with the 1-Wire reset operation.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_RESET_BUS, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.write = function(data, returnCallback, errorCallback) {
		/*
		Writes a byte of data to the 1-Wire bus.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_WRITE, [data], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.read = function(returnCallback, errorCallback) {
		/*
		Reads a byte of data from the 1-Wire bus.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_READ, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.writeCommand = function(identifier, command, returnCallback, errorCallback) {
		/*
		Writes a command to the 1-Wire device with the given identifier. You can obtain
		the identifier by calling :func:`Search Bus`. The MATCH ROM operation is used to
		write the command.
		
		If you only have one device connected or want to broadcast to all devices
		you can set the identifier to 0. In this case the SKIP ROM operation is used to
		write the command.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_WRITE_COMMAND, [identifier, command], 'Q B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setCommunicationLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the communication LED configuration. By default the LED shows 1-wire
		communication traffic by flickering.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_SET_COMMUNICATION_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCommunicationLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Communication LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_GET_COMMUNICATION_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOneWire.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.searchBus = function(returnCallback, errorCallback) {
		/*
		Returns a list of up to 64 identifiers of the connected 1-Wire devices.
		Each identifier is 64-bit and consists of 8-bit family code, 48-bit ID and
		8-bit CRC.
		
		To get these identifiers the Bricklet runs the
		`SEARCH ROM algorithm <https://www.maximintegrated.com/en/app-notes/index.mvp/id/187>`__,
		as defined by Maxim.
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
					var identifierLength = null;
					var identifierChunkData = null;
					var identifierOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var identifierChunkOffset = null;
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
							identifierChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							identifierChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							identifierLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((identifierChunkOffset + 7) < identifierLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL, [], '', 69, 'H H Q7 B', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						identifierOutOfSync = (identifierChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = identifierChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!identifierOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < identifierLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL, [], '', 69, 'H H Q7 B', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							identifierOutOfSync =
								(identifierChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!identifierOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < identifierLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(identifierChunkData);

									if (streamStateObject['responseProperties']['data'].length >= identifierLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, identifierLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL, [], '', 69, 'H H Q7 B', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (identifierOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, identifierLength));
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
			                       BrickletOneWire.FUNCTION_SEARCH_BUS_LOW_LEVEL,
			                       [],
			                       '',
			                       69,
			                       'H H Q7 B',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.searchBus.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletOneWire;
