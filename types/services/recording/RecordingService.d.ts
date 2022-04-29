import { BaseConferenceService } from '../Service';
import Recording from '../../models/Recording';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference';
/**
 * The RecordingService allows an application to record conferences via the [start](#start) and [stop](#stop) methods. The model also [notifies](#statusupdated) about the recording status changes and allows [receiving information](#current) about the current recording.
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
     * Starts recording a conference. For more information, see the [Recording mechanisms](doc:guides-recording-mechanisms) article or the [Recording](doc:recording) document.
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
     * Returns information about the current recording. Use this accessor if you wish to receive information that is available in the [Recording](model/recording) object, such as the [ID](doc:js-client-sdk-model-recording#participantid) of the participant who started the recording or the [timestamp](doc:js-client-sdk-model-recording#starttimestamp) that informs when the recording was started.
     */
    get current(): Recording | null;
}
