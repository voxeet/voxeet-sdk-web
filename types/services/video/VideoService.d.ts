import { BaseConferenceService } from '../Service';
import { LocalVideo } from '../../models/LocalVideo';
import { RemoteVideo } from '../../models/RemoteVideo';
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
    /**
     * @ignore
     */
    private onLocalVideoStarted;
    /**
     * @ignore
     */
    private onLocalVideoStopped;
}
