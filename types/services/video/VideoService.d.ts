import { BaseConferenceService } from '../Service';
import { LocalVideo } from '../../models/LocalVideo';
import { RemoteVideo } from '../../models/RemoteVideo';
/**
 * The VideoService allows enabling and disabling video for the local and remote participants.
 *
 * This service is available in SDK 3.7 and later.
 */
export declare class VideoService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     */
    constructor(sdk: any, localVideo: LocalVideo, remoteVideo: RemoteVideo);
    /**
     * Returns the LocalVideo object that allows managing local participant's video stream.
     *
     * @return LocalVideo interface
     */
    get local(): LocalVideo;
    /**
     * Returns the LocalVideo object that allows managing remote participant's video stream.
     *
     * @return RemoteVideo interface
     */
    get remote(): RemoteVideo;
}
