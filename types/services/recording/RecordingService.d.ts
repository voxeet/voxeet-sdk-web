import { BaseConferenceService } from '../Service';
import Recording from '../../models/Recording';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference';
/**
 * The RecordingService allows recording conferences. For more information, see the [Recording Conferences](https://docs.dolby.io/communications-apis/docs/guides-recording-conferences) article.
 *
 */
export declare class RecordingService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     * @param sdk
     */
    constructor(sdk: any);
    /**
     * Starts recording a conference. For more information, see the [Recording Conferences](doc:guides-recording-conferences) article.
     * @return {Promise<void>}
     *
     * @example
     * ```javascript
     * await VoxeetSDK.recording.start();
     * ```
     */
    start(): any;
    /**
     * Stops recording a conference.
     * @return {Promise<void>}
     *
     * @example
     * ```javascript
     * await VoxeetSDK.recording.stop();
     * ```
     */
    stop(): any;
    protected onConferenceJoined(event: ConferenceJoined): void;
    protected onConferenceLeft(event: ConferenceLeft): void;
    private onRecordingStatusUpdated;
    /**
     * Returns information about the current recording. Use this accessor if you wish to receive information that is available in the [Recording](./models_Recording.Recording.html) object, such as the ID of the participant who started the recording or the timestamp that informs when the recording was started.
     */
    get current(): Recording | null;
}
