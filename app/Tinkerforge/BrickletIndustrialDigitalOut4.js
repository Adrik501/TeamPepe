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

BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER = 224;
BrickletIndustrialDigitalOut4.DEVICE_DISPLAY_NAME = 'Industrial Digital Out 4 Bricklet';
BrickletIndustrialDigitalOut4.CALLBACK_MONOFLOP_DONE = 8;
BrickletIndustrialDigitalOut4.FUNCTION_SET_VALUE = 1;
BrickletIndustrialDigitalOut4.FUNCTION_GET_VALUE = 2;
BrickletIndustrialDigitalOut4.FUNCTION_SET_MONOFLOP = 3;
BrickletIndustrialDigitalOut4.FUNCTION_GET_MONOFLOP = 4;
BrickletIndustrialDigitalOut4.FUNCTION_SET_GROUP = 5;
BrickletIndustrialDigitalOut4.FUNCTION_GET_GROUP = 6;
BrickletIndustrialDigitalOut4.FUNCTION_GET_AVAILABLE_FOR_GROUP = 7;
BrickletIndustrialDigitalOut4.FUNCTION_SET_SELECTED_VALUES = 9;
BrickletIndustrialDigitalOut4.FUNCTION_GET_IDENTITY = 255;

function BrickletIndustrialDigitalOut4(uid, ipcon) {
	//4 galvanically isolated digital outputs

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialDigitalOut4.DEVICE_IDENTIFIER, BrickletIndustrialDigitalOut4.DEVICE_DISPLAY_NAME);
	BrickletIndustrialDigitalOut4.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_VALUE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_GROUP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_AVAILABLE_FOR_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_SET_SELECTED_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalOut4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialDigitalOut4.CALLBACK_MONOFLOP_DONE] = [12, 'H H'];



	this.setValue = function(valueMask, returnCallback, errorCallback) {
		/*
		Sets the output value with a bitmask (16bit). A 1 in the bitmask means high
		and a 0 in the bitmask means low.
		
		For example: The value 3 or 0b0011 will turn pins 0-1 high and the other pins
		low.
		
		If no groups are used (see :func:`Set Group`), the pins correspond to the
		markings on the Industrial Digital Out 4 Bricklet.
		
		If groups are used, the pins correspond to the element in the group.
		Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
		pins 8-11 and element 4 pins 12-15.
		
		All running monoflop timers will be aborted if this function is called.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_VALUE, [valueMask], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getValue = function(returnCallback, errorCallback) {
		/*
		Returns the bitmask as set by :func:`Set Value`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setMonoflop = function(selectionMask, valueMask, time, returnCallback, errorCallback) {
		/*
		Configures a monoflop of the pins specified by the first parameter
		bitmask.
		
		The second parameter is a bitmask with the desired value of the specified
		pins. A 1 in the bitmask means high and a 0 in the bitmask means low.
		
		The third parameter indicates the time that the pins should hold
		the value.
		
		If this function is called with the parameters (9, 1, 1500) or
		(0b1001, 0b0001, 1500): Pin 0 will get high and pin 3 will get low. In 1.5s
		pin 0 will get low and pin 3 will get high again.
		
		A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
		have a RS485 bus and a Digital Out 4 Bricklet connected to one of the slave
		stacks. You can now call this function every second, with a time parameter
		of two seconds and pin 0 high. Pin 0 will be high all the time. If now
		the RS485 connection is lost, then pin 0 will turn low in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_MONOFLOP, [selectionMask, valueMask, time], 'H H I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMonoflop = function(pin, returnCallback, errorCallback) {
		/*
		Returns (for the given pin) the current value and the time as set by
		:func:`Set Monoflop` as well as the remaining time until the value flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_MONOFLOP, [pin], 'B', 18, 'H I I', returnCallback, errorCallback, false, true);
	};
	this.setGroup = function(group, returnCallback, errorCallback) {
		/*
		Sets a group of Digital Out 4 Bricklets that should work together. You can
		find Bricklets that can be grouped together with :func:`Get Available For Group`.
		
		The group consists of 4 elements. Element 1 in the group will get pins 0-3,
		element 2 pins 4-7, element 3 pins 8-11 and element 4 pins 12-15.
		
		Each element can either be one of the ports ('a' to 'd') or 'n' if it should
		not be used.
		
		For example: If you have two Digital Out 4 Bricklets connected to port A and
		port B respectively, you could call with ``['a', 'b', 'n', 'n']``.
		
		Now the pins on the Digital Out 4 on port A are assigned to 0-3 and the
		pins on the Digital Out 4 on port B are assigned to 4-7. It is now possible
		to call :func:`Set Value` and control two Bricklets at the same time.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_GROUP, [group], 'c4', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getGroup = function(returnCallback, errorCallback) {
		/*
		Returns the group as set by :func:`Set Group`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_GROUP, [], '', 12, 'c4', returnCallback, errorCallback, false, true);
	};
	this.getAvailableForGroup = function(returnCallback, errorCallback) {
		/*
		Returns a bitmask of ports that are available for grouping. For example the
		value 5 or 0b0101 means: Port A and port C are connected to Bricklets that
		can be grouped together.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_AVAILABLE_FOR_GROUP, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setSelectedValues = function(selectionMask, valueMask, returnCallback, errorCallback) {
		/*
		Sets the output value with a bitmask, according to the selection mask.
		The bitmask is 16 bit long, *true* refers to high and *false* refers to
		low.
		
		For example: The values (3, 1) or (0b0011, 0b0001) will turn pin 0 high, pin 1
		low the other pins remain untouched.
		
		If no groups are used (see :func:`Set Group`), the pins correspond to the
		markings on the Industrial Digital Out 4 Bricklet.
		
		If groups are used, the pins correspond to the element in the group.
		Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
		pins 8-11 and element 4 pins 12-15.
		
		Running monoflop timers for the selected pins will be aborted if this function
		is called.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_SET_SELECTED_VALUES, [selectionMask, valueMask], 'H H', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalOut4.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialDigitalOut4;
