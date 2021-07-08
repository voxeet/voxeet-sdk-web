import Service from '../Service';
import { BaseSubscription } from '../../models/Notifications';
import Conference from '../../models/Conference';
import { ParticipantInfo, ParticipantInvited } from '../../models/Options';
/**
 * The NotificationService enables an application to [subscribe](#subscribe) to and
[unsubscribe](#unsubscribe) from a few types of notifications that are related to:
 *
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
    constructor(sdk: any);
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
     * Notifies conference participants about a conference invitation. The [ParticipantInfo](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/participantinfo) model included in the invitation has to include [externalId](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/participantinfo).
     *
     * The Dolby Interactivity APIs offer two invite methods. You can use invite with the [ParticipantInfo](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/participantinfo) or [ParticipantInvited](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/participantinvited) parameter:
     *
     * - [ParticipantInfo](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/participantinfo) does not include participants' permissions.
     *
     * - [ParticipantInvited](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/participantinvited) includes the participants' permissions, which allow conference participants to perform a specific set of actions within a protected conference. For more information about inviting participants with the specified permissions, see the next invite method that is described below.
     *
     * Both invite methods include the [Conference](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conference) object:
     *
     * - In the case of inviting participants to a conference that is not protected, inviters can invite participants to any conference.
     * - In the case of inviting participants to a protected conference, inviters can invite participants only to the current conference. Therefore, if you wish to invite participants to a protected conference, include in the invitation the [Conference](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conference) object related to the current conference.
     *
     *```javascript
     * var participants = [
     *    { name: "Guest 01", externalId: "guest-01", avatarUrl: "" }
     * ];
     * VoxeetSDK.notification.invite(conference, participants).then(() => { });
     * ```
     *
     * For more information about invitations, see the [Inviting Participants](/developers/interactivity-apis/guides/inviting-participants) article.
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
     * [Protected conferences](/developers/interactivity-apis/guides/enhanced-conference-access-control) require assigning proper conference permissions to all invited participants. However, the inviter can invite participants to a protected conference without specifying the participants' permissions. If permissions are not specified, the platform assigns the default permissions, which include [Join](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#join), [SendAudio](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#sendaudio), [SendVideo](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#sendvideo), [ShareScreen](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#sharescreen), [ShareVideo](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#sharevideo), [ShareFile](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#sharefile), [SendMessage](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#sendmessage), [Record](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#record), and [Stream](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conferencepermission#stream).
     *
     * If you wish to invite participants to a protected conference, use the invite method after joining the conference.
     *
     * The invite method includes the [Conference](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conference) object. In the case of inviting participants to a protected conference, inviters can invite participants only to the current conference. Therefore, the invitation has to include the [Conference](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/conference) object related to the current conference.
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
}
