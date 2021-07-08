import { BaseConferenceService } from '../Service';
import { ConferenceService } from '../conference/ConferenceService';
/**
 * The CommandService allows the application to [send](#send) text messages or notifications to all conference participants. The service also emits an [received](#received) event to inform the application about received messages.
 *
  ---
 * @noInheritDoc
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
     * Sends a message, in the form of a basic stream, to all conference participants.
     * @param message - The message to send.
     */
    send(message: string): Promise<any>;
    private onConferenceMessageReceived;
}
