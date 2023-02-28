import { Participant } from '../../models/Participant';
import { MediaStreamWithType } from '../../models/MediaStream';
import { QualityIndicator, ConferencePermission } from '../../models/Conference';
/**
 * Emitted when [WebSocketError](./../classes/lib_Exceptions.WebSocketError.html), PeerConnectionFailedError, or PeerDisconnectedError occurs.
 *
 * PeerConnectionFailedError and PeerDisconnectedError are [PeerErrors](./../classes/lib_Exceptions.PeerError.html) with the `failed` and `disconnected` [PeerConnectionState](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState) value.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param error - The received error.
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on("error", (error) => {
 *   console.error(error);
 * });
 * ```
 */
export declare function error(error: Error): void;
/**
 * Emitted when an application successfully joins a conference.
 * @asMemberOf ConferenceService
 * @event
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on("joined", () => {
 *
 * });
 * ```
 */
export declare function joined(): void;
/**
 * Emitted when an application leaves a conference.
 * @asMemberOf ConferenceService
 * @event
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on("left", () => {
 *
 * });
 * ```
 */
export declare function left(): void;
/**
 * Emitted when a replayed conference ends.
 * @asMemberOf ConferenceService
 * @event
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on("ended", () => {
 *   // The conference has ended
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
 * Emitted when a new participant is invited to a conference. The SDK does not emit the participantAdded event for the local participant. Listeners only receive the participantAdded events about users; they do not receive events for other listeners. In SDK 3.2 and prior releases, users receive events about users and the first 1000 listeners. However, in SDK 3.3 and next releases, users receive the participantAdded events about users and do not receive any events about listeners. To notify all application users about the number of participants who are present at a conference, the Web SDK 3.3 introduces the [activeParticipants](./services_notification_NotificationService.NotificationService.html#activeParticipants) events.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param participant - The invited participant who is added to a conference.
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('participantAdded', (participant) => {
 *
 * });
 * ```
 */
export declare function participantAdded(participant: Participant): void;
/**
 * Emitted when a participant changes [ParticipantStatus](./../enums/models_Participant.ParticipantStatus.html). Listeners only receive the participantUpdated events about users; they do not receive events for other listeners. In SDK 3.2 and prior releases, users receive events about users and the first 1000 listeners. However, in SDK 3.3 and next releases, users receive the participantUpdated events about users and do not receive any events about listeners. To notify all application users about the number of participants who are present at a conference, the Web SDK 3.3 introduces the [activeParticipants](./services_notification_NotificationService.NotificationService.html#activeParticipants) events.
 *
 * The following graphic shows possible status changes during a conference:
 *
 * <img src="https://files.readme.io/2105b14-js-swift-conferenceService-participantUpdated.png" title="Screen share" width="1000"/>
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
 *		button.onclick = async () => {
 *			await VoxeetSDK.conference.playBlockedAudio();
 *		}
 * });
 * ```
 */
export declare function autoplayBlocked(): void;
/**
 * Emitted when the SDK adds a new stream to a conference participant. Each conference participant can be connected to two streams: the `audio and video` stream and the `screen-share` stream. If a participant enables audio or video, the SDK adds the `audio and video` stream to the participant and emits the streamAdded event to all participants. When a participant is connected to the `audio and video` stream and changes the stream, for example, enables a camera while using a microphone, the SDK updates the `audio and video` stream and emits the [streamUpdated](#streamupdated) event. When a participant starts sharing a screen, the SDK adds the `screen-share` stream to this participants and emits the streamAdded event to all participants. The following graphic shows this behavior:
 *
 *  <img src="https://files.readme.io/21575c1-conference-stream-added.png" alt="Audio streams map"	title="Audio streams map" width="1500">
 *
 * Based on the stream [type](./../enums/models_MediaStream.MediaStreamType.html), the application chooses to either render a camera view or a screen-share view.
 *
 * When a new participant joins a conference with enabled audio and video, the SDK emits the streamAdded event that includes audio and video tracks.
 *
 * The SDK can also emit the streamAdded event only for the local participant. When the local participant uses the [stopAudio](#stopaudio) method to locally mute the selected remote participant who does not use a camera, the local participant receives the [streamRemoved](#streamremoved) event. After using the [startAudio](#startaudio) method for this remote participant, the local participant receives the streamAdded event.
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
 * Emitted whenever a participant's media stream is modified. The SDK emits the event to all conference participants in the following situations:
 *
 * - A conference participant who is connected to an `audio and video` stream changes the stream by enabling a microphone while using a camera or by enabling a camera while using a microphone.
 *
 * - A conference participant starts sharing their screen with audio enabled. In this situation, the SDK emits the [streamAdded](#streamadded) and streamUpdated event.
 *
 * The SDK can also emit the streamUpdated event only for the local participant. When the local participant uses the [stopAudio](#stopaudio) or [startAudio](#startaudio) method to locally mute or unmute a selected remote participant who uses a camera, the local participant receives the streamUpdated event.
 *
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
 * Emitted when the SDK removes a stream from a conference participant. Each conference participant can be connected to two streams: the `audio and video` stream and the `screen-share` stream. If a participant disables audio and video or stops a screen-share presentation, the SDK removes the proper stream and emits the streamRemoved event to all conference participants.
 *
 * The SDK can also emit the streamRemoved event only for the local participant. When the local participant uses the [stopAudio](#stopaudio) method to locally mute a selected remote participant who does not use a camera, the local participant receives the streamRemoved event.
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
 * The Mean Opinion Score (MOS) represents the participants' audio and video quality. The SDK calculates the audio and video quality scores and displays the values in a range from 1 to 5, where 1 represents the worst quality and 5 represents the highest quality. In cases when the MOS score is not available, the SDK returns the value -1.
 *
 * **Note**:
 * - From SDK 3.0 to SDK 3.4.x, the audio Mean Opinion Scores (MOS) are unavailable for all web clients connected to Dolby Voice conferences.
 * - Since SDK 3.5.0, the Mean Opinion Scores (MOS) are available when using the DVC codec on web clients.
 *
 * @asMemberOf ConferenceService
 * @event
 * @param indicators - A map that contains all conference participants' quality indicators.
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
