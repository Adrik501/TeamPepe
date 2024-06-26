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

BrickletLCD20x4.DEVICE_IDENTIFIER = 212;
BrickletLCD20x4.DEVICE_DISPLAY_NAME = 'LCD 20x4 Bricklet';
BrickletLCD20x4.CALLBACK_BUTTON_PRESSED = 9;
BrickletLCD20x4.CALLBACK_BUTTON_RELEASED = 10;
BrickletLCD20x4.FUNCTION_WRITE_LINE = 1;
BrickletLCD20x4.FUNCTION_CLEAR_DISPLAY = 2;
BrickletLCD20x4.FUNCTION_BACKLIGHT_ON = 3;
BrickletLCD20x4.FUNCTION_BACKLIGHT_OFF = 4;
BrickletLCD20x4.FUNCTION_IS_BACKLIGHT_ON = 5;
BrickletLCD20x4.FUNCTION_SET_CONFIG = 6;
BrickletLCD20x4.FUNCTION_GET_CONFIG = 7;
BrickletLCD20x4.FUNCTION_IS_BUTTON_PRESSED = 8;
BrickletLCD20x4.FUNCTION_SET_CUSTOM_CHARACTER = 11;
BrickletLCD20x4.FUNCTION_GET_CUSTOM_CHARACTER = 12;
BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT = 13;
BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT = 14;
BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT_COUNTER = 15;
BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT_COUNTER = 16;
BrickletLCD20x4.FUNCTION_GET_IDENTITY = 255;

function BrickletLCD20x4(uid, ipcon) {
	//20x4 character alphanumeric display with blue backlight

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletLCD20x4.DEVICE_IDENTIFIER, BrickletLCD20x4.DEVICE_DISPLAY_NAME);
	BrickletLCD20x4.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 2];
	this.responseExpected[BrickletLCD20x4.FUNCTION_WRITE_LINE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_CLEAR_DISPLAY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_BACKLIGHT_ON] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_BACKLIGHT_OFF] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_IS_BACKLIGHT_ON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_SET_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_GET_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_IS_BUTTON_PRESSED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_SET_CUSTOM_CHARACTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_GET_CUSTOM_CHARACTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT_COUNTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT_COUNTER] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletLCD20x4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletLCD20x4.CALLBACK_BUTTON_PRESSED] = [9, 'B'];
	this.callbackFormats[BrickletLCD20x4.CALLBACK_BUTTON_RELEASED] = [9, 'B'];



	this.writeLine = function(line, position, text, returnCallback, errorCallback) {
		/*
		Writes text to a specific line with a specific position.
		The text can have a maximum of 20 characters.
		
		For example: (0, 7, "Hello") will write *Hello* in the middle of the
		first line of the display.
		
		The display uses a special charset that includes all ASCII characters except
		backslash and tilde. The LCD charset also includes several other non-ASCII characters, see
		the `charset specification <https://github.com/Tinkerforge/lcd-20x4-bricklet/raw/master/datasheets/standard_charset.pdf>`__
		for details. The Unicode example above shows how to specify non-ASCII characters
		and how to translate from Unicode to the LCD charset.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_WRITE_LINE, [line, position, text], 'B B s20', 0, '', returnCallback, errorCallback, false, true);
	};
	this.clearDisplay = function(returnCallback, errorCallback) {
		/*
		Deletes all characters from the display.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_CLEAR_DISPLAY, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.backlightOn = function(returnCallback, errorCallback) {
		/*
		Turns the backlight on.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_BACKLIGHT_ON, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.backlightOff = function(returnCallback, errorCallback) {
		/*
		Turns the backlight off.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_BACKLIGHT_OFF, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isBacklightOn = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the backlight is on and *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_IS_BACKLIGHT_ON, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setConfig = function(cursor, blinking, returnCallback, errorCallback) {
		/*
		Configures if the cursor (shown as "_") should be visible and if it
		should be blinking (shown as a blinking block). The cursor position
		is one character behind the the last text written with
		:func:`Write Line`.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_CONFIG, [cursor, blinking], '? ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Config`.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_CONFIG, [], '', 10, '? ?', returnCallback, errorCallback, false, true);
	};
	this.isButtonPressed = function(button, returnCallback, errorCallback) {
		/*
		Returns *true* if the button (0 to 2 or 0 to 3 since hardware version 1.2)
		is pressed.
		
		If you want to react on button presses and releases it is recommended to use
		the :cb:`Button Pressed` and :cb:`Button Released` callbacks.
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_IS_BUTTON_PRESSED, [button], 'B', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setCustomCharacter = function(index, character, returnCallback, errorCallback) {
		/*
		The LCD 20x4 Bricklet can store up to 8 custom characters. The characters
		consist of 5x8 pixels and can be addressed with the index 0-7. To describe
		the pixels, the first 5 bits of 8 bytes are used. For example, to make
		a custom character "H", you should transfer the following:
		
		* ``character[0] = 0b00010001`` (decimal value 17)
		* ``character[1] = 0b00010001`` (decimal value 17)
		* ``character[2] = 0b00010001`` (decimal value 17)
		* ``character[3] = 0b00011111`` (decimal value 31)
		* ``character[4] = 0b00010001`` (decimal value 17)
		* ``character[5] = 0b00010001`` (decimal value 17)
		* ``character[6] = 0b00010001`` (decimal value 17)
		* ``character[7] = 0b00000000`` (decimal value 0)
		
		The characters can later be written with :func:`Write Line` by using the
		characters with the byte representation 8 ("\\x08" or "\\u0008") to 15
		("\\x0F" or "\\u000F").
		
		You can play around with the custom characters in Brick Viewer version
		since 2.0.1.
		
		Custom characters are stored by the LCD in RAM, so they have to be set
		after each startup.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_CUSTOM_CHARACTER, [index, character], 'B B8', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCustomCharacter = function(index, returnCallback, errorCallback) {
		/*
		Returns the custom character for a given index, as set with
		:func:`Set Custom Character`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_CUSTOM_CHARACTER, [index], 'B', 16, 'B8', returnCallback, errorCallback, false, true);
	};
	this.setDefaultText = function(line, text, returnCallback, errorCallback) {
		/*
		Sets the default text for lines 0-3. The max number of characters
		per line is 20.
		
		The default text is shown on the LCD, if the default text counter
		expires, see :func:`Set Default Text Counter`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT, [line, text], 'B s20', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDefaultText = function(line, returnCallback, errorCallback) {
		/*
		Returns the default text for a given line (0-3) as set by
		:func:`Set Default Text`.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT, [line], 'B', 28, 's20', returnCallback, errorCallback, false, true);
	};
	this.setDefaultTextCounter = function(counter, returnCallback, errorCallback) {
		/*
		Sets the default text counter. This counter is decremented each
		ms by the LCD firmware. If the counter reaches 0, the default text
		(see :func:`Set Default Text`) is shown on the LCD.
		
		This functionality can be used to show a default text if the controlling
		program crashes or the connection is interrupted.
		
		A possible approach is to call :func:`Set Default Text Counter` every
		minute with the parameter 1000*60*2 (2 minutes). In this case the
		default text will be shown no later than 2 minutes after the
		controlling program crashes.
		
		A negative counter turns the default text functionality off.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_SET_DEFAULT_TEXT_COUNTER, [counter], 'i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDefaultTextCounter = function(returnCallback, errorCallback) {
		/*
		Returns the current value of the default text counter.
		
		.. versionadded:: 2.0.2$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_DEFAULT_TEXT_COUNTER, [], '', 12, 'i', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletLCD20x4.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletLCD20x4;
