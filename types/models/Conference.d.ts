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
}
/**
 * The ConferenceLeaveOptions model includes parameters responsible for leaving conferences.
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
 * The QualityIndicator model represents [audio](#audio) and [video](#video) Mean Opinion Scores (MOS). The scores represent the participants' audio and video quality. The SDK calculates the audio and video quality scores and displays the values in a rage from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
 *
 * During a conference, the conference participants can enable and disable the qualityIndicators statistics.
 *
 * To receive the [qualityIndicators](doc:js-client-sdk-conferenceservice#qualityindicators) events, use the following command:
 *
 *  ```javascript
 *  VoxeetSDK.conference.on('qualityIndicators', handler)
 *  ```
 *
 * To not receive the [qualityIndicators](doc:js-client-sdk-conferenceservice#qualityindicators) events, use the following command:
 *
 *  ```javascript
 *  VoxeetSDK.conference.off('qualityIndicators', handler)
 *  ```
 *
 */
export interface QualityIndicator {
    /**
     * The audio quality MOS score in a rage from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
     *
     * **Note**: With SDK 3.0, audio Mean Opinion Scores (MOS) are unavailable for web clients connected to Dolby Voice conferences.
     */
    audio: number;
    /**
     * The video quality MOS score in a rage from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
     */
    video: number;
}
/**
 * The QualityIndicators model represents audio and video quality scores of the remote participants. This model includes a list of [QualityIndicator](doc:js-client-sdk-model-qualityindicator)s.
 *
 * The SDK displays the audio and video quality using Mean Opinion Score (MOS). The scores represent the participants' audio and video quality. The SDK calculates the audio and video quality scores and displays the values in a rage from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
 *
 * **Note**: With SDK 3.0, audio Mean Opinion Scores (MOS) are unavailable for web clients connected to Dolby Voice conferences.
 */
export declare type QualityIndicators = Map<string, QualityIndicator>;
/**
 * The ConferenceStatus model represents the possible conference statuses specific for each conference participant.
 */
export declare enum ConferenceStatus {
    /**
     * Informs that a new conference is created.
     */
    Created = "created",
    /**
     * Informs that the local participant successfully joined a conference.
     */
    Joined = "joined",
    /**
     * Informs that a conference is ended.
     */
    Ended = "ended",
    /**
     * Informs that the local participant successfully left a conference.
     */
    Left = "left",
    /**
     * Informs that the conference is destroyed. This status may be triggered by the following situations:
     * - All conference participants left the conference
     * - The [time to live](doc:js-client-sdk-model-conferenceparameters#ttl) or the conference time limit elapsed
     * - The conference creator used the [Terminate](reference:deleteconference) REST API to terminate an ongoing conference
     */
    Destroyed = "destroyed",
    /**
     * Informs that an error occurred during a conference.
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
 * The Conference model allows the application to get information about the conference,
 * such as the conference [ID](#id), [alias](#alias), [PIN code](#pincode), [status](#status), conference [parameters](#params), [participants](#participants), [permissions](#permissions), and information if the conference is [new](#isnew).
 */
export default class Conference {
    #private;
    /** @ignore */
    constructor(id: string);
    /**
     * Provides the conference ID.
     * @return {string}
     */
    get id(): string;
    /**
     * Provides the conference alias.
     * @return {string}
     */
    get alias(): string;
    /**
     * The property indicating if the created conference is new.
     * @return {boolean}
     */
    get isNew(): boolean;
    /**
     * Provides the PIN code of the conference.
     * @return {string}
     */
    get pinCode(): string;
    /**
     * Provides the conference status.
     * @return {ConferenceStatus}
     */
    get status(): ConferenceStatus;
    /**
     * Setter status
     * @param {ConferenceStatus} value
     */
    set status(value: ConferenceStatus);
    /**
     * Provides the conference parameters.
     * @return {ConferenceParameters}
     */
    get params(): ConferenceParameters;
    /**
     * Setter id
     * @param {string} value
     */
    set id(value: string);
    /**
     * Setter alias
     * @param {string} value
     */
    set alias(value: string);
    /**
     * Setter isNew
     * @param {boolean} value
     */
    set isNew(value: boolean);
    /**
     * Setter pinCode
     * @param {string} value
     */
    set pinCode(value: string);
    /**
     * Setter params
     * @param {ConferenceParameters} value
     */
    set params(value: ConferenceParameters);
    /**
     * Provides the list of conference participants.
     */
    get participants(): Map<string, Participant>;
    /**
     * Provides a list of the local participant's conference permissions.
     */
    get permissions(): Set<ConferencePermission>;
    /**
     * Setter permissions
     * @param {Set<ConferencePermission>} value
     * @ignore
     */
    set permissions(value: Set<ConferencePermission>);
    /**
     * @ignore
     * @param data
     */
    static fromCreateData(data: ConferenceCreateData): Conference;
}
export {};
