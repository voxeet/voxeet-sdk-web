import Event from '../Event';
import { Participant } from '../../models/Participant';
/**
 * @ignore
 */
interface InvitationData {
    conferenceId: string;
    confAlias: string;
    confToken: string;
    inviter: {
        userId: string;
        nickName: string;
        externalId: string;
        externalAvatarUrl: string;
    };
}
/**
 * The InvitationReceived model gathers information about the received conference invitations.
 */
export default class InvitationReceived extends Event {
    /** The conference ID. */
    conferenceId: string;
    /** The conference alias. */
    conferenceAlias: string;
    /** The participant who sent the invitation. */
    participant: Participant;
    /** The conference access token. This property is only applicable when [enhanced conference access control](https://docs.dolby.io/communications-apis/docs/guides-enhanced-conference-access-control) is enabled.
     */
    conferenceToken: string;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: InvitationData): InvitationReceived;
}
export {};
