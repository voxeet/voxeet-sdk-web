import { Participant } from '../../models/Participant';
import { MediaStreamWithType } from '../../models/MediaStream';
import { QualityIndicator, ConferencePermission } from '../../models/Conference';
/**
 * Emitted when [WebSocketError](doc:js-client-sdk-model-websocketerror), PeerConnectionFailedError, or PeerDisconnectedError occurred.
 *
 * PeerConnectionFailedError and PeerDisconnectedError are [PeerErrors](doc:js-client-sdk-model-peererror) with the `failed` and `disconnected` [PeerConnectionState](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState) value.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param error - The received error.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.conference.on("error", error => {
 *
 * });
 * ```
 */
export declare function error(error: Error): void;
/**
 * Emitted when the application has successfully joined the conference.
 * @asMemberOf ConferenceService
 * @event
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.conference.on("joined", () => {
 *
 * });
 * ```
 */
export declare function joined(): void;
/**
 * Emitted when the application has left the conference.
 * @asMemberOf ConferenceService
 * @event
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.conference.on("left", () => {
 *
 * });
 * ```
 */
export declare function left(): void;
/**
 * Emitted when the replayed conference has ended.
 * @asMemberOf ConferenceService
 * @event
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.conference.on("ended", () => {
 *
 * });
 * ```
 */
export declare function ended(): void;
/**
 * Emitted when a new participant joins a conference using the same external ID as another participant who has joined this conference earlier. This event may occur when a participant joins the same conference using another browser or device. In such a situation, the SDK removes the participant who has joined the conference earlier.
 *
 *
 * @asMemberOf ConferenceService
 * @event
 *
 */
export declare function switched(): void;
/**
 * Emitted when a participant is added to the conference. The SDK does not emit the participantAdded event for the local participant.
 *
 * To handle large webinars, we disabled the participantAdded events for listeners. Listeners will only receive events about users; they do not receive events for other listeners. In a conference that uses the participantAdded events, users will only receive events about the first 250 listeners, and will receive all events from other users.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param participant - The invited participant who is added to a conference.
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('participantAdded', (user) => {
 *
 * });
 * ```
 */
export declare function participantAdded(participant: Participant): void;
/**
 * Emitted when a participant changes [ParticipantStatus](model/participantstatus). The following graphic shows possible status changes during a conference:
 *
 * <img src="../assets/web_participant_status.png" alt="screen-share" title="Screen share" width="1000"/>
 *
 * To handle large webinars, we disabled the participantUpdated events for listeners. Listeners will only receive events about users; they do not receive events for other listeners. In a conference that uses the participantUpdated events, users will only receive events about the first 250 listeners, and will receive all events from other users.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param participant - The conference participant who changed status.
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('participantUpdated', (participant) => {
 *
 * });
 * ```
 */
export declare function participantUpdated(participant: Participant): void;
/**
 * Emitted when conference participant's audio streams are blocked by a browser's auto-play policy that requires access to the participant's camera.
 * When this event occurs, the application requests permission to play the incoming audio stream. After a user interaction (click or touch),
 * the application calls the [playBlockedAudio](#playblockedaudio) method to play the audio stream.
 *
 * @asMemberOf ConferenceService
 * @event
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('autoplayBlocked', () => {
 * 		const button = document.getElementById("unmute_audio")
 *		button.onclick = () => {
 *			VoxeetSDK.conference.playBlockedAudio();
 *		}
 * });
 * ```
 */
export declare function autoplayBlocked(): void;
/**
 * Emitted in the following situations:
 * - A conference participant with disabled audio and video enables audio or video
 * - A conference participant starts sharing a screen
 *
 * Each conference participant can be connected to two streams: `audio and video stream` and `screen-share stream`. If a participant enables audio or video, the SDK adds the `audio and video stream` to the participant. However, when a participant who is connected to the `audio and video stream` changes the stream, the SDK updates the `audio and video stream`. For example, this situation occurs when a participant who enabled a microphone also enables a camera. In such a situation, the SDK emits the [streamUpdated](#streamupdated) event. The following graphic shows this behavior:
 *
 * <img src="/images/streams_events_3.png" alt="Audio streams map"
 * 	title="Audio streams map" width="1500">
 *
 * When a participant joins a conference with enabled audio and video, the SDK emits the streamAdded event that includes audio and video tracks.
 *
 * **Note**: In Dolby Voice conferences, each conference participant receives only one mixed audio stream from the server. To keep backward compatibility with the customers' implementation, SDK 3.0 introduces a faked audio track for audio transmission. The faked audio track is included in the streamAdded and [streamRemoved](#streamremoved) events. The SDK 3.0 takes the audio stream information from the [participantAdded](#participantadded) and [participantUpdated](#participantupdated) events.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param participant - The participant whose stream was added to a conference.
 * @param stream - The added media stream.
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('streamAdded', (participant, stream) => {
 *		var node = document.getElementById("received_video");
 * 		navigator.attachMediaStream(node, stream);
 * });
 * ```
 */
export declare function streamAdded(participant: Participant, stream: MediaStreamWithType): void;
/**
 * Emitted when a conference participant who is connected to the `audio and video` stream changes the stream by enabling a microphone while using a camera or by enabling a camera while using a microphone. The event is emitted to all conference participants. The following graphic shows this behavior:
 *
 * [block:image]
 *{
 *  "images": [
 *    {
 *      "image": [
 *        "https://files.readme.io/21575c1-conference-stream-added.png",
 *        "conference-stream-added.png",
 *        3048,
 *        2060,
 *        "#f6f7f7"
 *      ],
 *      "caption": "The difference between the streamAdded and streamUpdated events"
 *    }
 *  ]
 *}
 *[/block]
 *
 * The SDK can also emit the streamUpdated event only for the local participant. When the local participant uses the [stopAudio](#stopaudio) or [startAudio](#startaudio) method to locally mute or unmute a selected remote participant who uses a camera, the local participant receives the streamUpdated event.
 *
 * The streamUpdated event can be also triggered by a load rebalance mechanism that prevents a conference from overloading. When a new participant joins a conference, the SDK creates a PeerConnection with a media server. When too many participants are connected to a specific server, they may overload a conference. To avoid this scenario, the load and rebalance mechanism closes PeerConnection between a participant who may overload a conference and a media server and creates a new PeerConnection with a new server. This mechanism is almost invisible for conference participants; the SDK only emits the streamUpdated event.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param participant - The participant whose stream was updated during a conference.
 * @param stream - The updated media stream.
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('streamUpdated', (participant, stream) => {
 *		var node = document.getElementById("received_video");
 * 		navigator.attachMediaStream(node, stream);
 * });
 * ```
 */
export declare function streamUpdated(participant: Participant, stream: MediaStreamWithType): void;
/**
 * Emitted when a participant removes `audio and video stream` or `screen-share stream` by disabling audio and video or by stopping a screen-share presentation.
 *
 * **Note**: In Dolby Voice conferences, each conference participant receives only one mixed audio stream from the server. To keep backward compatibility with the customers' implementation, SDK 3.0 introduces a faked audio track for audio transmission. The faked audio track is included in the [streamAdded](#streamAdded) and streamRemoved events. The SDK 3.0 takes the audio stream information from the [participantAdded](#participantadded) and [participantUpdated](#participantupdated) events.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param participant - The participant whose stream was removed from a conference.
 * @param stream - The removed media stream.
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('streamRemoved', (participant, stream) => {
 *
 * });
 * ```
 */
export declare function streamRemoved(participant: Participant, stream: MediaStreamWithType): void;
/**
 * The Mean Opinion Score (MOS) which represents the participants' audio and video quality. The SDK calculates the audio and video quality scores and displays the values in a rage from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
 *
 * **Note**: With SDK 3.0, audio Mean Opinion Scores (MOS) are unavailable for web clients connected to Dolby Voice conferences.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param indicators - A map that includes all conference participants' quality indicators.
 */
export declare function qualityIndicators(indicators: Map<string, QualityIndicator>): void;
/**
 * Emitted when the local participant's permissions are updated.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param permissions - The updated conference permissions.
 */
export declare function permissionsUpdated(permissions: Set<ConferencePermission>): void;
