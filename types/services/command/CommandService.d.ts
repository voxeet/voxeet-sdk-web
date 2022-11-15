import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../conference/ConferenceService';
/**
 * The CommandService allows the application to [send](#send) text messages or notifications to all conference participants. The service also emits an [received](#received) event to inform the application about received messages.
 *
  ---
 */
export declare class CommandService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     * @param sdk
     * @param conferenceService
     */
    constructor(sdk: any, conferenceService: ConferenceService);
    /**
     * Sends a message, in the form of a string, to all conference participants.
     * @param message - The message to send.
     *
     * @example
     *```javascript
     * // Send a simple message
     * await VoxeetSDK.command.send('Hello world!');
     *
     * // Send a complex message
     * const msg = JSON.stringify({
     *   action: 'mute',
     *   target: 'everyone'
     * });
     * await VoxeetSDK.command.send(msg);
     * ```
     */
    send(message: string): Promise<any>;
    private onConferenceMessageReceived;
}
