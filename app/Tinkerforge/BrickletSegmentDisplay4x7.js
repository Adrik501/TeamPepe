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

BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER = 237;
BrickletSegmentDisplay4x7.DEVICE_DISPLAY_NAME = 'Segment Display 4x7 Bricklet';
BrickletSegmentDisplay4x7.CALLBACK_COUNTER_FINISHED = 5;
BrickletSegmentDisplay4x7.FUNCTION_SET_SEGMENTS = 1;
BrickletSegmentDisplay4x7.FUNCTION_GET_SEGMENTS = 2;
BrickletSegmentDisplay4x7.FUNCTION_START_COUNTER = 3;
BrickletSegmentDisplay4x7.FUNCTION_GET_COUNTER_VALUE = 4;
BrickletSegmentDisplay4x7.FUNCTION_GET_IDENTITY = 255;

function BrickletSegmentDisplay4x7(uid, ipcon) {
	//Four 7-segment displays with switchable colon

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletSegmentDisplay4x7.DEVICE_IDENTIFIER, BrickletSegmentDisplay4x7.DEVICE_DISPLAY_NAME);
	BrickletSegmentDisplay4x7.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_SET_SEGMENTS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_GET_SEGMENTS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_START_COUNTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_GET_COUNTER_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSegmentDisplay4x7.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSegmentDisplay4x7.CALLBACK_COUNTER_FINISHED] = [8, ''];



	this.setSegments = function(segments, brightness, colon, returnCallback, errorCallback) {
		/*
		The 7-segment display can be set with bitmaps. Every bit controls one
		segment:
		
		.. image:: /Images/Bricklets/bricklet_segment_display_4x7_bit_order.png
		   :scale: 100 %
		   :alt: Bit order of one segment
		   :align: center
		
		For example to set a "5" you would want to activate segments 0, 2, 3, 5 and 6.
		This is represented by the number 0b01101101 = 0x6d = 109.
		
		The brightness can be set between 0 (dark) and 7 (bright). The colon
		parameter turns the colon of the display on or off.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_SET_SEGMENTS, [segments, brightness, colon], 'B4 B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSegments = function(returnCallback, errorCallback) {
		/*
		Returns the segment, brightness and color data as set by
		:func:`Set Segments`.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_GET_SEGMENTS, [], '', 14, 'B4 B ?', returnCallback, errorCallback, false, true);
	};
	this.startCounter = function(valueFrom, valueTo, increment, length, returnCallback, errorCallback) {
		/*
		Starts a counter with the *from* value that counts to the *to*
		value with the each step incremented by *increment*.
		*length* is the pause between each increment.
		
		Example: If you set *from* to 0, *to* to 100, *increment* to 1 and
		*length* to 1000, a counter that goes from 0 to 100 with one second
		pause between each increment will be started.
		
		Using a negative increment allows to count backwards.
		
		You can stop the counter at every time by calling :func:`Set Segments`.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_START_COUNTER, [valueFrom, valueTo, increment, length], 'h h h I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCounterValue = function(returnCallback, errorCallback) {
		/*
		Returns the counter value that is currently shown on the display.
		
		If there is no counter running a 0 will be returned.
		*/
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_GET_COUNTER_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSegmentDisplay4x7.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletSegmentDisplay4x7;
