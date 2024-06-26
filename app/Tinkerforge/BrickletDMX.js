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

BrickletDMX.DEVICE_IDENTIFIER = 285;
BrickletDMX.DEVICE_DISPLAY_NAME = 'DMX Bricklet';
BrickletDMX.CALLBACK_FRAME_STARTED = 14;
BrickletDMX.CALLBACK_FRAME_AVAILABLE = 15;
BrickletDMX.CALLBACK_FRAME_LOW_LEVEL = 16;
BrickletDMX.CALLBACK_FRAME_ERROR_COUNT = 17;
BrickletDMX.CALLBACK_FRAME = -16;
BrickletDMX.FUNCTION_SET_DMX_MODE = 1;
BrickletDMX.FUNCTION_GET_DMX_MODE = 2;
BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL = 3;
BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL = 4;
BrickletDMX.FUNCTION_SET_FRAME_DURATION = 5;
BrickletDMX.FUNCTION_GET_FRAME_DURATION = 6;
BrickletDMX.FUNCTION_GET_FRAME_ERROR_COUNT = 7;
BrickletDMX.FUNCTION_SET_COMMUNICATION_LED_CONFIG = 8;
BrickletDMX.FUNCTION_GET_COMMUNICATION_LED_CONFIG = 9;
BrickletDMX.FUNCTION_SET_ERROR_LED_CONFIG = 10;
BrickletDMX.FUNCTION_GET_ERROR_LED_CONFIG = 11;
BrickletDMX.FUNCTION_SET_FRAME_CALLBACK_CONFIG = 12;
BrickletDMX.FUNCTION_GET_FRAME_CALLBACK_CONFIG = 13;
BrickletDMX.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletDMX.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletDMX.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletDMX.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletDMX.FUNCTION_WRITE_FIRMWARE = 238;
BrickletDMX.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletDMX.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletDMX.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletDMX.FUNCTION_RESET = 243;
BrickletDMX.FUNCTION_WRITE_UID = 248;
BrickletDMX.FUNCTION_READ_UID = 249;
BrickletDMX.FUNCTION_GET_IDENTITY = 255;
BrickletDMX.DMX_MODE_MASTER = 0;
BrickletDMX.DMX_MODE_SLAVE = 1;
BrickletDMX.COMMUNICATION_LED_CONFIG_OFF = 0;
BrickletDMX.COMMUNICATION_LED_CONFIG_ON = 1;
BrickletDMX.COMMUNICATION_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletDMX.COMMUNICATION_LED_CONFIG_SHOW_COMMUNICATION = 3;
BrickletDMX.ERROR_LED_CONFIG_OFF = 0;
BrickletDMX.ERROR_LED_CONFIG_ON = 1;
BrickletDMX.ERROR_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletDMX.ERROR_LED_CONFIG_SHOW_ERROR = 3;
BrickletDMX.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletDMX.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletDMX.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletDMX.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletDMX.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletDMX.BOOTLOADER_STATUS_OK = 0;
BrickletDMX.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletDMX.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletDMX.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletDMX.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletDMX.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletDMX.STATUS_LED_CONFIG_OFF = 0;
BrickletDMX.STATUS_LED_CONFIG_ON = 1;
BrickletDMX.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletDMX.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletDMX(uid, ipcon) {
	//DMX master and slave

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletDMX.DEVICE_IDENTIFIER, BrickletDMX.DEVICE_DISPLAY_NAME);
	BrickletDMX.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletDMX.FUNCTION_SET_DMX_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_DMX_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_SET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_FRAME_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_SET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_SET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_SET_FRAME_CALLBACK_CONFIG] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_FRAME_CALLBACK_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletDMX.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletDMX.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletDMX.CALLBACK_FRAME_STARTED] = [8, ''];
	this.callbackFormats[BrickletDMX.CALLBACK_FRAME_AVAILABLE] = [12, 'I'];
	this.callbackFormats[BrickletDMX.CALLBACK_FRAME_LOW_LEVEL] = [72, 'H H B56 I'];
	this.callbackFormats[BrickletDMX.CALLBACK_FRAME_ERROR_COUNT] = [16, 'I I'];

	this.highLevelCallbacks[BrickletDMX.CALLBACK_FRAME] = [['streamLength', 'streamChunkOffset', 'streamChunkData', null], {'fixedLength': null, 'singleChunk': false}, null];

	this.streamStateObjects[BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': ['streamLength', 'streamChunkOffset', 'streamChunkData'],
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
			'packFormatString': 'H H B60',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL] = {
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
			'unpackFormatString': 'H H B56 I',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.setDMXMode = function(dmxMode, returnCallback, errorCallback) {
		/*
		Sets the DMX mode to either master or slave.
		
		Calling this function sets frame number to 0.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_DMX_MODE, [dmxMode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDMXMode = function(returnCallback, errorCallback) {
		/*
		Returns the DMX mode, as set by :func:`Set DMX Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_DMX_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.writeFrameLowLevel = function(frameLength, frameChunkOffset, frameChunkData, returnCallback, errorCallback) {
		/*
		Writes a DMX frame. The maximum frame size is 512 byte. Each byte represents one channel.
		
		The next frame can be written after the :cb:`Frame Started` callback was called. The frame
		is double buffered, so a new frame can be written as soon as the writing of the prior frame
		starts.
		
		The data will be transfered when the next frame duration ends, see :func:`Set Frame Duration`.
		
		Generic approach:
		
		* Set the frame duration to a value that represents the number of frames per second you want to achieve.
		* Set channels for first frame.
		* Wait for the :cb:`Frame Started` callback.
		* Set channels for next frame.
		* Wait for the :cb:`Frame Started` callback.
		* and so on.
		
		This approach ensures that you can set new DMX data with a fixed frame rate.
		
		This function can only be called in master mode.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL, [frameLength, frameChunkOffset, frameChunkData], 'H H B60', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readFrameLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the last frame that was written by the DMX master. The size of the array
		is equivalent to the number of channels in the frame. Each byte represents one channel.
		
		The next frame is available after the :cb:`Frame Available` callback was called.
		
		Generic approach:
		
		* Call :func:`Read Frame` to get first frame.
		* Wait for the :cb:`Frame Available` callback.
		* Call :func:`Read Frame` to get second frame.
		* Wait for the :cb:`Frame Available` callback.
		* and so on.
		
		Instead of polling this function you can also use the :cb:`Frame` callback.
		You can enable it with :func:`Set Frame Callback Config`.
		
		The frame number starts at 0 and it is increased by one with each received frame.
		
		This function can only be called in slave mode.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL, [], '', 72, 'H H B56 I', returnCallback, errorCallback, false, true);
	};
	this.setFrameDuration = function(frameDuration, returnCallback, errorCallback) {
		/*
		Sets the duration of a frame.
		
		Example: If you want to achieve 20 frames per second, you should
		set the frame duration to 50ms (50ms * 20 = 1 second).
		
		If you always want to send a frame as fast as possible you can set
		this value to 0.
		
		This setting is only used in master mode.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_FRAME_DURATION, [frameDuration], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameDuration = function(returnCallback, errorCallback) {
		/*
		Returns the frame duration as set by :func:`Set Frame Duration`.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_FRAME_DURATION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getFrameErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the current number of overrun and framing errors.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_FRAME_ERROR_COUNT, [], '', 16, 'I I', returnCallback, errorCallback, false, true);
	};
	this.setCommunicationLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the communication LED configuration. By default the LED shows
		communication traffic, it flickers once for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_COMMUNICATION_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCommunicationLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Communication LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_COMMUNICATION_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setErrorLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the error LED configuration.
		
		By default the error LED turns on if there is any error (see :cb:`Frame Error Count`
		callback). If you call this function with the Show-Error option again, the LED
		will turn off until the next error occurs.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_ERROR_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getErrorLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Error LED Config`.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_ERROR_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setFrameCallbackConfig = function(frameStartedCallbackEnabled, frameAvailableCallbackEnabled, frameCallbackEnabled, frameErrorCountCallbackEnabled, returnCallback, errorCallback) {
		/*
		Enables/Disables the different callbacks. By default the
		:cb:`Frame Started` callback and :cb:`Frame Available` callback are enabled while
		the :cb:`Frame` callback and :cb:`Frame Error Count` callback are disabled.
		
		If you want to use the :cb:`Frame` callback you can enable it and disable
		the :cb:`Frame Available` callback at the same time. It becomes redundant in
		this case.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_FRAME_CALLBACK_CONFIG, [frameStartedCallbackEnabled, frameAvailableCallbackEnabled, frameCallbackEnabled, frameErrorCountCallbackEnabled], '? ? ? ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameCallbackConfig = function(returnCallback, errorCallback) {
		/*
		Returns the frame callback config as set by :func:`Set Frame Callback Config`.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_FRAME_CALLBACK_CONFIG, [], '', 12, '? ? ? ?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletDMX.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};
	this.writeFrame = function(frame, returnCallback, errorCallback) {
		/*
		Writes a DMX frame. The maximum frame size is 512 byte. Each byte represents one channel.
		
		The next frame can be written after the :cb:`Frame Started` callback was called. The frame
		is double buffered, so a new frame can be written as soon as the writing of the prior frame
		starts.
		
		The data will be transfered when the next frame duration ends, see :func:`Set Frame Duration`.
		
		Generic approach:
		
		* Set the frame duration to a value that represents the number of frames per second you want to achieve.
		* Set channels for first frame.
		* Wait for the :cb:`Frame Started` callback.
		* Set channels for next frame.
		* Wait for the :cb:`Frame Started` callback.
		* and so on.
		
		This approach ensures that you can set new DMX data with a fixed frame rate.
		
		This function can only be called in master mode.
		*/

		var frameLength = 0;
		var frameChunkData = [];
		var frameChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[3];

		if (frame.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(3)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				frameLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				frameLength = frame.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				frameChunkData =
					this.ipcon.createChunkData(frame, 0, 60, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL,
				                       [frameLength, frameChunkOffset, frameChunkData],
				                       'H H B60',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (frameChunkOffset < frame.length) {
					frameChunkData =
						this.ipcon.createChunkData(frame, frameChunkOffset, 60, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL,
					                       [frameLength, frameChunkOffset, frameChunkData],
					                       'H H B60',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					frameChunkOffset += 60;
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
					var frameLength = 0;
					var frameChunkData = [];
					var frameChunkOffset = 0;

					function doNextLLCall() {
						frameLength = streamStateObject['responseProperties']['data'].length;
						frameChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						frameChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = frameLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = frameChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = frameChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'H H B60',
						                         0,
						                         '',
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
				                                                           frame);

				if (streamStateObject['streamProperties']['fixedLength']) {
					frameLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					frameLength = frame.length;
				}

				frameChunkOffset = 0;
				frameChunkData =
					this.ipcon.createChunkData(frame, 0, 60, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 60;
				streamStateObject['responseProperties']['streamInChunkLength'] = 60;
				streamStateObject['responseProperties']['streamInLLParams'] = [frameLength, frameChunkOffset, frameChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletDMX.FUNCTION_WRITE_FRAME_LOW_LEVEL,
				                       [frameLength, frameChunkOffset, frameChunkData],
				                       'H H B60',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.writeFrame.call(device, frame, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readFrame = function(returnCallback, errorCallback) {
		/*
		Returns the last frame that was written by the DMX master. The size of the array
		is equivalent to the number of channels in the frame. Each byte represents one channel.
		
		The next frame is available after the :cb:`Frame Available` callback was called.
		
		Generic approach:
		
		* Call :func:`Read Frame` to get first frame.
		* Wait for the :cb:`Frame Available` callback.
		* Call :func:`Read Frame` to get second frame.
		* Wait for the :cb:`Frame Available` callback.
		* and so on.
		
		Instead of polling this function you can also use the :cb:`Frame` callback.
		You can enable it with :func:`Set Frame Callback Config`.
		
		The frame number starts at 0 and it is increased by one with each received frame.
		
		This function can only be called in slave mode.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[4];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var frameLength = null;
					var frameChunkData = null;
					var frameOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var frameChunkOffset = null;
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
							frameChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							frameChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							frameLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((frameChunkOffset + 56) < frameLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL, [], '', 72, 'H H B56 I', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						frameOutOfSync = (frameChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = frameChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!frameOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < frameLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL, [], '', 72, 'H H B56 I', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							frameOutOfSync =
								(frameChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!frameOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < frameLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(frameChunkData);

									if (streamStateObject['responseProperties']['data'].length >= frameLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, frameLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL, [], '', 72, 'H H B56 I', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (frameOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, frameLength));
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
			                       BrickletDMX.FUNCTION_READ_FRAME_LOW_LEVEL,
			                       [],
			                       '',
			                       72,
			                       'H H B56 I',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.readFrame.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletDMX;
