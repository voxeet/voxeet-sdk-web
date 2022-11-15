import { Participant } from '../../models/Participant';
/**
 * Emitted when a participant receives a message.
 *
 * @asMemberOf CommandService
 * @param participant - The participant who sent the message.
 * @param message - The received message.
 * @event
 *
 * @example
 * ```javascript
 *
 * VoxeetSDK.command.on("received", (participant: Participant, message: string) => {
 *
 * });
 * ```
 */
export declare function received(participant: Participant, message: string): void;
