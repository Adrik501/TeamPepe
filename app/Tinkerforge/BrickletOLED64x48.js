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

BrickletOLED64x48.DEVICE_IDENTIFIER = 264;
BrickletOLED64x48.DEVICE_DISPLAY_NAME = 'OLED 64x48 Bricklet';
BrickletOLED64x48.FUNCTION_WRITE = 1;
BrickletOLED64x48.FUNCTION_NEW_WINDOW = 2;
BrickletOLED64x48.FUNCTION_CLEAR_DISPLAY = 3;
BrickletOLED64x48.FUNCTION_SET_DISPLAY_CONFIGURATION = 4;
BrickletOLED64x48.FUNCTION_GET_DISPLAY_CONFIGURATION = 5;
BrickletOLED64x48.FUNCTION_WRITE_LINE = 6;
BrickletOLED64x48.FUNCTION_GET_IDENTITY = 255;

function BrickletOLED64x48(uid, ipcon) {
	//1.68cm (0.66") OLED display with 64x48 pixels

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletOLED64x48.DEVICE_IDENTIFIER, BrickletOLED64x48.DEVICE_DISPLAY_NAME);
	BrickletOLED64x48.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletOLED64x48.FUNCTION_WRITE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED64x48.FUNCTION_NEW_WINDOW] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED64x48.FUNCTION_CLEAR_DISPLAY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED64x48.FUNCTION_SET_DISPLAY_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED64x48.FUNCTION_GET_DISPLAY_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletOLED64x48.FUNCTION_WRITE_LINE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletOLED64x48.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;



	this.write = function(data, returnCallback, errorCallback) {
		/*
		Appends 64 byte of data to the window as set by :func:`New Window`.
		
		Each row has a height of 8 pixels which corresponds to one byte of data.
		
		Example: if you call :func:`New Window` with column from 0 to 63 and row
		from 0 to 5 (the whole display) each call of :func:`Write` (red arrow) will
		write one row.
		
		.. image:: /Images/Bricklets/bricklet_oled_64x48_display.png
		   :scale: 100 %
		   :alt: Display pixel order
		   :align: center
		   :target: ../../_images/Bricklets/bricklet_oled_64x48_display.png
		
		The LSB (D0) of each data byte is at the top and the MSB (D7) is at the
		bottom of the row.
		
		The next call of :func:`Write` will write the second row and so on. To
		fill the whole display you need to call :func:`Write` 6 times.
		*/
		this.ipcon.sendRequest(this, BrickletOLED64x48.FUNCTION_WRITE, [data], 'B64', 0, '', returnCallback, errorCallback, false, true);
	};
	this.newWindow = function(columnFrom, columnTo, rowFrom, rowTo, returnCallback, errorCallback) {
		/*
		Sets the window in which you can write with :func:`Write`. One row
		has a height of 8 pixels.
		*/
		this.ipcon.sendRequest(this, BrickletOLED64x48.FUNCTION_NEW_WINDOW, [columnFrom, columnTo, rowFrom, rowTo], 'B B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.clearDisplay = function(returnCallback, errorCallback) {
		/*
		Clears the current content of the window as set by :func:`New Window`.
		*/
		this.ipcon.sendRequest(this, BrickletOLED64x48.FUNCTION_CLEAR_DISPLAY, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setDisplayConfiguration = function(contrast, invert, returnCallback, errorCallback) {
		/*
		Sets the configuration of the display.
		
		You can set a contrast value from 0 to 255 and you can invert the color
		(black/white) of the display.
		*/
		this.ipcon.sendRequest(this, BrickletOLED64x48.FUNCTION_SET_DISPLAY_CONFIGURATION, [contrast, invert], 'B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDisplayConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Display Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletOLED64x48.FUNCTION_GET_DISPLAY_CONFIGURATION, [], '', 10, 'B ?', returnCallback, errorCallback, false, true);
	};
	this.writeLine = function(line, position, text, returnCallback, errorCallback) {
		/*
		Writes text to a specific line with a specific position.
		The text can have a maximum of 13 characters.
		
		For example: (1, 4, "Hello") will write *Hello* in the middle of the
		second line of the display.
		
		You can draw to the display with :func:`Write` and then add text to it
		afterwards.
		
		The display uses a special 5x7 pixel charset. You can view the characters
		of the charset in Brick Viewer.
		
		The font conforms to code page 437.
		*/
		this.ipcon.sendRequest(this, BrickletOLED64x48.FUNCTION_WRITE_LINE, [line, position, text], 'B B s13', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletOLED64x48.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletOLED64x48;
