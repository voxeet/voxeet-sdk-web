import { ConferencePermission } from './Conference';
import { Participant } from './Participant';
import { InputAudioConfig, OutputAudioConfig, SessionConfig } from '@dolby-dvc/dvwc';
import { VideoFilter, VideoFilterOptions } from './VideoFilters';
import { SupportedSpatialAudioStyles } from './SpatialAudio';
import { VideoForwardingStrategy } from './VideoForwarding';
import { VideoProcessor } from './VideoProcessor';
import { AudioBitrate } from './Audio';
/**
 *
The ListenOptions model defines how the application expects to join a conference using the [listen](#listen) method.
 */
export interface ListenOptions {
    /**
     * Sets the maximum number of video streams that may be transmitted to the joining participant. The valid parameter's values are between 0 and 25 for desktop browsers and between 0 and 4 for mobile browsers. In the case of providing a value smaller than 0 or greater than the valid values, SDK triggers the [VideoForwardingError](./../classes/lib_Exceptions.VideoForwardingError.html). If the parameter value is not specified, the SDK automatically sets the maximum possible value: 25 for desktop browsers and 4 for mobile browsers.
     *
     * This property is available in SDK 3.1 and later.
     */
    maxVideoForwarding?: number;
    /**
     * Changes the [video forwarding strategy](./../enums/models_VideoForwarding.VideoForwardingStrategy.html) for the local participant.
     *
     * This method is available only in SDK 3.6 and later.
     */
    forwardingStrategy?: VideoForwardingStrategy;
    /**
     * The conference access token that is required to join a protected conference if the conference is created using the [create](https://docs.dolby.io/communications-apis/reference/create-conference) REST API. If the conference is created using the [create](./../classes/services_conference_ConferenceService.ConferenceService.html#create) method, the token is managed by the SDK and is not visible to the application users. For more information, see the [Enhanced Conference Access Control](https://docs.dolby.io/communications-apis/docs/guides-enhanced-conference-access-control) document.
     */
    conferenceAccessToken?: string;
    /**
     * Allows handling the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event on the application level instead of on the SDK level. By default, the SDK listens to the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event and leaves a conference when this event is triggered. When the leaveConferenceOnBeforeUnload is set to false, the SDK stops reacting on the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event, which allows customizing the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) handling. When leaveConferenceOnBeforeUnload is set to false, SDK does not react to events, such as closing a tab to leave a conference, and such events need to be also handled on the application level.
     */
    leaveConferenceOnBeforeUnload?: boolean;
    /**
     * Enables spatial audio for the local participant who joins a Dolby Voice conference. By default, this parameter is set to false.
     */
    spatialAudio?: boolean;
}
/**
 * The MixingOptions model notifies the server that a participant who [joins](./../classes/services_conference_ConferenceService.ConferenceService.html#join) or [replays](./../classes/services_conference_ConferenceService.ConferenceService.html#replay) a conference is a special participant called Mixer. Mixer can use the SDK in a mixer mode to record or replay a conference. For more information, see the [Recording Conferences](https://docs.dolby.io/communications-apis/docs/guides-recording-conferences) article.
 */
export interface MixingOptions {
    /**
     * A boolean value that notifies the server whether the participant is a Mixer (true) or not (false).
     */
    enabled: boolean;
    /**
     * @ignore
     */
    uri?: string;
}
/**
 * The ReplayOptions model contains properties responsible for replaying conferences.
 */
export interface ReplayOptions {
    /**
     * The number of milliseconds between the beginning of the recording and the required starting point that allows application users to start replaying the recorded conference at a specific timestamp.
     */
    offset: number;
    /**
     * The conference access token.
     */
    conferenceAccessToken?: string;
}
/**
 * The DemoOptions model allows specifying additional options for participants joining a demo conference.
 */
export interface DemoOptions {
    /**
     * Allows the local participant to change remote participants' locations and experience spatial audio. By default, this parameter is set to false. When set to true, the application must place the remote participants in a 3D space using the [setSpatialPosition](./../classes/services_conference_ConferenceService.ConferenceService.html#setSpatialPosition) method.
     *
     * **Warning**: Remote participants' audio is disabled until the participants are assigned to specific locations. We recommend calling [setSpatialPosition](./../classes/services_conference_ConferenceService.ConferenceService.html#setSpatialPosition) from the [participantAdded](./../classes/services_conference_ConferenceService.ConferenceService.html#participantadded) event to ensure that all participants are assigned to specific positions.
     *
     */
    spatialAudio?: boolean;
}
/**
 * @ignore
 */
export interface ParticipantParameters {
}
/**
 * The ParticipantInfo model contains information about a conference participant.
 */
export declare class ParticipantInfo {
    /**
     * The participant name.
     */
    name?: string;
    /**
     * The external unique identifier that the customer's application can add to the participant while opening a session. If a participant uses the same external ID in conferences, the participant's ID also remains the same across all sessions. When a second participant joins a conference using the same external ID as another participant who has already joined the conference, the SDK removes the first participant who uses this external ID and emits the [switched](./services_conference_ConferenceService.ConferenceService.html#switched) event (SDK 2.2.3+).
     *
     * **Note**: This property is required to invite participants to a conference.
     */
    externalId?: string;
    /**
     * The URL of the participant's avatar.
     */
    avatarUrl?: string;
    /**
     * @ignore
     */
    ownerId?: string;
    /**
     * @ignore
     */
    params?: ParticipantParameters;
}
/**
 * The ParticipantInvited model contains information about the invited participant.
 */
export declare class ParticipantInvited {
    /**
     * Information about the invited participant.
     */
    info: ParticipantInfo;
    /**
     * Permissions that allow a conference participant to perform limited actions within a protected conference.
     */
    permissions?: Set<ConferencePermission>;
}
/**
 * The ParticipantPermissions model contains information about a participant's permissions. The permissions allow the invited participant to perform a specific set of actions within a protected conference.
 */
export declare class ParticipantPermissions {
    /**
     * The invited participant.
     */
    participant: Participant;
    /**
     * The participant's permissions.
     */
    permissions: Set<ConferencePermission>;
}
/**
 * @ignore
 */
export interface DvwcParameters {
    inputAudioConfig?: InputAudioConfig;
    outputAudioConfig?: OutputAudioConfig;
    sessionConfig?: SessionConfig;
}
/**
 * The JoinOptions model defines how the application expects to join a conference.
 *
 * For more information related to JoinOptions in terms of media preference, see [MediaStreamConstraints](https://www.w3.org/TR/mediacapture-streams/#mediastreamconstraints).
 */
export interface JoinOptions {
    /**
     * Sets the conference [WebRTC constraints](https://webrtc.org/getting-started/media-capture-and-constraints#constraints). By default, only audio is enabled: `{audio: true, video: false}` unless a video has been started before joining a conference.
     *
     * **Note**: A video stream started before joining a conference will be added to the conference only if video constraints are unfilled.
     */
    constraints?: any;
    /**
     * Allows sending Simulcast video streams to other conference participants.
     */
    simulcast?: boolean;
    /**
     * Indicates whether a participant wants to send mono sound to a conference. By default, when using the Opus codec, participants' audio is sent as stereo. This configuration is only applicable when using the Opus codec and is available in non-Dolby Voice and Dolby Voice conferences.
     */
    preferSendMono?: boolean;
    /**
     * Indicates whether a participant wants to receive mono sound. By default, participants receive stereo audio. This configuration is only applicable when using the Opus codec and is available in non-Dolby Voice and Dolby Voice conferences.
     */
    preferRecvMono?: boolean;
    /**
     * Allows joining conferences as Mixer.
     */
    mixing?: MixingOptions;
    /**
     * Sets the maximum number of video streams that may be transmitted to the joining participant. The valid parameter's values are between 0 and 25 for desktop browsers and between 0 and 4 for mobile browsers. In the case of providing a value smaller than 0 or greater than the valid values, SDK triggers the [VideoForwardingError](./../classes/lib_Exceptions.VideoForwardingError.html). If the parameter value is not specified, the SDK automatically sets the maximum possible value: 25 for desktop browsers and 4 for mobile browsers.
     *
     * This property is available in SDK 3.1 and later.
     */
    maxVideoForwarding?: number;
    /**
     * Changes the [video forwarding strategy](./../enums/models_VideoForwarding.VideoForwardingStrategy.html) for the local participant.
     *
     * This method is available only in SDK 3.6 and later.
     */
    forwardingStrategy?: VideoForwardingStrategy;
    /**
     * The conference access token that is required to join a protected conference if the conference is created using the [create](https://docs.dolby.io/communications-apis/reference/create-conference) REST API. If the conference is created using the [create](./../classes/services_conference_ConferenceService.ConferenceService.html#create) method, the token is managed by the SDK and is not visible to the application users. For more information, see the [Enhanced Conference Access Control](https://docs.dolby.io/communications-apis/docs/guides-enhanced-conference-access-control) document.
     */
    conferenceAccessToken?: string;
    /**
     * Allows handling the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event on the application level instead of on the SDK level. By default, the SDK listens to the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event and leaves a conference when this event is triggered. When the leaveConferenceOnBeforeUnload is set to false, the SDK stops reacting on the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event, which allows customizing the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) handling. When leaveConferenceOnBeforeUnload is set to false, SDK does not react to events, such as closing a tab to leave a conference, and such events need to be also handled on the application level.
     */
    leaveConferenceOnBeforeUnload?: boolean;
    /**
     * Changes the audio codec used in Dolby Voice conferences in SDK 3.5 and later versions:
     *
     * - If set to true, the SDK uses the Dolby Voice Codec (DVC) on Chrome and Edge on desktop operating systems; on other browsers and mobile operating systems, the SDK uses Opus. In a case of a problem with using DVC in a conference, the SDK automatically switches to Opus.
     * - If set to false, the SDK uses Opus.
     *
     * By default, this parameter is set to false. For more information about the supported audio codecs, see the [Dolby Voice](https://docs.dolby.io/communications-apis/docs/guides-dolby-voice) document.
     */
    dvwc?: boolean | DvwcParameters;
    /**
     * Sets the video filter that allows blurring or changing the local participant's background. The video filters are available only to the [Desktop SDK](https://docs.dolby.io/communications-apis/docs/desktop-sdk-overview) users.
     */
    videoFilter?: VideoFilter;
    /**
     * Sets video filter options that can contain the image file for the [staticImage](./../enums/models_VideoFilters.VideoFilter.html#StaticImage) filter and information about the video stream on which the video filter should be applied.
     */
    videoFilterOptions?: VideoFilterOptions;
    /**
     * Enables spatial audio for the local participant who joins a Dolby Voice conference. By default, this parameter is set to false. When set to true in a conference that uses the individual [spatial audio style](./../enums/models_SpatialAudio.SpatialAudioStyle.html), the application must place remote participants in a 3D space using the [setSpatialPosition](./../classes/services_conference_ConferenceService.ConferenceService.html#setSpatialPosition) method.
     *
     * **Warning**: In the individual spatial audio style, remote participants' audio is disabled until the participants are assigned to specific locations. We recommend calling [setSpatialPosition](./../classes/services_conference_ConferenceService.ConferenceService.html#setSpatialPosition) from the [participantUpdated](./../classes/services_conference_ConferenceService.ConferenceService.html#participantupdated) event to ensure that all participants are assigned to specific positions.
     *
     */
    spatialAudio?: boolean;
    /**
     * @ignore
     * Checks the available [spatial audio styles](#spatialaudiostyle). The list of the available styles is based on the version of the used SDK and the spatial audio style selected during a conference creation.
     */
    supportedSpatialAudioStyles?: SupportedSpatialAudioStyles;
    /**
     * @ignore
     */
    supportedAVSyncFakeAudio?: boolean;
    /**
     * Sets the video processor that allows blurring or changing the local participant's background. This property is available only in SDK 3.7 and later.
     */
    videoProcessor?: VideoProcessor;
    /**
     * A custom video track object to add to a conference. Defining this property causes ignoring video constraints defined in the constraints property.
     */
    customVideoTrack?: MediaStreamTrack;
    /**
     * The preferred outgoing audio bitrate. Setting this property is available only while joining a non-Dolby Voice conference. Otherwise, the SDK triggers an error.
     *
     * This API is supported only in SDK 3.8 and later.
     */
    audioBitrate?: AudioBitrate;
}
