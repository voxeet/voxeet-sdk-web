import Service from '../Service';
import { BaseSubscription } from '../../models/Notifications';
import Conference from '../../models/Conference';
import { ParticipantInfo, ParticipantInvited } from '../../models/Options';
import { SessionService } from '../session/SessionService';
/**
 * The NotificationService enables [inviting](#invite) participants to a conference. The service also allows [subscribing](#subscribe) to and [unsubscribing](#unsubscribe) from notifications informing about:
 *
 * - [The number of participants](#activeparticipants) who are present at a conference
 * - [Received conference invitations](#invitation)
 * - [Created conferences](#conferencecreated)
 * - [Ended conferences](#conferenceended)
 * - [Participants joining conferences](#participantjoined)
 * - [Participants leaving conferences](#participantleft)
 *
 * @noInheritDoc
 */
export declare class NotificationService extends Service {
    #private;
    /** @ignore */
    constructor(sdk: any, session: SessionService);
    /**
     * Subscribes to the specified notifications.
     * @param subscriptions - An array of the subscribed subscription types.
     */
    subscribe(subscriptions: Array<BaseSubscription>): any;
    /**
     * Unsubscribes from the specified notifications.
     * @param subscriptions - An array of the subscribed subscription types.
     */
    unsubscribe(subscriptions: Array<BaseSubscription>): any;
    /**
     * Notifies conference participants about a conference invitation. The [ParticipantInfo](doc:js-client-sdk-model-participantinfo) model included in the invitation has to include [externalId](doc:js-client-sdk-model-participantinfo).
     *
     * The Dolby.io Communications APIs offer two invite methods. You can use invite with the [ParticipantInfo](doc:js-client-sdk-model-participantinfo) or [ParticipantInvited](doc:js-client-sdk-model-participantinvited) parameter:
     *
     * - [ParticipantInfo](doc:js-client-sdk-model-participantinfo) does not include participants' permissions.
     *
     * - [ParticipantInvited](doc:js-client-sdk-model-participantinvited) includes the participants' permissions, which allow conference participants to perform a specific set of actions within a protected conference. For more information about inviting participants with the specified permissions, see the next invite method that is described below.
     *
     * Both invite methods include the [Conference](doc:js-client-sdk-model-conference) object:
     *
     * - In the case of inviting participants to a conference that is not protected, inviters can invite participants to any conference.
     * - In the case of inviting participants to a protected conference, inviters can invite participants only to the current conference. Therefore, if you wish to invite participants to a protected conference, include in the invitation the [Conference](doc:js-client-sdk-model-conference) object related to the current conference.
     *
     *```javascript
     * var participants = [
     *    { name: "Guest 01", externalId: "guest-01", avatarUrl: "" }
     * ];
     * VoxeetSDK.notification.invite(conference, participants).then(() => { });
     * ```
     *
     * For more information about invitations, see the [Inviting Participants](doc:guides-inviting-participants) article.
     *
     * @param conference - The conference object.
     * @param participants - Information about the invited application users.
     */
    invite(conference: Conference, participants: Array<ParticipantInfo>): Promise<any>;
    /**
     * Notifies conference participants about a conference invitation. This method includes participants' permissions.
     *
     * Participants who have permission to invite additional participants to a conference can also use this method. In the invitation, inviters can only grant permissions that the inviters have. For example, a participant who does not have permission to record a conference can only invite new participants who also cannot record this conference.
     *
     * [Protected conferences](doc:guides-enhanced-conference-access-control) require assigning proper conference permissions to all invited participants. However, the inviter can invite participants to a protected conference without specifying the participants' permissions. If permissions are not specified, the platform assigns the default permissions, which include [Join](doc:js-client-sdk-model-conferencepermission#join), [SendAudio](doc:js-client-sdk-model-conferencepermission#sendaudio), [SendVideo](doc:js-client-sdk-model-conferencepermission#sendvideo), [ShareScreen](doc:js-client-sdk-model-conferencepermission#sharescreen), [ShareVideo](doc:js-client-sdk-model-conferencepermission#sharevideo), [ShareFile](doc:js-client-sdk-model-conferencepermission#sharefile), [SendMessage](doc:js-client-sdk-model-conferencepermission#sendmessage), [Record](doc:js-client-sdk-model-conferencepermission#record), and [Stream](doc:js-client-sdk-model-conferencepermission#stream).
     *
     * If you wish to invite participants to a protected conference, use the invite method after joining the conference.
     *
     * The invite method includes the [Conference](doc:js-client-sdk-model-conference) object. In the case of inviting participants to a protected conference, inviters can invite participants only to the current conference. Therefore, the invitation has to include the [Conference](doc:js-client-sdk-model-conference) object related to the current conference.
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
