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

BrickletLEDStrip.DEVICE_IDENTIFIER = 231;
BrickletLEDStrip.DEVICE_DISPLAY_NAME = 'LED Strip Bricklet';
BrickletLEDStrip.CALLBACK_FRAME_RENDERED = 6;
BrickletLEDStrip.FUNCTION_SET_RGB_VALUES = 1;
BrickletLEDStrip.FUNCTION_GET_RGB_VALUES = 2;
BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION = 3;
BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION = 4;
BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE = 5;
BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY = 7;
BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY = 8;
BrickletLEDStrip.FUNCTION_SET_CHIP_TYPE = 9;
BrickletLEDStrip.FUNCTION_GET_CHIP_TYPE = 10;
BrickletLEDStrip.FUNCTION_SET_RGBW_VALUES = 11;
BrickletLEDStrip.FUNCTION_GET_RGBW_VALUES = 12;
BrickletLEDStrip.FUNCTION_SET_CHANNEL_MAPPING = 13;
BrickletLEDStrip.FUNCTION_GET_CHANNEL_MAPPING = 14;
BrickletLEDStrip.FUNCTION_ENABLE_FRAME_RENDERED_CALLBACK = 15;
BrickletLEDStrip.FUNCTION_DISABLE_FRAME_RENDERED_CALLBACK = 16;
BrickletLEDStrip.FUNCTION_IS_FRAME_RENDERED_CALLBACK_ENABLED = 17;
BrickletLEDStrip.FUNCTION_GET_IDENTITY = 255;
BrickletLEDStrip.CHIP_TYPE_WS2801 = 2801;
BrickletLEDStrip.CHIP_TYPE_WS2811 = 2811;
BrickletLEDStrip.CHIP_TYPE_WS2812 = 2812;
BrickletLEDStrip.CHIP_TYPE_LPD8806 = 8806;
BrickletLEDStrip.CHIP_TYPE_APA102 = 102;
BrickletLEDStrip.CHANNEL_MAPPING_RGB = 6;
BrickletLEDStrip.CHANNEL_MAPPING_RBG = 9;
BrickletLEDStrip.CHANNEL_MAPPING_BRG = 33;
BrickletLEDStrip.CHANNEL_MAPPING_BGR = 36;
BrickletLEDStrip.CHANNEL_MAPPING_GRB = 18;
BrickletLEDStrip.CHANNEL_MAPPING_GBR = 24;
BrickletLEDStrip.CHANNEL_MAPPING_RGBW = 27;
BrickletLEDStrip.CHANNEL_MAPPING_RGWB = 30;
BrickletLEDStrip.CHANNEL_MAPPING_RBGW = 39;
BrickletLEDStrip.CHANNEL_MAPPING_RBWG = 45;
BrickletLEDStrip.CHANNEL_MAPPING_RWGB = 54;
BrickletLEDStrip.CHANNEL_MAPPING_RWBG = 57;
BrickletLEDStrip.CHANNEL_MAPPING_GRWB = 78;
BrickletLEDStrip.CHANNEL_MAPPING_GRBW = 75;
BrickletLEDStrip.CHANNEL_MAPPING_GBWR = 108;
BrickletLEDStrip.CHANNEL_MAPPING_GBRW = 99;
BrickletLEDStrip.CHANNEL_MAPPING_GWBR = 120;
BrickletLEDStrip.CHANNEL_MAPPING_GWRB = 114;
BrickletLEDStrip.CHANNEL_MAPPING_BRGW = 135;
BrickletLEDStrip.CHANNEL_MAPPING_BRWG = 141;
BrickletLEDStrip.CHANNEL_MAPPING_BGRW = 147;
BrickletLEDStrip.CHANNEL_MAPPING_BGWR = 156;
BrickletLEDStrip.CHANNEL_MAPPING_BWRG = 177;
BrickletLEDStrip.CHANNEL_MAPPING_BWGR = 180;
BrickletLEDStrip.CHANNEL_MAPPING_WRBG = 201;
BrickletLEDStrip.CHANNEL_MAPPING_WRGB = 198;
BrickletLEDStrip.CHANNEL_MAPPING_WGBR = 216;
BrickletLEDStrip.CHANNEL_MAPPING_WGRB = 210;
BrickletLEDStrip.CHANNEL_MAPPING_WBGR = 228;
BrickletLEDStrip.CHANNEL_MAPPING_WBRG = 225;

function BrickletLEDStrip(uid, ipcon) {
	//Controls up to 320 RGB LEDs

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletLEDStrip.DEVICE_IDENTIFIER, BrickletLEDStrip.DEVICE_DISPLAY_NAME);
	BrickletLEDStrip.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 3];
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_RGB_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_RGB_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_CHIP_TYPE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_CHIP_TYPE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_RGBW_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_RGBW_VALUES] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_SET_CHANNEL_MAPPING] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_CHANNEL_MAPPING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_ENABLE_FRAME_RENDERED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_DISABLE_FRAME_RENDERED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_IS_FRAME_RENDERED_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLEDStrip.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLEDStrip.CALLBACK_FRAME_RENDERED] = [10, 'H'];



	this.setRGBValues = function(index, length, r, g, b, returnCallback, errorCallback) {
		/*
		Sets *length* RGB values for the LEDs starting from *index*.
		
		To make the colors show correctly you need to configure the chip type
		(:func:`Set Chip Type`) and a 3-channel channel mapping (:func:`Set Channel Mapping`)
		according to the connected LEDs.
		
		Example: If you set
		
		* index to 5,
		* length to 3,
		* r to [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		* g to [0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] and
		* b to [0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
		the LED with index 5 will be red, 6 will be green and 7 will be blue.
		
		.. note:: Depending on the LED circuitry colors can be permuted.
		
		The colors will be transfered to actual LEDs when the next
		frame duration ends, see :func:`Set Frame Duration`.
		
		Generic approach:
		
		* Set the frame duration to a value that represents
		  the number of frames per second you want to achieve.
		* Set all of the LED colors for one frame.
		* Wait for the :cb:`Frame Rendered` callback.
		* Set all of the LED colors for next frame.
		* Wait for the :cb:`Frame Rendered` callback.
		* and so on.
		
		This approach ensures that you can change the LED colors with
		a fixed frame rate.
		
		The actual number of controllable LEDs depends on the number of free
		Bricklet ports. See :ref:`here <led_strip_bricklet_ram_constraints>` for more
		information. A call of :func:`Set RGB Values` with index + length above the
		bounds is ignored completely.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_RGB_VALUES, [index, length, r, g, b], 'H B B16 B16 B16', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getRGBValues = function(index, length, returnCallback, errorCallback) {
		/*
		Returns *length* R, G and B values starting from the
		given LED *index*.
		
		The values are the last values that were set by :func:`Set RGB Values`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_RGB_VALUES, [index, length], 'H B', 56, 'B16 B16 B16', returnCallback, errorCallback, false, true);
	};
	this.setFrameDuration = function(duration, returnCallback, errorCallback) {
		/*
		Sets the frame duration.
		
		Example: If you want to achieve 20 frames per second, you should
		set the frame duration to 50ms (50ms * 20 = 1 second).
		
		For an explanation of the general approach see :func:`Set RGB Values`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_FRAME_DURATION, [duration], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getFrameDuration = function(returnCallback, errorCallback) {
		/*
		Returns the frame duration as set by :func:`Set Frame Duration`.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_FRAME_DURATION, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getSupplyVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the current supply voltage of the LEDs.
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_SUPPLY_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setClockFrequency = function(frequency, returnCallback, errorCallback) {
		/*
		Sets the frequency of the clock.
		
		The Bricklet will choose the nearest achievable frequency, which may
		be off by a few Hz. You can get the exact frequency that is used by
		calling :func:`Get Clock Frequency`.
		
		If you have problems with flickering LEDs, they may be bits flipping. You
		can fix this by either making the connection between the LEDs and the
		Bricklet shorter or by reducing the frequency.
		
		With a decreasing frequency your maximum frames per second will decrease
		too.
		
		.. note::
		 The frequency in firmware version 2.0.0 is fixed at 2MHz.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_CLOCK_FREQUENCY, [frequency], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getClockFrequency = function(returnCallback, errorCallback) {
		/*
		Returns the currently used clock frequency as set by :func:`Set Clock Frequency`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_CLOCK_FREQUENCY, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setChipType = function(chip, returnCallback, errorCallback) {
		/*
		Sets the type of the LED driver chip. We currently support the chips
		
		* WS2801,
		* WS2811,
		* WS2812 / SK6812 / NeoPixel RGB,
		* SK6812RGBW / NeoPixel RGBW (Chip Type = WS2812),
		* LPD8806 and
		* APA102 / DotStar.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_CHIP_TYPE, [chip], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getChipType = function(returnCallback, errorCallback) {
		/*
		Returns the currently used chip type as set by :func:`Set Chip Type`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_CHIP_TYPE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setRGBWValues = function(index, length, r, g, b, w, returnCallback, errorCallback) {
		/*
		Sets *length* RGBW values for the LEDs starting from *index*.
		
		To make the colors show correctly you need to configure the chip type
		(:func:`Set Chip Type`) and a 4-channel channel mapping (:func:`Set Channel Mapping`)
		according to the connected LEDs.
		
		The maximum length is 12, the index goes from 0 to 239 and the rgbw values
		have 8 bits each.
		
		Example: If you set
		
		* index to 5,
		* length to 4,
		* r to [255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		* g to [0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		* b to [0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0] and
		* w to [0, 0, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		
		the LED with index 5 will be red, 6 will be green, 7 will be blue and 8 will be white.
		
		.. note:: Depending on the LED circuitry colors can be permuted.
		
		The colors will be transfered to actual LEDs when the next
		frame duration ends, see :func:`Set Frame Duration`.
		
		Generic approach:
		
		* Set the frame duration to a value that represents
		  the number of frames per second you want to achieve.
		* Set all of the LED colors for one frame.
		* Wait for the :cb:`Frame Rendered` callback.
		* Set all of the LED colors for next frame.
		* Wait for the :cb:`Frame Rendered` callback.
		* and so on.
		
		This approach ensures that you can change the LED colors with
		a fixed frame rate.
		
		The actual number of controllable LEDs depends on the number of free
		Bricklet ports. See :ref:`here <led_strip_bricklet_ram_constraints>` for more
		information. A call of :func:`Set RGBW Values` with index + length above the
		bounds is ignored completely.
		
		The LPD8806 LED driver chips have 7-bit channels for RGB. Internally the LED
		Strip Bricklets divides the 8-bit values set using this function by 2 to make
		them 7-bit. Therefore, you can just use the normal value range (0-255) for
		LPD8806 LEDs.
		
		The brightness channel of the APA102 LED driver chips has 5-bit. Internally the
		LED Strip Bricklets divides the 8-bit values set using this function by 8 to make
		them 5-bit. Therefore, you can just use the normal value range (0-255) for
		the brightness channel of APA102 LEDs.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_RGBW_VALUES, [index, length, r, g, b, w], 'H B B12 B12 B12 B12', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getRGBWValues = function(index, length, returnCallback, errorCallback) {
		/*
		Returns *length* RGBW values starting from the given *index*.
		
		The values are the last values that were set by :func:`Set RGBW Values`.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_RGBW_VALUES, [index, length], 'H B', 56, 'B12 B12 B12 B12', returnCallback, errorCallback, false, true);
	};
	this.setChannelMapping = function(mapping, returnCallback, errorCallback) {
		/*
		Sets the channel mapping for the connected LEDs.
		
		:func:`Set RGB Values` and :func:`Set RGBW Values` take the data in RGB(W) order.
		But the connected LED driver chips might have their 3 or 4 channels in a
		different order. For example, the WS2801 chips typically use BGR order, the
		WS2812 chips typically use GRB order and the APA102 chips typically use WBGR
		order.
		
		The APA102 chips are special. They have three 8-bit channels for RGB
		and an additional 5-bit channel for the overall brightness of the RGB LED
		making them 4-channel chips. Internally the brightness channel is the first
		channel, therefore one of the Wxyz channel mappings should be used. Then
		the W channel controls the brightness.
		
		If a 3-channel mapping is selected then :func:`Set RGB Values` has to be used.
		Calling :func:`Set RGBW Values` with a 3-channel mapping will produce incorrect
		results. Vice-versa if a 4-channel mapping is selected then
		:func:`Set RGBW Values` has to be used. Calling :func:`Set RGB Values` with a
		4-channel mapping will produce incorrect results.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_SET_CHANNEL_MAPPING, [mapping], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getChannelMapping = function(returnCallback, errorCallback) {
		/*
		Returns the currently used channel mapping as set by :func:`Set Channel Mapping`.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_CHANNEL_MAPPING, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.enableFrameRenderedCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Frame Rendered` callback.
		
		By default the callback is enabled.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_ENABLE_FRAME_RENDERED_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableFrameRenderedCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Frame Rendered` callback.
		
		By default the callback is enabled.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_DISABLE_FRAME_RENDERED_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isFrameRenderedCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the :cb:`Frame Rendered` callback is enabled, *false* otherwise.
		
		.. versionadded:: 2.0.6$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_IS_FRAME_RENDERED_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLEDStrip.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletLEDStrip;
