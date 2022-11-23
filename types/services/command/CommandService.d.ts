import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../conference/ConferenceService';
/**
 * The CommandService allows applications to send and receive text messages and notifications during conferences.
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
