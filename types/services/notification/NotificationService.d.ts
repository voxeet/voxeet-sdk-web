import Service from '../Service';
import { BaseSubscription } from '../../models/Notifications';
import Conference from '../../models/Conference';
import { ParticipantInfo, ParticipantInvited } from '../../models/Options';
import { SessionService } from '../session/SessionService';
/**
 * The NotificationService allows inviting participants to conferences and subscribing to specific notifications.
 *
 * For more information, see the [Inviting Participants](https://docs.dolby.io/communications-apis/docs/inviting-participants-javascript) and [Using Notifications](https://docs.dolby.io/communications-apis/docs/using-notifications-javascript) guides.
 *
 */
export declare class NotificationService extends Service {
    #private;
    /** @ignore */
    constructor(sdk: any, session: SessionService);
    /**
     * Subscribes to the specified notifications.
     *
     * @example
     *```javascript
     * // Subscribes to the invitation event
     * await VoxeetSDK.notification.subscribe([
     *   { type: "Invitation" }
     * ]);
     *
     * // Subscribes to the conferenceCreated and conferenceEnded events
     * await VoxeetSDK.notification.subscribe([
     *   {
     *     type: "Conference.Created",
     *     conferenceAlias: "yourConferenceAlias"
     *   },
     *   {
     *     type: "Conference.Ended",
     *     conferenceAlias: "yourConferenceAlias"
     *   },
     * ]);
     * ```
     *
     * @param subscriptions - An array of the subscribed subscription types.
     */
    subscribe(subscriptions: Array<BaseSubscription>): any;
    /**
     * Unsubscribes from the specified notifications.
     *
     * @example
     *```javascript
     * // Unsubscribes from the invitation event
     * await VoxeetSDK.notification.unsubscribe([
     *   { type: "Invitation" }
     * ]);
     * ```
     *
     * @param subscriptions - An array of the subscribed subscription types.
     */
    unsubscribe(subscriptions: Array<BaseSubscription>): any;
    /**
     * Notifies conference participants about a conference invitation. This method does not allow setting attendee permissions.
     *
     * If you wish to invite participants to a protected conference, use the invite method after joining the conference and include the [Conference](./models_Conference.Conference.html) object related to the current conference in the invitation.
     *
     * The [ParticipantInfo](./models_Options.ParticipantInfo.html) model available in the invitation has to contain the [externalId](./models_Options.ParticipantInfo.html#externalId).
     *
     * For more information about invitations, see the [Inviting Participants](https://docs.dolby.io/communications-apis/docs/inviting-participants-javascript) article.
     *
     * @example
     *
     *```javascript
     * var participants = [
     *    { name: "Guest 01", externalId: "guest-01", avatarUrl: "" }
     * ];
     * VoxeetSDK.notification.invite(conference, participants).then(() => { });
     * ```
     *
     * @param conference - The conference object.
     * @param participants - Information about the invited application users.
     */
    invite(conference: Conference, participants: Array<ParticipantInfo>): Promise<any>;
    /**
     * Notifies conference participants about a conference invitation. This method allows setting attendee permissions. This method is only available for participants who have permission to invite other participants to a conference.
     *
     * [Protected conferences](https://docs.dolby.io/communications-apis/docs/guides-enhanced-conference-access-control) require assigning proper conference permissions to all invited participants. However, the inviter can invite participants to a protected conference without specifying the participants' permissions. If permissions are not specified, the platform assigns the default permissions, which contain [Join](./../enums/models_Conference.ConferencePermission.html#join), [SendAudio](./../enums/models_Conference.ConferencePermission.html#sendaudio), [SendVideo](./../enums/models_Conference.ConferencePermission.html#sendvideo), [ShareScreen](./../enums/models_Conference.ConferencePermission.html#sharescreen), [ShareVideo](./../enums/models_Conference.ConferencePermission.html#sharevideo), [ShareFile](./../enums/models_Conference.ConferencePermission.html#sharefile), [SendMessage](./../enums/models_Conference.ConferencePermission.html#sendmessage), [Record](./../enums/models_Conference.ConferencePermission.html#record), and [Stream](./../enums/models_Conference.ConferencePermission.html#stream). Participants who do not have specific permissions cannot grant these permissions to other participants. Inviters can only grant permissions that they have.
     *
     * If you wish to invite participants to a protected conference, use the invite method after joining the conference. In the invitation, include the [Conference](./models_Conference.Conference.html) object related to the current conference.
     *
     * For more information about invitations, see the [Inviting Participants](https://docs.dolby.io/communications-apis/docs/inviting-participants-javascript) article.
     *
     * @param conference - The conference object.
     * @param invitedParticipants - Information about the invited application users.
     */
    invite(conference: Conference, invitedParticipants: Array<ParticipantInvited>): Promise<any>;
    private onInvitationReceived;
    private onConferenceStatusNotification;
    private onConferenceCreatedNotification;
    private onConferenceEndedNotification;
    private onParticipantJoinedNotification;
    private onParticipantLeftNotification;
    private onActiveParticipants;
}
