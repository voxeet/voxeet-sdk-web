import { ConferenceCreatedNotification, ConferenceEndedNotification, ParticipantLeftNotification, ParticipantJoinedNotification, ConferenceStatusNotification, InvitationReceived } from '../../events/notification';
/**
 * Emitted when the application user received an invitation. This notification is subscribed by default. For more information about invitations, see the [Inviting Participants](/developers/interactivity-apis/guides/inviting-participants) document.
 *
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("invitation", (e: InvitationReceived) => {
 *
 * });
 * ```
 */
export declare function invitation(e: InvitationReceived): void;
/**
 * Emitted when the application user subscribed to any notification. The application emits the conferenceStatus event to inform the user about the status of the subscribed conference. This notification cannot be subscribed to.
 *
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("conferenceStatus", () => {
 *
 * });
 * ```
 */
export declare function conferenceStatus(e: ConferenceStatusNotification): void;
/**
 * Emitted to notify the application user, who subscribed to [SubscribeConferenceCreated](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/subscribeconferencecreated), that a new conference was created.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("conferenceCreated", () => {
 *
 * });
 * ```
 */
export declare function conferenceCreated(e: ConferenceCreatedNotification): void;
/**
 * Emitted to notify an application user, who subscribed to [SubscribeConferenceEnded](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/subscribeconferenceended), that a conference was ended.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("conferenceEnded", () => {
 *
 * });
 * ```
 */
export declare function conferenceEnded(e: ConferenceEndedNotification): void;
/**
 * Emitted to notify the application user, who subscribed to [SubscribeParticipantJoined](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/subscribeparticipantjoined), that a new participant joined a conference.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("participantJoined", () => {
 *
 * });
 * ```
 */
export declare function participantJoined(e: ParticipantJoinedNotification): void;
/**
 * Emitted to notify the application user, who subscribed to [SubscribeParticipantLeft](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/subscribeparticipantleft), that a participant left a conference.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("participantLeft", () => {
 *
 * });
 * ```
 */
export declare function participantLeft(e: ParticipantLeftNotification): void;
