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

BrickletSoundPressureLevel.DEVICE_IDENTIFIER = 290;
BrickletSoundPressureLevel.DEVICE_DISPLAY_NAME = 'Sound Pressure Level Bricklet';
BrickletSoundPressureLevel.CALLBACK_DECIBEL = 4;
BrickletSoundPressureLevel.CALLBACK_SPECTRUM_LOW_LEVEL = 8;
BrickletSoundPressureLevel.CALLBACK_SPECTRUM = -8;
BrickletSoundPressureLevel.FUNCTION_GET_DECIBEL = 1;
BrickletSoundPressureLevel.FUNCTION_SET_DECIBEL_CALLBACK_CONFIGURATION = 2;
BrickletSoundPressureLevel.FUNCTION_GET_DECIBEL_CALLBACK_CONFIGURATION = 3;
BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL = 5;
BrickletSoundPressureLevel.FUNCTION_SET_SPECTRUM_CALLBACK_CONFIGURATION = 6;
BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_CALLBACK_CONFIGURATION = 7;
BrickletSoundPressureLevel.FUNCTION_SET_CONFIGURATION = 9;
BrickletSoundPressureLevel.FUNCTION_GET_CONFIGURATION = 10;
BrickletSoundPressureLevel.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletSoundPressureLevel.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletSoundPressureLevel.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletSoundPressureLevel.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletSoundPressureLevel.FUNCTION_WRITE_FIRMWARE = 238;
BrickletSoundPressureLevel.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletSoundPressureLevel.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletSoundPressureLevel.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletSoundPressureLevel.FUNCTION_RESET = 243;
BrickletSoundPressureLevel.FUNCTION_WRITE_UID = 248;
BrickletSoundPressureLevel.FUNCTION_READ_UID = 249;
BrickletSoundPressureLevel.FUNCTION_GET_IDENTITY = 255;
BrickletSoundPressureLevel.THRESHOLD_OPTION_OFF = 'x';
BrickletSoundPressureLevel.THRESHOLD_OPTION_OUTSIDE = 'o';
BrickletSoundPressureLevel.THRESHOLD_OPTION_INSIDE = 'i';
BrickletSoundPressureLevel.THRESHOLD_OPTION_SMALLER = '<';
BrickletSoundPressureLevel.THRESHOLD_OPTION_GREATER = '>';
BrickletSoundPressureLevel.FFT_SIZE_128 = 0;
BrickletSoundPressureLevel.FFT_SIZE_256 = 1;
BrickletSoundPressureLevel.FFT_SIZE_512 = 2;
BrickletSoundPressureLevel.FFT_SIZE_1024 = 3;
BrickletSoundPressureLevel.WEIGHTING_A = 0;
BrickletSoundPressureLevel.WEIGHTING_B = 1;
BrickletSoundPressureLevel.WEIGHTING_C = 2;
BrickletSoundPressureLevel.WEIGHTING_D = 3;
BrickletSoundPressureLevel.WEIGHTING_Z = 4;
BrickletSoundPressureLevel.WEIGHTING_ITU_R_468 = 5;
BrickletSoundPressureLevel.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletSoundPressureLevel.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletSoundPressureLevel.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletSoundPressureLevel.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletSoundPressureLevel.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletSoundPressureLevel.BOOTLOADER_STATUS_OK = 0;
BrickletSoundPressureLevel.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletSoundPressureLevel.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletSoundPressureLevel.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletSoundPressureLevel.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletSoundPressureLevel.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletSoundPressureLevel.STATUS_LED_CONFIG_OFF = 0;
BrickletSoundPressureLevel.STATUS_LED_CONFIG_ON = 1;
BrickletSoundPressureLevel.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletSoundPressureLevel.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletSoundPressureLevel(uid, ipcon) {
	//Measures Sound Pressure Level in dB(A/B/C/D/Z)

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletSoundPressureLevel.DEVICE_IDENTIFIER, BrickletSoundPressureLevel.DEVICE_DISPLAY_NAME);
	BrickletSoundPressureLevel.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_DECIBEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_SET_DECIBEL_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_DECIBEL_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_SET_SPECTRUM_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_SET_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSoundPressureLevel.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSoundPressureLevel.CALLBACK_DECIBEL] = [10, 'H'];
	this.callbackFormats[BrickletSoundPressureLevel.CALLBACK_SPECTRUM_LOW_LEVEL] = [72, 'H H H30'];

	this.highLevelCallbacks[BrickletSoundPressureLevel.CALLBACK_SPECTRUM] = [['streamLength', 'streamChunkOffset', 'streamChunkData'], {'fixedLength': null, 'singleChunk': false}, null];

	this.streamStateObjects[BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL] = {
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
			'unpackFormatString': 'H H H30',
			'returnCB': null,
			'errorCB': null,
			'callQueue': []
		}
	};

	this.getDecibel = function(returnCallback, errorCallback) {
		/*
		Returns the measured sound pressure in decibels.
		
		The Bricklet supports the weighting standards dB(A), dB(B), dB(C), dB(D),
		dB(Z) and ITU-R 468. You can configure the weighting with :func:`Set Configuration`.
		
		By default dB(A) will be used.
		
		
		If you want to get the value periodically, it is recommended to use the
		:cb:`Decibel` callback. You can set the callback configuration
		with :func:`Set Decibel Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_DECIBEL, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setDecibelCallbackConfiguration = function(period, valueHasToChange, option, min, max, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Decibel` callback is triggered
		periodically. A value of 0 turns the callback off.
		
		If the `value has to change`-parameter is set to true, the callback is only
		triggered after the value has changed. If the value didn't change
		within the period, the callback is triggered immediately on change.
		
		If it is set to false, the callback is continuously triggered with the period,
		independent of the value.
		
		It is furthermore possible to constrain the callback with thresholds.
		
		The `option`-parameter together with min/max sets a threshold for the :cb:`Decibel` callback.
		
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
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_SET_DECIBEL_CALLBACK_CONFIGURATION, [period, valueHasToChange, option, min, max], 'I ? c H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDecibelCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by :func:`Set Decibel Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_DECIBEL_CALLBACK_CONFIGURATION, [], '', 18, 'I ? c H H', returnCallback, errorCallback, false, true);
	};
	this.getSpectrumLowLevel = function(returnCallback, errorCallback) {
		/*
		Returns the frequency spectrum. The length of the spectrum is between
		512 (FFT size 1024) and 64 (FFT size 128). See :func:`Set Configuration`.
		
		Each array element is one bin of the FFT. The first bin is always the
		DC offset and the other bins have a size between 40Hz (FFT size 1024) and
		320Hz (FFT size 128).
		
		In sum the frequency of the spectrum always has a range from 0 to
		20480Hz (the FFT is applied to samples with a frequency of 40960Hz).
		
		The returned data is already equalized, which means that the microphone
		frequency response is compensated and the weighting function is applied
		(see :func:`Set Configuration` for the available weighting standards). Use
		dB(Z) if you need the unaltered spectrum.
		
		The values are not in dB form yet. If you want a proper dB scale of the
		spectrum you have to apply the formula f(x) = 20*log10(max(1, x/sqrt(2)))
		on each value.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL, [], '', 72, 'H H H30', returnCallback, errorCallback, false, true);
	};
	this.setSpectrumCallbackConfiguration = function(period, returnCallback, errorCallback) {
		/*
		The period is the period with which the :cb:`Spectrum` callback is
		triggered periodically. A value of 0 turns the callback off.
		
		Every new measured spectrum will be send at most once. Set the period to 1 to
		make sure that you get every spectrum.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_SET_SPECTRUM_CALLBACK_CONFIGURATION, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSpectrumCallbackConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the callback configuration as set by
		:func:`Get Spectrum Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_CALLBACK_CONFIGURATION, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setConfiguration = function(fftSize, weighting, returnCallback, errorCallback) {
		/*
		Sets the Sound Pressure Level Bricklet configuration.
		
		With different FFT sizes the Bricklet has a different
		amount of samples per second and the size of the FFT bins
		changes. The higher the FFT size the more precise is the result
		of the dB(X) calculation.
		
		Available FFT sizes are:
		
		* 1024: 512 bins, 10 samples per second, each bin has size 40Hz
		* 512: 256 bins, 20 samples per second, each bin has size 80Hz
		* 256: 128 bins, 40 samples per second, each bin has size 160Hz
		* 128: 64 bins, 80 samples per second, each bin has size 320Hz
		
		The Bricklet supports different weighting functions. You can choose
		between dB(A), dB(B), dB(C), dB(D), dB(Z) and ITU-R 468.
		
		dB(A/B/C/D) are the standard dB weighting curves. dB(A) is
		often used to measure volumes at concerts etc. dB(Z) has a
		flat response, no weighting is applied. ITU-R 468 is an ITU
		weighting standard mostly used in the UK and Europe.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_SET_CONFIGURATION, [fftSize, weighting], 'B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_CONFIGURATION, [], '', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSoundPressureLevel.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.getSpectrum = function(returnCallback, errorCallback) {
		/*
		Returns the frequency spectrum. The length of the spectrum is between
		512 (FFT size 1024) and 64 (FFT size 128). See :func:`Set Configuration`.
		
		Each array element is one bin of the FFT. The first bin is always the
		DC offset and the other bins have a size between 40Hz (FFT size 1024) and
		320Hz (FFT size 128).
		
		In sum the frequency of the spectrum always has a range from 0 to
		20480Hz (the FFT is applied to samples with a frequency of 40960Hz).
		
		The returned data is already equalized, which means that the microphone
		frequency response is compensated and the weighting function is applied
		(see :func:`Set Configuration` for the available weighting standards). Use
		dB(Z) if you need the unaltered spectrum.
		
		The values are not in dB form yet. If you want a proper dB scale of the
		spectrum you have to apply the formula f(x) = 20*log10(max(1, x/sqrt(2)))
		on each value.
		*/
		var responseHandler = null;
		var functionToQueue = null;
		var streamStateObject = this.streamStateObjects[5];
		if (streamStateObject['responseProperties']['responseHandler'] === null) {
			responseHandler = 
				function (device, fid, packetResponse) {
					var result = [];
					var llvalues = null;
					var packetErrorFlag = 0;
					var rolesMappedData = [];
					var spectrumLength = null;
					var spectrumChunkData = null;
					var spectrumOutOfSync = false;
					var streamStateObject = device.streamStateObjects[fid];
					var spectrumChunkOffset = null;
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
							spectrumChunkData = llvalues[i];
						}
						else if (streamStateObject['dataMapping'][i] === 'streamChunkOffset') {
							spectrumChunkOffset = llvalues[i];
						}
					}

					for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
						if (streamStateObject['dataMapping'][i] === 'streamLength') {
							spectrumLength = llvalues[i];
							break;
						}
					}

					function handleOOS() {
						if ((spectrumChunkOffset + 30) < spectrumLength) {
							streamStateObject['responseProperties']['runningSubcallOOS'] = true;
							device.ipcon.sendRequest(device, BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL, [], '', 72, 'H H H30', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

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
						spectrumOutOfSync = (spectrumChunkOffset !== 0);
						streamStateObject['responseProperties']['data'] = spectrumChunkData;
					}

					if (!streamStateObject['responseProperties']['runningSubcallOOS']) {
						if (!streamStateObject['responseProperties']['runningSubcall']) {
							if (!spectrumOutOfSync &&
							    (streamStateObject['responseProperties']['data'].length < spectrumLength)) {
							        streamStateObject['responseProperties']['runningSubcall'] = true;
							        device.ipcon.sendRequest(device, BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL, [], '', 72, 'H H H30', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

							        return;
							}
						}
						else {
							spectrumOutOfSync =
								(spectrumChunkOffset !== streamStateObject['responseProperties']['data'].length);

							if (!spectrumOutOfSync &&
								(streamStateObject['responseProperties']['data'].length < spectrumLength)) {
									streamStateObject['responseProperties']['data'] =
										streamStateObject['responseProperties']['data'].concat(spectrumChunkData);

									if (streamStateObject['responseProperties']['data'].length >= spectrumLength) {
										streamStateObject['responseProperties']['data'] =
											streamStateObject['responseProperties']['data'].splice(0, spectrumLength);
									}
									else {
										device.ipcon.sendRequest(device, BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL, [], '', 72, 'H H H30', streamStateObject['responseProperties']['returnCB'], streamStateObject['responseProperties']['errorCB'], true, true);

										return;
									}
							}
						}
					}
					else{
						handleOOS();

						return;
					}

					if (spectrumOutOfSync) { // Discard remaining stream to bring it back in-sync
						handleOOS();

						return;
					}

					if (streamStateObject['responseProperties']['returnCB']) {
						for (var i = 0; i < streamStateObject['dataMapping'].length; i++) {
							rolesMappedData.push({'role': streamStateObject['dataMapping'][i], 'llvalue': llvalues[i]});
						}

						for (var i = 0; i < rolesMappedData.length; i++) {
							if (rolesMappedData[i]['role'] === 'streamChunkData') {
								result.push(streamStateObject['responseProperties']['data'].splice(0, spectrumLength));
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
			                       BrickletSoundPressureLevel.FUNCTION_GET_SPECTRUM_LOW_LEVEL,
			                       [],
			                       '',
			                       72,
			                       'H H H30',
			                       returnCallback,
			                       errorCallback,
			                       true,
			                       true);
		}
		else {
			functionToQueue = function (device) {
				device.getSpectrum.call(device, returnCallback, errorCallback);
			}
			streamStateObject['responseProperties']['callQueue'].push(functionToQueue);
		}
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletSoundPressureLevel;
