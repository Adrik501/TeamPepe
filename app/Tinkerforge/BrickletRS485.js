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

BrickletRS485.DEVICE_IDENTIFIER = 277;
BrickletRS485.DEVICE_DISPLAY_NAME = 'RS485 Bricklet';
BrickletRS485.CALLBACK_READ_LOW_LEVEL = 41;
BrickletRS485.CALLBACK_ERROR_COUNT = 42;
BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_COILS_REQUEST = 43;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_COILS_RESPONSE_LOW_LEVEL = 44;
BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_HOLDING_REGISTERS_REQUEST = 45;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_HOLDING_REGISTERS_RESPONSE_LOW_LEVEL = 46;
BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_SINGLE_COIL_REQUEST = 47;
BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_SINGLE_COIL_RESPONSE = 48;
BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_SINGLE_REGISTER_REQUEST = 49;
BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_SINGLE_REGISTER_RESPONSE = 50;
BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_COILS_REQUEST_LOW_LEVEL = 51;
BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_MULTIPLE_COILS_RESPONSE = 52;
BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_REGISTERS_REQUEST_LOW_LEVEL = 53;
BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_RESPONSE = 54;
BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_DISCRETE_INPUTS_REQUEST = 55;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_DISCRETE_INPUTS_RESPONSE_LOW_LEVEL = 56;
BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_INPUT_REGISTERS_REQUEST = 57;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_INPUT_REGISTERS_RESPONSE_LOW_LEVEL = 58;
BrickletRS485.CALLBACK_FRAME_READABLE = 61;
BrickletRS485.CALLBACK_READ = -41;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_COILS_RESPONSE = -44;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_HOLDING_REGISTERS_RESPONSE = -46;
BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_COILS_REQUEST = -51;
BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_REGISTERS_REQUEST = -53;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_DISCRETE_INPUTS_RESPONSE = -56;
BrickletRS485.CALLBACK_MODBUS_MASTER_READ_INPUT_REGISTERS_RESPONSE = -58;
BrickletRS485.FUNCTION_WRITE_LOW_LEVEL = 1;
BrickletRS485.FUNCTION_READ_LOW_LEVEL = 2;
BrickletRS485.FUNCTION_ENABLE_READ_CALLBACK = 3;
BrickletRS485.FUNCTION_DISABLE_READ_CALLBACK = 4;
BrickletRS485.FUNCTION_IS_READ_CALLBACK_ENABLED = 5;
BrickletRS485.FUNCTION_SET_RS485_CONFIGURATION = 6;
BrickletRS485.FUNCTION_GET_RS485_CONFIGURATION = 7;
BrickletRS485.FUNCTION_SET_MODBUS_CONFIGURATION = 8;
BrickletRS485.FUNCTION_GET_MODBUS_CONFIGURATION = 9;
BrickletRS485.FUNCTION_SET_MODE = 10;
BrickletRS485.FUNCTION_GET_MODE = 11;
BrickletRS485.FUNCTION_SET_COMMUNICATION_LED_CONFIG = 12;
BrickletRS485.FUNCTION_GET_COMMUNICATION_LED_CONFIG = 13;
BrickletRS485.FUNCTION_SET_ERROR_LED_CONFIG = 14;
BrickletRS485.FUNCTION_GET_ERROR_LED_CONFIG = 15;
BrickletRS485.FUNCTION_SET_BUFFER_CONFIG = 16;
BrickletRS485.FUNCTION_GET_BUFFER_CONFIG = 17;
BrickletRS485.FUNCTION_GET_BUFFER_STATUS = 18;
BrickletRS485.FUNCTION_ENABLE_ERROR_COUNT_CALLBACK = 19;
BrickletRS485.FUNCTION_DISABLE_ERROR_COUNT_CALLBACK = 20;
BrickletRS485.FUNCTION_IS_ERROR_COUNT_CALLBACK_ENABLED = 21;
BrickletRS485.FUNCTION_GET_ERROR_COUNT = 22;
BrickletRS485.FUNCTION_GET_MODBUS_COMMON_ERROR_COUNT = 23;
BrickletRS485.FUNCTION_MODBUS_SLAVE_REPORT_EXCEPTION = 24;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL = 25;
BrickletRS485.FUNCTION_MODBUS_MASTER_READ_COILS = 26;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL = 27;
BrickletRS485.FUNCTION_MODBUS_MASTER_READ_HOLDING_REGISTERS = 28;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_SINGLE_COIL_REQUEST = 29;
BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_SINGLE_COIL = 30;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_SINGLE_REGISTER_REQUEST = 31;
BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_SINGLE_REGISTER = 32;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_MULTIPLE_COILS_REQUEST = 33;
BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL = 34;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_MULTIPLE_REGISTERS_REQUEST = 35;
BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL = 36;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL = 37;
BrickletRS485.FUNCTION_MODBUS_MASTER_READ_DISCRETE_INPUTS = 38;
BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL = 39;
BrickletRS485.FUNCTION_MODBUS_MASTER_READ_INPUT_REGISTERS = 40;
BrickletRS485.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION = 59;
BrickletRS485.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION = 60;
BrickletRS485.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletRS485.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletRS485.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletRS485.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletRS485.FUNCTION_WRITE_FIRMWARE = 238;
BrickletRS485.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletRS485.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletRS485.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletRS485.FUNCTION_RESET = 243;
BrickletRS485.FUNCTION_WRITE_UID = 248;
BrickletRS485.FUNCTION_READ_UID = 249;
BrickletRS485.FUNCTION_GET_IDENTITY = 255;
BrickletRS485.PARITY_NONE = 0;
BrickletRS485.PARITY_ODD = 1;
BrickletRS485.PARITY_EVEN = 2;
BrickletRS485.STOPBITS_1 = 1;
BrickletRS485.STOPBITS_2 = 2;
BrickletRS485.WORDLENGTH_5 = 5;
BrickletRS485.WORDLENGTH_6 = 6;
BrickletRS485.WORDLENGTH_7 = 7;
BrickletRS485.WORDLENGTH_8 = 8;
BrickletRS485.DUPLEX_HALF = 0;
BrickletRS485.DUPLEX_FULL = 1;
BrickletRS485.MODE_RS485 = 0;
BrickletRS485.MODE_MODBUS_MASTER_RTU = 1;
BrickletRS485.MODE_MODBUS_SLAVE_RTU = 2;
BrickletRS485.COMMUNICATION_LED_CONFIG_OFF = 0;
BrickletRS485.COMMUNICATION_LED_CONFIG_ON = 1;
BrickletRS485.COMMUNICATION_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletRS485.COMMUNICATION_LED_CONFIG_SHOW_COMMUNICATION = 3;
BrickletRS485.ERROR_LED_CONFIG_OFF = 0;
BrickletRS485.ERROR_LED_CONFIG_ON = 1;
BrickletRS485.ERROR_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletRS485.ERROR_LED_CONFIG_SHOW_ERROR = 3;
BrickletRS485.EXCEPTION_CODE_TIMEOUT = -1;
BrickletRS485.EXCEPTION_CODE_SUCCESS = 0;
BrickletRS485.EXCEPTION_CODE_ILLEGAL_FUNCTION = 1;
BrickletRS485.EXCEPTION_CODE_ILLEGAL_DATA_ADDRESS = 2;
BrickletRS485.EXCEPTION_CODE_ILLEGAL_DATA_VALUE = 3;
BrickletRS485.EXCEPTION_CODE_SLAVE_DEVICE_FAILURE = 4;
BrickletRS485.EXCEPTION_CODE_ACKNOWLEDGE = 5;
BrickletRS485.EXCEPTION_CODE_SLAVE_DEVICE_BUSY = 6;
BrickletRS485.EXCEPTION_CODE_MEMORY_PARITY_ERROR = 8;
BrickletRS485.EXCEPTION_CODE_GATEWAY_PATH_UNAVAILABLE = 10;
BrickletRS485.EXCEPTION_CODE_GATEWAY_TARGET_DEVICE_FAILED_TO_RESPOND = 11;
BrickletRS485.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletRS485.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletRS485.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletRS485.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletRS485.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletRS485.BOOTLOADER_STATUS_OK = 0;
BrickletRS485.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletRS485.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletRS485.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletRS485.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletRS485.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletRS485.STATUS_LED_CONFIG_OFF = 0;
BrickletRS485.STATUS_LED_CONFIG_ON = 1;
BrickletRS485.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletRS485.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletRS485(uid, ipcon) {
	//Communicates with RS485/Modbus devices with full- or half-duplex

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletRS485.DEVICE_IDENTIFIER, BrickletRS485.DEVICE_DISPLAY_NAME);
	BrickletRS485.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletRS485.FUNCTION_WRITE_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_READ_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_ENABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_DISABLE_READ_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_IS_READ_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_RS485_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_MODBUS_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_MODBUS_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_MODE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_BUFFER_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_BUFFER_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_BUFFER_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_ENABLE_ERROR_COUNT_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_DISABLE_ERROR_COUNT_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_IS_ERROR_COUNT_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_MODBUS_COMMON_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_REPORT_EXCEPTION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_READ_COILS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_READ_HOLDING_REGISTERS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_SINGLE_COIL_REQUEST] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_SINGLE_COIL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_SINGLE_REGISTER_REQUEST] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_SINGLE_REGISTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_MULTIPLE_COILS_REQUEST] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_MULTIPLE_REGISTERS_REQUEST] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_READ_DISCRETE_INPUTS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_MODBUS_MASTER_READ_INPUT_REGISTERS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletRS485.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletRS485.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletRS485.CALLBACK_READ_LOW_LEVEL] = [72, 'H H c60'];
	this.callbackFormats[BrickletRS485.CALLBACK_ERROR_COUNT] = [16, 'I I'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_COILS_REQUEST] = [15, 'B I H'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_COILS_RESPONSE_LOW_LEVEL] = [72, 'B b H H ?464'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_HOLDING_REGISTERS_REQUEST] = [15, 'B I H'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_HOLDING_REGISTERS_RESPONSE_LOW_LEVEL] = [72, 'B b H H H29'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_SINGLE_COIL_REQUEST] = [14, 'B I ?'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_SINGLE_COIL_RESPONSE] = [10, 'B b'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_SINGLE_REGISTER_REQUEST] = [15, 'B I H'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_SINGLE_REGISTER_RESPONSE] = [10, 'B b'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_COILS_REQUEST_LOW_LEVEL] = [72, 'B I H H ?440'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_MULTIPLE_COILS_RESPONSE] = [10, 'B b'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_REGISTERS_REQUEST_LOW_LEVEL] = [71, 'B I H H H27'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_RESPONSE] = [10, 'B b'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_DISCRETE_INPUTS_REQUEST] = [15, 'B I H'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_DISCRETE_INPUTS_RESPONSE_LOW_LEVEL] = [72, 'B b H H ?464'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_SLAVE_READ_INPUT_REGISTERS_REQUEST] = [15, 'B I H'];
	this.callbackFormats[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_INPUT_REGISTERS_RESPONSE_LOW_LEVEL] = [72, 'B b H H H29'];
	this.callbackFormats[BrickletRS485.CALLBACK_FRAME_READABLE] = [10, 'H'];

	this.highLevelCallbacks[BrickletRS485.CALLBACK_READ] = [['streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];
	this.highLevelCallbacks[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_COILS_RESPONSE] = [[null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];
	this.highLevelCallbacks[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_HOLDING_REGISTERS_RESPONSE] = [[null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];
	this.highLevelCallbacks[BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_COILS_REQUEST] = [[null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];
	this.highLevelCallbacks[BrickletRS485.CALLBACK_MODBUS_SLAVE_WRITE_MULTIPLE_REGISTERS_REQUEST] = [[null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];
	this.highLevelCallbacks[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_DISCRETE_INPUTS_RESPONSE] = [[null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];
	this.highLevelCallbacks[BrickletRS485.CALLBACK_MODBUS_MASTER_READ_INPUT_REGISTERS_RESPONSE] = [[null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];

	this.streamStateObjects[BrickletRS485.FUNCTION_WRITE_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletRS485.FUNCTION_READ_LOW_LEVEL] = {
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
	this.streamStateObjects[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL] = {
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
			'packFormatString': 'B H H ?472',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL] = {
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
			'packFormatString': 'B H H H29',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL] = {
		'dataMapping': [null],
		'dataMappingStreamIn': [null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
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
			'streamInResponseEmpty': false,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'B I H H ?440',
			'unpackFormatString': 'B',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL] = {
		'dataMapping': [null],
		'dataMappingStreamIn': [null, null, 'streamLength', 'streamChunkOffset', 'streamChunkData'],
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
			'streamInResponseEmpty': false,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'B I H H H27',
			'unpackFormatString': 'B',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL] = {
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
			'packFormatString': 'B H H ?472',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL] = {
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
			'packFormatString': 'B H H H29',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.writeLowLevel = function(messageLength, messageChunkOffset, messageChunkData, returnCallback, errorCallback) {
		/*
		Writes characters to the RS485 interface. The characters can be binary data,
		ASCII or similar is not necessary.
		
		The return value is the number of characters that were written.
		
		See :func:`Set RS485 Configuration` for configuration possibilities
		regarding baudrate, parity and so on.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_WRITE_LOW_LEVEL, [messageLength, messageChunkOffset, messageChunkData], 'H H c60', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.readLowLevel = function(length, returnCallback, errorCallback) {
		/*
		Returns up to *length* characters from receive buffer.
		
		Instead of polling with this function, you can also use
		callbacks. But note that this function will return available
		data only when the read callback is disabled.
		See :func:`Enable Read Callback` and :cb:`Read` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', returnCallback, errorCallback, false, true);
	};
	this.enableReadCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Read` callback. This will disable the :cb:`Frame Readable` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_ENABLE_READ_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableReadCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Read` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_DISABLE_READ_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isReadCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Read` callback is enabled,
		*false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_IS_READ_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setRS485Configuration = function(baudrate, parity, stopbits, wordlength, duplex, returnCallback, errorCallback) {
		/*
		Sets the configuration for the RS485 communication.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_RS485_CONFIGURATION, [baudrate, parity, stopbits, wordlength, duplex], 'I B B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getRS485Configuration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set RS485 Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_RS485_CONFIGURATION, [], '', 16, 'I B B B B', returnCallback, errorCallback, false, true);
	};
	this.setModbusConfiguration = function(slaveAddress, masterRequestTimeout, returnCallback, errorCallback) {
		/*
		Sets the configuration for the RS485 Modbus communication. Available options:
		
		* Slave Address: Address to be used as the Modbus slave address in Modbus slave mode. Valid Modbus slave address range is 1 to 247.
		* Master Request Timeout: Specifies how long the master should wait for a response from a slave when in Modbus master mode.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_MODBUS_CONFIGURATION, [slaveAddress, masterRequestTimeout], 'B I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getModbusConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Modbus Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_MODBUS_CONFIGURATION, [], '', 13, 'B I', returnCallback, errorCallback, false, true);
	};
	this.setMode = function(mode, returnCallback, errorCallback) {
		/*
		Sets the mode of the Bricklet in which it operates. Available options are
		
		* RS485,
		* Modbus Master RTU and
		* Modbus Slave RTU.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_MODE, [mode], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMode = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setCommunicationLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the communication LED configuration. By default the LED shows RS485
		communication traffic by flickering.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_COMMUNICATION_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCommunicationLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Communication LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_COMMUNICATION_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setErrorLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the error LED configuration.
		
		By default the error LED turns on if there is any error (see :cb:`Error Count`
		callback). If you call this function with the SHOW ERROR option again, the LED
		will turn off until the next error occurs.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_ERROR_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getErrorLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Error LED Config`.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_ERROR_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setBufferConfig = function(sendBufferSize, receiveBufferSize, returnCallback, errorCallback) {
		/*
		Sets the send and receive buffer size in byte. In sum there is
		10240 byte (10KiB) buffer available and the minimum buffer size
		is 1024 byte (1KiB) for both.
		
		The current buffer content is lost if this function is called.
		
		The send buffer holds data that was given by :func:`Write` and
		could not be written yet. The receive buffer holds data that is
		received through RS485 but could not yet be send to the
		user, either by :func:`Read` or through :cb:`Read` callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_BUFFER_CONFIG, [sendBufferSize, receiveBufferSize], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getBufferConfig = function(returnCallback, errorCallback) {
		/*
		Returns the buffer configuration as set by :func:`Set Buffer Config`.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_BUFFER_CONFIG, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.getBufferStatus = function(returnCallback, errorCallback) {
		/*
		Returns the currently used bytes for the send and received buffer.
		
		See :func:`Set Buffer Config` for buffer size configuration.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_BUFFER_STATUS, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.enableErrorCountCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Error Count` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_ENABLE_ERROR_COUNT_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableErrorCountCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Error Count` callback.
		
		By default the callback is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_DISABLE_ERROR_COUNT_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isErrorCountCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Error Count` callback is enabled,
		*false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_IS_ERROR_COUNT_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the current number of overrun and parity errors.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_ERROR_COUNT, [], '', 16, 'I I', returnCallback, errorCallback, false, true);
	};
	this.getModbusCommonErrorCount = function(returnCallback, errorCallback) {
		/*
		Returns the current number of errors occurred in Modbus mode.
		
		* Timeout Error Count: Number of timeouts occurred.
		* Checksum Error Count: Number of failures due to Modbus frame CRC16 checksum mismatch.
		* Frame Too Big Error Count: Number of times frames were rejected because they exceeded maximum Modbus frame size which is 256 bytes.
		* Illegal Function Error Count: Number of errors when an unimplemented or illegal function is requested. This corresponds to Modbus exception code 1.
		* Illegal Data Address Error Count: Number of errors due to invalid data address. This corresponds to Modbus exception code 2.
		* Illegal Data Value Error Count: Number of errors due to invalid data value. This corresponds to Modbus exception code 3.
		* Slave Device Failure Error Count: Number of errors occurred on the slave device which were unrecoverable. This corresponds to Modbus exception code 4.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_MODBUS_COMMON_ERROR_COUNT, [], '', 36, 'I I I I I I I', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveReportException = function(requestID, exceptionCode, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to report a Modbus exception for
		a Modbus master request.
		
		* Request ID: Request ID of the request received by the slave.
		* Exception Code: Modbus exception code to report to the Modbus master.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_REPORT_EXCEPTION, [requestID, exceptionCode], 'B b', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerReadCoilsRequestLowLevel = function(requestID, coilsLength, coilsChunkOffset, coilsChunkData, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read coils.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Coils: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Coils Request` callback
		with the Request ID as provided by the argument of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL, [requestID, coilsLength, coilsChunkOffset, coilsChunkData], 'B H H ?472', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterReadCoils = function(slaveAddress, startingAddress, count, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to read coils from a slave. This
		function creates a Modbus function code 1 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first coil to read. For backwards compatibility reasons this parameter is called Starting Address. It is not an address, but instead a coil number in the range of 1 to 65536.
		* Count: Number of coils to read.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Read Coils Response`
		callback. In this callback the Request ID provided by the callback argument must be
		matched with the Request ID returned from this function to verify that the callback
		is indeed for a particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_READ_COILS, [slaveAddress, startingAddress, count], 'B I H', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerReadHoldingRegistersRequestLowLevel = function(requestID, holdingRegistersLength, holdingRegistersChunkOffset, holdingRegistersChunkData, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read holding registers.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Holding Registers: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Holding Registers Request`
		callback with the Request ID as provided by the argument of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL, [requestID, holdingRegistersLength, holdingRegistersChunkOffset, holdingRegistersChunkData], 'B H H H29', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterReadHoldingRegisters = function(slaveAddress, startingAddress, count, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to read holding registers from a slave.
		This function creates a Modbus function code 3 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first holding register to read. For backwards compatibility reasons this parameter is called Starting Address. It is not an address, but instead a holding register number in the range of 1 to 65536. The prefix digit 4 (for holding register) is implicit and must be omitted.
		* Count: Number of holding registers to read.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Read Holding Registers Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_READ_HOLDING_REGISTERS, [slaveAddress, startingAddress, count], 'B I H', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerWriteSingleCoilRequest = function(requestID, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		write a single coil.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		
		This function must be called from the :cb:`Modbus Slave Write Single Coil Request`
		callback with the Request ID as provided by the arguments of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_SINGLE_COIL_REQUEST, [requestID], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterWriteSingleCoil = function(slaveAddress, coilAddress, coilValue, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to write a single coil of a slave.
		This function creates a Modbus function code 5 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Coil Address: Number of the coil to be written. For backwards compatibility reasons, this parameter is called Starting Address. It is not an address, but instead a coil number in the range of 1 to 65536.
		* Coil Value: Value to be written.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Write Single Coil Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_SINGLE_COIL, [slaveAddress, coilAddress, coilValue], 'B I ?', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerWriteSingleRegisterRequest = function(requestID, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		write a single register.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		
		This function must be called from the :cb:`Modbus Slave Write Single Register Request`
		callback with the Request ID, Register Address and Register Value as provided by
		the arguments of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_SINGLE_REGISTER_REQUEST, [requestID], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterWriteSingleRegister = function(slaveAddress, registerAddress, registerValue, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to write a single holding register of a
		slave. This function creates a Modbus function code 6 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Register Address: Number of the holding register to be written. For backwards compatibility reasons, this parameter is called Starting Address. It is not an address, but instead a holding register number in the range of 1 to 65536. The prefix digit 4 (for holding register) is implicit and must be omitted.
		* Register Value: Value to be written.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Write Single Register Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_SINGLE_REGISTER, [slaveAddress, registerAddress, registerValue], 'B I H', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerWriteMultipleCoilsRequest = function(requestID, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		write multiple coils.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		
		This function must be called from the :cb:`Modbus Slave Write Multiple Coils Request`
		callback with the Request ID of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_MULTIPLE_COILS_REQUEST, [requestID], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterWriteMultipleCoilsLowLevel = function(slaveAddress, startingAddress, coilsLength, coilsChunkOffset, coilsChunkData, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to write multiple coils of a slave.
		This function creates a Modbus function code 15 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first coil to write. For backwards compatibility reasons, this parameter is called Starting Address.It is not an address, but instead a coil number in the range of 1 to 65536.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Write Multiple Coils Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL, [slaveAddress, startingAddress, coilsLength, coilsChunkOffset, coilsChunkData], 'B I H H ?440', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerWriteMultipleRegistersRequest = function(requestID, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		write multiple registers.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		
		This function must be called from the :cb:`Modbus Slave Write Multiple Registers Request`
		callback with the Request ID of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_WRITE_MULTIPLE_REGISTERS_REQUEST, [requestID], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterWriteMultipleRegistersLowLevel = function(slaveAddress, startingAddress, registersLength, registersChunkOffset, registersChunkData, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to write multiple registers of a slave.
		This function creates a Modbus function code 16 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first holding register to write. For backwards compatibility reasons, this parameter is called Starting Address. It is not an address, but instead a holding register number in the range of 1 to 65536. The prefix digit 4 (for holding register) is implicit and must be omitted.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Write Multiple Registers Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL, [slaveAddress, startingAddress, registersLength, registersChunkOffset, registersChunkData], 'B I H H H27', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerReadDiscreteInputsRequestLowLevel = function(requestID, discreteInputsLength, discreteInputsChunkOffset, discreteInputsChunkData, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read discrete inputs.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Discrete Inputs: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Discrete Inputs Request`
		callback with the Request ID as provided by the argument of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL, [requestID, discreteInputsLength, discreteInputsChunkOffset, discreteInputsChunkData], 'B H H ?472', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterReadDiscreteInputs = function(slaveAddress, startingAddress, count, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to read discrete inputs from a slave.
		This function creates a Modbus function code 2 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first discrete input to read. For backwards compatibility reasons, this parameter is called Starting Address. It is not an address, but instead a discrete input number in the range of 1 to 65536. The prefix digit 1 (for discrete input) is implicit and must be omitted.
		* Count: Number of discrete inputs to read.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Read Discrete Inputs Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_READ_DISCRETE_INPUTS, [slaveAddress, startingAddress, count], 'B I H', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.modbusSlaveAnswerReadInputRegistersRequestLowLevel = function(requestID, inputRegistersLength, inputRegistersChunkOffset, inputRegistersChunkData, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read input registers.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Input Registers: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Input Registers Request` callback
		with the Request ID as provided by the argument of the callback.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL, [requestID, inputRegistersLength, inputRegistersChunkOffset, inputRegistersChunkData], 'B H H H29', 0, '', returnCallback, errorCallback, false, true);
	};
	this.modbusMasterReadInputRegisters = function(slaveAddress, startingAddress, count, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to read input registers from a slave.
		This function creates a Modbus function code 4 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first input register to read. For backwards compatibility reasons, this parameter is called Starting Address. It is not an address, but instead an input register number in the range of 1 to 65536. The prefix digit 3 (for input register) is implicit and must be omitted.
		* Count: Number of input registers to read.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Read Input Registers Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_MODBUS_MASTER_READ_INPUT_REGISTERS, [slaveAddress, startingAddress, count], 'B I H', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setFrameReadableCallbackConfiguration = function(frameSize, returnCallback, errorCallback) {
		/*
		Configures the :cb:`Frame Readable` callback. The frame size is the number of bytes, that have to be readable to trigger the callback.
		A frame size of 0 disables the callback. A frame size greater than 0 enables the callback and disables the :cb:`Read` callback.
		
		By default the callback is disabled.
		
		.. versionadded:: 2.0.5$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION, [frameSize], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameReadableCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Frame Readable Callback Configuration`.
		
		.. versionadded:: 2.0.5$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletRS485.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};
	this.write = function(message, returnCallback, errorCallback) {
		/*
		Writes characters to the RS485 interface. The characters can be binary data,
		ASCII or similar is not necessary.
		
		The return value is the number of characters that were written.
		
		See :func:`Set RS485 Configuration` for configuration possibilities
		regarding baudrate, parity and so on.
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
				                       BrickletRS485.FUNCTION_WRITE_LOW_LEVEL,
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
					                       BrickletRS485.FUNCTION_WRITE_LOW_LEVEL,
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
						                         BrickletRS485.FUNCTION_WRITE_LOW_LEVEL,
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
				                       BrickletRS485.FUNCTION_WRITE_LOW_LEVEL,
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
							device.ipcon.sendRequest(device, BrickletRS485.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
							        device.ipcon.sendRequest(device, BrickletRS485.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
										device.ipcon.sendRequest(device, BrickletRS485.FUNCTION_READ_LOW_LEVEL, [length], 'H', 72, 'H H c60', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
			                       BrickletRS485.FUNCTION_READ_LOW_LEVEL,
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
	this.modbusSlaveAnswerReadCoilsRequest = function(requestID, coils, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read coils.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Coils: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Coils Request` callback
		with the Request ID as provided by the argument of the callback.
		*/

		var coilsLength = 0;
		var coilsChunkData = [];
		var coilsChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[25];

		if (coils.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(25)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				coilsLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				coilsLength = coils.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				coilsChunkData =
					this.ipcon.createChunkData(coils, 0, 472, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL,
				                       [requestID, coilsLength, coilsChunkOffset, coilsChunkData],
				                       'B H H ?472',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (coilsChunkOffset < coils.length) {
					coilsChunkData =
						this.ipcon.createChunkData(coils, coilsChunkOffset, 472, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL,
					                       [requestID, coilsLength, coilsChunkOffset, coilsChunkData],
					                       'B H H ?472',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					coilsChunkOffset += 472;
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
					var coilsLength = 0;
					var coilsChunkData = [];
					var coilsChunkOffset = 0;

					function doNextLLCall() {
						coilsLength = streamStateObject['responseProperties']['data'].length;
						coilsChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						coilsChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = coilsLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = coilsChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = coilsChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B H H ?472',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 472;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 472)) {
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
				                                                           coils);

				if (streamStateObject['streamProperties']['fixedLength']) {
					coilsLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					coilsLength = coils.length;
				}

				coilsChunkOffset = 0;
				coilsChunkData =
					this.ipcon.createChunkData(coils, 0, 472, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 472;
				streamStateObject['responseProperties']['streamInChunkLength'] = 472;
				streamStateObject['responseProperties']['streamInLLParams'] = [requestID, coilsLength, coilsChunkOffset, coilsChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_COILS_REQUEST_LOW_LEVEL,
				                       [requestID, coilsLength, coilsChunkOffset, coilsChunkData],
				                       'B H H ?472',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.modbusSlaveAnswerReadCoilsRequest.call(device, requestID, coils, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};
	this.modbusSlaveAnswerReadHoldingRegistersRequest = function(requestID, holdingRegisters, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read holding registers.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Holding Registers: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Holding Registers Request`
		callback with the Request ID as provided by the argument of the callback.
		*/

		var holdingRegistersLength = 0;
		var holdingRegistersChunkData = [];
		var holdingRegistersChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[27];

		if (holdingRegisters.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(27)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				holdingRegistersLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				holdingRegistersLength = holdingRegisters.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				holdingRegistersChunkData =
					this.ipcon.createChunkData(holdingRegisters, 0, 29, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL,
				                       [requestID, holdingRegistersLength, holdingRegistersChunkOffset, holdingRegistersChunkData],
				                       'B H H H29',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (holdingRegistersChunkOffset < holdingRegisters.length) {
					holdingRegistersChunkData =
						this.ipcon.createChunkData(holdingRegisters, holdingRegistersChunkOffset, 29, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL,
					                       [requestID, holdingRegistersLength, holdingRegistersChunkOffset, holdingRegistersChunkData],
					                       'B H H H29',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					holdingRegistersChunkOffset += 29;
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
					var holdingRegistersLength = 0;
					var holdingRegistersChunkData = [];
					var holdingRegistersChunkOffset = 0;

					function doNextLLCall() {
						holdingRegistersLength = streamStateObject['responseProperties']['data'].length;
						holdingRegistersChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						holdingRegistersChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = holdingRegistersLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = holdingRegistersChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = holdingRegistersChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B H H H29',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 29;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 29)) {
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
				                                                           holdingRegisters);

				if (streamStateObject['streamProperties']['fixedLength']) {
					holdingRegistersLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					holdingRegistersLength = holdingRegisters.length;
				}

				holdingRegistersChunkOffset = 0;
				holdingRegistersChunkData =
					this.ipcon.createChunkData(holdingRegisters, 0, 29, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 29;
				streamStateObject['responseProperties']['streamInChunkLength'] = 29;
				streamStateObject['responseProperties']['streamInLLParams'] = [requestID, holdingRegistersLength, holdingRegistersChunkOffset, holdingRegistersChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_HOLDING_REGISTERS_REQUEST_LOW_LEVEL,
				                       [requestID, holdingRegistersLength, holdingRegistersChunkOffset, holdingRegistersChunkData],
				                       'B H H H29',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.modbusSlaveAnswerReadHoldingRegistersRequest.call(device, requestID, holdingRegisters, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};
	this.modbusMasterWriteMultipleCoils = function(slaveAddress, startingAddress, coils, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to write multiple coils of a slave.
		This function creates a Modbus function code 15 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first coil to write. For backwards compatibility reasons, this parameter is called Starting Address.It is not an address, but instead a coil number in the range of 1 to 65536.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Write Multiple Coils Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/

		var coilsLength = 0;
		var coilsChunkData = [];
		var coilsChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[34];

		if (coils.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(34)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				coilsLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				coilsLength = coils.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				coilsChunkData =
					this.ipcon.createChunkData(coils, 0, 440, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL,
				                       [slaveAddress, startingAddress, coilsLength, coilsChunkOffset, coilsChunkData],
				                       'B I H H ?440',
				                       9,
				                       'B',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (coilsChunkOffset < coils.length) {
					coilsChunkData =
						this.ipcon.createChunkData(coils, coilsChunkOffset, 440, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL,
					                       [slaveAddress, startingAddress, coilsLength, coilsChunkOffset, coilsChunkData],
					                       'B I H H ?440',
					                       9,
					                       'B',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					coilsChunkOffset += 440;
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
					var coilsLength = 0;
					var coilsChunkData = [];
					var coilsChunkOffset = 0;

					function doNextLLCall() {
						coilsLength = streamStateObject['responseProperties']['data'].length;
						coilsChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						coilsChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = coilsLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = coilsChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = coilsChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B I H H ?440',
						                         9,
						                         'B',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 440;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 440)) {
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
				                                                           coils);

				if (streamStateObject['streamProperties']['fixedLength']) {
					coilsLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					coilsLength = coils.length;
				}

				coilsChunkOffset = 0;
				coilsChunkData =
					this.ipcon.createChunkData(coils, 0, 440, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 440;
				streamStateObject['responseProperties']['streamInChunkLength'] = 440;
				streamStateObject['responseProperties']['streamInLLParams'] = [slaveAddress, startingAddress, coilsLength, coilsChunkOffset, coilsChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_COILS_LOW_LEVEL,
				                       [slaveAddress, startingAddress, coilsLength, coilsChunkOffset, coilsChunkData],
				                       'B I H H ?440',
				                       9,
				                       'B',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.modbusMasterWriteMultipleCoils.call(device, slaveAddress, startingAddress, coils, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};
	this.modbusMasterWriteMultipleRegisters = function(slaveAddress, startingAddress, registers, returnCallback, errorCallback) {
		/*
		In Modbus master mode this function can be used to write multiple registers of a slave.
		This function creates a Modbus function code 16 request.
		
		* Slave Address: Address of the target Modbus slave.
		* Starting Address: Number of the first holding register to write. For backwards compatibility reasons, this parameter is called Starting Address. It is not an address, but instead a holding register number in the range of 1 to 65536. The prefix digit 4 (for holding register) is implicit and must be omitted.
		
		Upon success the function will return a non-zero request ID which will represent
		the current request initiated by the Modbus master. In case of failure the returned
		request ID will be 0.
		
		When successful this function will also invoke the :cb:`Modbus Master Write Multiple Registers Response`
		callback. In this callback the Request ID provided by the callback argument must be matched
		with the Request ID returned from this function to verify that the callback is indeed for a
		particular request.
		*/

		var registersLength = 0;
		var registersChunkData = [];
		var registersChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[36];

		if (registers.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(36)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				registersLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				registersLength = registers.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				registersChunkData =
					this.ipcon.createChunkData(registers, 0, 27, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL,
				                       [slaveAddress, startingAddress, registersLength, registersChunkOffset, registersChunkData],
				                       'B I H H H27',
				                       9,
				                       'B',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (registersChunkOffset < registers.length) {
					registersChunkData =
						this.ipcon.createChunkData(registers, registersChunkOffset, 27, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL,
					                       [slaveAddress, startingAddress, registersLength, registersChunkOffset, registersChunkData],
					                       'B I H H H27',
					                       9,
					                       'B',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					registersChunkOffset += 27;
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
					var registersLength = 0;
					var registersChunkData = [];
					var registersChunkOffset = 0;

					function doNextLLCall() {
						registersLength = streamStateObject['responseProperties']['data'].length;
						registersChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						registersChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = registersLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = registersChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = registersChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B I H H H27',
						                         9,
						                         'B',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 27;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 27)) {
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
				                                                           registers);

				if (streamStateObject['streamProperties']['fixedLength']) {
					registersLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					registersLength = registers.length;
				}

				registersChunkOffset = 0;
				registersChunkData =
					this.ipcon.createChunkData(registers, 0, 27, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 27;
				streamStateObject['responseProperties']['streamInChunkLength'] = 27;
				streamStateObject['responseProperties']['streamInLLParams'] = [slaveAddress, startingAddress, registersLength, registersChunkOffset, registersChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_MASTER_WRITE_MULTIPLE_REGISTERS_LOW_LEVEL,
				                       [slaveAddress, startingAddress, registersLength, registersChunkOffset, registersChunkData],
				                       'B I H H H27',
				                       9,
				                       'B',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.modbusMasterWriteMultipleRegisters.call(device, slaveAddress, startingAddress, registers, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};
	this.modbusSlaveAnswerReadDiscreteInputsRequest = function(requestID, discreteInputs, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read discrete inputs.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Discrete Inputs: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Discrete Inputs Request`
		callback with the Request ID as provided by the argument of the callback.
		*/

		var discreteInputsLength = 0;
		var discreteInputsChunkData = [];
		var discreteInputsChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[37];

		if (discreteInputs.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(37)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				discreteInputsLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				discreteInputsLength = discreteInputs.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				discreteInputsChunkData =
					this.ipcon.createChunkData(discreteInputs, 0, 472, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL,
				                       [requestID, discreteInputsLength, discreteInputsChunkOffset, discreteInputsChunkData],
				                       'B H H ?472',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (discreteInputsChunkOffset < discreteInputs.length) {
					discreteInputsChunkData =
						this.ipcon.createChunkData(discreteInputs, discreteInputsChunkOffset, 472, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL,
					                       [requestID, discreteInputsLength, discreteInputsChunkOffset, discreteInputsChunkData],
					                       'B H H ?472',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					discreteInputsChunkOffset += 472;
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
					var discreteInputsLength = 0;
					var discreteInputsChunkData = [];
					var discreteInputsChunkOffset = 0;

					function doNextLLCall() {
						discreteInputsLength = streamStateObject['responseProperties']['data'].length;
						discreteInputsChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						discreteInputsChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = discreteInputsLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = discreteInputsChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = discreteInputsChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B H H ?472',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 472;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 472)) {
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
				                                                           discreteInputs);

				if (streamStateObject['streamProperties']['fixedLength']) {
					discreteInputsLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					discreteInputsLength = discreteInputs.length;
				}

				discreteInputsChunkOffset = 0;
				discreteInputsChunkData =
					this.ipcon.createChunkData(discreteInputs, 0, 472, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 472;
				streamStateObject['responseProperties']['streamInChunkLength'] = 472;
				streamStateObject['responseProperties']['streamInLLParams'] = [requestID, discreteInputsLength, discreteInputsChunkOffset, discreteInputsChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_DISCRETE_INPUTS_REQUEST_LOW_LEVEL,
				                       [requestID, discreteInputsLength, discreteInputsChunkOffset, discreteInputsChunkData],
				                       'B H H ?472',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.modbusSlaveAnswerReadDiscreteInputsRequest.call(device, requestID, discreteInputs, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};
	this.modbusSlaveAnswerReadInputRegistersRequest = function(requestID, inputRegisters, returnCallback, errorCallback) {
		/*
		In Modbus slave mode this function can be used to answer a master request to
		read input registers.
		
		* Request ID: Request ID of the corresponding request that is being answered.
		* Input Registers: Data that is to be sent to the Modbus master for the corresponding request.
		
		This function must be called from the :cb:`Modbus Slave Read Input Registers Request` callback
		with the Request ID as provided by the argument of the callback.
		*/

		var inputRegistersLength = 0;
		var inputRegistersChunkData = [];
		var inputRegistersChunkOffset = 0;
		var streamStateObject = this.streamStateObjects[39];

		if (inputRegisters.length > 65535) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(39)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				inputRegistersLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				inputRegistersLength = inputRegisters.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				inputRegistersChunkData =
					this.ipcon.createChunkData(inputRegisters, 0, 29, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL,
				                       [requestID, inputRegistersLength, inputRegistersChunkOffset, inputRegistersChunkData],
				                       'B H H H29',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (inputRegistersChunkOffset < inputRegisters.length) {
					inputRegistersChunkData =
						this.ipcon.createChunkData(inputRegisters, inputRegistersChunkOffset, 29, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL,
					                       [requestID, inputRegistersLength, inputRegistersChunkOffset, inputRegistersChunkData],
					                       'B H H H29',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					inputRegistersChunkOffset += 29;
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
					var inputRegistersLength = 0;
					var inputRegistersChunkData = [];
					var inputRegistersChunkOffset = 0;

					function doNextLLCall() {
						inputRegistersLength = streamStateObject['responseProperties']['data'].length;
						inputRegistersChunkData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						inputRegistersChunkOffset = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = inputRegistersLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = inputRegistersChunkOffset;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = inputRegistersChunkData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B H H H29',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 29;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 29)) {
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
				                                                           inputRegisters);

				if (streamStateObject['streamProperties']['fixedLength']) {
					inputRegistersLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					inputRegistersLength = inputRegisters.length;
				}

				inputRegistersChunkOffset = 0;
				inputRegistersChunkData =
					this.ipcon.createChunkData(inputRegisters, 0, 29, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 29;
				streamStateObject['responseProperties']['streamInChunkLength'] = 29;
				streamStateObject['responseProperties']['streamInLLParams'] = [requestID, inputRegistersLength, inputRegistersChunkOffset, inputRegistersChunkData];

				this.ipcon.sendRequest(this,
				                       BrickletRS485.FUNCTION_MODBUS_SLAVE_ANSWER_READ_INPUT_REGISTERS_REQUEST_LOW_LEVEL,
				                       [requestID, inputRegistersLength, inputRegistersChunkOffset, inputRegistersChunkData],
				                       'B H H H29',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.modbusSlaveAnswerReadInputRegistersRequest.call(device, requestID, inputRegisters, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletRS485;
