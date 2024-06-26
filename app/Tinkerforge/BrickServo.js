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

BrickServo.DEVICE_IDENTIFIER = 14;
BrickServo.DEVICE_DISPLAY_NAME = 'Servo Brick';
BrickServo.CALLBACK_UNDER_VOLTAGE = 26;
BrickServo.CALLBACK_POSITION_REACHED = 27;
BrickServo.CALLBACK_VELOCITY_REACHED = 28;
BrickServo.FUNCTION_ENABLE = 1;
BrickServo.FUNCTION_DISABLE = 2;
BrickServo.FUNCTION_IS_ENABLED = 3;
BrickServo.FUNCTION_SET_POSITION = 4;
BrickServo.FUNCTION_GET_POSITION = 5;
BrickServo.FUNCTION_GET_CURRENT_POSITION = 6;
BrickServo.FUNCTION_SET_VELOCITY = 7;
BrickServo.FUNCTION_GET_VELOCITY = 8;
BrickServo.FUNCTION_GET_CURRENT_VELOCITY = 9;
BrickServo.FUNCTION_SET_ACCELERATION = 10;
BrickServo.FUNCTION_GET_ACCELERATION = 11;
BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE = 12;
BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE = 13;
BrickServo.FUNCTION_SET_PULSE_WIDTH = 14;
BrickServo.FUNCTION_GET_PULSE_WIDTH = 15;
BrickServo.FUNCTION_SET_DEGREE = 16;
BrickServo.FUNCTION_GET_DEGREE = 17;
BrickServo.FUNCTION_SET_PERIOD = 18;
BrickServo.FUNCTION_GET_PERIOD = 19;
BrickServo.FUNCTION_GET_SERVO_CURRENT = 20;
BrickServo.FUNCTION_GET_OVERALL_CURRENT = 21;
BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE = 22;
BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE = 23;
BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE = 24;
BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE = 25;
BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK = 29;
BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK = 30;
BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED = 31;
BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK = 32;
BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK = 33;
BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED = 34;
BrickServo.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG = 231;
BrickServo.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG = 232;
BrickServo.FUNCTION_GET_SEND_TIMEOUT_COUNT = 233;
BrickServo.FUNCTION_SET_SPITFP_BAUDRATE = 234;
BrickServo.FUNCTION_GET_SPITFP_BAUDRATE = 235;
BrickServo.FUNCTION_GET_SPITFP_ERROR_COUNT = 237;
BrickServo.FUNCTION_ENABLE_STATUS_LED = 238;
BrickServo.FUNCTION_DISABLE_STATUS_LED = 239;
BrickServo.FUNCTION_IS_STATUS_LED_ENABLED = 240;
BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME = 241;
BrickServo.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickServo.FUNCTION_RESET = 243;
BrickServo.FUNCTION_WRITE_BRICKLET_PLUGIN = 246;
BrickServo.FUNCTION_READ_BRICKLET_PLUGIN = 247;
BrickServo.FUNCTION_GET_IDENTITY = 255;
BrickServo.COMMUNICATION_METHOD_NONE = 0;
BrickServo.COMMUNICATION_METHOD_USB = 1;
BrickServo.COMMUNICATION_METHOD_SPI_STACK = 2;
BrickServo.COMMUNICATION_METHOD_CHIBI = 3;
BrickServo.COMMUNICATION_METHOD_RS485 = 4;
BrickServo.COMMUNICATION_METHOD_WIFI = 5;
BrickServo.COMMUNICATION_METHOD_ETHERNET = 6;
BrickServo.COMMUNICATION_METHOD_WIFI_V2 = 7;

function BrickServo(uid, ipcon) {
	//Drives up to 7 RC Servos with up to 3A

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickServo.DEVICE_IDENTIFIER, BrickServo.DEVICE_DISPLAY_NAME);
	BrickServo.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 4];
	this.responseExpected[BrickServo.FUNCTION_ENABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_DISABLE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_IS_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_ACCELERATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_ACCELERATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_PULSE_WIDTH] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_DEGREE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_DEGREE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_PERIOD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_PERIOD] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_SERVO_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_OVERALL_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_SEND_TIMEOUT_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_SET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_GET_SPITFP_BAUDRATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_ENABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_DISABLE_STATUS_LED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_IS_STATUS_LED_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_WRITE_BRICKLET_PLUGIN] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickServo.FUNCTION_READ_BRICKLET_PLUGIN] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickServo.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickServo.CALLBACK_UNDER_VOLTAGE] = [10, 'H'];
	this.callbackFormats[BrickServo.CALLBACK_POSITION_REACHED] = [11, 'B h'];
	this.callbackFormats[BrickServo.CALLBACK_VELOCITY_REACHED] = [11, 'B h'];



	this.enable = function(servoNum, returnCallback, errorCallback) {
		/*
		Enables a servo (0 to 6). If a servo is enabled, the configured position,
		velocity, acceleration, etc. are applied immediately.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE, [servoNum], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disable = function(servoNum, returnCallback, errorCallback) {
		/*
		Disables a servo (0 to 6). Disabled servos are not driven at all, i.e. a
		disabled servo will not hold its position if a load is applied.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE, [servoNum], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isEnabled = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns *true* if the specified servo is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_ENABLED, [servoNum], 'B', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setPosition = function(servoNum, position, returnCallback, errorCallback) {
		/*
		Sets the position for the specified servo.
		
		The default range of the position is -9000 to 9000, but it can be specified
		according to your servo with :func:`Set Degree`.
		
		If you want to control a linear servo or RC brushless motor controller or
		similar with the Servo Brick, you can also define lengths or speeds with
		:func:`Set Degree`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_POSITION, [servoNum, position], 'B h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPosition = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the position of the specified servo as set by :func:`Set Position`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_POSITION, [servoNum], 'B', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.getCurrentPosition = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the *current* position of the specified servo. This may not be the
		value of :func:`Set Position` if the servo is currently approaching a
		position goal.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CURRENT_POSITION, [servoNum], 'B', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.setVelocity = function(servoNum, velocity, returnCallback, errorCallback) {
		/*
		Sets the maximum velocity of the specified servo. The velocity
		is accelerated according to the value set by :func:`Set Acceleration`.
		
		The minimum velocity is 0 (no movement) and the maximum velocity is 65535.
		With a value of 65535 the position will be set immediately (no velocity).
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_VELOCITY, [servoNum, velocity], 'B H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getVelocity = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the velocity of the specified servo as set by :func:`Set Velocity`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_VELOCITY, [servoNum], 'B', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getCurrentVelocity = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the specified servo. This may not be the
		value of :func:`Set Velocity` if the servo is currently approaching a
		velocity goal.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CURRENT_VELOCITY, [servoNum], 'B', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setAcceleration = function(servoNum, acceleration, returnCallback, errorCallback) {
		/*
		Sets the acceleration of the specified servo.
		
		The minimum acceleration is 1 and the maximum acceleration is 65535.
		With a value of 65535 the velocity will be set immediately (no acceleration).
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_ACCELERATION, [servoNum, acceleration], 'B H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAcceleration = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the acceleration for the specified servo as set by
		:func:`Set Acceleration`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_ACCELERATION, [servoNum], 'B', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setOutputVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the output voltages with which the servos are driven.
		
		.. note::
		 We recommend that you set this value to the maximum voltage that is
		 specified for your servo, most servos achieve their maximum force only
		 with high voltages.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_OUTPUT_VOLTAGE, [voltage], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getOutputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the output voltage as specified by :func:`Set Output Voltage`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_OUTPUT_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setPulseWidth = function(servoNum, min, max, returnCallback, errorCallback) {
		/*
		Sets the minimum and maximum pulse width of the specified servo.
		
		Usually, servos are controlled with a
		`PWM <https://en.wikipedia.org/wiki/Pulse-width_modulation>`__, whereby the
		length of the pulse controls the position of the servo. Every servo has
		different minimum and maximum pulse widths, these can be specified with
		this function.
		
		If you have a datasheet for your servo that specifies the minimum and
		maximum pulse width, you should set the values accordingly. If your servo
		comes without any datasheet you have to find the values via trial and error.
		
		The minimum must be smaller than the maximum.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_PULSE_WIDTH, [servoNum, min, max], 'B H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPulseWidth = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the minimum and maximum pulse width for the specified servo as set by
		:func:`Set Pulse Width`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PULSE_WIDTH, [servoNum], 'B', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.setDegree = function(servoNum, min, max, returnCallback, errorCallback) {
		/*
		Sets the minimum and maximum degree for the specified servo (by default
		given as °/100).
		
		This only specifies the abstract values between which the minimum and maximum
		pulse width is scaled. For example: If you specify a pulse width of 1000µs
		to 2000µs and a degree range of -90° to 90°, a call of :func:`Set Position`
		with 0 will result in a pulse width of 1500µs
		(-90° = 1000µs, 90° = 2000µs, etc.).
		
		Possible usage:
		
		* The datasheet of your servo specifies a range of 200° with the middle position
		  at 110°. In this case you can set the minimum to -9000 and the maximum to 11000.
		* You measure a range of 220° on your servo and you don't have or need a middle
		  position. In this case you can set the minimum to 0 and the maximum to 22000.
		* You have a linear servo with a drive length of 20cm, In this case you could
		  set the minimum to 0 and the maximum to 20000. Now you can set the Position
		  with :func:`Set Position` with a resolution of cm/100. Also the velocity will
		  have a resolution of cm/100s and the acceleration will have a resolution of
		  cm/100s².
		* You don't care about units and just want the highest possible resolution. In
		  this case you should set the minimum to -32767 and the maximum to 32767.
		* You have a brushless motor with a maximum speed of 10000 rpm and want to
		  control it with a RC brushless motor controller. In this case you can set the
		  minimum to 0 and the maximum to 10000. :func:`Set Position` now controls the rpm.
		
		The minimum must be smaller than the maximum.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_DEGREE, [servoNum, min, max], 'B h h', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getDegree = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the minimum and maximum degree for the specified servo as set by
		:func:`Set Degree`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_DEGREE, [servoNum], 'B', 12, 'h h', returnCallback, errorCallback, false, true);
	};
	this.setPeriod = function(servoNum, period, returnCallback, errorCallback) {
		/*
		Sets the period of the specified servo.
		
		Usually, servos are controlled with a
		`PWM <https://en.wikipedia.org/wiki/Pulse-width_modulation>`__. Different
		servos expect PWMs with different periods. Most servos run well with a
		period of about 20ms.
		
		If your servo comes with a datasheet that specifies a period, you should
		set it accordingly. If you don't have a datasheet and you have no idea
		what the correct period is, the default value will most likely
		work fine.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_PERIOD, [servoNum, period], 'B H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getPeriod = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the period for the specified servo as set by :func:`Set Period`.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PERIOD, [servoNum], 'B', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getServoCurrent = function(servoNum, returnCallback, errorCallback) {
		/*
		Returns the current consumption of the specified servo.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_SERVO_CURRENT, [servoNum], 'B', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getOverallCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current consumption of all servos together.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_OVERALL_CURRENT, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getStackInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the stack input voltage. The stack input voltage is the
		voltage that is supplied via the stack, i.e. it is given by a
		Step-Down or Step-Up Power Supply.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_STACK_INPUT_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getExternalInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the external input voltage. The external input voltage is
		given via the black power input connector on the Servo Brick.
		
		If there is an external input voltage and a stack input voltage, the motors
		will be driven by the external input voltage. If there is only a stack
		voltage present, the motors will be driven by this voltage.
		
		.. warning::
		 This means, if you have a high stack voltage and a low external voltage,
		 the motors will be driven with the low external voltage. If you then remove
		 the external connection, it will immediately be driven by the high
		 stack voltage
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_EXTERNAL_INPUT_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the minimum voltage, below which the :cb:`Under Voltage` callback
		is triggered. The minimum possible value that works with the Servo Brick is 5V.
		You can use this function to detect the discharge of a battery that is used
		to drive the stepper motor. If you have a fixed power supply, you likely do
		not need this functionality.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMinimumVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the minimum voltage as set by :func:`Set Minimum Voltage`
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.enablePositionReachedCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Position Reached` callback.
		
		Default is disabled.
		
		.. versionadded:: 2.0.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE_POSITION_REACHED_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disablePositionReachedCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Position Reached` callback.
		
		.. versionadded:: 2.0.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE_POSITION_REACHED_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isPositionReachedCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if :cb:`Position Reached` callback is enabled, *false* otherwise.
		
		.. versionadded:: 2.0.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_POSITION_REACHED_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.enableVelocityReachedCallback = function(returnCallback, errorCallback) {
		/*
		Enables the :cb:`Velocity Reached` callback.
		
		Default is disabled.
		
		.. versionadded:: 2.0.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE_VELOCITY_REACHED_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableVelocityReachedCallback = function(returnCallback, errorCallback) {
		/*
		Disables the :cb:`Velocity Reached` callback.
		
		Default is disabled.
		
		.. versionadded:: 2.0.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE_VELOCITY_REACHED_CALLBACK, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isVelocityReachedCallbackEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if :cb:`Velocity Reached` callback is enabled, *false* otherwise.
		
		.. versionadded:: 2.0.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_VELOCITY_REACHED_CALLBACK_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setSPITFPBaudrateConfig = function(enableDynamicBaudrate, minimumDynamicBaudrate, returnCallback, errorCallback) {
		/*
		The SPITF protocol can be used with a dynamic baudrate. If the dynamic baudrate is
		enabled, the Brick will try to adapt the baudrate for the communication
		between Bricks and Bricklets according to the amount of data that is transferred.
		
		The baudrate will be increased exponentially if lots of data is sent/received and
		decreased linearly if little data is sent/received.
		
		This lowers the baudrate in applications where little data is transferred (e.g.
		a weather station) and increases the robustness. If there is lots of data to transfer
		(e.g. Thermal Imaging Bricklet) it automatically increases the baudrate as needed.
		
		In cases where some data has to transferred as fast as possible every few seconds
		(e.g. RS485 Bricklet with a high baudrate but small payload) you may want to turn
		the dynamic baudrate off to get the highest possible performance.
		
		The maximum value of the baudrate can be set per port with the function
		:func:`Set SPITFP Baudrate`. If the dynamic baudrate is disabled, the baudrate
		as set by :func:`Set SPITFP Baudrate` will be used statically.
		
		.. versionadded:: 2.3.4$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_SPITFP_BAUDRATE_CONFIG, [enableDynamicBaudrate, minimumDynamicBaudrate], '? I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPBaudrateConfig = function(returnCallback, errorCallback) {
		/*
		Returns the baudrate config, see :func:`Set SPITFP Baudrate Config`.
		
		.. versionadded:: 2.3.4$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_SPITFP_BAUDRATE_CONFIG, [], '', 13, '? I', returnCallback, errorCallback, false, true);
	};
	this.getSendTimeoutCount = function(communicationMethod, returnCallback, errorCallback) {
		/*
		Returns the timeout count for the different communication methods.
		
		The methods 0-2 are available for all Bricks, 3-7 only for Master Bricks.
		
		This function is mostly used for debugging during development, in normal operation
		the counters should nearly always stay at 0.
		
		.. versionadded:: 2.3.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_SEND_TIMEOUT_COUNT, [communicationMethod], 'B', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setSPITFPBaudrate = function(brickletPort, baudrate, returnCallback, errorCallback) {
		/*
		Sets the baudrate for a specific Bricklet port.
		
		If you want to increase the throughput of Bricklets you can increase
		the baudrate. If you get a high error count because of high
		interference (see :func:`Get SPITFP Error Count`) you can decrease the
		baudrate.
		
		If the dynamic baudrate feature is enabled, the baudrate set by this
		function corresponds to the maximum baudrate (see :func:`Set SPITFP Baudrate Config`).
		
		Regulatory testing is done with the default baudrate. If CE compatibility
		or similar is necessary in your applications we recommend to not change
		the baudrate.
		
		.. versionadded:: 2.3.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_SET_SPITFP_BAUDRATE, [brickletPort, baudrate], 'c I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPBaudrate = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the baudrate for a given Bricklet port, see :func:`Set SPITFP Baudrate`.
		
		.. versionadded:: 2.3.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_SPITFP_BAUDRATE, [brickletPort], 'c', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.getSPITFPErrorCount = function(brickletPort, returnCallback, errorCallback) {
		/*
		Returns the error count for the communication between Brick and Bricklet.
		
		The errors are divided into
		
		* ACK checksum errors,
		* message checksum errors,
		* framing errors and
		* overflow errors.
		
		The errors counts are for errors that occur on the Brick side. All
		Bricklets have a similar function that returns the errors on the Bricklet side.
		
		.. versionadded:: 2.3.2$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_SPITFP_ERROR_COUNT, [brickletPort], 'c', 24, 'I I I I', returnCallback, errorCallback, false, true);
	};
	this.enableStatusLED = function(returnCallback, errorCallback) {
		/*
		Enables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_ENABLE_STATUS_LED, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.disableStatusLED = function(returnCallback, errorCallback) {
		/*
		Disables the status LED.
		
		The status LED is the blue LED next to the USB connector. If enabled is is
		on and it flickers if data is transfered. If disabled it is always off.
		
		The default state is enabled.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_DISABLE_STATUS_LED, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.isStatusLEDEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the status LED is enabled, *false* otherwise.
		
		.. versionadded:: 2.3.1$nbsp;(Firmware)
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_IS_STATUS_LED_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.getProtocol1BrickletName = function(port, returnCallback, errorCallback) {
		/*
		Returns the firmware and protocol version and the name of the Bricklet for a
		given port.
		
		This functions sole purpose is to allow automatic flashing of v1.x.y Bricklet
		plugins.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_PROTOCOL1_BRICKLET_NAME, [port], 'c', 52, 'B B3 s40', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has an
		accuracy of ±15%. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Brick. Calling this function
		on a Brick inside of a stack will reset the whole stack.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeBrickletPlugin = function(port, offset, chunk, returnCallback, errorCallback) {
		/*
		Writes 32 bytes of firmware to the bricklet attached at the given port.
		The bytes are written to the position offset * 32.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_WRITE_BRICKLET_PLUGIN, [port, offset, chunk], 'c B B32', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readBrickletPlugin = function(port, offset, returnCallback, errorCallback) {
		/*
		Reads 32 bytes of firmware from the bricklet attached at the given port.
		The bytes are read starting at the position offset * 32.
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_READ_BRICKLET_PLUGIN, [port, offset], 'c B', 40, 'B32', returnCallback, errorCallback, false, true);
	};
	this.getIdentity = function(returnCallback, errorCallback) {
		/*
		Returns the UID, the UID where the Brick is connected to,
		the position, the hardware and firmware version as well as the
		device identifier.
		
		The position is the position in the stack from '0' (bottom) to '8' (top).
		
		The device identifier numbers can be found :ref:`here <device_identifier>`.
		|device_identifier_constant|
		*/
		this.ipcon.sendRequest(this, BrickServo.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickServo;
