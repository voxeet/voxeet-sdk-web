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
 * The InvitationReceived model gathers information about the received conference invitations, such as the conference [alias](#conferencealias), [ID](#conferenceid), [conference access token](#conferencetoken), and information about the [participant](#participant) who sent the invitation.
 */
export default class InvitationReceived extends Event {
    /** The conference ID. */
    conferenceId: string;
    /** The conference alias. */
    conferenceAlias: string;
    /** The participant who sent the invitation. */
    participant: Participant;
    /** The conference access token. This property is only applicable when enhanced conference access control is enabled.
     */
    conferenceToken: string;
    /** @ignore */
    constructor();
    /** @ignore */
    static fromData(data: InvitationData): InvitationReceived;
}
export {};
