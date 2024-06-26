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

BrickletCANV2.DEVICE_IDENTIFIER = 2107;
BrickletCANV2.DEVICE_DISPLAY_NAME = 'CAN Bricklet 2.0';
BrickletCANV2.CALLBACK_FRAME_READ_LOW_LEVEL = 16;
BrickletCANV2.CALLBACK_FRAME_READABLE = 19;
BrickletCANV2.CALLBACK_ERROR_OCCURRED = 22;
BrickletCANV2.CALLBACK_FRAME_READ = -16;
BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL = 1;
BrickletCANV2.FUNCTION_READ_FRAME_LOW_LEVEL = 2;
BrickletCANV2.FUNCTION_SET_FRAME_READ_CALLBACK_CONFIGURATION = 3;
BrickletCANV2.FUNCTION_GET_FRAME_READ_CALLBACK_CONFIGURATION = 4;
BrickletCANV2.FUNCTION_SET_TRANSCEIVER_CONFIGURATION = 5;
BrickletCANV2.FUNCTION_GET_TRANSCEIVER_CONFIGURATION = 6;
BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL = 7;
BrickletCANV2.FUNCTION_GET_QUEUE_CONFIGURATION_LOW_LEVEL = 8;
BrickletCANV2.FUNCTION_SET_READ_FILTER_CONFIGURATION = 9;
BrickletCANV2.FUNCTION_GET_READ_FILTER_CONFIGURATION = 10;
BrickletCANV2.FUNCTION_GET_ERROR_LOG_LOW_LEVEL = 11;
BrickletCANV2.FUNCTION_SET_COMMUNICATION_LED_CONFIG = 12;
BrickletCANV2.FUNCTION_GET_COMMUNICATION_LED_CONFIG = 13;
BrickletCANV2.FUNCTION_SET_ERROR_LED_CONFIG = 14;
BrickletCANV2.FUNCTION_GET_ERROR_LED_CONFIG = 15;
BrickletCANV2.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION = 17;
BrickletCANV2.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION = 18;
BrickletCANV2.FUNCTION_SET_ERROR_OCCURRED_CALLBACK_CONFIGURATION = 20;
BrickletCANV2.FUNCTION_GET_ERROR_OCCURRED_CALLBACK_CONFIGURATION = 21;
BrickletCANV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletCANV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletCANV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletCANV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletCANV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletCANV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletCANV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletCANV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletCANV2.FUNCTION_RESET = 243;
BrickletCANV2.FUNCTION_WRITE_UID = 248;
BrickletCANV2.FUNCTION_READ_UID = 249;
BrickletCANV2.FUNCTION_GET_IDENTITY = 255;
BrickletCANV2.FRAME_TYPE_STANDARD_DATA = 0;
BrickletCANV2.FRAME_TYPE_STANDARD_REMOTE = 1;
BrickletCANV2.FRAME_TYPE_EXTENDED_DATA = 2;
BrickletCANV2.FRAME_TYPE_EXTENDED_REMOTE = 3;
BrickletCANV2.TRANSCEIVER_MODE_NORMAL = 0;
BrickletCANV2.TRANSCEIVER_MODE_LOOPBACK = 1;
BrickletCANV2.TRANSCEIVER_MODE_READ_ONLY = 2;
BrickletCANV2.FILTER_MODE_ACCEPT_ALL = 0;
BrickletCANV2.FILTER_MODE_MATCH_STANDARD_ONLY = 1;
BrickletCANV2.FILTER_MODE_MATCH_EXTENDED_ONLY = 2;
BrickletCANV2.FILTER_MODE_MATCH_STANDARD_AND_EXTENDED = 3;
BrickletCANV2.TRANSCEIVER_STATE_ACTIVE = 0;
BrickletCANV2.TRANSCEIVER_STATE_PASSIVE = 1;
BrickletCANV2.TRANSCEIVER_STATE_DISABLED = 2;
BrickletCANV2.COMMUNICATION_LED_CONFIG_OFF = 0;
BrickletCANV2.COMMUNICATION_LED_CONFIG_ON = 1;
BrickletCANV2.COMMUNICATION_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletCANV2.COMMUNICATION_LED_CONFIG_SHOW_COMMUNICATION = 3;
BrickletCANV2.ERROR_LED_CONFIG_OFF = 0;
BrickletCANV2.ERROR_LED_CONFIG_ON = 1;
BrickletCANV2.ERROR_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletCANV2.ERROR_LED_CONFIG_SHOW_TRANSCEIVER_STATE = 3;
BrickletCANV2.ERROR_LED_CONFIG_SHOW_ERROR = 4;
BrickletCANV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletCANV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletCANV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletCANV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletCANV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletCANV2.BOOTLOADER_STATUS_OK = 0;
BrickletCANV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletCANV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletCANV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletCANV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletCANV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletCANV2.STATUS_LED_CONFIG_OFF = 0;
BrickletCANV2.STATUS_LED_CONFIG_ON = 1;
BrickletCANV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletCANV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletCANV2(uid, ipcon) {
	//Communicates with CAN bus devices

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletCANV2.DEVICE_IDENTIFIER, BrickletCANV2.DEVICE_DISPLAY_NAME);
	BrickletCANV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_READ_FRAME_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_FRAME_READ_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_FRAME_READ_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_TRANSCEIVER_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_TRANSCEIVER_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_QUEUE_CONFIGURATION_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_READ_FILTER_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_READ_FILTER_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_ERROR_LOG_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_COMMUNICATION_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_ERROR_OCCURRED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_ERROR_OCCURRED_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletCANV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletCANV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletCANV2.CALLBACK_FRAME_READ_LOW_LEVEL] = [29, 'B I B B15'];
	this.callbackFormats[BrickletCANV2.CALLBACK_FRAME_READABLE] = [8, ''];
	this.callbackFormats[BrickletCANV2.CALLBACK_ERROR_OCCURRED] = [8, ''];

	this.highLevelCallbacks[BrickletCANV2.CALLBACK_FRAME_READ] = [[null, null, 'streamLength', 'streamChunkData'], {'fixedLength': null, 'singleChunk': true}, null];

	this.streamStateObjects[BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL] = {
		'dataMapping': [null],
		'dataMappingStreamIn': [null, null, 'streamLength', 'streamChunkData'],
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
			'streamInResponseEmpty': false,
			'streamInWritten': 0,
			'streamInLLParams': null,
			'responseHandler': null,
			'packFormatString': 'B I B B15',
			'unpackFormatString': '?',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletCANV2.FUNCTION_READ_FRAME_LOW_LEVEL] = {
		'dataMapping': [null, null, null, 'streamLength', 'streamChunkData'],
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
			'unpackFormatString': '? B I B B15',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL] = {
		'dataMapping': [],
		'dataMappingStreamIn': [null, null, null, 'streamLength', 'streamChunkData', null],
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
			'packFormatString': 'B i H B b32 H',
			'unpackFormatString': '',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletCANV2.FUNCTION_GET_QUEUE_CONFIGURATION_LOW_LEVEL] = {
		'dataMapping': [null, null, null, 'streamLength', 'streamChunkData', null],
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
			'unpackFormatString': 'B i H B b32 H',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};
	this.streamStateObjects[BrickletCANV2.FUNCTION_GET_ERROR_LOG_LOW_LEVEL] = {
		'dataMapping': [null, null, null, null, null, null, null, null, null, null, null, 'streamLength', 'streamChunkData', null],
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
			'unpackFormatString': 'B B B I I I I I I I I B ?32 I',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.writeFrameLowLevel = function(frameType, identifier, dataLength, dataData, returnCallback, errorCallback) {
		/*
		Writes a data or remote frame to the write queue to be transmitted over the
		CAN transceiver.
		
		The Bricklet supports the standard 11-bit (CAN 2.0A) and the additional extended
		29-bit (CAN 2.0B) identifiers. For standard frames the Bricklet uses bit 0 to 10
		from the ``identifier`` parameter as standard 11-bit identifier. For extended
		frames the Bricklet uses bit 0 to 28 from the ``identifier`` parameter as
		extended 29-bit identifier.
		
		The ``data`` parameter can be up to 15 bytes long. For data frames up to 8 bytes
		will be used as the actual data. The length (DLC) field in the data or remote
		frame will be set to the actual length of the ``data`` parameter. This allows
		to transmit data and remote frames with excess length. For remote frames only
		the length of the ``data`` parameter is used. The actual ``data`` bytes are
		ignored.
		
		Returns *true* if the frame was successfully added to the write queue. Returns
		*false* if the frame could not be added because write queue is already full or
		because the write buffer or the write backlog are configured with a size of
		zero (see :func:`Set Queue Configuration`).
		
		The write queue can overflow if frames are written to it at a higher rate
		than the Bricklet can transmitted them over the CAN transceiver. This may
		happen if the CAN transceiver is configured as read-only or is using a low baud
		rate (see :func:`Set Transceiver Configuration`). It can also happen if the CAN
		bus is congested and the frame cannot be transmitted because it constantly loses
		arbitration or because the CAN transceiver is currently disabled due to a high
		write error level (see :func:`Get Error Log`).
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL, [frameType, identifier, dataLength, dataData], 'B I B B15', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.readFrameLowLevel = function(returnCallback, errorCallback) {
		/*
		Tries to read the next data or remote frame from the read queue and returns it.
		If a frame was successfully read, then the ``success`` return value is set to
		*true* and the other return values contain the frame. If the read queue is
		empty and no frame could be read, then the ``success`` return value is set to
		*false* and the other return values contain invalid data.
		
		The ``identifier`` return value follows the identifier format described for
		:func:`Write Frame`.
		
		The ``data`` return value can be up to 15 bytes long. For data frames up to the
		first 8 bytes are the actual received data. All bytes after the 8th byte are
		always zero and only there to indicate the length of a data or remote frame
		with excess length. For remote frames the length of the ``data`` return value
		represents the requested length. The actual ``data`` bytes are always zero.
		
		A configurable read filter can be used to define which frames should be
		received by the CAN transceiver and put into the read queue (see
		:func:`Set Read Filter Configuration`).
		
		Instead of polling with this function, you can also use callbacks. See the
		:func:`Set Frame Read Callback Configuration` function and the :cb:`Frame Read`
		callback.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_READ_FRAME_LOW_LEVEL, [], '', 30, '? B I B B15', returnCallback, errorCallback, false, true);
	};
	this.setFrameReadCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		Enables and disables the :cb:`Frame Read` callback.
		
		By default the callback is disabled. Enabling this callback will disable the :cb:`Frame Readable` callback.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_FRAME_READ_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameReadCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Frame Read` callback is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_FRAME_READ_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setTransceiverConfiguration = function(baudRate, samplePoint, transceiverMode, returnCallback, errorCallback) {
		/*
		Sets the transceiver configuration for the CAN bus communication.
		
		The CAN transceiver has three different modes:
		
		* Normal: Reads from and writes to the CAN bus and performs active bus
		  error detection and acknowledgement.
		* Loopback: All reads and writes are performed internally. The transceiver
		  is disconnected from the actual CAN bus.
		* Read-Only: Only reads from the CAN bus, but does neither active bus error
		  detection nor acknowledgement. Only the receiving part of the transceiver
		  is connected to the CAN bus.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_TRANSCEIVER_CONFIGURATION, [baudRate, samplePoint, transceiverMode], 'I H B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTransceiverConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Transceiver Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_TRANSCEIVER_CONFIGURATION, [], '', 15, 'I H B', returnCallback, errorCallback, false, true);
	};
	this.setQueueConfigurationLowLevel = function(writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizesLength, readBufferSizesData, readBacklogSize, returnCallback, errorCallback) {
		/*
		Sets the write and read queue configuration.
		
		The CAN transceiver has 32 buffers in total in hardware for transmitting and
		receiving frames. Additionally, the Bricklet has a backlog for 768 frames in
		total in software. The buffers and the backlog can be freely assigned to the
		write and read queues.
		
		:func:`Write Frame` writes a frame into the write backlog. The Bricklet moves
		the frame from the backlog into a free write buffer. The CAN transceiver then
		transmits the frame from the write buffer to the CAN bus. If there are no
		write buffers (``write_buffer_size`` is zero) or there is no write backlog
		(``write_backlog_size`` is zero) then no frames can be transmitted and
		:func:`Write Frame` returns always *false*.
		
		The CAN transceiver receives a frame from the CAN bus and stores it into a
		free read buffer. The Bricklet moves the frame from the read buffer into the
		read backlog. :func:`Read Frame` reads the frame from the read backlog and
		returns it. If there are no read buffers (``read_buffer_sizes`` is empty) or
		there is no read backlog (``read_backlog_size`` is zero) then no frames can be
		received and :func:`Read Frame` returns always *false*.
		
		There can be multiple read buffers, because the CAN transceiver cannot receive
		data and remote frames into the same read buffer. A positive read buffer size
		represents a data frame read buffer and a negative read buffer size represents
		a remote frame read buffer. A read buffer size of zero is not allowed. By
		default the first read buffer is configured for data frames and the second read
		buffer is configured for remote frame. There can be up to 32 different read
		buffers, assuming that no write buffer is used. Each read buffer has its own
		filter configuration (see :func:`Set Read Filter Configuration`).
		
		A valid queue configuration fulfills these conditions::
		
		 write_buffer_size + abs(read_buffer_size_0) + abs(read_buffer_size_1) + ... + abs(read_buffer_size_31) <= 32
		 write_backlog_size + read_backlog_size <= 768
		
		The write buffer timeout has three different modes that define how a failed
		frame transmission should be handled:
		
		* Single-Shot (< 0): Only one transmission attempt will be made. If the
		  transmission fails then the frame is discarded.
		* Infinite (= 0): Infinite transmission attempts will be made. The frame will
		  never be discarded.
		* Milliseconds (> 0): A limited number of transmission attempts will be made.
		  If the frame could not be transmitted successfully after the configured
		  number of milliseconds then the frame is discarded.
		
		The current content of the queues is lost when this function is called.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL, [writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizesLength, readBufferSizesData, readBacklogSize], 'B i H B b32 H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getQueueConfigurationLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the queue configuration as set by :func:`Set Queue Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_QUEUE_CONFIGURATION_LOW_LEVEL, [], '', 50, 'B i H B b32 H', returnCallback, errorCallback, false, true);
	};
	this.setReadFilterConfiguration = function(bufferIndex, filterMode, filterMask, filterIdentifier, returnCallback, errorCallback) {
		/*
		Set the read filter configuration for the given read buffer index. This can be
		used to define which frames should be received by the CAN transceiver and put
		into the read buffer.
		
		The read filter has four different modes that define if and how the filter mask
		and the filter identifier are applied:
		
		* Accept-All: All frames are received.
		* Match-Standard-Only: Only standard frames with a matching identifier are
		  received.
		* Match-Extended-Only: Only extended frames with a matching identifier are
		  received.
		* Match-Standard-And-Extended: Standard and extended frames with a matching
		  identifier are received.
		
		The filter mask and filter identifier are used as bit masks. Their usage
		depends on the mode:
		
		* Accept-All: Mask and identifier are ignored.
		* Match-Standard-Only: Bit 0 to 10 (11 bits) of filter mask and filter
		  identifier are used to match the 11-bit identifier of standard frames.
		* Match-Extended-Only: Bit 0 to 28 (29 bits) of filter mask and filter
		  identifier are used to match the 29-bit identifier of extended frames.
		* Match-Standard-And-Extended: Bit 18 to 28 (11 bits) of filter mask and filter
		  identifier are used to match the 11-bit identifier of standard frames, bit 0
		  to 17 (18 bits) are ignored in this case. Bit 0 to 28 (29 bits) of filter
		  mask and filter identifier are used to match the 29-bit identifier of extended
		  frames.
		
		The filter mask and filter identifier are applied in this way: The filter mask
		is used to select the frame identifier bits that should be compared to the
		corresponding filter identifier bits. All unselected bits are automatically
		accepted. All selected bits have to match the filter identifier to be accepted.
		If all bits for the selected mode are accepted then the frame is accepted and
		is added to the read buffer.
		
		.. csv-table::
		 :header: "Filter Mask Bit", "Filter Identifier Bit", "Frame Identifier Bit", "Result"
		 :widths: 10, 10, 10, 10
		
		 0, X, X, Accept
		 1, 0, 0, Accept
		 1, 0, 1, Reject
		 1, 1, 0, Reject
		 1, 1, 1, Accept
		
		For example, to receive standard frames with identifier 0x123 only, the mode
		can be set to Match-Standard-Only with 0x7FF as mask and 0x123 as identifier.
		The mask of 0x7FF selects all 11 identifier bits for matching so that the
		identifier has to be exactly 0x123 to be accepted.
		
		To accept identifier 0x123 and identifier 0x456 at the same time, just set
		filter 2 to 0x456 and keep mask and filter 1 unchanged.
		
		There can be up to 32 different read filters configured at the same time,
		because there can be up to 32 read buffer (see :func:`Set Queue Configuration`).
		
		The default mode is accept-all for all read buffers.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_READ_FILTER_CONFIGURATION, [bufferIndex, filterMode, filterMask, filterIdentifier], 'B B I I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getReadFilterConfiguration = function(bufferIndex, returnCallback, errorCallback) {
		/*
		Returns the read filter configuration as set by :func:`Set Read Filter Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_READ_FILTER_CONFIGURATION, [bufferIndex], 'B', 17, 'B I I', returnCallback, errorCallback, false, true);
	};
	this.getErrorLogLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns information about different kinds of errors.
		
		The write and read error levels indicate the current level of stuffing, form,
		acknowledgement, bit and checksum errors during CAN bus write and read
		operations. For each of this error kinds there is also an individual counter.
		
		When the write error level extends 255 then the CAN transceiver gets disabled
		and no frames can be transmitted or received anymore. The CAN transceiver will
		automatically be activated again after the CAN bus is idle for a while.
		
		The write buffer timeout, read buffer and backlog overflow counts represents the
		number of these errors:
		
		* A write buffer timeout occurs if a frame could not be transmitted before the
		  configured write buffer timeout expired (see :func:`Set Queue Configuration`).
		* A read buffer overflow occurs if a read buffer of the CAN transceiver
		  still contains the last received frame when the next frame arrives. In this
		  case the last received frame is lost. This happens if the CAN transceiver
		  receives more frames than the Bricklet can handle. Using the read filter
		  (see :func:`Set Read Filter Configuration`) can help to reduce the amount of
		  received frames. This count is not exact, but a lower bound, because the
		  Bricklet might not able detect all overflows if they occur in rapid succession.
		* A read backlog overflow occurs if the read backlog of the Bricklet is already
		  full when the next frame should be read from a read buffer of the CAN
		  transceiver. In this case the frame in the read buffer is lost. This
		  happens if the CAN transceiver receives more frames to be added to the read
		  backlog than are removed from the read backlog using the :func:`Read Frame`
		  function. Using the :cb:`Frame Read` callback ensures that the read backlog
		  can not overflow.
		
		The read buffer overflow counter counts the overflows of all configured read
		buffers. Which read buffer exactly suffered from an overflow can be figured
		out from the read buffer overflow occurrence list
		(``read_buffer_overflow_error_occurred``). Reading the error log clears the
		occurence list.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_ERROR_LOG_LOW_LEVEL, [], '', 52, 'B B B I I I I I I I I B ?32 I', returnCallback, errorCallback, false, true);
	};
	this.setCommunicationLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the communication LED configuration. By default the LED shows
		CAN-Bus traffic, it flickers once for every 40 transmitted or received frames.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_COMMUNICATION_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCommunicationLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Communication LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_COMMUNICATION_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setErrorLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the error LED configuration.
		
		By default (show-transceiver-state) the error LED turns on if the CAN
		transceiver is passive or disabled state (see :func:`Get Error Log`). If
		the CAN transceiver is in active state the LED turns off.
		
		If the LED is configured as show-error then the error LED turns on if any error
		occurs. If you call this function with the show-error option again, the LED will
		turn off until the next error occurs.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is off.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_ERROR_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getErrorLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Error LED Config`.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_ERROR_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setFrameReadableCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		Enables and disables the :cb:`Frame Readable` callback.
		
		By default the callback is disabled. Enabling this callback will disable the :cb:`Frame Read` callback.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_FRAME_READABLE_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameReadableCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Frame Readable` callback is enabled, *false* otherwise.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_FRAME_READABLE_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setErrorOccurredCallbackConfiguration = function(enabled, returnCallback, errorCallback) {
		/*
		Enables and disables the :cb:`Error Occurred` callback.
		
		By default the callback is disabled.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_ERROR_OCCURRED_CALLBACK_CONFIGURATION, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getErrorOccurredCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Error Occurred` callback is enabled, *false* otherwise.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_ERROR_OCCURRED_CALLBACK_CONFIGURATION, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletCANV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};
	this.writeFrame = function(frameType, identifier, data, returnCallback, errorCallback) {
		/*
		Writes a data or remote frame to the write queue to be transmitted over the
		CAN transceiver.
		
		The Bricklet supports the standard 11-bit (CAN 2.0A) and the additional extended
		29-bit (CAN 2.0B) identifiers. For standard frames the Bricklet uses bit 0 to 10
		from the ``identifier`` parameter as standard 11-bit identifier. For extended
		frames the Bricklet uses bit 0 to 28 from the ``identifier`` parameter as
		extended 29-bit identifier.
		
		The ``data`` parameter can be up to 15 bytes long. For data frames up to 8 bytes
		will be used as the actual data. The length (DLC) field in the data or remote
		frame will be set to the actual length of the ``data`` parameter. This allows
		to transmit data and remote frames with excess length. For remote frames only
		the length of the ``data`` parameter is used. The actual ``data`` bytes are
		ignored.
		
		Returns *true* if the frame was successfully added to the write queue. Returns
		*false* if the frame could not be added because write queue is already full or
		because the write buffer or the write backlog are configured with a size of
		zero (see :func:`Set Queue Configuration`).
		
		The write queue can overflow if frames are written to it at a higher rate
		than the Bricklet can transmitted them over the CAN transceiver. This may
		happen if the CAN transceiver is configured as read-only or is using a low baud
		rate (see :func:`Set Transceiver Configuration`). It can also happen if the CAN
		bus is congested and the frame cannot be transmitted because it constantly loses
		arbitration or because the CAN transceiver is currently disabled due to a high
		write error level (see :func:`Get Error Log`).
		*/

		var dataLength = 0;
		var dataData = [];
		var None = 0;
		var streamStateObject = this.streamStateObjects[1];

		if (data.length > 15) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(1)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				dataLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				dataLength = data.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				dataData =
					this.ipcon.createChunkData(data, 0, 15, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL,
				                       [frameType, identifier, dataLength, dataData],
				                       'B I B B15',
				                       9,
				                       '?',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (None < data.length) {
					dataData =
						this.ipcon.createChunkData(data, None, 15, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL,
					                       [frameType, identifier, dataLength, dataData],
					                       'B I B B15',
					                       9,
					                       '?',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					None += 15;
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
					var dataData = [];
					var None = 0;

					function doNextLLCall() {
						dataLength = streamStateObject['responseProperties']['data'].length;
						dataData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						None = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = None;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = dataData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B I B B15',
						                         9,
						                         '?',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 15;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 15)) {
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

				None = 0;
				dataData =
					this.ipcon.createChunkData(data, 0, 15, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 15;
				streamStateObject['responseProperties']['streamInChunkLength'] = 15;
				streamStateObject['responseProperties']['streamInLLParams'] = [frameType, identifier, dataLength, dataData];

				this.ipcon.sendRequest(this,
				                       BrickletCANV2.FUNCTION_WRITE_FRAME_LOW_LEVEL,
				                       [frameType, identifier, dataLength, dataData],
				                       'B I B B15',
				                       9,
				                       '?',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.writeFrame.call(device, frameType, identifier, data, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.readFrame = function(returnCallback, errorCallback) {
		/*
		Tries to read the next data or remote frame from the read queue and returns it.
		If a frame was successfully read, then the ``success`` return value is set to
		*true* and the other return values contain the frame. If the read queue is
		empty and no frame could be read, then the ``success`` return value is set to
		*false* and the other return values contain invalid data.
		
		The ``identifier`` return value follows the identifier format described for
		:func:`Write Frame`.
		
		The ``data`` return value can be up to 15 bytes long. For data frames up to the
		first 8 bytes are the actual received data. All bytes after the 8th byte are
		always zero and only there to indicate the length of a data or remote frame
		with excess length. For remote frames the length of the ``data`` return value
		represents the requested length. The actual ``data`` bytes are always zero.
		
		A configurable read filter can be used to define which frames should be
		received by the CAN transceiver and put into the read queue (see
		:func:`Set Read Filter Configuration`).
		
		Instead of polling with this function, you can also use callbacks. See the
		:func:`Set Frame Read Callback Configuration` function and the :cb:`Frame Read`
		callback.
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

					dataChunkOffset = 0;

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(dataChunkData.splice(0, dataLength));
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
			                       BrickletCANV2.FUNCTION_READ_FRAME_LOW_LEVEL,
			                       [],
			                       '',
			                       30,
			                       '? B I B B15',
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
	this.setQueueConfiguration = function(writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizes, readBacklogSize, returnCallback, errorCallback) {
		/*
		Sets the write and read queue configuration.
		
		The CAN transceiver has 32 buffers in total in hardware for transmitting and
		receiving frames. Additionally, the Bricklet has a backlog for 768 frames in
		total in software. The buffers and the backlog can be freely assigned to the
		write and read queues.
		
		:func:`Write Frame` writes a frame into the write backlog. The Bricklet moves
		the frame from the backlog into a free write buffer. The CAN transceiver then
		transmits the frame from the write buffer to the CAN bus. If there are no
		write buffers (``write_buffer_size`` is zero) or there is no write backlog
		(``write_backlog_size`` is zero) then no frames can be transmitted and
		:func:`Write Frame` returns always *false*.
		
		The CAN transceiver receives a frame from the CAN bus and stores it into a
		free read buffer. The Bricklet moves the frame from the read buffer into the
		read backlog. :func:`Read Frame` reads the frame from the read backlog and
		returns it. If there are no read buffers (``read_buffer_sizes`` is empty) or
		there is no read backlog (``read_backlog_size`` is zero) then no frames can be
		received and :func:`Read Frame` returns always *false*.
		
		There can be multiple read buffers, because the CAN transceiver cannot receive
		data and remote frames into the same read buffer. A positive read buffer size
		represents a data frame read buffer and a negative read buffer size represents
		a remote frame read buffer. A read buffer size of zero is not allowed. By
		default the first read buffer is configured for data frames and the second read
		buffer is configured for remote frame. There can be up to 32 different read
		buffers, assuming that no write buffer is used. Each read buffer has its own
		filter configuration (see :func:`Set Read Filter Configuration`).
		
		A valid queue configuration fulfills these conditions::
		
		 write_buffer_size + abs(read_buffer_size_0) + abs(read_buffer_size_1) + ... + abs(read_buffer_size_31) <= 32
		 write_backlog_size + read_backlog_size <= 768
		
		The write buffer timeout has three different modes that define how a failed
		frame transmission should be handled:
		
		* Single-Shot (< 0): Only one transmission attempt will be made. If the
		  transmission fails then the frame is discarded.
		* Infinite (= 0): Infinite transmission attempts will be made. The frame will
		  never be discarded.
		* Milliseconds (> 0): A limited number of transmission attempts will be made.
		  If the frame could not be transmitted successfully after the configured
		  number of milliseconds then the frame is discarded.
		
		The current content of the queues is lost when this function is called.
		*/

		var readBufferSizesLength = 0;
		var readBufferSizesData = [];
		var None = 0;
		var streamStateObject = this.streamStateObjects[7];

		if (readBufferSizes.length > 32) {
			if (errorCallback !== null){
				errorCallback(IPConnection.ERROR_INVALID_PARAMETER);
			}

			return;
		}

		if (!this.getResponseExpected(7)) {
			if (streamStateObject['streamProperties']['fixedLength']) {
				readBufferSizesLength = streamStateObject['streamProperties']['fixedLength'];
			}
			else {
				readBufferSizesLength = readBufferSizes.length;
			}

			if (streamStateObject['streamProperties']['singleChunk']) {
				readBufferSizesData =
					this.ipcon.createChunkData(readBufferSizes, 0, 32, '\0');

				this.ipcon.sendRequest(this,
				                       BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL,
				                       [writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizesLength, readBufferSizesData, readBacklogSize],
				                       'B i H B b32 H',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       false,
				                       true);
			}
			else {
				while (None < readBufferSizes.length) {
					readBufferSizesData =
						this.ipcon.createChunkData(readBufferSizes, None, 32, '\0');

					this.ipcon.sendRequest(this,
					                       BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL,
					                       [writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizesLength, readBufferSizesData, readBacklogSize],
					                       'B i H B b32 H',
					                       0,
					                       '',
					                       returnCallback,
					                       errorCallback,
					                       false,
					                       true);

					None += 32;
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
					var readBufferSizesLength = 0;
					var readBufferSizesData = [];
					var None = 0;

					function doNextLLCall() {
						readBufferSizesLength = streamStateObject['responseProperties']['data'].length;
						readBufferSizesData =
							device.ipcon.createChunkData(streamStateObject['responseProperties']['data'],
							                             streamStateObject['responseProperties']['streamInChunkOffset'],
							                             streamStateObject['responseProperties']['streamInChunkLength'],
							                             '\0');
						None = streamStateObject['responseProperties']['streamInChunkOffset'];

						for (var i = 0; i < streamStateObject['dataMappingStreamIn'].length; i++) {
							if (streamStateObject['dataMappingStreamIn'][i] === null) {
								continue;
							}

							if (streamStateObject['dataMappingStreamIn'][i].endsWith('Length')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = readBufferSizesLength;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Offset')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = None;
							}
							else if (streamStateObject['dataMappingStreamIn'][i].endsWith('Data')) {
								streamStateObject['responseProperties']['streamInLLParams'][i] = readBufferSizesData;
							}
						}

						device.ipcon.sendRequest(device,
						                         BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL,
						                         streamStateObject['responseProperties']['streamInLLParams'],
						                         'B i H B b32 H',
						                         0,
						                         '',
						                         returnCallback,
						                         errorCallback,
						                         true,
						                         true);

						streamStateObject['responseProperties']['streamInChunkOffset'] += 32;
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
							if ((shortWriteWritten !== -1) && (shortWriteWritten < 32)) {
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
				                                                           readBufferSizes);

				if (streamStateObject['streamProperties']['fixedLength']) {
					readBufferSizesLength = streamStateObject['streamProperties']['fixedLength'];
				}
				else {
					readBufferSizesLength = readBufferSizes.length;
				}

				None = 0;
				readBufferSizesData =
					this.ipcon.createChunkData(readBufferSizes, 0, 32, '\0');

				streamStateObject['responseProperties']['streamInChunkOffset'] = 32;
				streamStateObject['responseProperties']['streamInChunkLength'] = 32;
				streamStateObject['responseProperties']['streamInLLParams'] = [writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizesLength, readBufferSizesData, readBacklogSize];

				this.ipcon.sendRequest(this,
				                       BrickletCANV2.FUNCTION_SET_QUEUE_CONFIGURATION_LOW_LEVEL,
				                       [writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizesLength, readBufferSizesData, readBacklogSize],
				                       'B i H B b32 H',
				                       0,
				                       '',
				                       returnCallback,
				                       errorCallback,
				                       true,
				                       true);
			}
			else {
				functionToQueue = function (device) {
					device.setQueueConfiguration.call(device, writeBufferSize, writeBufferTimeout, writeBacklogSize, readBufferSizes, readBacklogSize, returnCallback, errorCallback);
				}

				streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
			}
		}
	};

	this.getQueueConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the queue configuration as set by :func:`Set Queue Configuration`.
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
					var readBufferSizesLength = null;
					var readBufferSizesChunkData = null;
					var readBufferSizesOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var readBufferSizesChunkOffset = null;
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
							readBufferSizesChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							readBufferSizesChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							readBufferSizesLength = llvalues[i];
							break;
						}
					}

					readBufferSizesChunkOffset = 0;

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(readBufferSizesChunkData.splice(0, readBufferSizesLength));
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
			                       BrickletCANV2.FUNCTION_GET_QUEUE_CONFIGURATION_LOW_LEVEL,
			                       [],
			                       '',
			                       50,
			                       'B i H B b32 H',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getQueueConfiguration.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.getErrorLog = function(returnCallback, errorCallback) {
		/*
		Returns information about different kinds of errors.
		
		The write and read error levels indicate the current level of stuffing, form,
		acknowledgement, bit and checksum errors during CAN bus write and read
		operations. For each of this error kinds there is also an individual counter.
		
		When the write error level extends 255 then the CAN transceiver gets disabled
		and no frames can be transmitted or received anymore. The CAN transceiver will
		automatically be activated again after the CAN bus is idle for a while.
		
		The write buffer timeout, read buffer and backlog overflow counts represents the
		number of these errors:
		
		* A write buffer timeout occurs if a frame could not be transmitted before the
		  configured write buffer timeout expired (see :func:`Set Queue Configuration`).
		* A read buffer overflow occurs if a read buffer of the CAN transceiver
		  still contains the last received frame when the next frame arrives. In this
		  case the last received frame is lost. This happens if the CAN transceiver
		  receives more frames than the Bricklet can handle. Using the read filter
		  (see :func:`Set Read Filter Configuration`) can help to reduce the amount of
		  received frames. This count is not exact, but a lower bound, because the
		  Bricklet might not able detect all overflows if they occur in rapid succession.
		* A read backlog overflow occurs if the read backlog of the Bricklet is already
		  full when the next frame should be read from a read buffer of the CAN
		  transceiver. In this case the frame in the read buffer is lost. This
		  happens if the CAN transceiver receives more frames to be added to the read
		  backlog than are removed from the read backlog using the :func:`Read Frame`
		  function. Using the :cb:`Frame Read` callback ensures that the read backlog
		  can not overflow.
		
		The read buffer overflow counter counts the overflows of all configured read
		buffers. Which read buffer exactly suffered from an overflow can be figured
		out from the read buffer overflow occurrence list
		(``read_buffer_overflow_error_occurred``). Reading the error log clears the
		occurence list.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[11];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var readBufferOverflowErrorOccurredLength = null;
					var readBufferOverflowErrorOccurredChunkData = null;
					var readBufferOverflowErrorOccurredOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var readBufferOverflowErrorOccurredChunkOffset = null;
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
							readBufferOverflowErrorOccurredChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							readBufferOverflowErrorOccurredChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							readBufferOverflowErrorOccurredLength = llvalues[i];
							break;
						}
					}

					readBufferOverflowErrorOccurredChunkOffset = 0;

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(readBufferOverflowErrorOccurredChunkData.splice(0, readBufferOverflowErrorOccurredLength));
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
			                       BrickletCANV2.FUNCTION_GET_ERROR_LOG_LOW_LEVEL,
			                       [],
			                       '',
			                       52,
			                       'B B B I I I I I I I I B ?32 I',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getErrorLog.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletCANV2;
