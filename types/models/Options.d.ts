import { ConferencePermission } from './Conference';
import { Participant } from './Participant';
import { InputAudioConfig, OutputAudioConfig, SessionConfig } from '@dolby-dvc/dvwc';
import { VideoFilter, VideoFilterOptions } from './VideoFilters';
/**
 * The ListenOptions model allows specifying media preference for a listener. The ListenOptions model specifies:
 *
 * - [Conference access token](#conferenceaccesstoken) that is required to join a protected conference
 * - [The maximum number](#maxvideoforwarding) of video streams that may be transmitted to the joining participant
 * - Information whether the joining participant wants to [handle](#leaveconferenceonbeforeunload) the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event on the application level
 * - Information whether the joining participant wants to enable [spatial audio](#spatialaudio)
 */
export interface ListenOptions {
    /**
     * Sets the maximum number of video streams that may be transmitted to the joining participant. The valid parameter's values are between 0 and 25 for desktop browsers and between 0 and 4 for mobile browsers. In the case of providing a value smaller than 0 or greater than the valid values, SDK triggers the [VideoForwardingError](doc:js-client-sdk-model-videoforwardingerror). If the parameter value is not specified, the SDK automatically sets the maximum possible value: 25 for desktop browsers and 4 for mobile browsers.
     */
    maxVideoForwarding?: number;
    /**
     * The conference access token that is required to join a protected conference if the conference is created using the [create](reference:postconferencecreate) REST API. If the conference is created using the [create](doc:js-client-sdk-conferenceservice#create) method, the token is managed by the SDK and is not visible to the application users. For more information, see the [Enhanced Conference Access Control](doc:guides-enhanced-conference-access-control) document.
     */
    conferenceAccessToken?: string;
    /**
     * Allows handling the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event on the application level instead of on the SDK level. By default, the SDK listens to the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event and leaves a conference when this event is triggered. When the leaveConferenceOnBeforeUnload is set to false, the SDK stops reacting on the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event, which allows customizing the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) handling. When leaveConferenceOnBeforeUnload is set to false, SDK does not react to events, such as closing a tab to leave a conference, and such events need to be also handled on the application level.
     */
    leaveConferenceOnBeforeUnload?: boolean;
    /**
     * > 🚀Pre-release
     * >
     * > This API is a part of the [Pre-release program](doc:overview-pilot-and-pre-release-programs), as a Closed Beta.
     *
     * Allows the local participant to change remote participants' locations and experience spatial audio. By default, this parameter is set to false. When set to true, the application must place the remote participants in a 3D space using the [setSpatialPosition](doc:js-client-sdk-conferenceservice#setspatialposition) method.
     *
     * [block:callout]
     * {
     * "type": "danger",
     * "title": "Warning",
     * "body": "Remote participants' audio is disabled until the participants are assigned to specific locations. We recommend calling [setSpatialPosition](doc:js-client-sdk-conferenceservice#setspatialposition) from the [participantAdded](doc:js-client-sdk-conferenceservice#participantadded) event to ensure that all participants are assigned to specific positions."
     * }
     * [/block]
     */
    spatialAudio?: boolean;
}
/**
 * The MixingOptions model notifies the server that a participant who [joins](doc:js-client-sdk-conferenceservice#join) or [replays](doc:js-client-sdk-conferenceservice#replay) a conference is a special participant called Mixer. Mixer can use the SDK in a mixer mode to record or replay a conference. For more information, see the [Recording mechanisms](doc:guides-recording-mechanisms) article.
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
 * The ReplayOptions model includes properties responsible for replaying conferences, such as the [conference access token](#conferenceaccesstoken) and the [offset](#offset) that starts replaying the recorded conference at a specific timestamp.
 */
export interface ReplayOptions {
    /**
     * Allows the application users to start replaying the recorded conference at a specific timestamp. The offset is the number of milliseconds between the beginning of the recording and the required starting point.
     */
    offset: number;
    /**
     * The conference access token.
     */
    conferenceAccessToken?: string;
}
/**
 * @ignore
 */
export interface ParticipantParameters {
}
/**
 * The ParticipantInfo model contains information about conference participants, such as the
 * [external ID](#optional-externalid), [name](#optional-name), and [URL of the participant's avatar](#optional-avatarurl).
 */
export declare class ParticipantInfo {
    /**
     * The participant's name.
     */
    name?: string;
    /**
     * The external unique identifier that the customer's application can add to the participant while opening a session. If a participant uses the same external ID in conferences, the participant's ID also remains the same across all sessions. When a second participant joins a conference using the same external ID as another participant who has already joined the conference, the SDK removes the first participant who uses this external ID and emits the [switched](doc:js-client-sdk-conferenceservice#switched) event (SDK 2.2.3+).
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
 * The ParticipantInvited model includes information about the invited participant, such as participant's additional [information](#info) and the participant's conference [permissions](#permissions).
 */
export declare class ParticipantInvited {
    /**
     * Information about the invited participant.
     */
    info: ParticipantInfo;
    /**
     * Permissions that allow a conference participant to perform limited actions during a protected conference.
     */
    permissions?: Set<ConferencePermission>;
}
/**
 * The ParticipantPermissions model includes information about the participant's permissions. The permissions allow the invited participant to perform a specific set of actions within a protected conference.
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
 * The DvwcParameters model contains information about parameters which are passed to DVWC component.
 */
export interface DvwcParameters {
    /**
     * Input audio configuration.
     */
    inputAudioConfig?: InputAudioConfig;
    /**
     * Output audio configuration.
     */
    outputAudioConfig?: OutputAudioConfig;
    /**
     * Session configuration.
     */
    sessionConfig?: SessionConfig;
}
/**
 * The JoinOptions model defines how the application expects to join a conference in terms of media preference. The JoinOptions model specifies:
 *
 * - [Conference access token](#conferenceaccesstoken) that is required to join a protected conference
 * - The [WebRTC constraints](#constraints)
 * - [The maximum number](#maxvideoforwarding) of video streams that may be transmitted to the joining participant
 * - Information whether the joining participant is a [Mixer](#mixing)
 * - Information whether the joining participant wants [sending](#prefersendmono) or [receiving](#preferrecvmono) mono sound
 * - Information whether the joining participant wants to enable [Simulcast](#simulcast)
 * - Information whether the joining participant wants to [handle](#leaveconferenceonbeforeunload) the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event on the application level
 * - The [video filter](#videofilter) that allows blurring or changing the participant's background
 * - The [video filters options](#videofilteroptions)
 * - Information whether the joining participant wants to enable [spatial audio](#spatialaudio)
 *
 * For more information related to JoinOptions, see [MediaStreamConstraints](https://www.w3.org/TR/mediacapture-streams/#mediastreamconstraints).
 */
export interface JoinOptions {
    /**
     * Sets the conference [WebRTC constraints](https://webrtc.org/getting-started/media-capture-and-constraints#constraints). By default, only audio is enabled: `{audio: true, video: false}`.
     */
    constraints?: any;
    /**
     * Enables sending the Simulcast video streams to other conference participants.
     */
    simulcast?: boolean;
    /**
     * Indicates the preference for audio transmission, either stereo or mono. The value is stereo by default, and is only applicable to non-Dolby Voice conferences.
     */
    preferSendMono?: boolean;
    /**
     * Indicates the preference for receiving audio, either stereo or mono. The value is stereo by default, and is only applicable to non-Dolby Voice conferences.
     */
    preferRecvMono?: boolean;
    /**
     * Allows joining conferences as Mixer. For Dolby Voice conferences, the web client sends mono Opus and receives stereo Opus. The two options do not affect clients connecting to Dolby Voice conferences; the behavior is hard-coded.
     */
    mixing?: MixingOptions;
    /**
     * Sets the maximum number of video streams that may be transmitted to the joining participant. The valid parameter's values are between 0 and 25 for desktop browsers and between 0 and 4 for mobile browsers. In the case of providing a value smaller than 0 or greater than the valid values, SDK triggers the [VideoForwardingError](doc:js-client-sdk-model-videoforwardingerror). If the parameter value is not specified, the SDK automatically sets the maximum possible value: 25 for desktop browsers and 4 for mobile browsers.
     */
    maxVideoForwarding?: number;
    /**
     * Activates the video forwarding strategy for the backend, unchangeable.
     * @ignore
     */
    forwardingStrategy?: boolean;
    /**
     * The conference access token that is required to join a protected conference if the conference is created using the [create](reference:postConferenceCreate) REST API. If the conference is created using the [create](doc:js-client-sdk-conferenceservice#create) method, the token is managed by the SDK and is not visible to the application users. For more information, see the [Enhanced Conference Access Control](doc:guides-conference-access-control) document.
     */
    conferenceAccessToken?: string;
    /**
     * Allows handling the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event on the application level instead of on the SDK level. By default, the SDK listens to the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event and leaves a conference when this event is triggered. When the leaveConferenceOnBeforeUnload is set to false, the SDK stops reacting on the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) event, which allows customizing the [beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) handling. When leaveConferenceOnBeforeUnload is set to false, SDK does not react to events, such as closing a tab to leave a conference, and such events need to be also handled on the application level.
     */
    leaveConferenceOnBeforeUnload?: boolean;
    /**
     * @ignore
     * Joins a conference using DVWC.
     */
    dvwc?: boolean | DvwcParameters;
    /**
     * The video filter that allows blurring or changing the local participant's background. The video filters are available only for the Dolby.io Communications SDK for Desktop users.
     */
    videoFilter?: VideoFilter;
    /**
     * Video filter options that include the image file for the [staticImage](doc:js-client-sdk-model-videofilters#staticimage) filter and information about the video stream on which the video filter should be applied.
     */
    videoFilterOptions?: VideoFilterOptions;
    /**
     * > 🚀Pre-release
     * >
     * > This API is a part of the [Pre-release program](doc:overview-pilot-and-pre-release-programs), as a Closed Beta.
     *
     * Allows the local participant to change remote participants' locations and experience spatial audio. By default, this parameter is set to false. When set to true, the application must place the remote participants in a 3D space using the [setSpatialPosition](doc:js-client-sdk-conferenceservice#setspatialposition) method.
     *
     * [block:callout]
     * {
     * "type": "danger",
     * "title": "Warning",
     * "body": "Remote participants' audio is disabled until the participants are assigned to specific locations. We recommend calling [setSpatialPosition](doc:js-client-sdk-conferenceservice#setspatialposition) from the [participantAdded](doc:js-client-sdk-conferenceservice#participantadded) event to ensure that all participants are assigned to specific positions."
     * }
     * [/block]
     */
    spatialAudio?: boolean;
}
