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

BrickletIO16.DEVICE_IDENTIFIER = 28;
BrickletIO16.DEVICE_DISPLAY_NAME = 'IO-16 Bricklet';
BrickletIO16.CALLBACK_INTERRUPT = 9;
BrickletIO16.CALLBACK_MONOFLOP_DONE = 12;
BrickletIO16.FUNCTION_SET_PORT = 1;
BrickletIO16.FUNCTION_GET_PORT = 2;
BrickletIO16.FUNCTION_SET_PORT_CONFIGURATION = 3;
BrickletIO16.FUNCTION_GET_PORT_CONFIGURATION = 4;
BrickletIO16.FUNCTION_SET_DEBOUNCE_PERIOD = 5;
BrickletIO16.FUNCTION_GET_DEBOUNCE_PERIOD = 6;
BrickletIO16.FUNCTION_SET_PORT_INTERRUPT = 7;
BrickletIO16.FUNCTION_GET_PORT_INTERRUPT = 8;
BrickletIO16.FUNCTION_SET_PORT_MONOFLOP = 10;
BrickletIO16.FUNCTION_GET_PORT_MONOFLOP = 11;
BrickletIO16.FUNCTION_SET_SELECTED_VALUES = 13;
BrickletIO16.FUNCTION_GET_EDGE_COUNT = 14;
BrickletIO16.FUNCTION_SET_EDGE_COUNT_CONFIG = 15;
BrickletIO16.FUNCTION_GET_EDGE_COUNT_CONFIG = 16;
BrickletIO16.FUNCTION_GET_IDENTITY = 255;
BrickletIO16.DIRECTION_IN = 'i';
BrickletIO16.DIRECTION_OUT = 'o';
BrickletIO16.EDGE_TYPE_RISING = 0;
BrickletIO16.EDGE_TYPE_FALLING = 1;
BrickletIO16.EDGE_TYPE_BOTH = 2;

function BrickletIO16(uid, ipcon) {
	//16-channel digital input/output

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletIO16.DEVICE_IDENTIFIER, BrickletIO16.DEVICE_DISPLAY_NAME);
	BrickletIO16.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 1];
	this.responseExpected[BrickletIO16.FUNCTION_SET_PORT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_PORT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_SET_PORT_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_PORT_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_SET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_DEBOUNCE_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_SET_PORT_INTERRUPT] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_PORT_INTERRUPT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_SET_PORT_MONOFLOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_PORT_MONOFLOP] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_SET_SELECTED_VALUES] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_EDGE_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_SET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_EDGE_COUNT_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletIO16.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletIO16.CALLBACK_INTERRUPT] = [11, 'c B B'];
	this.callbackFormats[BrickletIO16.CALLBACK_MONOFLOP_DONE] = [11, 'c B B'];



	this.setPort = function(port, valueMask, returnCallback, errorCallback) {
		/*
		Sets the output value (high or low) for a port ("a" or "b") with a bitmask
		(8bit). A 1 in the bitmask means high and a 0 in the bitmask means low.
		
		For example: The value 15 or 0b00001111 will turn the pins 0-3 high and the
		pins 4-7 low for the specified port.
		
		All running monoflop timers of the given port will be aborted if this function
		is called.
		
		.. note::
		 This function does nothing for pins that are configured as input.
		 Pull-up resistors can be switched on with :func:`Set Port Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT, [port, valueMask], 'c B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPort = function(port, returnCallback, errorCallback) {
		/*
		Returns a bitmask of the values that are currently measured on the
		specified port. This function works if the pin is configured to input
		as well as if it is configured to output.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT, [port], 'c', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setPortConfiguration = function(port, selectionMask, direction, value, returnCallback, errorCallback) {
		/*
		Configures the value and direction of a specified port. Possible directions
		are 'i' and 'o' for input and output.
		
		If the direction is configured as output, the value is either high or low
		(set as *true* or *false*).
		
		If the direction is configured as input, the value is either pull-up or
		default (set as *true* or *false*).
		
		For example:
		
		* ('a', 255, 'i', true) or ('a', 0b11111111, 'i', true) will set all pins of port A as input pull-up.
		* ('a', 128, 'i', false) or ('a', 0b10000000, 'i', false) will set pin 7 of port A as input default (floating if nothing is connected).
		* ('b', 3, 'o', false) or ('b', 0b00000011, 'o', false) will set pins 0 and 1 of port B as output low.
		* ('b', 4, 'o', true) or ('b', 0b00000100, 'o', true) will set pin 2 of port B as output high.
		
		Running monoflop timers for the selected pins will be aborted if this
		function is called.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT_CONFIGURATION, [port, selectionMask, direction, value], 'c B c ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPortConfiguration = function(port, returnCallback, errorCallback) {
		/*
		Returns a direction bitmask and a value bitmask for the specified port. A 1 in
		the direction bitmask means input and a 0 in the bitmask means output.
		
		For example: A return value of (15, 51) or (0b00001111, 0b00110011) for
		direction and value means that:
		
		* pins 0 and 1 are configured as input pull-up,
		* pins 2 and 3 are configured as input default,
		* pins 4 and 5 are configured as output high
		* and pins 6 and 7 are configured as output low.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT_CONFIGURATION, [port], 'c', 10, 'B B', returnCallback, errorCallback, false, true);
	};
	this.setDebouncePeriod = function(debounce, returnCallback, errorCallback) {
		/*
		Sets the debounce period of the :cb:`Interrupt` callback.
		
		For example: If you set this value to 100, you will get the interrupt
		maximal every 100ms. This is necessary if something that bounces is
		connected to the IO-16 Bricklet, such as a button.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_DEBOUNCE_PERIOD, [debounce], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDebouncePeriod = function(returnCallback, errorCallback) {
		/*
		Returns the debounce period as set by :func:`Set Debounce Period`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_DEBOUNCE_PERIOD, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setPortInterrupt = function(port, interruptMask, returnCallback, errorCallback) {
		/*
		Sets the pins on which an interrupt is activated with a bitmask.
		Interrupts are triggered on changes of the voltage level of the pin,
		i.e. changes from high to low and low to high.
		
		For example: ('a', 129) or ('a', 0b10000001) will enable the interrupt for
		pins 0 and 7 of port a.
		
		The interrupt is delivered with the :cb:`Interrupt` callback.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT_INTERRUPT, [port, interruptMask], 'c B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPortInterrupt = function(port, returnCallback, errorCallback) {
		/*
		Returns the interrupt bitmask for the specified port as set by
		:func:`Set Port Interrupt`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT_INTERRUPT, [port], 'c', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setPortMonoflop = function(port, selectionMask, valueMask, time, returnCallback, errorCallback) {
		/*
		Configures a monoflop of the pins specified by the second parameter as 8 bit
		long bitmask. The specified pins must be configured for output. Non-output
		pins will be ignored.
		
		The third parameter is a bitmask with the desired value of the specified
		output pins. A 1 in the bitmask means high and a 0 in the bitmask means low.
		
		The forth parameter indicates the time that the pins should hold
		the value.
		
		If this function is called with the parameters ('a', 9, 1, 1500) or
		('a', 0b00001001, 0b00000001, 1500): Pin 0 will get high and pin 3 will get
		low on port 'a'. In 1.5s pin 0 will get low and pin 3 will get high again.
		
		A monoflop can be used as a fail-safe mechanism. For example: Lets assume you
		have a RS485 bus and an IO-16 Bricklet connected to one of the slave
		stacks. You can now call this function every second, with a time parameter
		of two seconds and pin 0 set to high. Pin 0 will be high all the time. If now
		the RS485 connection is lost, then pin 0 will get low in at most two seconds.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_PORT_MONOFLOP, [port, selectionMask, valueMask, time], 'c B B I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPortMonoflop = function(port, pin, returnCallback, errorCallback) {
		/*
		Returns (for the given pin) the current value and the time as set by
		:func:`Set Port Monoflop` as well as the remaining time until the value flips.
		
		If the timer is not running currently, the remaining time will be returned
		as 0.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_PORT_MONOFLOP, [port, pin], 'c B', 17, 'B I I', returnCallback, errorCallback, false, true);
	};
	this.setSelectedValues = function(port, selectionMask, valueMask, returnCallback, errorCallback) {
		/*
		Sets the output value (high or low) for a port ("a" or "b" with a bitmask,
		according to the selection mask. The bitmask is 8 bit long and a 1 in the
		bitmask means high and a 0 in the bitmask means low.
		
		For example: The parameters ('a', 192, 128) or ('a', 0b11000000, 0b10000000)
		will turn pin 7 high and pin 6 low on port A, pins 0-6 will remain untouched.
		
		Running monoflop timers for the selected pins will be aborted if this
		function is called.
		
		.. note::
		 This function does nothing for pins that are configured as input.
		 Pull-up resistors can be switched on with :func:`Set Port Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_SELECTED_VALUES, [port, selectionMask, valueMask], 'c B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCount = function(pin, resetCounter, returnCallback, errorCallback) {
		/*
		Returns the current value of the edge counter for the selected pin on port A.
		You can configure the edges that are counted with :func:`Set Edge Count Config`.
		
		If you set the reset counter to *true*, the count is set back to 0
		directly after it is read.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_EDGE_COUNT, [pin, resetCounter], 'B ?', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setEdgeCountConfig = function(pin, edgeType, debounce, returnCallback, errorCallback) {
		/*
		Configures the edge counter for the selected pin of port A. Pins 0 and 1
		are available for edge counting.
		
		The edge type parameter configures if rising edges, falling edges or
		both are counted if the pin is configured for input. Possible edge types are:
		
		* 0 = rising
		* 1 = falling
		* 2 = both
		
		Configuring an edge counter resets its value to 0.
		
		If you don't know what any of this means, just leave it at default. The
		default configuration is very likely OK for you.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_SET_EDGE_COUNT_CONFIG, [pin, edgeType, debounce], 'B B B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEdgeCountConfig = function(pin, returnCallback, errorCallback) {
		/*
		Returns the edge type and debounce time for the selected pin of port A as set by
		:func:`Set Edge Count Config`.
		
		.. versionadded:: 2.0.3$nbsp;(Plugin)
		*/
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_EDGE_COUNT_CONFIG, [pin], 'B', 10, 'B B', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletIO16.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletIO16;
