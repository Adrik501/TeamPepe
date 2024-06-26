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

BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER = 223;
BrickletIndustrialDigitalIn4.DEVICE_DISPLAY_NAME = 'Industrial Digital In 4 Bricklet';
BrickletIndustrialDigitalIn4.CALLBACK_INTERRUPT = 9;
BrickletIndustrialDigitalIn4.FUNCTION_GET_VALUE = 1;
BrickletIndustrialDigitalIn4.FUNCTION_SET_GROUP = 2;
BrickletIndustrialDigitalIn4.FUNCTION_GET_GROUP = 3;
BrickletIndustrialDigitalIn4.FUNCTION_GET_AVAILABLE_FOR_GROUP = 4;
BrickletIndustrialDigitalIn4.FUNCTION_SET_DEBOUNCE_PERIOD = 5;
BrickletIndustrialDigitalIn4.FUNCTION_GET_DEBOUNCE_PERIOD = 6;
BrickletIndustrialDigitalIn4.FUNCTION_SET_INTERRUPT = 7;
BrickletIndustrialDigitalIn4.FUNCTION_GET_INTERRUPT = 8;
BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT = 10;
BrickletIndustrialDigitalIn4.FUNCTION_SET_EDGE_COUNT_CONFIG = 11;
BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT_CONFIG = 12;
BrickletIndustrialDigitalIn4.FUNCTION_GET_IDENTITY = 255;
BrickletIndustrialDigitalIn4.EDGE_TYPE_RISING = 0;
BrickletIndustrialDigitalIn4.EDGE_TYPE_FALLING = 1;
BrickletIndustrialDigitalIn4.EDGE_TYPE_BOTH = 2;

function BrickletIndustrialDigitalIn4(uid, ipcon) {
	//4 galvanically isolated digital inputs

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIndustrialDigitalIn4.DEVICE_IDENTIFIER, BrickletIndustrialDigitalIn4.DEVICE_DISPLAY_NAME);
	BrickletIndustrialDigitalIn4.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_VALUE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_GROUP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_AVAILABLE_FOR_GROUP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIndustrialDigitalIn4.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIndustrialDigitalIn4.CALLBACK_INTERRUPT] = [12, 'H H'];



	this.getValue = function(returnCallback, errorCallback) {
		/*
		Returns the input value with a bitmask. The bitmask is 16bit long, *true*
		refers to high and *false* refers to low.
		
		For example: The value 3 or 0b0011 means that pins 0-1 are high and the other
		pins are low.
		
		If no groups are used (see :func:`Set Group`), the pins correspond to the
		markings on the IndustrialDigital In 4 Bricklet.
		
		If groups are used, the pins correspond to the element in the group.
		Element 1 in the group will get pins 0-3, element 2 pins 4-7, element 3
		pins 8-11 and element 4 pins 12-15.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_VALUE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setGroup = function(group, returnCallback, errorCallback) {
		/*
		Sets a group of Digital In 4 Bricklets that should work together. You can
		find Bricklets that can be grouped together with :func:`Get Available For Group`.
		
		The group consists of 4 elements. Element 1 in the group will get pins 0-3,
		element 2 pins 4-7, element 3 pins 8-11 and element 4 pins 12-15.
		
		Each element can either be one of the ports ('a' to 'd') or 'n' if it should
		not be used.
		
		For example: If you have two Digital In 4 Bricklets connected to port A and
		port B respectively, you could call with ``['a', 'b', 'n', 'n']``.
		
		Now the pins on the Digital In 4 on port A are assigned to 0-3 and the
		pins on the Digital In 4 on port B are assigned to 4-7. It is now possible
		to call :func:`Get Value` and read out two Bricklets at the same time.
		
		Changing the group configuration resets all edge counter configurations
		and values.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_GROUP, [group], 'c4', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getGroup = function(returnCallback, errorCallback) {
		/*
		Returns the group as set by :func:`Set Group`
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_GROUP, [], '', 12, 'c4', returnCallback, errorCallback, false, true);
	};
	this.getAvailableForGroup = function(returnCallback, errorCallback) {
		/*
		Returns a bitmask of ports that are available for grouping. For example the
		value 5 or 0b0101 means: Port A and port C are connected to Bricklets that
		can be grouped together.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_AVAILABLE_FOR_GROUP, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the debounce period of the :cb:`Interrupt` callback.
		
		For example: If you set this value to 100, you will get the interrupt
		maximal every 100ms. This is necessary if something that bounces is
		connected to the Digital In 4 Bricklet, such as a button.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setInterrupt = function(interruptMask, returnCallback, errorCallback) {
		/*
		Sets the pins on which an interrupt is activated with a bitmask.
		Interrupts are triggered on changes of the voltage level of the pin,
		i.e. changes from high to low and low to high.
		
		For example: An interrupt bitmask of 9 or 0b1001 will enable the interrupt for
		pins 0 and 3.
		
		The interrupts use the grouping as set by :func:`Set Group`.
		
		The interrupt is delivered with the :cb:`Interrupt` callback.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_INTERRUPT, [interruptMask], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getInterrupt = function(returnCallback, errorCallback) {
		/*
		Returns the interrupt bitmask as set by :func:`Set Interrupt`.
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_INTERRUPT, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCount = function(pin, resetCounter, returnCallback, errorCallback) {
		/*
		Returns the current value of the edge counter for the selected pin. You can
		configure the edges that are counted with :func:`Set Edge Count Config`.
		
		If you set the reset counter to *true*, the count is set back to 0
		directly after it is read.
		
		The edge counters use the grouping as set by :func:`Set Group`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT, [pin, resetCounter], 'B ?', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setEdgeCountConfig = function(selectionMask, edgeType, debounce, returnCallback, errorCallback) {
		/*
		Configures the edge counter for the selected pins. A bitmask of 9 or 0b1001 will
		enable the edge counter for pins 0 and 3.
		
		The edge type parameter configures if rising edges, falling edges or
		both are counted if the pin is configured for input. Possible edge types are:
		
		* 0 = rising
		* 1 = falling
		* 2 = both
		
		Configuring an edge counter resets its value to 0.
		
		If you don't know what any of this means, just leave it at default. The
		default configuration is very likely OK for you.
		
		The edge counters use the grouping as set by :func:`Set Group`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_SET_EDGE_COUNT_CONFIG, [selectionMask, edgeType, debounce], 'H B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCountConfig = function(pin, returnCallback, errorCallback) {
		/*
		Returns the edge type and debounce time for the selected pin as set by
		:func:`Set Edge Count Config`.
		
		.. versionadded:: 2.0.1$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_EDGE_COUNT_CONFIG, [pin], 'B', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIndustrialDigitalIn4.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIndustrialDigitalIn4;
