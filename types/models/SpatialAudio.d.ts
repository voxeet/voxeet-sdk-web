import { Participant } from './Participant';
export declare type Vector<T> = {
    x: T;
    y: T;
    z: T;
};
/**
 * Model representing spherical coordinate system used internally.
 */
export declare type PolarPosition = {
    distance: number;
    elevation: number;
    azimuth: number;
};
/**
 * The SpatialPosition model represents a participant's audio position. The position is defined using Cartesian coordinates.
 *
 * You can define the direction of each axis in the coordinate system using the [setSpatialEnvironment](doc:js-client-sdk-conferenceservice#setspatialenvironment) method. By default, the environment consists of the following axes:
 *
 * - X-axis: Extends positive to the right
 * - Y-axis: Extends positive upwards
 * - Z-axis: Extends positive forwards
 *
 * The [setSpatialEnvironment](doc:js-client-sdk-conferenceservice#setspatialenvironment) method allows the application to choose the meaning of each axis and match the usage of the application.
 *
 */
export declare type SpatialPosition = Vector<number>;
/**
 * The SpatialDirection model defines the direction a participant is facing. The model is specified as a set of three Euler rotations about the corresponding axis in the order of z-x-y:
 *
 * The following properties define a rotation about the specified positive axis:
 *
 * - `x`: A rotation about the x-axis
 * - `y`: A rotation about the y-axis
 * - `z`: A rotation about the z-axis
 *
 * These properties correspond to yaw, pitch, and roll:
 *
 * - Yaw: A rotation about the up axis, where the default environment is the Y rotation. For more details, see the yaw.mp4 video.
 * - Pitch: A rotation about the right axis, where the default environment is the X rotation. For more details, see the pitch.mp4 video.
 * - Roll: A rotation about the forward axis, where the default environment is the Z rotation. For more details, see the roll.mp4 video.
 */
export declare type SpatialDirection = Vector<number>;
/**
 * The SpatialScale model defines how to convert units from the application's coordinate system (pixels or centimeters) into meters used by the spatial audio coordinate system. For example, let's assume that SpatialScale is set to (100,100,100), which indicates that 100 of the applications units (cm) map to 1 meter for the audio coordinates. If the listener's location is (0,0,0)cm and a remote participant's location is (200,200,200)cm, the listener has an impression of hearing the remote participant from the (2,2,2)m location.
 *
 * **Note**: A scale value must have a value greater than zero. The default is (1,1,1).
 */
export declare type SpatialScale = Vector<number>;
export declare type Quaternion = {
    x: number;
    y: number;
    z: number;
    w: number;
};
/**
 * Model storing all spatial audio environment parameters used internally for converting between application and audio space.
 */
export declare type SpatialEnvironment = {
    scale: SpatialScale;
    forward: SpatialPosition;
    up: SpatialPosition;
    right: SpatialPosition;
};
/**
 * Model storing all spatial audio parameters used internally for remote participants.
 */
export declare type SpatialRemoteParticipant = {
    participant: Participant;
    position: SpatialPosition;
};
