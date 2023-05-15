import { BaseConferenceService } from '../Service';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference/index';
import ConferenceManager from './ConferenceManager';
import { SessionService } from '..';
import { DemoOptions, JoinOptions, ListenOptions, MixingOptions, ParticipantInfo, ParticipantPermissions, ReplayOptions, ScreenshareOptions } from '../../models/Options';
import { Participant } from '../../models/Participant';
import { MediaStreamType, MediaStreamWithType } from '../../models/MediaStream';
import Conference, { ConferenceLeaveOptions } from '../../models/Conference';
import ConferenceOptions from '../../models/ConferenceOptions';
import { ParticipantQuality } from '../../models/Simulcast';
import { WebRTCStats } from '../../models/Statistics';
import AudioProcessingOptions from '../../models/AudioProcessingOptions';
import { SpatialAudioStyle, SpatialDirection, SpatialPosition, SpatialScale } from '../../models/SpatialAudio';
import { MediaManagerInterface } from '../../models/MediaDevice';
import { VideoForwardingOptions, VideoForwardingStrategy } from '../../models/VideoForwarding';
import { LocalVideo } from '../../models/LocalVideo';
import { VideoProcessor } from '../../models/VideoProcessor';
import { RemoteVideo } from '../../models/RemoteVideo';
import { LocalAudio } from '../../models/LocalAudio';
import { RemoteAudio } from '../audio/RemoteAudio';
/**
 * @ignore
 */
declare type StateDump = {
    type: 'txt' | 'zip';
    content: Blob;
};
/**
 * The ConferenceService allows an application to manage a conference life cycle and interact with the conference. Using the service, you can [create](#create), [join](#join), and [leave](#leave) conferences.
 *
 * For more information about creating and joining conferences, see the [Conferencing](https://docs.dolby.io/communications-apis/docs/conferencing-javascript) guide.
 *
 */
export declare class ConferenceService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     * @param sdk
     * @param session
     * @param helper
     * @param mediaManager
     */
    constructor(sdk: unknown, session: SessionService, mediaManager: MediaManagerInterface, localVideo: LocalVideo, remoteVideo: RemoteVideo, localAudio: LocalAudio, remoteAudio: RemoteAudio);
    /**
     * Creates a conference.
     *
     * @param options - The conference options.
     * @return {Promise<Conference>}
     *
     * @example
     *```javascript
     * const createOptions = {
     *   alias: 'My Conference',
     *   params: {
     *     dolbyVoice: true
     *   }
     * };
     *
     * const conference = await VoxeetSDK.conference.create(createOptions);
     * ```
     */
    create(options: ConferenceOptions): Promise<Conference>;
    /**
     * Provides a Conference object that allows joining a conference. The returned object is based on the cached data received from the SDK and contains the conference ID, participants list, and conference permissions.
     *
     * For more information about using the fetch method, see the [Conferencing](https://docs.dolby.io/communications-apis/docs/conferencing-javascript#joining-conferences-using-the-conference-id) document.
     *
     * @param conferenceId - The conference ID.
     * @return {Promise<Conference>}
     *
     * @example
     *```javascript
     * const conference = await VoxeetSDK.conference.fetch('conferenceId');
     * ```
     */
    fetch(conferenceId: string): Promise<Conference>;
    /**
     * Creates and joins a demo conference.
     *
     * @param options - The demo options.
     * @return {Promise<Conference|Error>}
     *
     * @example
     *```javascript
     * const conference = await VoxeetSDK.conference.demo();
     * ```
     */
    demo(options?: DemoOptions): Promise<Conference>;
    /**
     * Replays a previously recorded conference. For more information, see the [Recording Conferences](https://docs.dolby.io/communications-apis/docs/guides-recording-conferences) article.
     *
     * See also: [join](#join), [listen](#listen)
     *
     * @param conference - The conference object.
     * @param replayOptions - The replay options.
     * @param mixingOptions - The model that notifies the server that a participant who replays the conference is a special participant called Mixer.
     * @return {Promise<Conference|Error>}
     *
     * @example
     *```javascript
     * await VoxeetSDK.conference.replay(conference);
     * ```
     */
    replay(conference: Conference, replayOptions?: ReplayOptions, mixingOptions?: MixingOptions): Promise<Conference>;
    /**
     * Joins a conference as a listener. You can choose to either [join](#join), [replay](#replay), or [listen](#listen) to a conference. The `listen` method connects to the conference in the receiving only mode which does not allow transmitting video or audio.
     *
     * **Note**: Conference events from other listeners are not available for listeners. Only users will receive conference events from other listeners.
     *
     * See also: [join](#join), [replay](#replay)
     *
     * @param conference - The conference object.
     * @param options - The additional options for the joining listener.
     * @return {Promise<Conference|Error>}
     *
     * @example
     *```javascript
     * await VoxeetSDK.conference.listen(conference);
     * ```
     */
    listen(conference: Conference, options?: ListenOptions): Promise<Conference>;
    /**
     * Joins the conference.
     *
     * **Warning**: If you use SDK 3.7 or later and use two different URLs for serving your application and hosting the SDK through a Content Delivery Network (CDN), you must enable cross-origin resource sharing (CORS) to join a conference using the Dolby Voice Codec. To enable CORS, see the [Install the SDK](https://docs.dolby.io/communications-apis/docs/initializing-javascript#install-the-sdk) instruction.
     *
     * @example
     *```javascript
     * // For example
     * let constraints = {
     *   audio: true,
     *   video: {
     *     width: {
     *       min: "320",
     *       max: "1280"
     *     },
     *     height: {
     *       min: "240",
     *       max: "720"
     *     }
     *   }
     * };
     *
     * // A simplest example of constraints would be:
     * constraints = { audio: true, video: true };
     *
     * await VoxeetSDK.conference.join(conference, {constraints: constraints});
     * ```
     *
     * **Note**: Participants who use Apple Mac OS and the Safari browser to join conferences may experience problems with distorted audio. To solve the problem, we recommend using the latest version of Safari.
     * <br>
     * <br>
     * **Note**: Due to a known Firefox issue, a user who has never permitted Firefox to use a microphone and camera cannot join a conference as a listener. If you want to join a conference as a listener using the Firefox browser, make sure that Firefox has permission to use your camera and microphone. To check the permissions, follow these steps:
     * <br>
     * <br>
     * **1.** Select the lock icon in the address bar. </br>
     * **2.** Select the right arrow placed next to `Connection Secure`. </br>
     * **3.** Select `More information`. </br>
     * **4.** Go to the `Permissions` tab. </br>
     * **5.** Look for the `Use the camera` and `Use the microphone` permission and select the `Allow` option.
     * <br>
     * <br>
     * See also: [listen](#listen), [replay](#replay)
     *
     * @param conference - The conference object.
     * @param options - The additional options for the joining participant.
     * @return {Promise<Conference|Error>}
     */
    join(conference: Conference, options: JoinOptions): Promise<Conference>;
    private _join;
    /**
     * Updates the participant's conference permissions. If a participant does not have permission to perform a specific action, this action is not available for this participant during a conference, and the participant receives [InsufficientPermissionsError](./lib_Exceptions.ConferenceError.html). If a participant started a specific action and then lost permission to perform this action, the SDK stops the blocked action. For example, if a participant started sharing a screen and received the updated permissions that do not allow him to share a screen, the SDK stops the screen sharing session and the participant cannot start sharing the screen again.
     *
     * ```javascript
     * VoxeetSDK.conference.updatePermissions(participantPermissions: Array<ParticipantPermissions>)
     * ```
     *
     * @param participantPermissions - The updated participant's permissions.
     *
     * @example
     *```javascript
     * const participant = VoxeetSDK.conference.participants.get('participantId');
     * await VoxeetSDK.conference.updatePermissions([
     *   {
     *     participant: participant,
     *     permissions: [ 'JOIN', 'SEND_AUDIO', 'SEND_VIDEO', 'SEND_MESSAGE' ]
     *   }
     * ]);
     * ```
     */
    updatePermissions(participantPermissions: Array<ParticipantPermissions>): Promise<any>;
    /**
     * Leaves a conference.
     * @param options
     *
     * @example
     *```javascript
     * await VoxeetSDK.conference.leave();
     * ```
     */
    leave(options?: ConferenceLeaveOptions): Promise<void>;
    /**
     * Allows playing audio that is blocked by the browser's auto-play policy.
     */
    playBlockedAudio(): Promise<void>;
    /**
     * Stops playing the specified remote participants' audio to the local participant or stops playing the local participant's audio to the conference. The mute method does not notify the server to stop audio stream transmission. To stop sending an audio stream to the server, use the [stop](./services_audio_LocalAudio.LocalAudio.html#stop) method. To stop receiving an audio stream from the server, use the [stop](./services_audio_RemoteAudio.RemoteAudio.html#stop) method.
     *
     * The mute method depends on the Dolby Voice usage:
     *
     * - In non-Dolby Voice conferences, conference participants can mute themselves or remote participants.
     * - In Dolby Voice conferences, conference participants can only mute themselves.
     *
     * If you wish to mute remote participants in Dolby Voice conferences, you must use the [stop](./services_audio_RemoteAudio.RemoteAudio.html#stop) API. This API allows the conference participants to stop receiving the specific audio streams from the server.
     *
     * **Note**: In SDK 2.4 and prior releases, if a conference participant calls the mute method, empty frames are sent to other participants. Due to a Safari issue, participants who join a conference using Safari and start receiving the empty frames can experience a Safari crash. Due to a different API implementation in SDK 3.0, this problem does not occur in Dolby Voice conferences.
     *
     * @param participant - The local or remote conference participant.
     * @param isMuted - A boolean that indicates the desired mute state to either mute or un-mute a participant.
     *
     * @example
     *```javascript
     * // Mute a remote participant
     * VoxeetSDK.conference.mute(participant, true);
     *
     * // Unmute a remote participant
     * VoxeetSDK.conference.mute(participant, false);
     * ```
     */
    mute(participant: Participant, isMuted: boolean): void;
    /**
     * Toggles mute on a participant.
     * @param participant
     * @return Mute state of the participant
     * @ignore
     */
    toggleMute(participant: Participant): boolean;
    /**
     * Gets the current mute state of the local participant.
     *
     * @return
     */
    isMuted(): boolean;
    /**
     * Controls playing remote participants' audio to the local participant.
     * @param isMuted The mute state. True indicates that the local participant's application does not play the remote participants' audio, false indicates that the local participant's application plays the remote participants' audio.
     */
    muteOutput(isMuted: boolean): Promise<void>;
    /**
     * Gets a participant's audio level. The method allows getting the audio level of either only the local participant or all participants, depending on the conference type and the codec used:
     *
     * <table>
     * <thead>
     *   <tr>
     *     <th>Conference type</th>
     *     <th>Codec</th>
     *     <th>Participants whose audio level you can get</th>
     *   </tr>
     * </thead>
     * <tbody>
     *   <tr>
     *     <td>Dolby Voice</td>
     *     <td>DVC</td>
     *     <td>All participants</td>
     *   </tr>
     *   <tr>
     *     <td>Dolby Voice</td>
     *     <td>Opus</td>
     *     <td>Local participant</td>
     *   </tr>
     *   <tr>
     *     <td>Non-Dolby Voice</td>
     *     <td>Opus</td>
     *     <td>All participants</td>
     *   </tr>
     * </tbody>
     * </table>
     *
     * The possible values of the audio level are in a range from 0.0 to 1.0.
     *
     * @param participant - The conference participant.
     * @param callback - The callback that retrieves the audio level.
     *
     * @example
     *```javascript
     * const participant = VoxeetSDK.session.participant;
     * VoxeetSDK.conference.audioLevel(participant, (audioLevel) => {
     *   console.log(`Audio level: ${audioLevel}`);
     * });
     * ```
     */
    audioLevel(participant: Participant, callback: Function): any;
    /**
     * Gets the participant's current speaking status for an active talker indicator. This method must be called repeatedly during a conference.
     * @param participant - The conference participant.
     * @param callback - The callback that accepts a boolean value indicating the participant's current speaking status. If the boolean value is true, the callback can mark the participant as an active talker in the application UI.
     *
     * @example
     *```javascript
     * const participant = VoxeetSDK.session.participant;
     * VoxeetSDK.conference.isSpeaking(participant, (isSpeaking) => {
     *   console.log(`Is speaking: ${isSpeaking}`);
     * });
     * ```
     */
    isSpeaking(participant: Participant, callback: Function): any;
    /**
     * @ignore
     * Advanced Users only.
     * @param stream
     * @param type
     */
    startStream(stream: MediaStream, type?: MediaStreamType): Promise<any>;
    /**
     * @ignore
     * @param stream
     */
    stopStream(stream: MediaStream): void;
    /**
     * @deprecated
     * This method is deprecated in SDK 3.7 and replaced with the **start** methods that are available in the [LocalVideo](./../interfaces/models_LocalVideo.LocalVideo.html) and [RemoteVideo](./../interfaces/models_RemoteVideo.RemoteVideo.html) models.
     *
     * Notifies the server to either start sending the local participant's video stream to the conference or start sending a remote participant's video stream to the local participant. The startVideo method does not control the remote participant's video stream; if a remote participant does not transmit any video stream, the local participant cannot change it using the startVideo method.
     *
     * @param participant - Either the local or remote participant.
     * @param constraints - The [WebRTC video constraints](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamconstraints-video).
     *
     * @return {Promise<Error>}
     *
     * @example
     *```javascript
     * const videoConstraints = {
     *     width: {
     *         min: "320",
     *         max: "1280"
     *     },
     *     height: {
     *         min: "240",
     *         max: "720"
     *     }
     * };
     *
     * await VoxeetSDK.conference.startVideo(VoxeetSDK.session.participant, videoConstraints);
     * ```
     */
    startVideo(participant: Participant, constraints: any): Promise<void>;
    /**
     * Don't check if conference is initialized.
     * @ignore
     */
    startVideoInternal(participant: Participant, constraints?: MediaTrackConstraints, processor?: VideoProcessor): Promise<void>;
    /**
     * @deprecated
     * This method is deprecated in SDK 3.7 and replaced with the **stop** methods that are available in the [LocalVideo](./../interfaces/models_LocalVideo.LocalVideo.html) and [RemoteVideo](./../interfaces/models_RemoteVideo.RemoteVideo.html) models.
     *
     * Notifies the server to either stop sending the local participant's video stream to the conference or stop sending a remote participant's video stream to the local participant.
     * @param participant - Either the local or remote participant.
     * @return {Promise<Error>}
     */
    stopVideo(participant: Participant): Promise<void>;
    /**
     * Don't check if conference is initialized.
     * @ignore
     */
    stopVideoInternal(participant: Participant, constraints?: MediaTrackConstraints): Promise<void>;
    /**
     * @deprecated This method was introduced in SDK 3.1 and deprecated in SDK 3.6.
     * <br>
     * <br>
     * Sets the maximum number of video streams that may be transmitted to the local participant. This method also allows the local participant to use a pin option to prioritize the specific participant's video streams and display their videos even when these participants do not talk. For more information, see the [Video Forwarding](https://docs.dolby.io/communications-apis/docs/guides-video-forwarding) article.
     *
     * @param max - The maximum number of video streams that may be transmitted to the local participant. The valid parameter's values are between 0 and 25 for desktop browsers and between 0 and 4 for mobile browsers. In the case of providing a value smaller than 0 or greater than the valid values, SDK triggers the [VideoForwardingError](./lib_Exceptions.VideoForwardingError.html). If the parameter value is not specified, the SDK automatically sets the maximum possible value: 25 for desktop browsers and 4 for mobile browsers.
     * @param participants - The list of the prioritized participants. This parameter allows using a pin option to prioritize specific participant's video streams and display their videos even when these participants do not talk.
     * @return {Promise<Error>}
     */
    videoForwarding(max: number, participants?: Array<Participant>): Promise<void>;
    /**
     * Sets the video forwarding functionality for the local participant. The method allows:
     * - Setting the maximum number of video streams that may be transmitted to the local participant
     * - Prioritizing specific participants' video streams that need to be transmitted to the local participant
     * - Changing the [video forwarding strategy](./../enums/models_VideoForwarding.VideoForwardingStrategy.html) that defines how the SDK should select conference participants whose videos will be received by the local participant
     *
     * This method is available only in SDK 3.6 and later and is not available for [Real-time Streaming viewers](../enums/models_Options.ListenType.html#Mixed). Calling this method by an RTS viewer triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     * @param VideoForwardingOptions - The video forwarding options.
     * @return {Promise<void>}
     *
     * @example
     *```javascript
     * // Request the last 3 active speakers and always receive the video
     * // from participantA and participantB.
     * await VoxeetSDK.conference.videoForwarding({
     *   strategy: 'lastSpeakerStrategy',
     *   max: 5,
     *   participants: [ participantA, participantB ]
     * });
     * ```
     */
    videoForwarding({ strategy, max, participants }: VideoForwardingOptions): Promise<void>;
    /**
     * @deprecated
     * This method is deprecated in SDK 3.7 and replaced with the [setCaptureMode](./services_audio_LocalAudio.LocalAudio.html#setCaptureMode) method.
     *
     * Enables and disables audio processing for the local participant in Dolby Voice conferences.
     *
     * @param participant - The conference participant.
     * @param options - The audio processing information.
     * @return {Promise<Error>}
     */
    audioProcessing(participant: Participant, options: AudioProcessingOptions): Promise<void>;
    /**
     * @deprecated
     * This method is deprecated in SDK 3.7 and replaced with the **start** methods that are available in the [LocalAudio](./services_audio_LocalAudio.LocalAudio.html) and [RemoteAudio](./services_audio_RemoteAudio.RemoteAudio.html) models.
     *
     * Starts audio transmission between the local client and a conference. The startAudio method impacts only the audio streams that the local participant sends and receives; the method does not impact the audio transmission between remote participants and a conference and does not allow the local participant to force sending remote participants’ streams to the conference or to the local participant. Depending on the specified participant in the `participant` parameter, the startAudio method starts the proper audio transmission:
     *
     * - When the specified participant is the local participant, startAudio ensures sending local participant’s audio from the local client to the conference.
     *
     * - When the specified participant is a remote participant, startAudio ensures sending remote participant’s audio from the conference to the local client. This allows the local participant to unmute remote participants who are locally muted through the [stopAudio](#stopaudio) method.
     *
     * The startAudio method in Dolby Voice conferences is not available for listeners and triggers [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * The SDK automatically manages audio rendering, which means that the application does not need to implement its own `<audio>` element. The application can use the [selectAudioInput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioInput) and [selectAudioOutput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioOutput) methods to select the proper audio input and output devices.
     *
     * The startAudio method requires a few seconds to become effective.
     *
     * @param participant - The selected participant. If you wish to transmit the local participant's audio stream to the conference, provide the local participant's object. If you wish to receive the specific remote participants' audio streams, provide these remote participants' objects.
     *
     * @return {Promise<Error>}
     */
    startAudio(participant: Participant): Promise<MediaStreamTrack> | Promise<void>;
    /**
     * @deprecated
     * This method is deprecated in SDK 3.7 and replaced with the **stop** methods that are available in the [LocalAudio](./services_audio_LocalAudio.LocalAudio.html) and [RemoteAudio](./services_audio_RemoteAudio.RemoteAudio.html) models.
     *
     * Stops audio transmission between the local client and a conference. The stopAudio method impacts only the audio streams that the local participant sends and receives; the method does not impact the audio transmission between remote participants and a conference and does not allow the local participant to stop sending remote participants’ streams to the conference. Depending on the specified participant in the `participant` parameter, the stopAudio method stops the proper audio transmission:
     *
     * - When the specified participant is the local participant, stopAudio stops sending local participant’s audio from the local client to the conference.
     *
     * - When the specified participant is a remote participant, stopAudio stops sending remote participant’s audio from the conference to the local client. This allows the local participant to locally mute remote participants.
     *
     * The stopAudio method in Dolby Voice conferences is not available for listeners and triggers [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * Leaving a conference resets the stopAudio settings. Participants who rejoin a conference need to provide the desired stopAudio parameters and call the stopAudio method once again.
     *
     * The stopAudio method requires a few seconds to become effective.
     *
     * **Warning**: If you use the stopAudio method on remote participants in non-Dolby Voice conferences, do not rely on the [streamAdded](#streamadded) and [streamRemoved](#streamremoved) events to determine the attendee list. When the local participant uses the stopAudio method on a specific remote participant while the local participant does not receive any video stream from this participant, the local participant receives the [streamRemoved](#streamremoved) event. If the application uses the [streamRemoved](#streamremoved) event to determine the list of conference participants, the application may incorrectly show that the muted participant is not present at a conference.
     *
     * @param participant - The selected participant. If you wish to not transmit the local participant's audio stream to the conference, provide the local participant's object. If you wish to not receive the specific remote participants' audio streams, provide these remote participants' objects.
     * @return {Promise<Error>}
     */
    stopAudio(participant: Participant): Promise<void>;
    /**
     * @deprecated
     * This method is deprecated in SDK 3.9 and replaced with a new startScreenShare method.
     * Starts a screen-sharing session. This method is not available on mobile browsers; participants who join a conference using a mobile browser cannot share a screen.
     *
     * @param sourceId - The device ID. If you use multiple screens, use this parameter to specify which screen you want to share.
     *
     * @return {Promise<Error>}
     *
     * @example
     *```javascript
     * await VoxeetSDK.conference.startScreenShare();
     * ```
     */
    startScreenShare(sourceId?: any): Promise<void>;
    /**
     * Starts sharing the local participant's screen. This method is not available on mobile browsers; participants who join a conference using a mobile browser cannot share their screens. The method is available in SDK 3.9 and later and is not supported for [listeners](../enums/models_Participant.ParticipantType.html#LISTENER). Calling this method by a listener results in the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * By default, the method supports sending the computer's audio to remote participants while sharing a screen. However, this functionality is enabled and supported only on Chrome and Edge for users who use the Opus codec. On Windows, the method allows sending the system's audio. On macOS, the method allows sending audio only from a browser tab. This functionality is not supported for any other SDK, which means that participants who use, for example, the iOS SDK cannot hear the shared audio. In case of experiencing audio issues while sharing system audio, see the [Troubleshooting](https://docs.dolby.io/communications-apis/docs/troubleshooting-screen-share-audio-issues) guide.
     *
     * @param options - Options that allow you to select a screen, send the computer's audio, and modify parameters of the shared screen.
     */
    startScreenShare(options: ScreenshareOptions): Promise<void>;
    /**
     * Stops the screen-sharing session. This method is not available for [listeners](./enums/models_Participant.ParticipantType.html#LISTENER). Calling this method by a listener results in the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     * @return {Promise<Error>}
     *
     * @example
     *```javascript
     * await VoxeetSDK.conference.stopScreenShare();
     * ```
     */
    stopScreenShare(): Promise<any>;
    /**
     * Provides [standard WebRTC statistics](https://www.w3.org/TR/webrtc-stats/#dom-rtcstatstype) for the application. Based on the WebRTC statistics, the SDK computes [audio and video statistics](./../interfaces/models_Conference.QualityIndicator.html). Calling this function at a higher frequency than 2Hz will have no effect.
     * @return {Promise<Statistics>}
     */
    localStats(): WebRTCStats;
    /**
     * Sets the quality of the received Simulcast streams. For more information, see the [Simulcast](https://docs.dolby.io/communications-apis/docs/guides-simulcast) guide.
     *
     * @param requested - An array that contains stream qualities for specific conference participants.
     *
     * @return {Promise<any>}
     */
    simulcast(requested: Array<ParticipantQuality>): Promise<any>;
    /**
     * Allows the conference owner, or a participant with adequate permissions, to kick another participant from the conference by revoking the conference access token. The kicked participant cannot join the conference again.
     *
     * This method is not available for [Real-time Streaming viewers](../enums/models_Options.ListenType.html#Mixed) and triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * @param participant - The participant who needs to be kicked from the conference.
     *
     * @example
     *```javascript
     * await VoxeetSDK.conference.kick(participant);
     * ```
     *
     */
    kick(participant: Participant): Promise<any>;
    /**
     * Generates state dump for purpose of failure investigation.
     * @ignore
     */
    createStateDump(): Promise<StateDump>;
    /**
     * @returns an audio logging length
     * @ignore
     */
    getStateDumpConfiguration(): Promise<any>;
    /**
     * @param audioLoggingLength - Length in seconds of internal audio logging.
     * @ignore
     */
    configureStateDump(audioLoggingLength: number): Promise<any>;
    /**
     * Sets a participant's position in space to enable the spatial audio experience during a Dolby Voice conference. This method is available only to participants who joined the conference using the [join](#join) method with the [spatialAudio](./../interfaces/models_Options.JoinOptions.html#spatialAudio) parameter enabled. Otherwise, SDK triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html) error. To set a spatial position for listeners, use the [Set Spatial Listeners Audio](https://docs.dolby.io/communications-apis/reference/set-spatial-listeners-audio) REST API.
     *
     * Depending on the specified participant in the `participant` parameter, the setSpatialPosition method impacts the location from which audio is heard or from which audio is rendered:
     *
     * - When the specified participant is the local participant, setSpatialPosition sets a location from which the local participant listens to a conference. If the local participant does not have an established location, the participant hears audio from the default location (0, 0, 0).
     *
     * - When the specified participant is a remote participant, setSpatialPosition ensures the remote participant's audio is rendered from the specified location in space. Setting the remote participants’ positions is required in conferences that use the individual [spatial audio style](./../enums/models_SpatialAudio.SpatialAudioStyle.html). In these conferences, if a remote participant does not have an established location, the participant does not have a default position and will remain muted until a position is specified. The shared spatial audio style does not support setting the remote participants' positions. In conferences that use the shared style, the spatial scene is shared by all participants, so that each client can set a position and participate in the shared scene.
     *
     * For example, if a local participant Eric, who uses the individual spatial audio style and does not have a set direction, calls setSpatialPosition(VoxeetSDK.session.participant, {x:3,y:0,z:0}), Eric hears audio from the position (3,0,0). If Eric also calls setSpatialPosition(Sophia, {x:7,y:1,z:2}), he hears Sophia from the position (7,1,2). In this case, Eric hears Sophia 4 meters to the right, 1 meter above, and 2 meters in front. The following graphic presents the participants' locations:
     *
     * <img src="https://files.readme.io/d4d9f7a-05_Axis_People_v04_220202.png" width="700"/>
     *
     * If sending the updated positions to the server fails, the SDK generates the ConferenceService event error that includes [SpatialAudioError](./lib_Exceptions.SpatialAudioError.html).
     *
     * @param participant - The selected participant. Using the local participant sets the location from which the participant will hear a conference. Using a remote participant sets the position from which the participant's audio will be rendered.
     * @param position - The participants' audio location.
     *
     * @example
     *```javascript
     * const participant = VoxeetSDK.session.participant;
     * VoxeetSDK.conference.setSpatialPosition(participant, {
     *   x: 10,
     *   y: 10,
     *   z: 0
     * });
     * ```
     */
    setSpatialPosition(participant: Participant, position: NonNullable<SpatialPosition>): void;
    /**
     * Sets the direction the local participant is facing in space. This method is available only to participants who joined the conference using the [join](#join) method with the [spatialAudio](./../interfaces/models_Options.JoinOptions.html#spatialAudio) parameter enabled. Otherwise, SDK triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html) error. To set a spatial direction for listeners, use the [Set Spatial Listeners Audio](https://docs.dolby.io/communications-apis/reference/set-spatial-listeners-audio) REST API.
     *
     * If the local participant hears audio from the position (0,0,0) facing down the Z-axis and locates a remote participant in the position (1,0,1), the local participant hears the remote participant from their front-right. If the local participant chooses to change the direction they are facing and rotate +90 degrees about the Y-axis, then instead of hearing the speaker from the front-right position, they hear the speaker from the front-left position. The following video presents this example:
     *
     * <div style="text-align:center"><video controls width="700"> <source src="https://s3.us-west-1.amazonaws.com/static.dolby.link/videos/readme/communications/spatial/07_setSpatialDirection_v03_220131.mp4" type="video/mp4"> Sorry, your browser doesn't support embedded videos.</video></div>
     *
     * For more information, see the [SpatialDirection](doc:js-client-sdk-model-spatialdirection) model.
     *
     * @param participant - The local participant.
     * @param direction - The direction the participant is facing in space.
     *
     * @example
     *```javascript
     * const participant = VoxeetSDK.session.participant;
     * VoxeetSDK.conference.setSpatialDirection(participant, {
     *   x: 1,
     *   y: 1,
     *   z: 1
     * });
     * ```
     */
    setSpatialDirection(participant: Participant, direction: SpatialDirection): void;
    /**
     * Configures a spatial environment of an application, so the audio renderer understands which directions the application considers forward, up, and right and which units it uses for distance.
     *
     * This method is available only to participants who joined a conference using the [join](#join) method with the [spatialAudio](./../interfaces/models_Options.JoinOptions.html#spatialAudio) parameter enabled. Otherwise, SDK triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html) error. To set a spatial environment for listeners, use the [Set Spatial Listeners Audio](https://docs.dolby.io/communications-apis/reference/set-spatial-listeners-audio) REST API.
     *
     * If not called, the SDK uses the default spatial environment, which consists of the following values:
     *
     * - `forward` = (0, 0, 1), where +Z axis is in front
     * - `up` = (0, 1, 0), where +Y axis is above
     * - `right` = (1, 0, 0), where +X axis is to the right
     * - `scale` = (1, 1, 1), where one unit on any axis is 1 meter
     *
     * The default spatial environment is presented in the following diagram:
     *
     * <img src="https://files.readme.io/e43475b-defaultEnv.png" width="700">
     *
     * If sending the updated positions to the server fails, the SDK generates the ConferenceService event error that includes [SpatialAudioError](./lib_Exceptions.SpatialAudioError.html).
     *
     * @param scale - A scale that defines how to convert units from the coordinate system of an application (pixels or centimeters) into meters used by the spatial audio coordinate system. For example, if SpatialScale is set to (100,100,100), it indicates that 100 of the applications units (cm) map to 1 meter for the audio coordinates. In such a case, if the listener's location is (0,0,0)cm and a remote participant's location is (200,200,200)cm, the listener has an impression of hearing the remote participant from the (2,2,2)m location. The scale value must be greater than 0. Otherwise, SDK emits [ParameterError](./lib_Exceptions.ParameterError.html). For more information, see the [Spatial Audio](https://docs.dolby.io/communications-apis/docs/guides-integrating-individual-spatial-audio#configure-the-spatial-environment-scale) article.
     * @param forward - A vector describing the direction the application considers as forward. The value must be orthogonal to up and right. Otherwise, SDK emits [ParameterError](./lib_Exceptions.ParameterError.html).
     * @param up - A vector describing the direction the application considers as up. Must be orthogonal to forward and right. Otherwise, SDK emits [ParameterError](./lib_Exceptions.ParameterError.html).
     * @param right - A vector describing the direction the application considers as right. Must be orthogonal to forward and up. Otherwise, SDK emits [ParameterError](./lib_Exceptions.ParameterError.html).
     *
     * @example
     *```javascript
     * const scale = { x: 100, y: 100, z: 1 };
     * const forward = { x: 0, y: -1, z: 0 };
     * const up = { x: 0, y: 0, z: 1 };
     * const right = { x: 1, y: 0, z: 0 };
     * VoxeetSDK.conference.setSpatialDirection(scale, forward, up, right);
     * ```
     */
    setSpatialEnvironment(scale: SpatialScale, forward: SpatialPosition, up: SpatialPosition, right: SpatialPosition): void;
    private qualityIndicators;
    protected onConferenceCreated(): void;
    protected onConferenceJoined(e: ConferenceJoined): void;
    protected onConferenceLeft(e: ConferenceLeft): void;
    private onConferenceEnded;
    private onConferenceDestroyed;
    private onConferenceStats;
    private onConferenceGlobalError;
    private onOfferCreated;
    private onActiveSpeakerChange;
    private onDvcsMetric;
    /**
     *
     * @ignore
     */
    private onUpdateToken;
    /**
     * Updates the participant's permissions by decoding the conference access token.
     * @ignore
     */
    private updatePermissionsFromToken;
    private getPermissionsFromToken;
    private onParticipantAdded;
    private onParticipantUpdated;
    private onParticipantKicked;
    private onParticipantSwitched;
    private onOwnParticipantSwitched;
    /**
     * @ignore
     */
    onAutoplayBlocked(): void;
    /**
     * @ignore
     * @param peerId
     * @param stream
     */
    onStreamAdded(participant: Participant, stream: MediaStreamWithType): void;
    /**
     * @ignore
     * @param peerId
     * @param stream
     */
    private onStreamUpdated;
    /**
     * @ignore
     * @param peerId
     * @param stream
     */
    private onStreamRemoved;
    /**
     * @ignore
     */
    get peerConnectionStatus(): String;
    /**
     * Returns a list of [users](./../enums/models_Participant.ParticipantType.html#USER) who are present at a conference. The local participant is also included on the list, even if the local participant is a [listener](./../enums/models_Participant.ParticipantType.html#LISTENER).
     */
    get participants(): Map<string, Participant>;
    /**
     * Returns the number of video streams that are transmitted to the local user.
     */
    get maxVideoForwarding(): number;
    /**
     * @ignore
     */
    get videoForwardingStrategy(): VideoForwardingStrategy;
    /**
     * Returns information about the current conference. Use this accessor if you wish to receive information that is available in the [Conference](./models_Conference.Conference.html) object, such as the conference alias, ID, information whether the conference is new, conference parameters, local participant's conference permissions, conference PIN code, or conference status.
     *
     * For example, use the following code to ask about the local participant's conference permissions:
     *
     * ```JavaScript
     * VoxeetSDK.conference.current.permissions
     * ```
     */
    get current(): Conference | null;
    /**
     * @ignore
     */
    get manager(): ConferenceManager;
    /**
     * @ignore
     */
    get spatialAudioStyle(): SpatialAudioStyle | null;
    /**
     * @ignore
     */
    get leaveConferenceOnBeforeUnload(): boolean;
    private onLocalVideoStarted;
    private onLocalVideoStopped;
    private onLocalVideoUpdated;
    private onRtsStatusUpdated;
    private isJoinedAsRTSViewer;
    updateParticipantInfo(participantInfo: ParticipantInfo): Promise<void>;
}
export {};
