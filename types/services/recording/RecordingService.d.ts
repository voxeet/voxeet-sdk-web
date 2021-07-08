import { BaseConferenceService } from '../Service';
import Recording from '../../models/Recording';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference';
/**
 * The RecordingService allows an application to record conferences by using the [start](#start) and [stop](#stop)
 * methods that turn the recording on and off.
 *
 * @noInheritDoc
 */
export declare class RecordingService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     * @param sdk
     */
    constructor(sdk: any);
    /**
     * Starts recording a conference. For more information, see the [Recording mechanisms](/developers/interactivity-apis/guides/recording-mechanisms) article or the [Recording](/developers/interactivity-apis/reference/client-sdk/recording) document.
     */
    start(): any;
    /**
     * Stops recording a conference.
     */
    stop(): any;
    protected onConferenceJoined(event: ConferenceJoined): void;
    protected onConferenceLeft(event: ConferenceLeft): void;
    private onRecordingStatusUpdated;
    /**
     * Returns information about the current recording. Use this accessor if you wish to receive information that is available in the [Recording](model/recording) object, such as the [ID](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/recording#participantid) of the participant who started the recording or the [timestamp](/developers/interactivity-apis/reference/client-sdk/reference-javascript/model/recording#starttimestamp) that informs when the recording was started.
     */
    get current(): Recording | null;
}
