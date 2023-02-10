import { BaseConferenceService } from '../Service';
import { Participant } from '../../models/Participant';
import { RemoteVideo } from '../../models/RemoteVideo';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference';
/**
 * @ignore
 */
export declare class RemoteVideoImpl extends BaseConferenceService implements RemoteVideo {
    #private;
    /**
     * @implements RemoteVideo.start()
     */
    start(participant: Participant): Promise<void>;
    /**
     * @implements RemoteVideo.stop()
     */
    stop(participant: Participant): Promise<void>;
    protected onConferenceJoined(event: ConferenceJoined): void;
    protected onConferenceLeft(event: ConferenceLeft): void;
}
