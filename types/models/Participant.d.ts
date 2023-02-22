/// <reference types="node" />
import { EventEmitter } from 'events';
import { ParticipantUpdated, ParticipantAdded } from '../events/conference/index';
import { MediaStreamWithType } from './MediaStream';
import { ParticipantInfo } from './Options';
/**
 * The ParticipantType model contains the possible types of a conference participant.
 */
export declare enum ParticipantType {
    /**
     * A participant who can send and receive audio and video during the conference.
     */
    USER = "user",
    /**
     * @ignore
     * A participant who is the active speaker.
     */
    SPEAKER = "speaker",
    /**
     * A participant who cannot send audio and video to a conference.
     */
    LISTENER = "listener",
    /**
     * @ignore
     */
    DOLBYVOICE = "dolbyVoice",
    /**
     * A participant who connected to a conference using Public Switched Telephone Network (PSTN).
     */
    PSTN = "pstn",
    /**
     * A special participant who joins a conference to record it.
     */
    MIXER = "mixer",
    /**
     * A participant who does not have an assigned type.
     */
    NONE = "none",
    /**
     * A participant who is present during the replay of a recorded conference.
     */
    ROBOT = "robot",
    /**
     * A special participant responsible for streaming a conference using Streaming APIs and real-time streaming. This type is available in SDK 3.9 and later.
     */
    MIXER_MIX = "mixer_mix"
}
/**
 * @ignore
 * @param participantType
 */
export declare const toParticipantType: (participantType: string) => ParticipantType;
/**
 * The ParticipantStatus model represents the statuses of conference participants. The following graphic shows possible status changes during a conference:
 *
 * <img src="https://files.readme.io/2105b14-js-swift-conferenceService-participantUpdated.png" title="Diagram that presents the possible status changes" width="1000"/>
 *
 */
export declare enum ParticipantStatus {
    /**
     * A participant is invited to a conference but has not joined it yet.
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
 * The Participant model contains information about a conference participant.
 *
 */
export declare class Participant extends EventEmitter {
    /**
     * The participant ID.
     */
    id: string;
    /**
     * Information about the participant.
     */
    info: ParticipantInfo;
    /**
     * The participant status.
     */
    status: ParticipantStatus;
    /**
     * The participant type.
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
     * Information whether a participant is transmitting audio. True indicates that the participant's audio stream is transmitted to a conference, false indicates that the participant is muted.
     *
     * **Note**: This property is available in SDK 3.2 and later.
     */
    audioTransmitting: boolean;
    /**
     * The status of video transmission. True indicates that a participant's video is transmitted to a conference.
     *
     * **Note**: This property is available in SDK 3.8 and later.
     */
    videoTransmitting: boolean;
    /**
     * Information whether the local participant muted a remote participant or stopped the remote participant's audio.
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
     * @param videoTransmitting
     */
    updateVideoTransmitting(videoTransmitting: boolean): void;
    /**
     * @ignore
     * @param audioReceivingStopped
     */
    updateAudioReceivingStopped(audioReceivingStopped: boolean): void;
    /**
     * Checks whether the local participant receives audio from a specific remote participant.
     *
     * For example, if a participant A calls the [stop](./services_audio_RemoteAudio.RemoteAudio.html#stop) method to stop receiving audio from a participant B and then calls `participant.audioReceivingFrom` for the participant B, the participant A receives false. This means that the participant A does not receive audio streams from the participant B.
     *
     * If audioTransmitting is false for a specific remote participant, audioReceivingFrom is also false as a conference is unable to send this participant's audio into the conference.
     *
     * **Note**: This accessor is available only in SDK 3.2 and later.
     */
    get audioReceivingFrom(): boolean;
    /**
     * @deprecated
     * The SDK 3.2 deprecates the audio accessor and replaces this accessor with [audioTransmitting](#audiotransmitting) and [audioReceivingFrom](#audioreceivingfrom) to provide more specific information about audio streams.
     *
     * The participant's audio status.
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
