import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../conference/ConferenceService';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference';
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
     * Sends a message, in the form of a string, to all conference participants. Message size is limited to 16KB.
     *
     * This method is not available for [Real-time Streaming viewers](../enums/models_Options.ListenType.html#Mixed) and triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
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
    protected onConferenceJoined(event: ConferenceJoined): void;
    protected onConferenceLeft(event: ConferenceLeft): void;
}
