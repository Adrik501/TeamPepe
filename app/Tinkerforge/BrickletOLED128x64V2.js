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

BrickletOLED128x64V2.DEVICE_IDENTIFIER = 2112;
BrickletOLED128x64V2.DEVICE_DISPLAY_NAME = 'OLED 128x64 Bricklet 2.0';
BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL = 1;
BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL = 2;
BrickletOLED128x64V2.FUNCTION_CLEAR_DISPLAY = 3;
BrickletOLED128x64V2.FUNCTION_SET_DISPLAY_CONFIGURATION = 4;
BrickletOLED128x64V2.FUNCTION_GET_DISPLAY_CONFIGURATION = 5;
BrickletOLED128x64V2.FUNCTION_WRITE_LINE = 6;
BrickletOLED128x64V2.FUNCTION_DRAW_BUFFERED_FRAME = 7;
BrickletOLED128x64V2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletOLED128x64V2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletOLED128x64V2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletOLED128x64V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletOLED128x64V2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletOLED128x64V2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletOLED128x64V2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletOLED128x64V2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletOLED128x64V2.FUNCTION_RESET = 243;
BrickletOLED128x64V2.FUNCTION_WRITE_UID = 248;
BrickletOLED128x64V2.FUNCTION_READ_UID = 249;
BrickletOLED128x64V2.FUNCTION_GET_IDENTITY = 255;
BrickletOLED128x64V2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletOLED128x64V2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletOLED128x64V2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletOLED128x64V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletOLED128x64V2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletOLED128x64V2.BOOTLOADER_STATUS_OK = 0;
BrickletOLED128x64V2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletOLED128x64V2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletOLED128x64V2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletOLED128x64V2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletOLED128x64V2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletOLED128x64V2.STATUS_LED_CONFIG_OFF = 0;
BrickletOLED128x64V2.STATUS_LED_CONFIG_ON = 1;
BrickletOLED128x64V2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletOLED128x64V2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletOLED128x64V2(uid, ipcon) {
	//3.3cm (1.3") OLED display with 128x64 pixels

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletOLED128x64V2.DEVICE_IDENTIFIER, BrickletOLED128x64V2.DEVICE_DISPLAY_NAME);
	BrickletOLED128x64V2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_CLEAR_DISPLAY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_SET_DISPLAY_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_GET_DISPLAY_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_WRITE_LINE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_DRAW_BUFFERED_FRAME] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED128x64V2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;


	this.streamStateObjects[BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': [null, null, null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
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
			'packFormatString': 'B B B B H H ?448',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL] = {
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
			'packFormatString': 'B B B B',
			'unpackFormatString': 'H H ?480',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.writePixelsLowLevel = function(xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData, returnCallback, errorCallback) {
		/*
		Writes pixels to the specified window.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		If automatic draw is enabled (default) the pixels are directly written to
		the screen. Only pixels that have actually changed are updated on the screen,
		the rest stays the same.
		
		If automatic draw is disabled the pixels are written to an internal buffer and
		the buffer is transferred to the display only after :func:`Draw Buffered Frame`
		is called. This can be used to avoid flicker when drawing a complex frame in
		multiple steps.
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData], 'B B B B H H ?448', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readPixelsLowLevel = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Reads pixels from the specified window.
		
		The pixels are read from the window line by line top to bottom
		and each line is read from left to right.
		
		If automatic draw is enabled (default) the pixels that are read are always the
		same that are shown on the display.
		
		If automatic draw is disabled the pixels are read from the internal buffer
		(see :func:`Draw Buffered Frame`).
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 72, 'H H ?480', returnCallback, errorCallback, false, true);
	};
	this.clearDisplay = function(returnCallback, errorCallback) {
		/*
		Clears the complete content of the display.
		
		If automatic draw is enabled (default) the pixels are directly cleared.
		
		If automatic draw is disabled the the internal buffer is cleared and
		the buffer is transferred to the display only after :func:`Draw Buffered Frame`
		is called. This can be used to avoid flicker when drawing a complex frame in
		multiple steps.
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_CLEAR_DISPLAY, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setDisplayConfiguration = function(contrast, invert, automaticDraw, returnCallback, errorCallback) {
		/*
		Sets the configuration of the display.
		
		You can set a contrast value from 0 to 255 and you can invert the color
		(white/black) of the display.
		
		If automatic draw is set to *true*, the display is automatically updated with every
		call of :func:`Write Pixels` or :func:`Write Line`. If it is set to false, the
		changes are written into an internal buffer and only shown on the display after
		a call of :func:`Draw Buffered Frame`.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_SET_DISPLAY_CONFIGURATION, [contrast, invert, automaticDraw], 'B ? ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDisplayConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Display Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_GET_DISPLAY_CONFIGURATION, [], '', 11, 'B ? ?', returnCallback, errorCallback, false, true);
	};
	this.writeLine = function(line, position, text, returnCallback, errorCallback) {
		/*
		Writes text to a specific line with a specific position.
		The text can have a maximum of 22 characters.
		
		For example: (1, 10, "Hello") will write *Hello* in the middle of the
		second line of the display.
		
		The display uses a special 5x7 pixel charset. You can view the characters
		of the charset in Brick Viewer.
		
		If automatic draw is enabled (default) the text is directly written to
		the screen. Only pixels that have actually changed are updated on the screen,
		the rest stays the same.
		
		If automatic draw is disabled the text is written to an internal buffer and
		the buffer is transferred to the display only after :func:`Draw Buffered Frame`
		is called. This can be used to avoid flicker when drawing a complex frame in
		multiple steps.
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		
		The font conforms to code page 437.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_WRITE_LINE, [line, position, text], 'B B s22', 0, '', returnCallback, errorCallback, false, true);
	};
	this.drawBufferedFrame = function(forceCompleteRedraw, returnCallback, errorCallback) {
		/*
		Draws the currently buffered frame. Normally each call of :func:`Write Pixels` and
		:func:`Write Line` draws directly onto the display. If you turn automatic draw off
		(:func:`Set Display Configuration`), the data is written in an internal buffer and
		only transferred to the display by calling this function. This can be used to
		avoid flicker when drawing a complex frame in multiple steps.
		
		Set the `force complete redraw` to *true* to redraw the whole display
		instead of only the changed parts. Normally it should not be necessary to set this to
		*true*. It may only become necessary in case of stuck pixels because of errors.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_DRAW_BUFFERED_FRAME, [forceCompleteRedraw], '?', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOLED128x64V2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};
	this.writePixels = function(xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback) {
		/*
		Writes pixels to the specified window.
		
		The pixels are written into the window line by line top to bottom
		and each line is written from left to right.
		
		If automatic draw is enabled (default) the pixels are directly written to
		the screen. Only pixels that have actually changed are updated on the screen,
		the rest stays the same.
		
		If automatic draw is disabled the pixels are written to an internal buffer and
		the buffer is transferred to the display only after :func:`Draw Buffered Frame`
		is called. This can be used to avoid flicker when drawing a complex frame in
		multiple steps.
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
		*/

		var pixelsLength = 0;
		var pixelsChunkData = [];
		var pixelsChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[1];

		if (pixels.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(1)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				pixelsLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				pixelsLength = pixels.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 448, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'B B B B H H ?448',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (pixelsChunkOffset < pixels.length) {
					pixelsChunkData =
						this.ipcon.createChunkData(pixels, pixelsChunkOffset, 448, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
					                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
					                       'B B B B H H ?448',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					pixelsChunkOffset += 448;
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
					var pixelsLength = 0;
					var pixelsChunkData = [];
					var pixelsChunkOffset = 0;

					function doNextLLCall() {
						pixelsLength = streamStateObject['responseProperties']['data'].length;
						pixelsChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						pixelsChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = pixelsChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B B B B H H ?448',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 448;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 448)) {
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
				                                                           pixels);

				if (streamStateObject['streamProperties']['fixedLength']) {
					pixelsLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					pixelsLength = pixels.length;
				}

				pixelsChunkOffset = 0;
				pixelsChunkData =
					this.ipcon.createChunkData(pixels, 0, 448, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 448;
				streamStateObject['responseProperties']['streamInChunkLength'] = 448;
				streamStateObject['responseProperties']['streamInLLParams'] = [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletOLED128x64V2.FUNCTION_WRITE_PIXELS_LOW_LEVEL,
				                       [xStart, yStart, xEnd, yEnd, pixelsLength, pixelsChunkOffset, pixelsChunkData],
				                       'B B B B H H ?448',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.writePixels.call(device, xStart, yStart, xEnd, yEnd, pixels, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readPixels = function(xStart, yStart, xEnd, yEnd, returnCallback, errorCallback) {
		/*
		Reads pixels from the specified window.
		
		The pixels are read from the window line by line top to bottom
		and each line is read from left to right.
		
		If automatic draw is enabled (default) the pixels that are read are always the
		same that are shown on the display.
		
		If automatic draw is disabled the pixels are read from the internal buffer
		(see :func:`Draw Buffered Frame`).
		
		Automatic draw can be configured with the :func:`Set Display Configuration`
		function.
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
					var pixelsLength = null;
					var pixelsChunkData = null;
					var pixelsOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var pixelsChunkOffset = null;
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
							pixelsChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							pixelsChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							pixelsLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((pixelsChunkOffset + 480) < pixelsLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 72, 'H H ?480', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						pixelsOutOfSync = (pixelsChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = pixelsChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!pixelsOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < pixelsLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 72, 'H H ?480', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							pixelsOutOfSync =
								(pixelsChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!pixelsOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < pixelsLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(pixelsChunkData);

									if (streamStateObject['responseProperties']['data'].length >= pixelsLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, pixelsLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL, [xStart, yStart, xEnd, yEnd], 'B B B B', 72, 'H H ?480', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (pixelsOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, pixelsLength));
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
			                       BrickletOLED128x64V2.FUNCTION_READ_PIXELS_LOW_LEVEL,
			                       [xStart, yStart, xEnd, yEnd],
			                       'B B B B',
			                       72,
			                       'H H ?480',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.readPixels.call(device, xStart, yStart, xEnd, yEnd, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletOLED128x64V2;
