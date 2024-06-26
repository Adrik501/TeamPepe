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

BrickletNFC.DEVICE_IDENTIFIER = 286;
BrickletNFC.DEVICE_DISPLAY_NAME = 'NFC Bricklet';
BrickletNFC.CALLBACK_READER_STATE_CHANGED = 13;
BrickletNFC.CALLBACK_CARDEMU_STATE_CHANGED = 18;
BrickletNFC.CALLBACK_P2P_STATE_CHANGED = 24;
BrickletNFC.FUNCTION_SET_MODE = 1;
BrickletNFC.FUNCTION_GET_MODE = 2;
BrickletNFC.FUNCTION_READER_REQUEST_TAG_ID = 3;
BrickletNFC.FUNCTION_READER_GET_TAG_ID_LOW_LEVEL = 4;
BrickletNFC.FUNCTION_READER_GET_STATE = 5;
BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL = 6;
BrickletNFC.FUNCTION_READER_REQUEST_NDEF = 7;
BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL = 8;
BrickletNFC.FUNCTION_READER_AUTHENTICATE_MIFARE_CLASSIC_PAGE = 9;
BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL = 10;
BrickletNFC.FUNCTION_READER_REQUEST_PAGE = 11;
BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL = 12;
BrickletNFC.FUNCTION_CARDEMU_GET_STATE = 14;
BrickletNFC.FUNCTION_CARDEMU_START_DISCOVERY = 15;
BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL = 16;
BrickletNFC.FUNCTION_CARDEMU_START_TRANSFER = 17;
BrickletNFC.FUNCTION_P2P_GET_STATE = 19;
BrickletNFC.FUNCTION_P2P_START_DISCOVERY = 20;
BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL = 21;
BrickletNFC.FUNCTION_P2P_START_TRANSFER = 22;
BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL = 23;
BrickletNFC.FUNCTION_SET_DETECTION_LED_CONFIG = 25;
BrickletNFC.FUNCTION_GET_DETECTION_LED_CONFIG = 26;
BrickletNFC.FUNCTION_SET_MAXIMUM_TIMEOUT = 27;
BrickletNFC.FUNCTION_GET_MAXIMUM_TIMEOUT = 28;
BrickletNFC.FUNCTION_SIMPLE_GET_TAG_ID_LOW_LEVEL = 29;
BrickletNFC.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletNFC.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletNFC.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletNFC.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletNFC.FUNCTION_WRITE_FIRMWARE = 238;
BrickletNFC.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletNFC.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletNFC.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletNFC.FUNCTION_RESET = 243;
BrickletNFC.FUNCTION_WRITE_UID = 248;
BrickletNFC.FUNCTION_READ_UID = 249;
BrickletNFC.FUNCTION_GET_IDENTITY = 255;
BrickletNFC.MODE_OFF = 0;
BrickletNFC.MODE_CARDEMU = 1;
BrickletNFC.MODE_P2P = 2;
BrickletNFC.MODE_READER = 3;
BrickletNFC.MODE_SIMPLE = 4;
BrickletNFC.TAG_TYPE_MIFARE_CLASSIC = 0;
BrickletNFC.TAG_TYPE_TYPE1 = 1;
BrickletNFC.TAG_TYPE_TYPE2 = 2;
BrickletNFC.TAG_TYPE_TYPE3 = 3;
BrickletNFC.TAG_TYPE_TYPE4 = 4;
BrickletNFC.READER_STATE_INITIALIZATION = 0;
BrickletNFC.READER_STATE_IDLE = 128;
BrickletNFC.READER_STATE_ERROR = 192;
BrickletNFC.READER_STATE_REQUEST_TAG_ID = 2;
BrickletNFC.READER_STATE_REQUEST_TAG_ID_READY = 130;
BrickletNFC.READER_STATE_REQUEST_TAG_ID_ERROR = 194;
BrickletNFC.READER_STATE_AUTHENTICATE_MIFARE_CLASSIC_PAGE = 3;
BrickletNFC.READER_STATE_AUTHENTICATE_MIFARE_CLASSIC_PAGE_READY = 131;
BrickletNFC.READER_STATE_AUTHENTICATE_MIFARE_CLASSIC_PAGE_ERROR = 195;
BrickletNFC.READER_STATE_WRITE_PAGE = 4;
BrickletNFC.READER_STATE_WRITE_PAGE_READY = 132;
BrickletNFC.READER_STATE_WRITE_PAGE_ERROR = 196;
BrickletNFC.READER_STATE_REQUEST_PAGE = 5;
BrickletNFC.READER_STATE_REQUEST_PAGE_READY = 133;
BrickletNFC.READER_STATE_REQUEST_PAGE_ERROR = 197;
BrickletNFC.READER_STATE_WRITE_NDEF = 6;
BrickletNFC.READER_STATE_WRITE_NDEF_READY = 134;
BrickletNFC.READER_STATE_WRITE_NDEF_ERROR = 198;
BrickletNFC.READER_STATE_REQUEST_NDEF = 7;
BrickletNFC.READER_STATE_REQUEST_NDEF_READY = 135;
BrickletNFC.READER_STATE_REQUEST_NDEF_ERROR = 199;
BrickletNFC.KEY_A = 0;
BrickletNFC.KEY_B = 1;
BrickletNFC.READER_WRITE_TYPE4_CAPABILITY_CONTAINER = 3;
BrickletNFC.READER_WRITE_TYPE4_NDEF = 4;
BrickletNFC.READER_REQUEST_TYPE4_CAPABILITY_CONTAINER = 3;
BrickletNFC.READER_REQUEST_TYPE4_NDEF = 4;
BrickletNFC.CARDEMU_STATE_INITIALIZATION = 0;
BrickletNFC.CARDEMU_STATE_IDLE = 128;
BrickletNFC.CARDEMU_STATE_ERROR = 192;
BrickletNFC.CARDEMU_STATE_DISCOVER = 2;
BrickletNFC.CARDEMU_STATE_DISCOVER_READY = 130;
BrickletNFC.CARDEMU_STATE_DISCOVER_ERROR = 194;
BrickletNFC.CARDEMU_STATE_TRANSFER_NDEF = 3;
BrickletNFC.CARDEMU_STATE_TRANSFER_NDEF_READY = 131;
BrickletNFC.CARDEMU_STATE_TRANSFER_NDEF_ERROR = 195;
BrickletNFC.CARDEMU_TRANSFER_ABORT = 0;
BrickletNFC.CARDEMU_TRANSFER_WRITE = 1;
BrickletNFC.P2P_STATE_INITIALIZATION = 0;
BrickletNFC.P2P_STATE_IDLE = 128;
BrickletNFC.P2P_STATE_ERROR = 192;
BrickletNFC.P2P_STATE_DISCOVER = 2;
BrickletNFC.P2P_STATE_DISCOVER_READY = 130;
BrickletNFC.P2P_STATE_DISCOVER_ERROR = 194;
BrickletNFC.P2P_STATE_TRANSFER_NDEF = 3;
BrickletNFC.P2P_STATE_TRANSFER_NDEF_READY = 131;
BrickletNFC.P2P_STATE_TRANSFER_NDEF_ERROR = 195;
BrickletNFC.P2P_TRANSFER_ABORT = 0;
BrickletNFC.P2P_TRANSFER_WRITE = 1;
BrickletNFC.P2P_TRANSFER_READ = 2;
BrickletNFC.DETECTION_LED_CONFIG_OFF = 0;
BrickletNFC.DETECTION_LED_CONFIG_ON = 1;
BrickletNFC.DETECTION_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletNFC.DETECTION_LED_CONFIG_SHOW_DETECTION = 3;
BrickletNFC.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletNFC.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletNFC.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletNFC.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletNFC.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletNFC.BOOTLOADER_STATUS_OK = 0;
BrickletNFC.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletNFC.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletNFC.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletNFC.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletNFC.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletNFC.STATUS_LED_CONFIG_OFF = 0;
BrickletNFC.STATUS_LED_CONFIG_ON = 1;
BrickletNFC.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletNFC.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletNFC(uid, ipcon) {
	//NFC tag read/write, NFC P2P and Card Emulation

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletNFC.DEVICE_IDENTIFIER, BrickletNFC.DEVICE_DISPLAY_NAME);
	BrickletNFC.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 2];
	this.responseExpected[BrickletNFC.FUNCTION_SET_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_REQUEST_TAG_ID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_GET_TAG_ID_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_REQUEST_NDEF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_AUTHENTICATE_MIFARE_CLASSIC_PAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_REQUEST_PAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_CARDEMU_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_CARDEMU_START_DISCOVERY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_CARDEMU_START_TRANSFER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_P2P_GET_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_P2P_START_DISCOVERY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_P2P_START_TRANSFER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_SET_DETECTION_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_DETECTION_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_SET_MAXIMUM_TIMEOUT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_MAXIMUM_TIMEOUT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_SIMPLE_GET_TAG_ID_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletNFC.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletNFC.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletNFC.CALLBACK_READER_STATE_CHANGED] = [10, 'B ?'];
	this.callbackFormats[BrickletNFC.CALLBACK_CARDEMU_STATE_CHANGED] = [10, 'B ?'];
	this.callbackFormats[BrickletNFC.CALLBACK_P2P_STATE_CHANGED] = [10, 'B ?'];


	this.streamStateObjects[BrickletNFC.FUNCTION_READER_GET_TAG_ID_LOW_LEVEL] = {
		'dataMapping': [null, 'streamLength', 'streamChunkData'],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': true,
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
			'unpackFormatString': 'B B B32',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': [null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
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
			'packFormatString': 'H H H B58',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletNFC.FUNCTION_SIMPLE_GET_TAG_ID_LOW_LEVEL] = {
		'dataMapping': [null, 'streamLength', 'streamChunkData', null],
		'dataMappingStreamIn': [],
		'streamProperties': {
			'fixedLength': null,
			'singleChunk': true,
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
			'packFormatString': 'B',
			'unpackFormatString': 'B B B10 I',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.setMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the mode. The NFC Bricklet supports four modes:
		
		* Off
		* Card Emulation (Cardemu): Emulates a tag for other readers
		* Peer to Peer (P2P): Exchange data with other readers
		* Reader: Reads and writes tags
		* Simple: Automatically reads tag IDs
		
		If you change a mode, the Bricklet will reconfigure the hardware for this mode.
		Therefore, you can only use functions corresponding to the current mode. For
		example, in Reader mode you can only use Reader functions.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_SET_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMode = function(returnCallback, errorCallback) {
		/*
		Returns the mode as set by :func:`Set Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.readerRequestTagID = function(returnCallback, errorCallback) {
		/*
		After you call :func:`Reader Request Tag ID` the NFC Bricklet will try to read
		the tag ID from the tag. After this process is done the state will change.
		You can either register the :cb:`Reader State Changed` callback or you can poll
		:func:`Reader Get State` to find out about the state change.
		
		If the state changes to *ReaderRequestTagIDError* it means that either there was
		no tag present or that the tag has an incompatible type. If the state
		changes to *ReaderRequestTagIDReady* it means that a compatible tag was found
		and that the tag ID has been saved. You can now read out the tag ID by
		calling :func:`Reader Get Tag ID`.
		
		If two tags are in the proximity of the NFC Bricklet, this
		function will cycle through the tags. To select a specific tag you have
		to call :func:`Reader Request Tag ID` until the correct tag ID is found.
		
		In case of any *ReaderError* state the selection is lost and you have to
		start again by calling :func:`Reader Request Tag ID`.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_REQUEST_TAG_ID, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readerGetTagIDLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the tag type and the tag ID. This function can only be called if the
		NFC Bricklet is currently in one of the *ReaderReady* states. The returned tag ID
		is the tag ID that was saved through the last call of :func:`Reader Request Tag ID`.
		
		To get the tag ID of a tag the approach is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *ReaderRequestTagIDReady* (see :func:`Reader Get State` or
		   :cb:`Reader State Changed` callback)
		3. Call :func:`Reader Get Tag ID`
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_GET_TAG_ID_LOW_LEVEL, [], '', 42, 'B B B32', returnCallback, errorCallback, false, true);
	};
	this.readerGetState = function(returnCallback, errorCallback) {
		/*
		Returns the current reader state of the NFC Bricklet.
		
		On startup the Bricklet will be in the *ReaderInitialization* state. The
		initialization will only take about 20ms. After that it changes to *ReaderIdle*.
		
		The Bricklet is also reinitialized if the mode is changed, see :func:`Set Mode`.
		
		The functions of this Bricklet can be called in the *ReaderIdle* state and all of
		the *ReaderReady* and *ReaderError* states.
		
		Example: If you call :func:`Reader Request Page`, the state will change to
		*ReaderRequestPage* until the reading of the page is finished. Then it will change
		to either *ReaderRequestPageReady* if it worked or to *ReaderRequestPageError* if it
		didn't. If the request worked you can get the page by calling :func:`Reader Read Page`.
		
		The same approach is used analogously for the other API functions.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_GET_STATE, [], '', 10, 'B ?', returnCallback, errorCallback, false, true);
	};
	this.readerWriteNDEFLowLevel = function(ndefLength, ndefChunkOffset, ndefChunkData, returnCallback, errorCallback) {
		/*
		Writes NDEF formated data.
		
		This function currently supports NFC Forum Type 2 and 4.
		
		The general approach for writing a NDEF message is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *ReaderRequestTagIDReady* (see
		   :func:`Reader Get State` or :cb:`Reader State Changed` callback)
		3. If looking for a specific tag then call :func:`Reader Get Tag ID` and check
		   if the expected tag was found, if it was not found got back to step 1
		4. Call :func:`Reader Write NDEF` with the NDEF message that you want to write
		5. Wait for state to change to *ReaderWriteNDEFReady* (see :func:`Reader Get State`
		   or :cb:`Reader State Changed` callback)
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL, [ndefLength, ndefChunkOffset, ndefChunkData], 'H H B60', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readerRequestNDEF = function(returnCallback, errorCallback) {
		/*
		Reads NDEF formated data from a tag.
		
		This function currently supports NFC Forum Type 1, 2, 3 and 4.
		
		The general approach for reading a NDEF message is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *RequestTagIDReady* (see :func:`Reader Get State`
		   or :cb:`Reader State Changed` callback)
		3. If looking for a specific tag then call :func:`Reader Get Tag ID` and check if the
		   expected tag was found, if it was not found got back to step 1
		4. Call :func:`Reader Request NDEF`
		5. Wait for state to change to *ReaderRequestNDEFReady* (see :func:`Reader Get State`
		   or :cb:`Reader State Changed` callback)
		6. Call :func:`Reader Read NDEF` to retrieve the NDEF message from the buffer
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_REQUEST_NDEF, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readerReadNDEFLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the NDEF data from an internal buffer. To fill the buffer
		with a NDEF message you have to call :func:`Reader Request NDEF` beforehand.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', returnCallback, errorCallback, false, true);
	};
	this.readerAuthenticateMifareClassicPage = function(page, keyNumber, key, returnCallback, errorCallback) {
		/*
		Mifare Classic tags use authentication. If you want to read from or write to
		a Mifare Classic page you have to authenticate it beforehand.
		Each page can be authenticated with two keys: A (``key_number`` = 0) and B
		(``key_number`` = 1). A new Mifare Classic
		tag that has not yet been written to can be accessed with key A
		and the default key ``[0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]``.
		
		The approach to read or write a Mifare Classic page is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *ReaderRequestTagIDReady* (see :func:`Reader Get State`
		   or :cb:`Reader State Changed` callback)
		3. If looking for a specific tag then call :func:`Reader Get Tag ID` and check if the
		   expected tag was found, if it was not found got back to step 1
		4. Call :func:`Reader Authenticate Mifare Classic Page` with page and key for the page
		5. Wait for state to change to *ReaderAuthenticatingMifareClassicPageReady* (see
		   :func:`Reader Get State` or :cb:`Reader State Changed` callback)
		6. Call :func:`Reader Request Page` or :func:`Reader Write Page` to read/write page
		
		The authentication will always work for one whole sector (4 pages).
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_AUTHENTICATE_MIFARE_CLASSIC_PAGE, [page, keyNumber, key], 'H B B6', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readerWritePageLowLevel = function(page, dataLength, dataChunkOffset, dataChunkData, returnCallback, errorCallback) {
		/*
		Writes a maximum of 8192 bytes starting from the given page. How many pages are written
		depends on the tag type. The page sizes are as follows:
		
		* Mifare Classic page size: 16 byte
		* NFC Forum Type 1 page size: 8 byte
		* NFC Forum Type 2 page size: 4 byte
		* NFC Forum Type 3 page size: 16 byte
		* NFC Forum Type 4: No pages, page = file selection (CC or NDEF, see below)
		
		The general approach for writing to a tag is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *ReaderRequestTagIDReady* (see :func:`Reader Get State` or
		   :cb:`Reader State Changed` callback)
		3. If looking for a specific tag then call :func:`Reader Get Tag ID` and check if the
		   expected tag was found, if it was not found got back to step 1
		4. Call :func:`Reader Write Page` with page number and data
		5. Wait for state to change to *ReaderWritePageReady* (see :func:`Reader Get State` or
		   :cb:`Reader State Changed` callback)
		
		If you use a Mifare Classic tag you have to authenticate a page before you
		can write to it. See :func:`Reader Authenticate Mifare Classic Page`.
		
		NFC Forum Type 4 tags are not organized into pages but different files. We currently
		support two files: Capability Container file (CC) and NDEF file.
		
		Choose CC by setting page to 3 or NDEF by setting page to 4.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL, [page, dataLength, dataChunkOffset, dataChunkData], 'H H H B58', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readerRequestPage = function(page, length, returnCallback, errorCallback) {
		/*
		Reads a maximum of 8192 bytes starting from the given page and stores them into a buffer.
		The buffer can then be read out with :func:`Reader Read Page`.
		How many pages are read depends on the tag type. The page sizes are
		as follows:
		
		* Mifare Classic page size: 16 byte
		* NFC Forum Type 1 page size: 8 byte
		* NFC Forum Type 2 page size: 4 byte
		* NFC Forum Type 3 page size: 16 byte
		* NFC Forum Type 4: No pages, page = file selection (CC or NDEF, see below)
		
		The general approach for reading a tag is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *RequestTagIDReady* (see :func:`Reader Get State`
		   or :cb:`Reader State Changed` callback)
		3. If looking for a specific tag then call :func:`Reader Get Tag ID` and check if the
		   expected tag was found, if it was not found got back to step 1
		4. Call :func:`Reader Request Page` with page number
		5. Wait for state to change to *ReaderRequestPageReady* (see :func:`Reader Get State`
		   or :cb:`Reader State Changed` callback)
		6. Call :func:`Reader Read Page` to retrieve the page from the buffer
		
		If you use a Mifare Classic tag you have to authenticate a page before you
		can read it. See :func:`Reader Authenticate Mifare Classic Page`.
		
		NFC Forum Type 4 tags are not organized into pages but different files. We currently
		support two files: Capability Container file (CC) and NDEF file.
		
		Choose CC by setting page to 3 or NDEF by setting page to 4.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_REQUEST_PAGE, [page, length], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readerReadPageLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the page data from an internal buffer. To fill the buffer
		with specific pages you have to call :func:`Reader Request Page` beforehand.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL, [], '', 72, 'H H B60', returnCallback, errorCallback, false, true);
	};
	this.cardemuGetState = function(returnCallback, errorCallback) {
		/*
		Returns the current cardemu state of the NFC Bricklet.
		
		On startup the Bricklet will be in the *CardemuInitialization* state. The
		initialization will only take about 20ms. After that it changes to *CardemuIdle*.
		
		The Bricklet is also reinitialized if the mode is changed, see :func:`Set Mode`.
		
		The functions of this Bricklet can be called in the *CardemuIdle* state and all of
		the *CardemuReady* and *CardemuError* states.
		
		Example: If you call :func:`Cardemu Start Discovery`, the state will change to
		*CardemuDiscover* until the discovery is finished. Then it will change
		to either *CardemuDiscoverReady* if it worked or to *CardemuDiscoverError* if it
		didn't.
		
		The same approach is used analogously for the other API functions.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_CARDEMU_GET_STATE, [], '', 10, 'B ?', returnCallback, errorCallback, false, true);
	};
	this.cardemuStartDiscovery = function(returnCallback, errorCallback) {
		/*
		Starts the discovery process. If you call this function while a NFC
		reader device is near to the NFC Bricklet the state will change from
		*CardemuDiscovery* to *CardemuDiscoveryReady*.
		
		If no NFC reader device can be found or if there is an error during
		discovery the cardemu state will change to *CardemuDiscoveryError*. In this case you
		have to restart the discovery process.
		
		If the cardemu state changes to *CardemuDiscoveryReady* you can start the NDEF message
		transfer with :func:`Cardemu Write NDEF` and :func:`Cardemu Start Transfer`.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_CARDEMU_START_DISCOVERY, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.cardemuWriteNDEFLowLevel = function(ndefLength, ndefChunkOffset, ndefChunkData, returnCallback, errorCallback) {
		/*
		Writes the NDEF message that is to be transferred to the NFC peer.
		
		The maximum supported NDEF message size in Cardemu mode is 255 byte.
		
		You can call this function at any time in Cardemu mode. The internal buffer
		will not be overwritten until you call this function again or change the
		mode.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL, [ndefLength, ndefChunkOffset, ndefChunkData], 'H H B60', 0, '', returnCallback, errorCallback, false, true);
	};
	this.cardemuStartTransfer = function(transfer, returnCallback, errorCallback) {
		/*
		You can start the transfer of a NDEF message if the cardemu state is *CardemuDiscoveryReady*.
		
		Before you call this function to start a write transfer, the NDEF message that
		is to be transferred has to be written via :func:`Cardemu Write NDEF` first.
		
		After you call this function the state will change to *CardemuTransferNDEF*. It will
		change to *CardemuTransferNDEFReady* if the transfer was successful or
		*CardemuTransferNDEFError* if it wasn't.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_CARDEMU_START_TRANSFER, [transfer], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.p2pGetState = function(returnCallback, errorCallback) {
		/*
		Returns the current P2P state of the NFC Bricklet.
		
		On startup the Bricklet will be in the *P2PInitialization* state. The
		initialization will only take about 20ms. After that it changes to *P2PIdle*.
		
		The Bricklet is also reinitialized if the mode is changed, see :func:`Set Mode`.
		
		The functions of this Bricklet can be called in the *P2PIdle* state and all of
		the *P2PReady* and *P2PError* states.
		
		Example: If you call :func:`P2P Start Discovery`, the state will change to
		*P2PDiscover* until the discovery is finished. Then it will change
		to either P2PDiscoverReady* if it worked or to *P2PDiscoverError* if it
		didn't.
		
		The same approach is used analogously for the other API functions.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_P2P_GET_STATE, [], '', 10, 'B ?', returnCallback, errorCallback, false, true);
	};
	this.p2pStartDiscovery = function(returnCallback, errorCallback) {
		/*
		Starts the discovery process. If you call this function while another NFC
		P2P enabled device is near to the NFC Bricklet the state will change from
		*P2PDiscovery* to *P2PDiscoveryReady*.
		
		If no NFC P2P enabled device can be found or if there is an error during
		discovery the P2P state will change to *P2PDiscoveryError*. In this case you
		have to restart the discovery process.
		
		If the P2P state changes to *P2PDiscoveryReady* you can start the NDEF message
		transfer with :func:`P2P Start Transfer`.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_P2P_START_DISCOVERY, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.p2pWriteNDEFLowLevel = function(ndefLength, ndefChunkOffset, ndefChunkData, returnCallback, errorCallback) {
		/*
		Writes the NDEF message that is to be transferred to the NFC peer.
		
		The maximum supported NDEF message size for P2P transfer is 255 byte.
		
		You can call this function at any time in P2P mode. The internal buffer
		will not be overwritten until you call this function again, change the
		mode or use P2P to read an NDEF messages.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL, [ndefLength, ndefChunkOffset, ndefChunkData], 'H H B60', 0, '', returnCallback, errorCallback, false, true);
	};
	this.p2pStartTransfer = function(transfer, returnCallback, errorCallback) {
		/*
		You can start the transfer of a NDEF message if the P2P state is *P2PDiscoveryReady*.
		
		Before you call this function to start a write transfer, the NDEF message that
		is to be transferred has to be written via :func:`P2P Write NDEF` first.
		
		After you call this function the P2P state will change to *P2PTransferNDEF*. It will
		change to *P2PTransferNDEFReady* if the transfer was successfull or
		*P2PTransferNDEFError* if it wasn't.
		
		If you started a write transfer you are now done. If you started a read transfer
		you can now use :func:`P2P Read NDEF` to read the NDEF message that was written
		by the NFC peer.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_P2P_START_TRANSFER, [transfer], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.p2pReadNDEFLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the NDEF message that was written by a NFC peer in NFC P2P mode.
		
		The NDEF message is ready if you called :func:`P2P Start Transfer` with a
		read transfer and the P2P state changed to *P2PTransferNDEFReady*.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', returnCallback, errorCallback, false, true);
	};
	this.setDetectionLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the detection LED configuration. By default the LED shows
		if a card/reader is detected.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_SET_DETECTION_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDetectionLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Detection LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_DETECTION_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setMaximumTimeout = function(timeout, returnCallback, errorCallback) {
		/*
		Sets the maximum timeout.
		
		This is a global maximum used for all internal state timeouts. The timeouts depend heavily
		on the used tags etc. For example: If you use a Type 2 tag and you want to detect if
		it is present, you have to use :func:`Reader Request Tag ID` and wait for the state
		to change to either the error state or the ready state.
		
		With the default configuration this takes 2-3 seconds. By setting the maximum timeout to
		100ms you can reduce this time to ~150-200ms. For Type 2 this would also still work
		with a 20ms timeout (a Type 2 tag answers usually within 10ms). A type 4 tag can take
		up to 500ms in our tests.
		
		If you need a fast response time to discover if a tag is present or not you can find
		a good timeout value by trial and error for your specific tag.
		
		By default we use a very conservative timeout, to be sure that any tag can always
		answer in time.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_SET_MAXIMUM_TIMEOUT, [timeout], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMaximumTimeout = function(returnCallback, errorCallback) {
		/*
		Returns the timeout as set by :func:`Set Maximum Timeout`
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_MAXIMUM_TIMEOUT, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.simpleGetTagIDLowLevel = function(index, returnCallback, errorCallback) {
		/*
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_SIMPLE_GET_TAG_ID_LOW_LEVEL, [index], 'B', 24, 'B B B10 I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletNFC.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.readerGetTagID = function(returnCallback, errorCallback) {
		/*
		Returns the tag type and the tag ID. This function can only be called if the
		NFC Bricklet is currently in one of the *ReaderReady* states. The returned tag ID
		is the tag ID that was saved through the last call of :func:`Reader Request Tag ID`.
		
		To get the tag ID of a tag the approach is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *ReaderRequestTagIDReady* (see :func:`Reader Get State` or
		   :cb:`Reader State Changed` callback)
		3. Call :func:`Reader Get Tag ID`
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
					var tagIDLength = null;
					var tagIDChunkData = null;
					var tagIDOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var tagIDChunkOffset = null;
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
							tagIDChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							tagIDChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							tagIDLength = llvalues[i];
							break;
						}
					}

					tagIDChunkOffset = 0;

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(tagIDChunkData.splice(0, tagIDLength));
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
			                       BrickletNFC.FUNCTION_READER_GET_TAG_ID_LOW_LEVEL,
			                       [],
			                       '',
			                       42,
			                       'B B B32',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.readerGetTagID.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
	this.readerWriteNDEF = function(ndef, returnCallback, errorCallback) {
		/*
		Writes NDEF formated data.
		
		This function currently supports NFC Forum Type 2 and 4.
		
		The general approach for writing a NDEF message is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *ReaderRequestTagIDReady* (see
		   :func:`Reader Get State` or :cb:`Reader State Changed` callback)
		3. If looking for a specific tag then call :func:`Reader Get Tag ID` and check
		   if the expected tag was found, if it was not found got back to step 1
		4. Call :func:`Reader Write NDEF` with the NDEF message that you want to write
		5. Wait for state to change to *ReaderWriteNDEFReady* (see :func:`Reader Get State`
		   or :cb:`Reader State Changed` callback)
		*/

		var ndefLength = 0;
		var ndefChunkData = [];
		var ndefChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[6];

		if (ndef.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(6)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				ndefLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				ndefLength = ndef.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				ndefChunkData =
					this.ipcon.createChunkData(ndef, 0, 60, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL,
				                       [ndefLength, ndefChunkOffset, ndefChunkData],
				                       'H H B60',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (ndefChunkOffset < ndef.length) {
					ndefChunkData =
						this.ipcon.createChunkData(ndef, ndefChunkOffset, 60, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL,
					                       [ndefLength, ndefChunkOffset, ndefChunkData],
					                       'H H B60',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					ndefChunkOffset += 60;
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
					var ndefLength = 0;
					var ndefChunkData = [];
					var ndefChunkOffset = 0;

					function doNextLLCall() {
						ndefLength = streamStateObject['responseProperties']['data'].length;
						ndefChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						ndefChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL,
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
				                                                           ndef);

				if (streamStateObject['streamProperties']['fixedLength']) {
					ndefLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					ndefLength = ndef.length;
				}

				ndefChunkOffset = 0;
				ndefChunkData =
					this.ipcon.createChunkData(ndef, 0, 60, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 60;
				streamStateObject['responseProperties']['streamInChunkLength'] = 60;
				streamStateObject['responseProperties']['streamInLLParams'] = [ndefLength, ndefChunkOffset, ndefChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_READER_WRITE_NDEF_LOW_LEVEL,
				                       [ndefLength, ndefChunkOffset, ndefChunkData],
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
					device.readerWriteNDEF.call(device, ndef, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readerReadNDEF = function(returnCallback, errorCallback) {
		/*
		Returns the NDEF data from an internal buffer. To fill the buffer
		with a NDEF message you have to call :func:`Reader Request NDEF` beforehand.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[8];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var ndefLength = null;
					var ndefChunkData = null;
					var ndefOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var ndefChunkOffset = null;
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
							ndefChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							ndefChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							ndefLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((ndefChunkOffset + 60) < ndefLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						ndefOutOfSync = (ndefChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = ndefChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!ndefOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < ndefLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							ndefOutOfSync =
								(ndefChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!ndefOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < ndefLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(ndefChunkData);

									if (streamStateObject['responseProperties']['data'].length >= ndefLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, ndefLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (ndefOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, ndefLength));
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
			                       BrickletNFC.FUNCTION_READER_READ_NDEF_LOW_LEVEL,
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
				device.readerReadNDEF.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
	this.readerWritePage = function(page, data, returnCallback, errorCallback) {
		/*
		Writes a maximum of 8192 bytes starting from the given page. How many pages are written
		depends on the tag type. The page sizes are as follows:
		
		* Mifare Classic page size: 16 byte
		* NFC Forum Type 1 page size: 8 byte
		* NFC Forum Type 2 page size: 4 byte
		* NFC Forum Type 3 page size: 16 byte
		* NFC Forum Type 4: No pages, page = file selection (CC or NDEF, see below)
		
		The general approach for writing to a tag is as follows:
		
		1. Call :func:`Reader Request Tag ID`
		2. Wait for state to change to *ReaderRequestTagIDReady* (see :func:`Reader Get State` or
		   :cb:`Reader State Changed` callback)
		3. If looking for a specific tag then call :func:`Reader Get Tag ID` and check if the
		   expected tag was found, if it was not found got back to step 1
		4. Call :func:`Reader Write Page` with page number and data
		5. Wait for state to change to *ReaderWritePageReady* (see :func:`Reader Get State` or
		   :cb:`Reader State Changed` callback)
		
		If you use a Mifare Classic tag you have to authenticate a page before you
		can write to it. See :func:`Reader Authenticate Mifare Classic Page`.
		
		NFC Forum Type 4 tags are not organized into pages but different files. We currently
		support two files: Capability Container file (CC) and NDEF file.
		
		Choose CC by setting page to 3 or NDEF by setting page to 4.
		*/

		var dataLength = 0;
		var dataChunkData = [];
		var dataChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[10];

		if (data.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(10)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				dataLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				dataLength = data.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				dataChunkData =
					this.ipcon.createChunkData(data, 0, 58, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL,
				                       [page, dataLength, dataChunkOffset, dataChunkData],
				                       'H H H B58',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (dataChunkOffset < data.length) {
					dataChunkData =
						this.ipcon.createChunkData(data, dataChunkOffset, 58, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL,
					                       [page, dataLength, dataChunkOffset, dataChunkData],
					                       'H H H B58',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					dataChunkOffset += 58;
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
					var dataLength = 0;
					var dataChunkData = [];
					var dataChunkOffset = 0;

					function doNextLLCall() {
						dataLength = streamStateObject['responseProperties']['data'].length;
						dataChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						dataChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'H H H B58',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 58;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 58)) {
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
				                                                           data);

				if (streamStateObject['streamProperties']['fixedLength']) {
					dataLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					dataLength = data.length;
				}

				dataChunkOffset = 0;
				dataChunkData =
					this.ipcon.createChunkData(data, 0, 58, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 58;
				streamStateObject['responseProperties']['streamInChunkLength'] = 58;
				streamStateObject['responseProperties']['streamInLLParams'] = [page, dataLength, dataChunkOffset, dataChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_READER_WRITE_PAGE_LOW_LEVEL,
				                       [page, dataLength, dataChunkOffset, dataChunkData],
				                       'H H H B58',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.readerWritePage.call(device, page, data, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readerReadPage = function(returnCallback, errorCallback) {
		/*
		Returns the page data from an internal buffer. To fill the buffer
		with specific pages you have to call :func:`Reader Request Page` beforehand.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[12];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var dataLength = null;
					var dataChunkData = null;
					var dataOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var dataChunkOffset = null;
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
							dataChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							dataChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							dataLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((dataChunkOffset + 60) < dataLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						dataOutOfSync = (dataChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = dataChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!dataOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < dataLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							dataOutOfSync =
								(dataChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!dataOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < dataLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(dataChunkData);

									if (streamStateObject['responseProperties']['data'].length >= dataLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, dataLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (dataOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, dataLength));
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
			                       BrickletNFC.FUNCTION_READER_READ_PAGE_LOW_LEVEL,
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
				device.readerReadPage.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};
	this.cardemuWriteNDEF = function(ndef, returnCallback, errorCallback) {
		/*
		Writes the NDEF message that is to be transferred to the NFC peer.
		
		The maximum supported NDEF message size in Cardemu mode is 255 byte.
		
		You can call this function at any time in Cardemu mode. The internal buffer
		will not be overwritten until you call this function again or change the
		mode.
		*/

		var ndefLength = 0;
		var ndefChunkData = [];
		var ndefChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[16];

		if (ndef.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(16)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				ndefLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				ndefLength = ndef.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				ndefChunkData =
					this.ipcon.createChunkData(ndef, 0, 60, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL,
				                       [ndefLength, ndefChunkOffset, ndefChunkData],
				                       'H H B60',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (ndefChunkOffset < ndef.length) {
					ndefChunkData =
						this.ipcon.createChunkData(ndef, ndefChunkOffset, 60, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL,
					                       [ndefLength, ndefChunkOffset, ndefChunkData],
					                       'H H B60',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					ndefChunkOffset += 60;
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
					var ndefLength = 0;
					var ndefChunkData = [];
					var ndefChunkOffset = 0;

					function doNextLLCall() {
						ndefLength = streamStateObject['responseProperties']['data'].length;
						ndefChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						ndefChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL,
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
				                                                           ndef);

				if (streamStateObject['streamProperties']['fixedLength']) {
					ndefLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					ndefLength = ndef.length;
				}

				ndefChunkOffset = 0;
				ndefChunkData =
					this.ipcon.createChunkData(ndef, 0, 60, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 60;
				streamStateObject['responseProperties']['streamInChunkLength'] = 60;
				streamStateObject['responseProperties']['streamInLLParams'] = [ndefLength, ndefChunkOffset, ndefChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_CARDEMU_WRITE_NDEF_LOW_LEVEL,
				                       [ndefLength, ndefChunkOffset, ndefChunkData],
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
					device.cardemuWriteNDEF.call(device, ndef, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};
	this.p2pWriteNDEF = function(ndef, returnCallback, errorCallback) {
		/*
		Writes the NDEF message that is to be transferred to the NFC peer.
		
		The maximum supported NDEF message size for P2P transfer is 255 byte.
		
		You can call this function at any time in P2P mode. The internal buffer
		will not be overwritten until you call this function again, change the
		mode or use P2P to read an NDEF messages.
		*/

		var ndefLength = 0;
		var ndefChunkData = [];
		var ndefChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[21];

		if (ndef.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(21)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				ndefLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				ndefLength = ndef.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				ndefChunkData =
					this.ipcon.createChunkData(ndef, 0, 60, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL,
				                       [ndefLength, ndefChunkOffset, ndefChunkData],
				                       'H H B60',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (ndefChunkOffset < ndef.length) {
					ndefChunkData =
						this.ipcon.createChunkData(ndef, ndefChunkOffset, 60, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL,
					                       [ndefLength, ndefChunkOffset, ndefChunkData],
					                       'H H B60',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					ndefChunkOffset += 60;
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
					var ndefLength = 0;
					var ndefChunkData = [];
					var ndefChunkOffset = 0;

					function doNextLLCall() {
						ndefLength = streamStateObject['responseProperties']['data'].length;
						ndefChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						ndefChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = ndefChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL,
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
				                                                           ndef);

				if (streamStateObject['streamProperties']['fixedLength']) {
					ndefLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					ndefLength = ndef.length;
				}

				ndefChunkOffset = 0;
				ndefChunkData =
					this.ipcon.createChunkData(ndef, 0, 60, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 60;
				streamStateObject['responseProperties']['streamInChunkLength'] = 60;
				streamStateObject['responseProperties']['streamInLLParams'] = [ndefLength, ndefChunkOffset, ndefChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletNFC.FUNCTION_P2P_WRITE_NDEF_LOW_LEVEL,
				                       [ndefLength, ndefChunkOffset, ndefChunkData],
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
					device.p2pWriteNDEF.call(device, ndef, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.p2pReadNDEF = function(returnCallback, errorCallback) {
		/*
		Returns the NDEF message that was written by a NFC peer in NFC P2P mode.
		
		The NDEF message is ready if you called :func:`P2P Start Transfer` with a
		read transfer and the P2P state changed to *P2PTransferNDEFReady*.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[23];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var ndefLength = null;
					var ndefChunkData = null;
					var ndefOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var ndefChunkOffset = null;
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
							ndefChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							ndefChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							ndefLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((ndefChunkOffset + 60) < ndefLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						ndefOutOfSync = (ndefChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = ndefChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!ndefOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < ndefLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							ndefOutOfSync =
								(ndefChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!ndefOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < ndefLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(ndefChunkData);

									if (streamStateObject['responseProperties']['data'].length >= ndefLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, ndefLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL, [], '', 72, 'H H B60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (ndefOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, ndefLength));
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
			                       BrickletNFC.FUNCTION_P2P_READ_NDEF_LOW_LEVEL,
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
				device.p2pReadNDEF.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.simpleGetTagID = function(index, returnCallback, errorCallback) {
		/*
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[29];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var tagIDLength = null;
					var tagIDChunkData = null;
					var tagIDOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var tagIDChunkOffset = null;
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
							tagIDChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							tagIDChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							tagIDLength = llvalues[i];
							break;
						}
					}

					tagIDChunkOffset = 0;

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(tagIDChunkData.splice(0, tagIDLength));
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
			                       BrickletNFC.FUNCTION_SIMPLE_GET_TAG_ID_LOW_LEVEL,
			                       [index],
			                       'B',
			                       24,
			                       'B B B10 I',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.simpleGetTagID.call(device, index, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletNFC;
