import { ConferenceCreatedNotification, ConferenceEndedNotification, ParticipantLeftNotification, ParticipantJoinedNotification, ConferenceStatusNotification, InvitationReceived, ActiveParticipants } from '../../events/notification';
/**
 * Emitted when an application user received an invitation. This notification is subscribed by default. For more information about invitations, see the [Inviting Participants](doc:guides-inviting-participants) document.
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
 * Emitted when an application user subscribed to any notification. The application emits the conferenceStatus event to inform the user about the status of the subscribed conference. This notification cannot be subscribed to.
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
 * Emitted to notify an application user, who subscribed to [SubscribeConferenceCreated](doc:js-client-sdk-model-subscribeconferencecreated), that a new conference is created.
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
 * Emitted to notify an application user, who subscribed to [SubscribeConferenceEnded](doc:js-client-sdk-model-subscribeconferenceended), that a conference is ended.
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
 * Emitted to notify an application user, who subscribed to [SubscribeParticipantJoined](doc:js-client-sdk-model-subscribeparticipantjoined), that a new participant joined a conference.
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
 * Emitted to notify an application user, who subscribed to [SubscribeParticipantLeft](doc:js-client-sdk-model-subscribeparticipantleft), that a participant left a conference.
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
/**
 * Emitted to notify an application user, who subscribed to [SubscribeActiveParticipants](doc:js-client-sdk-model-subscribeactiveparticipants), that a list of active participants is updated. The event informs how many participants joined a conference.
 *
 * @asMemberOf NotificationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 *
 * ```javascript
 * VoxeetSDK.notification.on("activeParticipants", () => {
 *
 * });
 * ```
 */
export declare function activeParticipants(e: ActiveParticipants): void;
