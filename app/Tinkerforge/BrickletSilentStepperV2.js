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

BrickletSilentStepperV2.DEVICE_IDENTIFIER = 2166;
BrickletSilentStepperV2.DEVICE_DISPLAY_NAME = 'Silent Stepper Bricklet 2.0';
BrickletSilentStepperV2.CALLBACK_UNDER_VOLTAGE = 41;
BrickletSilentStepperV2.CALLBACK_POSITION_REACHED = 42;
BrickletSilentStepperV2.CALLBACK_ALL_DATA = 53;
BrickletSilentStepperV2.CALLBACK_NEW_STATE = 54;
BrickletSilentStepperV2.CALLBACK_GPIO_STATE = 55;
BrickletSilentStepperV2.FUNCTION_SET_MAX_VELOCITY = 1;
BrickletSilentStepperV2.FUNCTION_GET_MAX_VELOCITY = 2;
BrickletSilentStepperV2.FUNCTION_GET_CURRENT_VELOCITY = 3;
BrickletSilentStepperV2.FUNCTION_SET_SPEED_RAMPING = 4;
BrickletSilentStepperV2.FUNCTION_GET_SPEED_RAMPING = 5;
BrickletSilentStepperV2.FUNCTION_FULL_BRAKE = 6;
BrickletSilentStepperV2.FUNCTION_SET_CURRENT_POSITION = 7;
BrickletSilentStepperV2.FUNCTION_GET_CURRENT_POSITION = 8;
BrickletSilentStepperV2.FUNCTION_SET_TARGET_POSITION = 9;
BrickletSilentStepperV2.FUNCTION_GET_TARGET_POSITION = 10;
BrickletSilentStepperV2.FUNCTION_SET_STEPS = 11;
BrickletSilentStepperV2.FUNCTION_GET_STEPS = 12;
BrickletSilentStepperV2.FUNCTION_GET_REMAINING_STEPS = 13;
BrickletSilentStepperV2.FUNCTION_SET_STEP_CONFIGURATION = 14;
BrickletSilentStepperV2.FUNCTION_GET_STEP_CONFIGURATION = 15;
BrickletSilentStepperV2.FUNCTION_DRIVE_FORWARD = 16;
BrickletSilentStepperV2.FUNCTION_DRIVE_BACKWARD = 17;
BrickletSilentStepperV2.FUNCTION_STOP = 18;
BrickletSilentStepperV2.FUNCTION_GET_INPUT_VOLTAGE = 19;
BrickletSilentStepperV2.FUNCTION_SET_MOTOR_CURRENT = 22;
BrickletSilentStepperV2.FUNCTION_GET_MOTOR_CURRENT = 23;
BrickletSilentStepperV2.FUNCTION_SET_ENABLED = 24;
BrickletSilentStepperV2.FUNCTION_GET_ENABLED = 25;
BrickletSilentStepperV2.FUNCTION_SET_BASIC_CONFIGURATION = 26;
BrickletSilentStepperV2.FUNCTION_GET_BASIC_CONFIGURATION = 27;
BrickletSilentStepperV2.FUNCTION_SET_SPREADCYCLE_CONFIGURATION = 28;
BrickletSilentStepperV2.FUNCTION_GET_SPREADCYCLE_CONFIGURATION = 29;
BrickletSilentStepperV2.FUNCTION_SET_STEALTH_CONFIGURATION = 30;
BrickletSilentStepperV2.FUNCTION_GET_STEALTH_CONFIGURATION = 31;
BrickletSilentStepperV2.FUNCTION_SET_COOLSTEP_CONFIGURATION = 32;
BrickletSilentStepperV2.FUNCTION_GET_COOLSTEP_CONFIGURATION = 33;
BrickletSilentStepperV2.FUNCTION_SET_MISC_CONFIGURATION = 34;
BrickletSilentStepperV2.FUNCTION_GET_MISC_CONFIGURATION = 35;
BrickletSilentStepperV2.FUNCTION_SET_ERROR_LED_CONFIG = 36;
BrickletSilentStepperV2.FUNCTION_GET_ERROR_LED_CONFIG = 37;
BrickletSilentStepperV2.FUNCTION_GET_DRIVER_STATUS = 38;
BrickletSilentStepperV2.FUNCTION_SET_MINIMUM_VOLTAGE = 39;
BrickletSilentStepperV2.FUNCTION_GET_MINIMUM_VOLTAGE = 40;
BrickletSilentStepperV2.FUNCTION_SET_TIME_BASE = 43;
BrickletSilentStepperV2.FUNCTION_GET_TIME_BASE = 44;
BrickletSilentStepperV2.FUNCTION_GET_ALL_DATA = 45;
BrickletSilentStepperV2.FUNCTION_SET_ALL_CALLBACK_CONFIGURATION = 46;
BrickletSilentStepperV2.FUNCTION_GET_ALL_DATA_CALLBACK_CONFIGURATON = 47;
BrickletSilentStepperV2.FUNCTION_SET_GPIO_CONFIGURATION = 48;
BrickletSilentStepperV2.FUNCTION_GET_GPIO_CONFIGURATION = 49;
BrickletSilentStepperV2.FUNCTION_SET_GPIO_ACTION = 50;
BrickletSilentStepperV2.FUNCTION_GET_GPIO_ACTION = 51;
BrickletSilentStepperV2.FUNCTION_GET_GPIO_STATE = 52;
BrickletSilentStepperV2.FUNCTION_GET_SPITFP_ERROR_COUNT = 234;
BrickletSilentStepperV2.FUNCTION_SET_BOOTLOADER_MODE = 235;
BrickletSilentStepperV2.FUNCTION_GET_BOOTLOADER_MODE = 236;
BrickletSilentStepperV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER = 237;
BrickletSilentStepperV2.FUNCTION_WRITE_FIRMWARE = 238;
BrickletSilentStepperV2.FUNCTION_SET_STATUS_LED_CONFIG = 239;
BrickletSilentStepperV2.FUNCTION_GET_STATUS_LED_CONFIG = 240;
BrickletSilentStepperV2.FUNCTION_GET_CHIP_TEMPERATURE = 242;
BrickletSilentStepperV2.FUNCTION_RESET = 243;
BrickletSilentStepperV2.FUNCTION_WRITE_UID = 248;
BrickletSilentStepperV2.FUNCTION_READ_UID = 249;
BrickletSilentStepperV2.FUNCTION_GET_IDENTITY = 255;
BrickletSilentStepperV2.STEP_RESOLUTION_1 = 8;
BrickletSilentStepperV2.STEP_RESOLUTION_2 = 7;
BrickletSilentStepperV2.STEP_RESOLUTION_4 = 6;
BrickletSilentStepperV2.STEP_RESOLUTION_8 = 5;
BrickletSilentStepperV2.STEP_RESOLUTION_16 = 4;
BrickletSilentStepperV2.STEP_RESOLUTION_32 = 3;
BrickletSilentStepperV2.STEP_RESOLUTION_64 = 2;
BrickletSilentStepperV2.STEP_RESOLUTION_128 = 1;
BrickletSilentStepperV2.STEP_RESOLUTION_256 = 0;
BrickletSilentStepperV2.CHOPPER_MODE_SPREAD_CYCLE = 0;
BrickletSilentStepperV2.CHOPPER_MODE_FAST_DECAY = 1;
BrickletSilentStepperV2.FREEWHEEL_MODE_NORMAL = 0;
BrickletSilentStepperV2.FREEWHEEL_MODE_FREEWHEELING = 1;
BrickletSilentStepperV2.FREEWHEEL_MODE_COIL_SHORT_LS = 2;
BrickletSilentStepperV2.FREEWHEEL_MODE_COIL_SHORT_HS = 3;
BrickletSilentStepperV2.CURRENT_UP_STEP_INCREMENT_1 = 0;
BrickletSilentStepperV2.CURRENT_UP_STEP_INCREMENT_2 = 1;
BrickletSilentStepperV2.CURRENT_UP_STEP_INCREMENT_4 = 2;
BrickletSilentStepperV2.CURRENT_UP_STEP_INCREMENT_8 = 3;
BrickletSilentStepperV2.CURRENT_DOWN_STEP_DECREMENT_1 = 0;
BrickletSilentStepperV2.CURRENT_DOWN_STEP_DECREMENT_2 = 1;
BrickletSilentStepperV2.CURRENT_DOWN_STEP_DECREMENT_8 = 2;
BrickletSilentStepperV2.CURRENT_DOWN_STEP_DECREMENT_32 = 3;
BrickletSilentStepperV2.MINIMUM_CURRENT_HALF = 0;
BrickletSilentStepperV2.MINIMUM_CURRENT_QUARTER = 1;
BrickletSilentStepperV2.STALLGUARD_MODE_STANDARD = 0;
BrickletSilentStepperV2.STALLGUARD_MODE_FILTERED = 1;
BrickletSilentStepperV2.OPEN_LOAD_NONE = 0;
BrickletSilentStepperV2.OPEN_LOAD_PHASE_A = 1;
BrickletSilentStepperV2.OPEN_LOAD_PHASE_B = 2;
BrickletSilentStepperV2.OPEN_LOAD_PHASE_AB = 3;
BrickletSilentStepperV2.SHORT_TO_GROUND_NONE = 0;
BrickletSilentStepperV2.SHORT_TO_GROUND_PHASE_A = 1;
BrickletSilentStepperV2.SHORT_TO_GROUND_PHASE_B = 2;
BrickletSilentStepperV2.SHORT_TO_GROUND_PHASE_AB = 3;
BrickletSilentStepperV2.OVER_TEMPERATURE_NONE = 0;
BrickletSilentStepperV2.OVER_TEMPERATURE_WARNING = 1;
BrickletSilentStepperV2.OVER_TEMPERATURE_LIMIT = 2;
BrickletSilentStepperV2.STATE_STOP = 1;
BrickletSilentStepperV2.STATE_ACCELERATION = 2;
BrickletSilentStepperV2.STATE_RUN = 3;
BrickletSilentStepperV2.STATE_DEACCELERATION = 4;
BrickletSilentStepperV2.STATE_DIRECTION_CHANGE_TO_FORWARD = 5;
BrickletSilentStepperV2.STATE_DIRECTION_CHANGE_TO_BACKWARD = 6;
BrickletSilentStepperV2.GPIO_ACTION_NONE = 0;
BrickletSilentStepperV2.GPIO_ACTION_NORMAL_STOP_RISING_EDGE = 1;
BrickletSilentStepperV2.GPIO_ACTION_NORMAL_STOP_FALLING_EDGE = 2;
BrickletSilentStepperV2.GPIO_ACTION_FULL_BRAKE_RISING_EDGE = 4;
BrickletSilentStepperV2.GPIO_ACTION_FULL_BRAKE_FALLING_EDGE = 8;
BrickletSilentStepperV2.GPIO_ACTION_CALLBACK_RISING_EDGE = 16;
BrickletSilentStepperV2.GPIO_ACTION_CALLBACK_FALLING_EDGE = 32;
BrickletSilentStepperV2.ERROR_LED_CONFIG_OFF = 0;
BrickletSilentStepperV2.ERROR_LED_CONFIG_ON = 1;
BrickletSilentStepperV2.ERROR_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletSilentStepperV2.ERROR_LED_CONFIG_SHOW_ERROR = 3;
BrickletSilentStepperV2.BOOTLOADER_MODE_BOOTLOADER = 0;
BrickletSilentStepperV2.BOOTLOADER_MODE_FIRMWARE = 1;
BrickletSilentStepperV2.BOOTLOADER_MODE_BOOTLOADER_WAIT_FOR_REBOOT = 2;
BrickletSilentStepperV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_REBOOT = 3;
BrickletSilentStepperV2.BOOTLOADER_MODE_FIRMWARE_WAIT_FOR_ERASE_AND_REBOOT = 4;
BrickletSilentStepperV2.BOOTLOADER_STATUS_OK = 0;
BrickletSilentStepperV2.BOOTLOADER_STATUS_INVALID_MODE = 1;
BrickletSilentStepperV2.BOOTLOADER_STATUS_NO_CHANGE = 2;
BrickletSilentStepperV2.BOOTLOADER_STATUS_ENTRY_FUNCTION_NOT_PRESENT = 3;
BrickletSilentStepperV2.BOOTLOADER_STATUS_DEVICE_IDENTIFIER_INCORRECT = 4;
BrickletSilentStepperV2.BOOTLOADER_STATUS_CRC_MISMATCH = 5;
BrickletSilentStepperV2.STATUS_LED_CONFIG_OFF = 0;
BrickletSilentStepperV2.STATUS_LED_CONFIG_ON = 1;
BrickletSilentStepperV2.STATUS_LED_CONFIG_SHOW_HEARTBEAT = 2;
BrickletSilentStepperV2.STATUS_LED_CONFIG_SHOW_STATUS = 3;

function BrickletSilentStepperV2(uid, ipcon) {
	//Silently drives one bipolar stepper motor with up to 46V and 1.6A per phase

	/*
	Creates an object with the unique device ID *uid* and adds it to
	the IP Connection *ipcon*.
	*/
	Device.call(this, this, uid, ipcon, BrickletSilentStepperV2.DEVICE_IDENTIFIER, BrickletSilentStepperV2.DEVICE_DISPLAY_NAME);
	BrickletSilentStepperV2.prototype = Object.create(Device);
	this.APIVersion = [2, 0, 0];
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_MAX_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_CURRENT_VELOCITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_SPEED_RAMPING] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_FULL_BRAKE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_CURRENT_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_TARGET_POSITION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_STEPS] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_REMAINING_STEPS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_STEP_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_STEP_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_DRIVE_FORWARD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_DRIVE_BACKWARD] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_STOP] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_INPUT_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_MOTOR_CURRENT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_ENABLED] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_ENABLED] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_BASIC_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_BASIC_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_SPREADCYCLE_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_SPREADCYCLE_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_STEALTH_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_STEALTH_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_COOLSTEP_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_COOLSTEP_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_MISC_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_MISC_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_ERROR_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_DRIVER_STATUS] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_MINIMUM_VOLTAGE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_TIME_BASE] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_TIME_BASE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_ALL_DATA] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_ALL_CALLBACK_CONFIGURATION] = Device.RESPONSE_EXPECTED_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_ALL_DATA_CALLBACK_CONFIGURATON] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_GPIO_CONFIGURATION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_GPIO_CONFIGURATION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_GPIO_ACTION] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_GPIO_ACTION] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_GPIO_STATE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_SPITFP_ERROR_COUNT] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_BOOTLOADER_MODE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_WRITE_FIRMWARE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_SET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_STATUS_LED_CONFIG] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_CHIP_TEMPERATURE] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_RESET] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_WRITE_UID] = Device.RESPONSE_EXPECTED_FALSE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_READ_UID] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.responseExpected[BrickletSilentStepperV2.FUNCTION_GET_IDENTITY] = Device.RESPONSE_EXPECTED_ALWAYS_TRUE;
	this.callbackFormats[BrickletSilentStepperV2.CALLBACK_UNDER_VOLTAGE] = [10, 'H'];
	this.callbackFormats[BrickletSilentStepperV2.CALLBACK_POSITION_REACHED] = [12, 'i'];
	this.callbackFormats[BrickletSilentStepperV2.CALLBACK_ALL_DATA] = [22, 'H i i H H'];
	this.callbackFormats[BrickletSilentStepperV2.CALLBACK_NEW_STATE] = [10, 'B B'];
	this.callbackFormats[BrickletSilentStepperV2.CALLBACK_GPIO_STATE] = [9, '?2'];



	this.setMaxVelocity = function(velocity, returnCallback, errorCallback) {
		/*
		Sets the maximum velocity of the stepper motor.
		This function does *not* start the motor, it merely sets the maximum
		velocity the stepper motor is accelerated to. To get the motor running use
		either :func:`Set Target Position`, :func:`Set Steps`, :func:`Drive Forward` or
		:func:`Drive Backward`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_MAX_VELOCITY, [velocity], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMaxVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the velocity as set by :func:`Set Max Velocity`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_MAX_VELOCITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.getCurrentVelocity = function(returnCallback, errorCallback) {
		/*
		Returns the *current* velocity of the stepper motor.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_CURRENT_VELOCITY, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setSpeedRamping = function(acceleration, deacceleration, returnCallback, errorCallback) {
		/*
		Sets the acceleration and deacceleration of the stepper motor.
		An acceleration of 1000 means, that
		every second the velocity is increased by 1000 *steps/s*.
		
		For example: If the current velocity is 0 and you want to accelerate to a
		velocity of 8000 *steps/s* in 10 seconds, you should set an acceleration
		of 800 *steps/s²*.
		
		An acceleration/deacceleration of 0 means instantaneous
		acceleration/deacceleration (not recommended)
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_SPEED_RAMPING, [acceleration, deacceleration], 'H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSpeedRamping = function(returnCallback, errorCallback) {
		/*
		Returns the acceleration and deacceleration as set by
		:func:`Set Speed Ramping`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_SPEED_RAMPING, [], '', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.fullBrake = function(returnCallback, errorCallback) {
		/*
		Executes an active full brake.
		
		.. warning::
		 This function is for emergency purposes,
		 where an immediate brake is necessary. Depending on the current velocity and
		 the strength of the motor, a full brake can be quite violent.
		
		Call :func:`Stop` if you just want to stop the motor.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_FULL_BRAKE, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.setCurrentPosition = function(position, returnCallback, errorCallback) {
		/*
		Sets the current steps of the internal step counter. This can be used to
		set the current position to 0 when some kind of starting position
		is reached (e.g. when a CNC machine reaches a corner).
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_CURRENT_POSITION, [position], 'i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCurrentPosition = function(returnCallback, errorCallback) {
		/*
		Returns the current position of the stepper motor in steps. On startup
		the position is 0. The steps are counted with all possible driving
		functions (:func:`Set Target Position`, :func:`Set Steps`, :func:`Drive Forward` or
		:func:`Drive Backward`). It also is possible to reset the steps to 0 or
		set them to any other desired value with :func:`Set Current Position`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_CURRENT_POSITION, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setTargetPosition = function(position, returnCallback, errorCallback) {
		/*
		Sets the target position of the stepper motor in steps. For example,
		if the current position of the motor is 500 and :func:`Set Target Position` is
		called with 1000, the stepper motor will drive 500 steps forward. It will
		use the velocity, acceleration and deacceleration as set by
		:func:`Set Max Velocity` and :func:`Set Speed Ramping`.
		
		A call of :func:`Set Target Position` with the parameter *x* is equivalent to
		a call of :func:`Set Steps` with the parameter
		(*x* - :func:`Get Current Position`).
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_TARGET_POSITION, [position], 'i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTargetPosition = function(returnCallback, errorCallback) {
		/*
		Returns the last target position as set by :func:`Set Target Position`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_TARGET_POSITION, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setSteps = function(steps, returnCallback, errorCallback) {
		/*
		Sets the number of steps the stepper motor should run. Positive values
		will drive the motor forward and negative values backward.
		The velocity, acceleration and deacceleration as set by
		:func:`Set Max Velocity` and :func:`Set Speed Ramping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_STEPS, [steps], 'i', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSteps = function(returnCallback, errorCallback) {
		/*
		Returns the last steps as set by :func:`Set Steps`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_STEPS, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.getRemainingSteps = function(returnCallback, errorCallback) {
		/*
		Returns the remaining steps of the last call of :func:`Set Steps`.
		For example, if :func:`Set Steps` is called with 2000 and
		:func:`Get Remaining Steps` is called after the motor has run for 500 steps,
		it will return 1500.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_REMAINING_STEPS, [], '', 12, 'i', returnCallback, errorCallback, false, true);
	};
	this.setStepConfiguration = function(stepResolution, interpolation, returnCallback, errorCallback) {
		/*
		Sets the step resolution from full-step up to 1/256-step.
		
		If interpolation is turned on, the Silent Stepper Bricklet 2.0 will always interpolate
		your step inputs as 1/256-step. If you use full-step mode with interpolation, each
		step will generate 256 1/256 steps.
		
		For maximum torque use full-step without interpolation. For maximum resolution use
		1/256-step. Turn interpolation on to make the Stepper driving less noisy.
		
		If you often change the speed with high acceleration you should turn the
		interpolation off.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_STEP_CONFIGURATION, [stepResolution, interpolation], 'B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStepConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the step mode as set by :func:`Set Step Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_STEP_CONFIGURATION, [], '', 10, 'B ?', returnCallback, errorCallback, false, true);
	};
	this.driveForward = function(returnCallback, errorCallback) {
		/*
		Drives the stepper motor forward until :func:`Drive Backward` or
		:func:`Stop` is called. The velocity, acceleration and deacceleration as
		set by :func:`Set Max Velocity` and :func:`Set Speed Ramping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_DRIVE_FORWARD, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.driveBackward = function(returnCallback, errorCallback) {
		/*
		Drives the stepper motor backward until :func:`Drive Forward` or
		:func:`Stop` is triggered. The velocity, acceleration and deacceleration as
		set by :func:`Set Max Velocity` and :func:`Set Speed Ramping` will be used.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_DRIVE_BACKWARD, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.stop = function(returnCallback, errorCallback) {
		/*
		Stops the stepper motor with the deacceleration as set by
		:func:`Set Speed Ramping`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_STOP, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getInputVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the external input voltage. The external input voltage is
		given via the black power input connector on the Silent Stepper Bricklet 2.0.
		
		If there is an external input voltage and a stack input voltage, the motor
		will be driven by the external input voltage. If there is only a stack
		voltage present, the motor will be driven by this voltage.
		
		.. warning::
		 This means, if you have a high stack voltage and a low external voltage,
		 the motor will be driven with the low external voltage. If you then remove
		 the external connection, it will immediately be driven by the high
		 stack voltage
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_INPUT_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setMotorCurrent = function(current, returnCallback, errorCallback) {
		/*
		Sets the current with which the motor will be driven.
		
		.. warning::
		 Do not set this value above the specifications of your stepper motor.
		 Otherwise it may damage your motor.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_MOTOR_CURRENT, [current], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMotorCurrent = function(returnCallback, errorCallback) {
		/*
		Returns the current as set by :func:`Set Motor Current`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_MOTOR_CURRENT, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setEnabled = function(enabled, returnCallback, errorCallback) {
		/*
		Enables/Disables the driver chip. The driver parameters can be configured (maximum velocity,
		acceleration, etc) before it is enabled.
		
		.. warning::
		 Disabling the driver chip while the motor is still turning can damage the
		 driver chip. The motor should be stopped calling :func:`Stop` function
		 before disabling the motor power. The :func:`Stop` function will **not**
		 wait until the motor is actually stopped. You have to explicitly wait for the
		 appropriate time after calling the :func:`Stop` function before calling
		 the :func:`Set Enabled` with false function.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_ENABLED, [enabled], '?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getEnabled = function(returnCallback, errorCallback) {
		/*
		Returns *true* if the stepper driver is enabled, *false* otherwise.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_ENABLED, [], '', 9, '?', returnCallback, errorCallback, false, true);
	};
	this.setBasicConfiguration = function(standstillCurrent, motorRunCurrent, standstillDelayTime, powerDownTime, stealthThreshold, coolstepThreshold, classicThreshold, highVelocityChopperMode, returnCallback, errorCallback) {
		/*
		Sets the basic configuration parameters for the different modes (Stealth, Coolstep, Classic).
		
		* Standstill Current: This value can be used to lower the current during stand still. This might
		  be reasonable to reduce the heating of the motor and the Bricklet 2.0. When the motor is in standstill
		  the configured motor phase current will be driven until the configured
		  Power Down Time is elapsed. After that the phase current will be reduced to the standstill
		  current. The elapsed time for this reduction can be configured with the Standstill Delay Time.
		  The maximum allowed value is the configured maximum motor current
		  (see :func:`Set Motor Current`).
		
		* Motor Run Current: The value sets the motor current when the motor is running.
		  Use a value of at least one half of the global maximum motor current for a good
		  microstep performance. The maximum allowed value is the current
		  motor current. The API maps the entered value to 1/32 ... 32/32 of the maximum
		  motor current. This value should be used to change the motor current during motor movement,
		  whereas the global maximum motor current should not be changed while the motor is moving
		  (see :func:`Set Motor Current`).
		
		* Standstill Delay Time: Controls the duration for motor power down after a motion
		  as soon as standstill is detected and the Power Down Time is expired. A high Standstill Delay
		  Time results in a smooth transition that avoids motor jerk during power down.
		
		* Power Down Time: Sets the delay time after a stand still.
		
		* Stealth Threshold: Sets the upper threshold for Stealth mode.
		  If the velocity of the motor goes above this value, Stealth mode is turned
		  off. Otherwise it is turned on. In Stealth mode the torque declines with high speed.
		
		* Coolstep Threshold: Sets the lower threshold for Coolstep mode.
		  The Coolstep Threshold needs to be above the Stealth Threshold.
		
		* Classic Threshold: Sets the lower threshold for classic mode.
		  In classic mode the stepper becomes more noisy, but the torque is maximized.
		
		* High Velocity Chopper Mode: If High Velocity Chopper Mode is enabled, the stepper control
		  is optimized to run the stepper motors at high velocities.
		
		If you want to use all three thresholds make sure that
		Stealth Threshold < Coolstep Threshold < Classic Threshold.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_BASIC_CONFIGURATION, [standstillCurrent, motorRunCurrent, standstillDelayTime, powerDownTime, stealthThreshold, coolstepThreshold, classicThreshold, highVelocityChopperMode], 'H H H H H H H ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getBasicConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Basic Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_BASIC_CONFIGURATION, [], '', 23, 'H H H H H H H ?', returnCallback, errorCallback, false, true);
	};
	this.setSpreadcycleConfiguration = function(slowDecayDuration, enableRandomSlowDecay, fastDecayDuration, hysteresisStartValue, hysteresisEndValue, sineWaveOffset, chopperMode, comparatorBlankTime, fastDecayWithoutComparator, returnCallback, errorCallback) {
		/*
		Note: If you don't know what any of this means you can very likely keep all of
		the values as default!
		
		Sets the Spreadcycle configuration parameters. Spreadcycle is a chopper algorithm which actively
		controls the motor current flow. More information can be found in the TMC2130 datasheet on page
		47 (7 spreadCycle and Classic Chopper).
		
		* Slow Decay Duration: Controls duration of off time setting of slow decay phase.
		  0 = driver disabled, all bridges off. Use 1 only with Comparator Blank time >= 2.
		
		* Enable Random Slow Decay: Set to false to fix chopper off time as set by Slow Decay Duration.
		  If you set it to true, Decay Duration is randomly modulated.
		
		* Fast Decay Duration: Sets the fast decay duration. This parameters is
		  only used if the Chopper Mode is set to Fast Decay.
		
		* Hysteresis Start Value: Sets the hysteresis start value. This parameter is
		  only used if the Chopper Mode is set to Spread Cycle.
		
		* Hysteresis End Value: Sets the hysteresis end value. This parameter is
		  only used if the Chopper Mode is set to Spread Cycle.
		
		* Sine Wave Offset: Sets the sine wave offset. This parameters is
		  only used if the Chopper Mode is set to Fast Decay. 1/512 of the value becomes added to the absolute
		  value of the sine wave.
		
		* Chopper Mode: 0 = Spread Cycle, 1 = Fast Decay.
		
		* Comparator Blank Time: Sets the blank time of the comparator. Available values are
		
		  * 0 = 16 clocks,
		  * 1 = 24 clocks,
		  * 2 = 36 clocks and
		  * 3 = 54 clocks.
		
		  A value of 1 or 2 is recommended for most applications.
		
		* Fast Decay Without Comparator: If set to true the current comparator usage for termination of the
		  fast decay cycle is disabled.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_SPREADCYCLE_CONFIGURATION, [slowDecayDuration, enableRandomSlowDecay, fastDecayDuration, hysteresisStartValue, hysteresisEndValue, sineWaveOffset, chopperMode, comparatorBlankTime, fastDecayWithoutComparator], 'B ? B B b b B B ?', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getSpreadcycleConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Basic Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_SPREADCYCLE_CONFIGURATION, [], '', 17, 'B ? B B b b B B ?', returnCallback, errorCallback, false, true);
	};
	this.setStealthConfiguration = function(enableStealth, amplitude, gradient, enableAutoscale, forceSymmetric, freewheelMode, returnCallback, errorCallback) {
		/*
		Note: If you don't know what any of this means you can very likely keep all of
		the values as default!
		
		Sets the configuration relevant for Stealth mode.
		
		* Enable Stealth: If set to true the stealth mode is enabled, if set to false the
		  stealth mode is disabled, even if the speed is below the threshold set in :func:`Set Basic Configuration`.
		
		* Amplitude: If autoscale is disabled, the PWM amplitude is scaled by this value. If autoscale is enabled,
		  this value defines the maximum PWM amplitude change per half wave.
		
		* Gradient: If autoscale is disabled, the PWM gradient is scaled by this value. If autoscale is enabled,
		  this value defines the maximum PWM gradient. With autoscale a value above 64 is recommended,
		  otherwise the regulation might not be able to measure the current.
		
		* Enable Autoscale: If set to true, automatic current control is used. Otherwise the user defined
		  amplitude and gradient are used.
		
		* Force Symmetric: If true, A symmetric PWM cycle is enforced. Otherwise the PWM value may change within each
		  PWM cycle.
		
		* Freewheel Mode: The freewheel mode defines the behavior in stand still if the Standstill Current
		  (see :func:`Set Basic Configuration`) is set to 0.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_STEALTH_CONFIGURATION, [enableStealth, amplitude, gradient, enableAutoscale, forceSymmetric, freewheelMode], '? B B ? ? B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStealthConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Stealth Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_STEALTH_CONFIGURATION, [], '', 14, '? B B ? ? B', returnCallback, errorCallback, false, true);
	};
	this.setCoolstepConfiguration = function(minimumStallguardValue, maximumStallguardValue, currentUpStepWidth, currentDownStepWidth, minimumCurrent, stallguardThresholdValue, stallguardMode, returnCallback, errorCallback) {
		/*
		Note: If you don't know what any of this means you can very likely keep all of
		the values as default!
		
		Sets the configuration relevant for Coolstep.
		
		* Minimum Stallguard Value: If the Stallguard result falls below this value*32, the motor current
		  is increased to reduce motor load angle. A value of 0 turns Coolstep off.
		
		* Maximum Stallguard Value: If the Stallguard result goes above
		  (Min Stallguard Value + Max Stallguard Value + 1) * 32, the motor current is decreased to save
		  energy.
		
		* Current Up Step Width: Sets the up step increment per Stallguard value. The value range is 0-3,
		  corresponding to the increments 1, 2, 4 and 8.
		
		* Current Down Step Width: Sets the down step decrement per Stallguard value. The value range is 0-3,
		  corresponding to the decrements 1, 2, 8 and 16.
		
		* Minimum Current: Sets the minimum current for Coolstep current control. You can choose between
		  half and quarter of the run current.
		
		* Stallguard Threshold Value: Sets the level for stall output (see :func:`Get Driver Status`).
		  A lower value gives a higher sensitivity. You have to find a suitable value for your
		  motor by trial and error, 0 works for most motors.
		
		* Stallguard Mode: Set to 0 for standard resolution or 1 for filtered mode. In filtered mode the Stallguard
		  signal will be updated every four full-steps.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_COOLSTEP_CONFIGURATION, [minimumStallguardValue, maximumStallguardValue, currentUpStepWidth, currentDownStepWidth, minimumCurrent, stallguardThresholdValue, stallguardMode], 'B B B B B b B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getCoolstepConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Coolstep Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_COOLSTEP_CONFIGURATION, [], '', 15, 'B B B B B b B', returnCallback, errorCallback, false, true);
	};
	this.setMiscConfiguration = function(disableShortToGroundProtection, synchronizePhaseFrequency, returnCallback, errorCallback) {
		/*
		Note: If you don't know what any of this means you can very likely keep all of
		the values as default!
		
		Sets miscellaneous configuration parameters.
		
		* Disable Short To Ground Protection: Set to false to enable short to ground protection, otherwise
		  it is disabled.
		
		* Synchronize Phase Frequency: With this parameter you can synchronize the chopper for both phases
		  of a two phase motor to avoid the occurrence of a beat. The value range is 0-15. If set to 0,
		  the synchronization is turned off. Otherwise the synchronization is done through the formula
		  f_sync = f_clk/(value*64). In Classic Mode the synchronization is automatically switched off.
		  f_clk is 12.8MHz.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_MISC_CONFIGURATION, [disableShortToGroundProtection, synchronizePhaseFrequency], '? B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMiscConfiguration = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Misc Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_MISC_CONFIGURATION, [], '', 10, '? B', returnCallback, errorCallback, false, true);
	};
	this.setErrorLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Configures the error LED to be either turned off, turned on, blink in
		heartbeat mode or show an error.
		
		If the LED is configured to show errors it has three different states:
		
		* Off: No error present.
		* 250ms interval blink: Overtemperature warning.
		* 1s interval blink: Input voltage too small.
		* full red: motor disabled because of short to ground in phase a or b or because of overtemperature.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_ERROR_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getErrorLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the LED configuration as set by :func:`Set Error LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_ERROR_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getDriverStatus = function(returnCallback, errorCallback) {
		/*
		Returns the current driver status.
		
		* Open Load: Indicates if an open load is present on phase A, B or both. This could mean that there is a problem
		  with the wiring of the motor. False detection can occur in fast motion as well as during stand still.
		
		* Short To Ground: Indicates if a short to ground is present on phase A, B or both. If this is detected the driver
		  automatically becomes disabled and stays disabled until it is enabled again manually.
		
		* Over Temperature: The over temperature indicator switches to "Warning" if the driver IC warms up. The warning flag
		  is expected during long duration stepper uses. If the temperature limit is reached the indicator switches
		  to "Limit". In this case the driver becomes disabled until it cools down again.
		
		* Motor Stalled: Is true if a motor stall was detected.
		
		* Actual Motor Current: Indicates the actual current control scaling as used in Coolstep mode.
		  It represents a multiplier of 1/32 to 32/32 of the
		  ``Motor Run Current`` as set by :func:`Set Basic Configuration`. Example: If a ``Motor Run Current``
		  of 1000mA was set and the returned value is 15, the ``Actual Motor Current`` is 16/32*1000mA = 500mA.
		
		* Stallguard Result: Indicates the load of the motor. A lower value signals a higher load. Per trial and error
		  you can find out which value corresponds to a suitable torque for the velocity used in your application.
		  After that you can use this threshold value to find out if a motor stall becomes probable and react on it (e.g.
		  decrease velocity).
		  During stand still this value can not be used for stall detection, it shows the chopper on-time for motor coil A.
		
		* Stealth Voltage Amplitude: Shows the actual PWM scaling. In Stealth mode it can be used to detect motor load and
		  stall if autoscale is enabled (see :func:`Set Stealth Configuration`).
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_DRIVER_STATUS, [], '', 16, 'B B B ? B ? B B', returnCallback, errorCallback, false, true);
	};
	this.setMinimumVoltage = function(voltage, returnCallback, errorCallback) {
		/*
		Sets the minimum voltage, below which the :cb:`Under Voltage` callback
		is triggered. The minimum possible value that works with the Silent Stepper
		Bricklet 2.0 is 8V.
		You can use this function to detect the discharge of a battery that is used
		to drive the stepper motor. If you have a fixed power supply, you likely do
		not need this functionality.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_MINIMUM_VOLTAGE, [voltage], 'H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getMinimumVoltage = function(returnCallback, errorCallback) {
		/*
		Returns the minimum voltage as set by :func:`Set Minimum Voltage`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_MINIMUM_VOLTAGE, [], '', 10, 'H', returnCallback, errorCallback, false, true);
	};
	this.setTimeBase = function(timeBase, returnCallback, errorCallback) {
		/*
		Sets the time base of the velocity and the acceleration of the Silent Stepper
		Bricklet 2.0.
		
		For example, if you want to make one step every 1.5 seconds, you can set
		the time base to 15 and the velocity to 10. Now the velocity is
		10steps/15s = 1steps/1.5s.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_TIME_BASE, [timeBase], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getTimeBase = function(returnCallback, errorCallback) {
		/*
		Returns the time base as set by :func:`Set Time Base`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_TIME_BASE, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.getAllData = function(returnCallback, errorCallback) {
		/*
		Returns the following parameters: The current velocity,
		the current position, the remaining steps, the stack voltage, the external
		voltage and the current consumption of the stepper motor.
		
		The current consumption is calculated by multiplying the ``Actual Motor Current``
		value (see :func:`Set Basic Configuration`) with the ``Motor Run Current``
		(see :func:`Get Driver Status`). This is an internal calculation of the
		driver, not an independent external measurement.
		
		The current consumption calculation was broken up to firmware 2.0.1, it is fixed
		since firmware 2.0.2.
		
		There is also a callback for this function, see :cb:`All Data` callback.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_ALL_DATA, [], '', 22, 'H i i H H', returnCallback, errorCallback, false, true);
	};
	this.setAllCallbackConfiguration = function(period, returnCallback, errorCallback) {
		/*
		Sets the period with which the :cb:`All Data` callback is triggered
		periodically. A value of 0 turns the callback off.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_ALL_CALLBACK_CONFIGURATION, [period], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getAllDataCallbackConfiguraton = function(returnCallback, errorCallback) {
		/*
		Returns the period as set by :func:`Set All Callback Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_ALL_DATA_CALLBACK_CONFIGURATON, [], '', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.setGPIOConfiguration = function(channel, debounce, stopDeceleration, returnCallback, errorCallback) {
		/*
		Sets the GPIO configuration for the given channel.
		You can configure a debounce and the deceleration that is used if the action is
		configured as ``normal stop``. See :func:`Set GPIO Action`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_GPIO_CONFIGURATION, [channel, debounce, stopDeceleration], 'B H H', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getGPIOConfiguration = function(channel, returnCallback, errorCallback) {
		/*
		Returns the GPIO configuration for a channel as set by :func:`Set GPIO Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_GPIO_CONFIGURATION, [channel], 'B', 12, 'H H', returnCallback, errorCallback, false, true);
	};
	this.setGPIOAction = function(channel, action, returnCallback, errorCallback) {
		/*
		Sets the GPIO action for the given channel.
		
		The action can be a normal stop, a full brake or a callback. Each for a rising
		edge or falling edge. The actions are a bitmask they can be used at the same time.
		You can for example trigger a full brake and a callback at the same time or for
		rising and falling edge.
		
		The deceleration speed for the normal stop can be configured with
		:func:`Set GPIO Configuration`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_GPIO_ACTION, [channel, action], 'B I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getGPIOAction = function(channel, returnCallback, errorCallback) {
		/*
		Returns the GPIO action for a channel as set by :func:`Set GPIO Action`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_GPIO_ACTION, [channel], 'B', 12, 'I', returnCallback, errorCallback, false, true);
	};
	this.getGPIOState = function(returnCallback, errorCallback) {
		/*
		Returns the GPIO state for both channels. True if the state is ``high`` and
		false if the state is ``low``.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_GPIO_STATE, [], '', 9, '?2', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_SPITFP_ERROR_COUNT, [], '', 24, 'I I I I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_BOOTLOADER_MODE, [mode], 'B', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getBootloaderMode = function(returnCallback, errorCallback) {
		/*
		Returns the current bootloader mode, see :func:`Set Bootloader Mode`.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_BOOTLOADER_MODE, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setWriteFirmwarePointer = function(pointer, returnCallback, errorCallback) {
		/*
		Sets the firmware pointer for :func:`Write Firmware`. The pointer has
		to be increased by chunks of size 64. The data is written to flash
		every 4 chunks (which equals to one page of size 256).
		
		This function is used by Brick Viewer during flashing. It should not be
		necessary to call it in a normal user program.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_WRITE_FIRMWARE_POINTER, [pointer], 'I', 0, '', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_WRITE_FIRMWARE, [data], 'B64', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.setStatusLEDConfig = function(config, returnCallback, errorCallback) {
		/*
		Sets the status LED configuration. By default the LED shows
		communication traffic between Brick and Bricklet, it flickers once
		for every 10 received data packets.
		
		You can also turn the LED permanently on/off or show a heartbeat.
		
		If the Bricklet is in bootloader mode, the LED is will show heartbeat by default.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_SET_STATUS_LED_CONFIG, [config], 'B', 0, '', returnCallback, errorCallback, false, true);
	};
	this.getStatusLEDConfig = function(returnCallback, errorCallback) {
		/*
		Returns the configuration as set by :func:`Set Status LED Config`
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_STATUS_LED_CONFIG, [], '', 9, 'B', returnCallback, errorCallback, false, true);
	};
	this.getChipTemperature = function(returnCallback, errorCallback) {
		/*
		Returns the temperature as measured inside the microcontroller. The
		value returned is not the ambient temperature!
		
		The temperature is only proportional to the real temperature and it has bad
		accuracy. Practically it is only useful as an indicator for
		temperature changes.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_CHIP_TEMPERATURE, [], '', 10, 'h', returnCallback, errorCallback, false, true);
	};
	this.reset = function(returnCallback, errorCallback) {
		/*
		Calling this function will reset the Bricklet. All configurations
		will be lost.
		
		After a reset you have to create new device objects,
		calling functions on the existing ones will result in
		undefined behavior!
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_RESET, [], '', 0, '', returnCallback, errorCallback, false, true);
	};
	this.writeUID = function(uid, returnCallback, errorCallback) {
		/*
		Writes a new UID into flash. If you want to set a new UID
		you have to decode the Base58 encoded UID string into an
		integer first.
		
		We recommend that you use Brick Viewer to change the UID.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_WRITE_UID, [uid], 'I', 0, '', returnCallback, errorCallback, false, true);
	};
	this.readUID = function(returnCallback, errorCallback) {
		/*
		Returns the current UID as an integer. Encode as
		Base58 to get the usual string version.
		*/
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_READ_UID, [], '', 12, 'I', returnCallback, errorCallback, false, true);
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
		this.ipcon.sendRequest(this, BrickletSilentStepperV2.FUNCTION_GET_IDENTITY, [], '', 33, 's8 s8 c B3 B3 H', returnCallback, errorCallback, false, false);
	};

	this.ipcon.addDevice(this);
}

module.exports = BrickletSilentStepperV2;
