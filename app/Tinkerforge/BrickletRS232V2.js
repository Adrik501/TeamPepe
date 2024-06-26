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

BrickletRS232V2.DEVICE_IDENTIFIER = 2108;
BrickletRS232V2.DEVICE_DISPLAY_NAME = 'RS232 Bricklet 2.0';
BrickletRS232V2.CALLBACK_READ_LOW_LEVEL = 12;
BrickletRS232V2.CALLBACK_ERROR_COUNT = 13;
BrickletRS232V2.CALLBACK_FRAME_READABLE = 16;
BrickletRS232V2.CALLBACK_READ = -12;
BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL = 1;
BrickletRS232V2.FUNCTION_READ_LOW_LEVEL = 2;
BrickletRS232V2.FUNCTION_ENABLE_READ_CALLBACK = 3;
BrickletRS232V2.FUNCTION_DISABLE_READ_CALLBACK = 4;
BrickletRS232V2.FUNCTION_IS_READ_CALLBACK_ENABLED = 5;
BrickletRS232V2.FUNCTION_SET_CONFIGURATION = 6;
BrickletRS232V2.FUNCTION_GET_CONFIGURATION = 7;
BrickletRS232V2.FUNCTION_SET_BUFFER_CONFIG = 8;
BrickletRS232V2.FUNCTION_GET_BUFFER_CONFIG = 9;
BrickletRS232V2.FUNCTION_GET_BUFFER_STATUS = 10;
BrickletRS232V2.FUNCTION_GET_ERROR_COUNT = 11;
BrickletRS232V2.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION = 14;
BrickletRS232V2.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION = 15;
BrickletRS232V2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletRS232V2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletRS232V2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletRS232V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletRS232V2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletRS232V2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletRS232V2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletRS232V2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletRS232V2.FUNCTION_RESET = 243;
BrickletRS232V2.FUNCTION_WRITE_UID = 248;
BrickletRS232V2.FUNCTION_READ_UID = 249;
BrickletRS232V2.FUNCTION_GET_IDENTITY = 255;
BrickletRS232V2.PARITY_NONE = 0;
BrickletRS232V2.PARITY_ODD = 1;
BrickletRS232V2.PARITY_EVEN = 2;
BrickletRS232V2.STOPBITS_1 = 1;
BrickletRS232V2.STOPBITS_2 = 2;
BrickletRS232V2.WORDLENGTH_5 = 5;
BrickletRS232V2.WORDLENGTH_6 = 6;
BrickletRS232V2.WORDLENGTH_7 = 7;
BrickletRS232V2.WORDLENGTH_8 = 8;
BrickletRS232V2.FLOWCONTROL_OFF = 0;
BrickletRS232V2.FLOWCONTROL_SOFTWARE = 1;
BrickletRS232V2.FLOWCONTROL_HARDWARE = 2;
BrickletRS232V2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletRS232V2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletRS232V2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletRS232V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletRS232V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletRS232V2.BOOTLOADER_STATUS_OK = 0;
BrickletRS232V2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletRS232V2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletRS232V2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletRS232V2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletRS232V2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletRS232V2.STATUS_LED_CONFIG_OFF = 0;
BrickletRS232V2.STATUS_LED_CONFIG_ON = 1;
BrickletRS232V2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletRS232V2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletRS232V2(uid, ipcon) {
	//Communicates with RS232 devices

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletRS232V2.DEVICE_IDENTIFIER, BrickletRS232V2.DEVICE_DISPLAY_NAME);
	BrickletRS232V2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_READ_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_ENABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_DISABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_IS_READ_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_SET_BUFFER_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_BUFFER_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_BUFFER_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232V2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232V2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS232V2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS232V2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRS232V2.CALLBACK_READ_LOW_LEVEL] = [72, 'H H c60'];
	this.callbackFormats[BrickletRS232V2.CALLBACK_ERROR_COUNT] = [16, 'I I'];
	this.callbackFormats[BrickletRS232V2.CALLBACK_FRAME_READABLE] = [10, 'H'];

	this.highLevelCallbacks[BrickletRS232V2.CALLBACK_READ] = [['streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];

	this.streamStateObjects[BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL] = {
		'dataMapping': ['streamChunkWritten'],
		'dataMappingStreamIn': ['streamLength', 'streamChunkOffset', 'streamChunkData'],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': false,
			'shortWrite': true
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
			'streamInResponseEmpty': false,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'H H c60',
			'unpackFormatString': 'B',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletRS232V2.FUNCTION_READ_LOW_LEVEL] = {
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
			'packFormatString': 'H',
			'unpackFormatString': 'H H c60',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.writeLowLevel = function(messageLength, messageChunkOffset, messageChunkData, returnCallback, errorCallback) {
		/*
		Writes characters to the RS232 interface. The characters can be binary data,
		ASCII or similar is not necessary.
		
		The return value is the number of characters that were written.
		
		See :func:`Set Configuration` for configuration possibilities
		regarding baud rate, parity and so on.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL, [messageLength, messageChunkOffset, messageChunkData], 'H H c60', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.readLowLevel = function(length, returnCallback, errorCallback) {
		/*
		Returns up to *length* characters from receive buffer.
		
		Instead of polling with this function, you can also use
		callbacks. But note that this function will return available
		data only when the read callback is disabled.
		See :func:`Enable Read Callback` and :cb:`Read` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', returnCallback, errorCallback, false, true);
	};
	this.enableReadCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Read` callback. This will disable the :cb:`Frame Readable` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_ENABLE_READ_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableReadCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Read` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_DISABLE_READ_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isReadCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Read` callback is enabled,
		*false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_IS_READ_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(baudrate, parity, stopbits, wordlength, flowcontrol, returnCallback, errorCallback) {
		/*
		Sets the configuration for the RS232 communication.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_SET_CONFIGURATION, [baudrate, parity, stopbits, wordlength, flowcontrol], 'I B B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_CONFIGURATION, [], '', 16, 'I B B B B', returnCallback, errorCallback, false, true);
	};
	this.setBufferConfig = function(sendBufferSize, receiveBufferSize, returnCallback, errorCallback) {
		/*
		Sets the send and receive buffer size in byte. In total the buffers have to be
		10240 byte (10KiB) in size, the minimum buffer size is 1024 byte (1KiB) for each.
		
		The current buffer content is lost if this function is called.
		
		The send buffer holds data that is given by :func:`Write` and
		can not be written yet. The receive buffer holds data that is
		received through RS232 but could not yet be send to the
		user, either by :func:`Read` or through :cb:`Read` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_SET_BUFFER_CONFIG, [sendBufferSize, receiveBufferSize], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getBufferConfig = function(returnCallback, errorCallback) {
		/*
		Returns the buffer configuration as set by :func:`Set Buffer Config`.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_BUFFER_CONFIG, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.getBufferStatus = function(returnCallback, errorCallback) {
		/*
		Returns the currently used bytes for the send and received buffer.
		
		See :func:`Set Buffer Config` for buffer size configuration.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_BUFFER_STATUS, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.getErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the current number of overrun and parity errors.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_ERROR_COUNT, [], '', 16, 'I I', returnCallback, errorCallback, false, true);
	};
	this.setFrameReadableCallbackConfiguration = function(frameSize, returnCallback, errorCallback) {
		/*
		Configures the :cb:`Frame Readable` callback. The frame size is the number of bytes, that have to be readable to trigger the callback.
		A frame size of 0 disables the callback. A frame size greater than 0 enables the callback and disables the :cb:`Read` callback.
		
		By default the callback is disabled.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION, [frameSize], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameReadableCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Frame Readable Callback Configuration`.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS232V2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};
	this.write = function(message, returnCallback, errorCallback) {
		/*
		Writes characters to the RS232 interface. The characters can be binary data,
		ASCII or similar is not necessary.
		
		The return value is the number of characters that were written.
		
		See :func:`Set Configuration` for configuration possibilities
		regarding baud rate, parity and so on.
		*/

		var messageLength = 0;
		var messageChunkData = [];
		var messageChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[1];

		if (message.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(1)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				messageLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				messageLength = message.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				messageChunkData =
					this.ipcon.createChunkData(message, 0, 60, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL,
				                       [messageLength, messageChunkOffset, messageChunkData],
				                       'H H c60',
				                       9,
				                       'B',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (messageChunkOffset < message.length) {
					messageChunkData =
						this.ipcon.createChunkData(message, messageChunkOffset, 60, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL,
					                       [messageLength, messageChunkOffset, messageChunkData],
					                       'H H c60',
					                       9,
					                       'B',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					messageChunkOffset += 60;
				}
			}

			if (returnCallback) {
				returnCallback();
			}
		}
		else {
			var responseHandler = null;
			var functionToQueue = null;

			if (streamStateObject['responseProperties']['responseHandler'] === null) {
				responseHandler = function (device, fid, packetResponse) {
					var result = [];
					var payload = null;
					var llvalues = null;
					var packetErrorFlag = 0;
					var shortWriteWritten = -1;
					var streamStateObject = device.streamStateObjects[fid];
					var responseEmpty = streamStateObject['responseProperties']['streamInResponseEmpty'];
					var messageLength = 0;
					var messageChunkData = [];
					var messageChunkOffset = 0;

					function doNextLLCall() {
						messageLength = streamStateObject['responseProperties']['data'].length;
						messageChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						messageChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = messageLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = messageChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = messageChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'H H c60',
						                         9,
						                         'B',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 60;
					}

					function handleStreamInDone() {
						if (streamStateObject['responseProperties']['returnCB']) {
							if (streamStateObject['streamProperties']['shortWrite']) {
								for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
									if (streamStateObject['dataMapping'][i].endsWith('Written')) {
										result[i] = streamStateObject['responseProperties']['streamInWritten'];
										break;
									}
								}
							}

							if (!responseEmpty) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}
							else {
								streamStateObject['responseProperties']['returnCB'].apply(device);
							}
						}

						device.resetStreamStateObject(streamStateObject);

						if (streamStateObject['responseProperties']['callQueue'].length > 0) {
							streamStateObject['responseProperties']['callQueue'].shift()(device);
						}
					}

					if (!streamStateObject) {
						return;
					}

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

					if (responseEmpty) {
						if (streamStateObject['streamProperties']['singleChunk']) {
							handleStreamInDone();

							return;
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
					else {
						payload = device.ipcon.getPayloadFromPacket(packetResponse);
						llvalues = device.ipcon.unpack(payload,
						                               streamStateObject['responseProperties']['unpackFormatString']);

						if (!payload || !llvalues) {
							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							result.push(llvalues[i]);
						}

						if (streamStateObject['streamProperties']['singleChunk']) {
							if (streamStateObject['responseProperties']['returnCB']) {
								streamStateObject['responseProperties']['returnCB'].apply(device, result);
							}

							device.resetStreamStateObject(streamStateObject);

							if (streamStateObject['responseProperties']['callQueue'].length > 0) {
								streamStateObject['responseProperties']['callQueue'].shift()(device);
							}

							return;
						}

						if (streamStateObject['streamProperties']['shortWrite']) {
							for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
								if (streamStateObject['dataMapping'][i].endsWith('Written')) {
									shortWriteWritten = llvalues[i];
									streamStateObject['responseProperties']['streamInWritten'] += shortWriteWritten;
									break;
								}
							}
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 60)) {
								// Either last chunk or short write
								handleStreamInDone();
								return;
							}
						}

						if (streamStateObject['responseProperties']['streamInChunkOffset'] < streamStateObject['responseProperties']['data'].length) {
							doNextLLCall();
						}
						else {
							handleStreamInDone();
						}
					}
				};

				streamStateObject['responseProperties']['responseHandler'] = responseHandler;
			}

			if (!streamStateObject['responseProperties']['running']) {
				streamStateObject['responseProperties']['running'] = true;
				streamStateObject['responseProperties']['returnCB'] = returnCallback;
				streamStateObject['responseProperties']['errorCB'] = errorCallback;
				streamStateObject['responseProperties']['data'].length = 0;
				streamStateObject['responseProperties']['data'].push.apply(streamStateObject['responseProperties']['data'],
				                                                           message);

				if (streamStateObject['streamProperties']['fixedLength']) {
					messageLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					messageLength = message.length;
				}

				messageChunkOffset = 0;
				messageChunkData =
					this.ipcon.createChunkData(message, 0, 60, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 60;
				streamStateObject['responseProperties']['streamInChunkLength'] = 60;
				streamStateObject['responseProperties']['streamInLLParams'] = [messageLength, messageChunkOffset, messageChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletRS232V2.FUNCTION_WRITE_LOW_LEVEL,
				                       [messageLength, messageChunkOffset, messageChunkData],
				                       'H H c60',
				                       9,
				                       'B',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.write.call(device, message, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.read = function(length, returnCallback, errorCallback) {
		/*
		Returns up to *length* characters from receive buffer.
		
		Instead of polling with this function, you can also use
		callbacks. But note that this function will return available
		data only when the read callback is disabled.
		See :func:`Enable Read Callback` and :cb:`Read` callback.
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
					var messageLength = null;
					var messageChunkData = null;
					var messageOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var messageChunkOffset = null;
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
							messageChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							messageChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							messageLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((messageChunkOffset + 60) < messageLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletRS232V2.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						messageOutOfSync = (messageChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = messageChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!messageOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < messageLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletRS232V2.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							messageOutOfSync =
								(messageChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!messageOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < messageLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(messageChunkData);

									if (streamStateObject['responseProperties']['data'].length >= messageLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, messageLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletRS232V2.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (messageOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, messageLength));
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
			                       BrickletRS232V2.FUNCTION_READ_LOW_LEVEL,
			                       [length],
			                       'H',
			                       72,
			                       'H H c60',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.read.call(device, length, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletRS232V2;
