import { BaseConferenceService } from '../Service';
import { Participant } from '../../models/Participant';
import { RemoteVideo } from '../../models/RemoteVideo';
/**
 * @ignore
 */
export declare class RemoteVideoImpl extends BaseConferenceService implements RemoteVideo {
    /**
     * @implements RemoteVideo.start()
     */
    start(participant: Participant): Promise<void>;
    /**
     * @implements RemoteVideo.stop()
     */
    stop(participant: Participant): Promise<void>;
}
