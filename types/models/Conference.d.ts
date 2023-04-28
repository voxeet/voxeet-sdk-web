import ConferenceParameters from './ConferenceParameters';
import { Participant } from './Participant';
/**
 * @ignore
 */
interface ConferenceCreateData {
    conferenceId: string;
    conferenceAlias: string;
    conferencePincode: string;
    isNew: boolean;
    isProtected: boolean;
    isAudioOnly: boolean;
    isDolbyVoice: boolean;
}
/**
 * @ignore
 * The ConferenceLeaveOptions model gathers parameters responsible for leaving conferences.
 */
export interface ConferenceLeaveOptions {
    /**
     * @ignore
     */
    reason?: string;
    /**
     * A boolean indicating whether the SDK should close a session after leaving a conference or leave a session open.
     */
    leaveRoom?: boolean;
    /**
     * @ignore
     */
    keepAlive?: boolean;
}
/**
 * The QualityIndicator model represents [audio](#audio) and [video](#video) Mean Opinion Scores (MOS). The scores represent the participants' audio and video quality. The SDK calculates the audio and video quality scores and displays the values in a range from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
 *
 * During a conference, conference participants can enable and disable the qualityIndicators statistics.
 *
 * To receive the [qualityIndicators](./../classes/services_conference_ConferenceService.ConferenceService.html#qualityindicators) events, use the following command:
 *
 *  ```javascript
 *  VoxeetSDK.conference.on('qualityIndicators', handler)
 *  ```
 *
 * To not receive the [qualityIndicators](./../classes/services_conference_ConferenceService.ConferenceService.html#qualityindicators) events, use the following command:
 *
 *  ```javascript
 *  VoxeetSDK.conference.off('qualityIndicators', handler)
 *  ```
 *
 */
export interface QualityIndicator {
    /**
     * The audio quality Mean Opinion Score (MOS) in a range from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
     *
     * **Note**: This property is available in Dolby Voice conference only in SDK 3.5 and later.
     */
    audio: number;
    /**
     * The video quality Mean Opinion Score (MOS) in a range from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
     */
    video: number;
}
/**
 * The QualityIndicators model represents audio and video quality scores of the remote participants. This model contains a list of [QualityIndicator](./../interfaces/models_Conference.QualityIndicator.html)s.
 *
 * The SDK displays the audio and video quality using Mean Opinion Score (MOS). The scores represent the participants' audio and video quality. The SDK calculates the audio and video quality scores and displays the values in a range from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
 *
 * **Note**: With SDK 3.0, audio Mean Opinion Scores (MOS) are unavailable for web clients connected to Dolby Voice conferences.
 */
export declare type QualityIndicators = Map<string, QualityIndicator>;
/**
 * The ConferenceStatus model represents the possible conference statuses specific for each conference participant.
 */
export declare enum ConferenceStatus {
    /**
     * The conference has been just created.
     */
    Created = "created",
    /**
     * The local participant successfully joined the conference.
     */
    Joined = "joined",
    /**
     * The conference is ended.
     */
    Ended = "ended",
    /**
     * The local participant successfully left the conference.
     */
    Left = "left",
    /**
     * The conference is destroyed. This status may be triggered by the following situations:
     * - All conference participants left the conference
     * - The [time to live](./../classes/models_ConferenceParameters.ConferenceParameters.html#ttl) or the conference time limit elapsed
     * - The conference creator used the [Terminate](https://docs.dolby.io/communications-apis/reference/terminate-conference) REST API to terminate an ongoing conference
     */
    Destroyed = "destroyed",
    /**
     * An error occurred during the conference.
     */
    Error = "error"
}
/**
 * The ConferencePermission model represents the possible permissions a participant may have in a conference.
 */
export declare enum ConferencePermission {
    /**
     * Allows a participant to invite participants to a conference.
     */
    Invite = "INVITE",
    /**
     * Allows a participant to update other participants' permissions.
     */
    UpdatePermissions = "UPDATE_PERMISSIONS",
    /**
     * Allows a participant to kick other participants from a conference
     */
    Kick = "KICK",
    /**
     * Allows a participant to join a conference.
     */
    Join = "JOIN",
    /**
     * Allows a participant to send an audio stream during a conference.
     */
    SendAudio = "SEND_AUDIO",
    /**
     * Allows a participant to send a video stream during a conference.
     */
    SendVideo = "SEND_VIDEO",
    /**
     * Allows a participant to share a screen during a conference.
     */
    ShareScreen = "SHARE_SCREEN",
    /**
     * Allows a participant to share a video during a conference.
     */
    ShareVideo = "SHARE_VIDEO",
    /**
     * Allows a participant to share a file during a conference.
     */
    ShareFile = "SHARE_FILE",
    /**
     * Allows a participant to send a message to other participants during a conference.
     */
    SendMessage = "SEND_MESSAGE",
    /**
     * Allows a participant to record a conference.
     */
    Record = "RECORD",
    /**
     * Allows a participant to stream a conference.
     */
    Stream = "STREAM"
}
/**
 * The Conference model allows the application to get information about a conference.
 */
export default class Conference {
    #private;
    /** @ignore */
    constructor(id: string);
    /**
     * Gets the conference ID.
     * @return {string}
     */
    get id(): string;
    /**
     * Gets the conference alias.
     * @return {string}
     */
    get alias(): string;
    /**
     * Checks whether a conference is new.
     * @return {boolean}
     */
    get isNew(): boolean;
    /**
     * Checks whether a conference uses a conference access token and enhanced conference access control.
     * @return {boolean}
     */
    get isProtected(): boolean;
    /**
     * Checks whether a conference was created as audio-only.
     * @return {boolean}
     */
    get isAudioOnly(): boolean;
    /**
     * Gets the conference PIN code.
     * @return {string}
     */
    get pinCode(): string;
    /**
     * Gets the conference status.
     * @return {ConferenceStatus}
     */
    get status(): ConferenceStatus;
    /**
     * @ignore
     * Setter status
     * @param {ConferenceStatus} value
     */
    set status(value: ConferenceStatus);
    /**
     * Gets the conference parameters.
     * @return {ConferenceParameters}
     */
    get params(): ConferenceParameters;
    /**
     * @ignore
     * Setter id
     * @param {string} value
     */
    set id(value: string);
    /**
     * @ignore
     * Setter alias
     * @param {string} value
     */
    set alias(value: string);
    /**
     * @ignore
     * Changes a conference type to either protected or unprotected. A protected conference requires using a conference access token and enhanced conference access control.
     * @param {boolean} value
     */
    set isProtected(value: boolean);
    /**
     * @ignore
     * Changes a conference type to either audio-only or audio and video.
     * @param {boolean} value
     */
    set isAudioOnly(value: boolean);
    /**
     * @ignore
     * Setter isNew
     * @param {boolean} value
     */
    set isNew(value: boolean);
    /**
     * @ignore
     * Setter pinCode
     * @param {string} value
     */
    set pinCode(value: string);
    /**
     * @ignore
     * Setter params
     * @param {ConferenceParameters} value
     */
    set params(value: ConferenceParameters);
    get participants(): Map<string, Participant>;
    /**
     * @ignore
     * Sets the function that retrieves the participants list.
     * The provided function should return the current state of the participants list.
     * @param getter A function that returns a `Map<string, Participant>` object representing the current state of the participants list.
     */
    set participantsGetter(getter: () => Map<string, Participant>);
    /**
     * Gets a list of the local participant's conference permissions.
     */
    get permissions(): Set<ConferencePermission>;
    /**
     * @ignore
     * Setter permissions
     * @param {Set<ConferencePermission>} value
     */
    set permissions(value: Set<ConferencePermission>);
    /**
     * @ignore
     * @param data
     */
    static fromCreateData(data: ConferenceCreateData): Conference;
}
export {};
