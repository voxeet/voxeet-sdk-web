import { Participant } from './Participant';
/**
 * The SpatialAudioStyle model defines how the spatial location is communicated between SDK and the Dolby.io server. The style can be defined during a conference creation, although its value for each participant depends on the participant's spatial audio setting. The shared spatial audio style is only available for participants who joined a conference with spatial audio enabled. Setting the spatial audio style is supported only in SDK 3.6 and later. The earlier SDK versions support only the individual mode and do not allow participants to join conferences created with the spatial audio style set to shared. The following table lists the possible spatial audio style settings for the local participant:
 *
 * | Create: SpatialAudioStyle | Join: SpatialAudio | Result                            |
 * |---------------------------|--------------------|-----------------------------------|
 * | Individual                | True               | Success                           |
 * | Individual                | False              | Success                           |
 * | Shared                    | True               | Success only on SDK 3.6 and later |
 * | Shared                    | False              | Rejected                          |
 * | Disabled                  | True               | Rejected                          |
 * | Disabled                  | False              | Success                           |
 *
 */
export declare enum SpatialAudioStyle {
    /**
     * Disables spatial audio in a conference.
     */
    Disabled = "disabled",
    /**
     * Sets the spatial location that is based on the spatial scene, local participant's position, and remote participants' positions. This allows a client to control the position using the local, self-contained logic. However, the client has to communicate a large set of requests constantly to the server, which increases network traffic, log subsystem pressure, and complexity of the client-side application. This option is selected by default. We recommend this mode for A/V congruence scenarios in video conferencing and similar applications.
     */
    Individual = "individual",
    /**
     * Sets the spatial location that is based on the spatial scene and the local participant's position, while the relative positions among participants are calculated by the Dolby.io server. This way, the spatial scene is shared by all participants, so that each client can set a position and participate in the shared scene. This approach simplifies communication between the client and the server and decreases network traffic. We recommend this mode for 2D virtual space scenarios, such as 2D games, trade shows, water cooler scenarios, etc.
     *
     * **Note**: The shared style currently does not support recording conferences.
     */
    Shared = "shared"
}
/**
 * @ignore
 */
export declare type SpatialAudioStyleValuesUnion = typeof SpatialAudioStyle[keyof typeof SpatialAudioStyle];
/**
 * @ignore
 */
export declare type SupportedSpatialAudioStyles = SpatialAudioStyleValuesUnion[];
/**
 * @ignore
 */
export interface SpatialAudioManager {
    setEnvironment: (environment: SpatialEnvironment) => void;
    setParticipantPosition: (participant: Participant, position: SpatialPosition) => void;
    setLocalDirection: (direction: SpatialDirection) => void;
    removeParticipant?: (participantId: string) => void;
    release: () => void;
}
/**
 * @ignore
 */
export declare type CreateSpatialAudioManager = (option: {
    style: SpatialAudioStyle;
    conferenceId: string;
    participantId: string;
    setDirection?: (yaw: number, pitch: number, roll: number) => void;
}) => SpatialAudioManager | undefined;
/**
 * @ignore
 */
export declare type Vector<T> = {
    x: T;
    y: T;
    z: T;
};
/**
 * Model representing spherical coordinate system used internally.
 * @ignore
 */
export declare type PolarPosition = {
    distance: number;
    elevation: number;
    azimuth: number;
};
/**
 * The SpatialPosition model represents a participant's audio position. The position is defined using Cartesian coordinates.
 *
 * You can define the direction of each axis in the coordinate system using the [setSpatialEnvironment](./../classes/services_conference_ConferenceService.ConferenceService.html#setSpatialEnvironment) method. By default, the environment consists of the following axes:
 *
 * - X-axis: Extends positive to the right
 * - Y-axis: Extends positive upwards
 * - Z-axis: Extends positive forwards
 *
 * The [setSpatialEnvironment](./../classes/services_conference_ConferenceService.ConferenceService.html#setSpatialEnvironment) method allows the application to choose the meaning of each axis and match the usage of the application.
 *
 * <h3>Properties</h3>
 *
 * <b>x</b>
 *
 * - <b> x </b>: number
 *
 * The x-coordinate of a new audio location.
 *
 * <b>y</b>
 *
 * - <b> y</b>: number
 *
 * The y-coordinate of a new audio location.
 *
 * <b>z</b>
 *
 * - <b> z </b>: number
 *
 * The z-coordinate of a new audio location.
 */
export declare type SpatialPosition = Vector<number>;
/**
 * The SpatialDirection class defines the direction a participant is facing. The class is specified as a set of three Euler rotations about the corresponding axis. The following properties define a rotation about the specified positive axis:
 * - `x`: A rotation about the x-axis
 * - `y`: A rotation about the y-axis
 * - `z`: A rotation about the z-axis
 *
 * <div class="grid-container"><div class="video-1" > <p><b>Yaw:</b> A rotation about the up axis, where the default environment is the y rotation</p><video controls width="200"> <source src="https://s3.us-west-1.amazonaws.com/static.dolby.link/videos/readme/communications/spatial/08_SpatialDirectionYaw_v03_220131.mp4" type="video/mp4"> Sorry, your browser doesn't support embedded videos.</video></div><div class="video-2"> <p><b>Pitch:</b> A rotation about the right axis, where the default environment is the x rotation.</p><video controls width="200"> <source src="https://s3.us-west-1.amazonaws.com/static.dolby.link/videos/readme/communications/spatial/09_SpatialDirectionPitch_v03_220131.mp4" type="video/mp4"> Sorry, your browser doesn't support embedded videos.</video></div><div class="video-3"> <p><b>Roll:</b> A rotation about the forward axis, where the default environment is the z rotation.</p><video controls width="200"> <source src="https://s3.us-west-1.amazonaws.com/static.dolby.link/videos/readme/communications/spatial/10_SpatialDirectionRoll_v03_220131.mp4" type="video/mp4"> Sorry, your browser doesn't support embedded videos.</video></div><br></div><style> .grid-container { display: grid; }.grid-container {display: grid;grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));grid-column-gap: 10px;grid-row-gap: 30px;}</style>
 *
 * When using custom environment directions set in [setSpatialEnvironment](./../classes/services_conference_ConferenceService.ConferenceService.html#setSpatialEnvironment), the rotation is defined to always rotate about the relevant axis according to the left handed curl rule. In the animations above you can see, for the y-axis rotation, if you curl your left hand up around with your thumb pointing down the +y axis, the direction the participant will rotate is in the direction the fingers are curling around the given axis. You can see the rotation arrows in those reference animations which correspond to positive rotation direction are pointing the same direction as the fingers of the curled left hand.
 *
 * When a direction contains rotations around more than one axis, the rotations are applied in a defined order: yaw, pitch, and then roll. With the standard environment, this corresponds to y, x, and then z. When using custom environment directions, the directions are always in the order of yaw/pitch/roll, but which (x,y,z) axis those correspond to is different.
 *
 * <h3>Properties</h3>
 *
 * <b>x</b>
 *
 * - <b> x </b>: number
 *
 * The Euler rotation about the x-axis, in degrees.
 *
 * <b>y</b>
 *
 * - <b> y</b>: number
 *
 * The Euler rotation about the y-axis, in degrees.
 *
 * <b>z</b>
 *
 * - <b> z </b>: number
 *
 * The Euler rotation about the z-axis, in degrees.
 */
export declare type SpatialDirection = Vector<number>;
/**
 * The SpatialScale model defines how to convert units from the application's coordinate system (pixels or centimeters) into meters used by the spatial audio coordinate system. For example, let's assume that SpatialScale is set to (100,100,100), which indicates that 100 of the applications units (cm) map to 1 meter for the audio coordinates. If the listener's location is (0,0,0)cm and a remote participant's location is (200,200,200)cm, the listener has an impression of hearing the remote participant from the (2,2,2)m location.
 *
 * **Note**: A scale value must have a value greater than zero. The default is (1,1,1).
 *
 * <h3>Properties</h3>
 *
 * <b>x</b>
 *
 * - <b> x </b>: number
 *
 * The x component of the SpatialScale vector.
 *
 * <b>y</b>
 * - <b> y</b>: number
 *
 * The y component of the SpatialScale vector.
 *
 * <b>z</b>
 *
 * - <b> z </b>: number
 *
 * The z component of the SpatialScale vector.
 */
export declare type SpatialScale = Vector<number>;
/**
 * @ignore
 */
export declare type Quaternion = {
    x: number;
    y: number;
    z: number;
    w: number;
};
/**
 * Model storing all spatial audio environment parameters used internally for converting between application and audio space.
 * @ignore
 */
export declare type SpatialEnvironment = {
    scale: SpatialScale;
    forward: SpatialPosition;
    up: SpatialPosition;
    right: SpatialPosition;
};
/**
 * Model storing all spatial audio parameters used internally for remote participants.
 * @ignore
 */
export declare type SpatialRemoteParticipant = {
    participant: Participant;
    position: SpatialPosition;
};
