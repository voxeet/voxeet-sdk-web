import { BaseConferenceService } from '../Service';
import { LocalVideo } from '../../models/LocalVideo';
import { RemoteVideo } from '../../models/RemoteVideo';
/**
 * The VideoService allows managing the local and remote participants' video streams.
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
     * Returns the LocalVideo object that allows managing the local participant's video stream.
     *
     * @return The LocalVideo interface.
     */
    get local(): LocalVideo;
    /**
     * Returns the LocalVideo object that allows managing remote participants' video streams.
     *
     * @return The RemoteVideo interface.
     */
    get remote(): RemoteVideo;
}
