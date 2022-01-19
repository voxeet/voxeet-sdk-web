/// <reference types="node" />
import { EventEmitter } from 'events';
import { ParticipantUpdated, ParticipantAdded } from '../events/conference/index';
import { MediaStreamWithType } from './MediaStream';
import { ParticipantInfo } from './Options';
/**
 * The ParticipantType model represents the types of conference participants.
 */
export declare enum ParticipantType {
    /**
     * A participant who can send and receive the audio and video stream during the conference.
     */
    USER = "user",
    /**
     * @ignore
     * A participant who is the active speaker.
     */
    SPEAKER = "speaker",
    /**
     * A participant who cannot send the audio and video stream during the conference.
     */
    LISTENER = "listener",
    /**
     * @ignore
     */
    DOLBYVOICE = "dolbyVoice",
    /**
     * @ignore
     */
    PSTN = "pstn",
    /**
     * @ignore
     */
    MIXER = "mixer",
    /**
     * @ignore
     */
    NONE = "none",
    /**
     * @ignore
     */
    ROBOT = "robot"
}
/**
 * @ignore
 * @param participantType
 */
export declare const toParticipantType: (participantType: string) => ParticipantType;
/**
 * The ParticipantStatus model represents the statuses of conference participants. The following graphic shows possible status changes during a conference:
 *
 * <img src="../../assets/web_participant_status.png" alt="screen-share" title="Screen share" width="1000"/>
 *
 */
export declare enum ParticipantStatus {
    /**
     * A participant is invited to a conference and waits for an invitation.
     */
    RESERVED = "Reserved",
    /**
     * A participant did not enable audio, video, or screen-share and, therefore, is not connected to any stream.
     */
    INACTIVE = "Inactive",
    /**
     * An invited participant declined the conference invitation. Currently, the Web SDK does not offer the decline method, although participants who use Web SDK can receive the `Decline` status from other application users who use the Android or iOS SDK. The Web SDK does not receive the notification if the invited participant uses the `decline` method after joining a conference.
     */
    DECLINE = "Decline",
    /**
     * A participant received the conference invitation and is connecting to a conference.
     */
    CONNECTING = "Connecting",
    /**
     * A participant successfully connected to a conference.
     */
    CONNECTED = "Connected",
    /**
     * A participant left the conference.
     */
    LEFT = "Left",
    /**
     * A participant experiences a peer connection problem, which may result in the `Error` or `Connected` status.
     */
    WARNING = "Warning",
    /**
     * A peer connection failed, and the participant cannot connect to a conference.
     */
    ERROR = "Error",
    /**
     * A participant was kicked from the conference.
     */
    KICKED = "Kicked"
}
/**
 * @ignore
 * @param status
 */
export declare const toParticipantStatus: (status: string) => ParticipantStatus;
/**
 * The Participant model gathers information about the conference participant, such as:
 * - The participant's [ID](#id), [status](#status-1), and [type](#type)
 * - Information about [streams](/#streams) that the participant uses
 * - Additional [information](#info) about the participant
 * - Information whether the participant's [audio](#audio) is enabled
 *
 * The model also notifies about the participant's [status](#status) changes.
 *
 * @noInheritDoc
 */
export declare class Participant extends EventEmitter {
    /**
     * The participant's ID.
     */
    id: string;
    /**
     * The information about the conference participant.
     */
    info: ParticipantInfo;
    /**
     * The participant's status.
     */
    status: ParticipantStatus;
    /**
     * The type of the participant, either `listener` or `user`.
     */
    type: ParticipantType;
    /**
     * User metadata
     * @ignore
     */
    metadata: object;
    /**
     * The participant's streams.
     */
    streams: MediaStreamWithType[];
    /**
     * The participant's voice level.
     * @ignore
     */
    level: number;
    /**
     * The participant's audio quality indicator.
     * @ignore
     */
    audioQuality: number;
    /**
     * The participant's audio transmitting status modified using startAudio()/stopAudio() on the local participant.
     *
     * This property is true when the participant is transmitting audio to the conference.
     * If this property is false then it indicates that the participant is muted into the conference.
     */
    audioTransmitting: boolean;
    /**
     * Identifies if the local client has requested to stopAudio or mute the remote participant.
     *
     * @ignore
     */
    private _audioReceivingStopped;
    /**
     * The participant's active status.
     * @ignore
     */
    active: boolean;
    /**
     * @ignore
     * @param id
     * @param status
     * @param type
     * @param externalId
     * @param externalName
     */
    constructor(id: string, status?: string, type?: string);
    /**
     * @ignore
     * @param data
     */
    init(data: ParticipantAdded): void;
    /**
     * @ignore
     * @param data
     */
    update(data: ParticipantUpdated): void;
    /**
     * @ignore
     * @param audioTransmitting
     */
    updateAudioTransmitting(audioTransmitting: boolean): void;
    /**
     * @ignore
     * @param audioReceivingStopped
     */
    updateAudioReceivingStopped(audioReceivingStopped: boolean): void;
    /**
     * The participant's audio receiving status modified using startAudio() and stopAudio() on a remote participant.
     *
     * This property is true when the participants audio can be received from the conference to the local client.
     *
     * If this property is false then it indicates that the local client is unable to hear the specified participant.
     *
     * Note: If the participants audioTransmitting is false, then its audioReceivingFrom will also be false as
     * the conference is unable to send down audio for a participant that is not sending their audio into the conference.
     */
    get audioReceivingFrom(): boolean;
    /**
     * The participant's audio status.
     *
     * @deprecated  Replaced by {@link #audioTransmitting and audioReceivingFrom()}. This
     * now defers to audioTransmitting
     */
    get audio(): boolean;
    /**
     * @ignore
     * @param type
     */
    updateType(type: string): void;
    /**
     * @ignore
     * @param status
     */
    updateStatus(status: string): void;
    /**
     * @ignore
     */
    updateName(name: string): void;
    /**
     * @ignore
     */
    updateAvatarUrl(url: string): void;
    /**
     * @ignore
     */
    updateExternalId(id: string): void;
}
