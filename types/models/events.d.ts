import { ParticipantStatus } from './Participant';
/**
 * Emitted when the participant's status changes during a conference.
 * @asMemberOf Participant
 * @event
 * @param status - The participant's status.
 */
export declare function status(status: ParticipantStatus): void;
