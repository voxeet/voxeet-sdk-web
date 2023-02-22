import { ConferenceCreatedNotification, ConferenceEndedNotification, ParticipantLeftNotification, ParticipantJoinedNotification, ConferenceStatusNotification, InvitationReceived, ActiveParticipants } from '../../events/notification';
/**
 * Emitted when an application user receives an invitation. This notification is subscribed by default. For more information about invitations, see the [Inviting Participants](https://docs.dolby.io/communications-apis/docs/inviting-participants-javascript) document.
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
 * Emitted when an application user subscribes to any notification. The application emits the conferenceStatus event to inform the user about the status of the subscribed conference. This notification cannot be subscribed to.
 *
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("conferenceStatus", (e) => {
 *
 * });
 * ```
 */
export declare function conferenceStatus(e: ConferenceStatusNotification): void;
/**
 * Emitted to notify an application user, who subscribed to [SubscribeConferenceCreated](./../classes/models_Notifications.SubscribeConferenceCreated.html), that a new conference is created.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("conferenceCreated", (e) => {
 *
 * });
 * ```
 */
export declare function conferenceCreated(e: ConferenceCreatedNotification): void;
/**
 * Emitted to notify an application user, who subscribed to [SubscribeConferenceEnded](./../classes/models_Notifications.SubscribeConferenceEnded.html), that a conference is ended.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("conferenceEnded", (e) => {
 *
 * });
 * ```
 */
export declare function conferenceEnded(e: ConferenceEndedNotification): void;
/**
 * Emitted to notify an application user, who subscribed to [SubscribeParticipantJoined](./../classes/models_Notifications.SubscribeParticipantJoined.html), that a new participant joins a conference.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("participantJoined", (e) => {
 *
 * });
 * ```
 */
export declare function participantJoined(e: ParticipantJoinedNotification): void;
/**
 * Emitted to notify an application user, who subscribed to [SubscribeParticipantLeft](./../classes/models_Notifications.SubscribeParticipantLeft.html), that a participant leaves a conference.
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("participantLeft", (e) => {
 *
 * });
 * ```
 */
export declare function participantLeft(e: ParticipantLeftNotification): void;
/**
 * Emitted to notify an application user, who subscribed to [SubscribeActiveParticipants](./../classes/models_Notifications.SubscribeActiveParticipants.html), that a list of active participants is updated. The event informs how many participants joined a conference.
 *
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("activeParticipants", (e) => {
 *
 * });
 * ```
 */
export declare function activeParticipants(e: ActiveParticipants): void;
