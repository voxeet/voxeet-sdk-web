import { BaseConferenceService } from '../Service';
import { LocalVideo } from '../../models/LocalVideo';
import { VideoProcessor } from '../../models/VideoProcessor';
/**
 * LocalVideo proxy. It catches and reports eligible errors during a conference.
 *
 * All errors like VideoServiceError or MediaStreamErros are be marked as a conference
 * error and reported to a ConferenceService which send them to a backend log.
 *
 * @ignore
 */
export declare class LocalVideoProxy extends BaseConferenceService implements LocalVideo {
    #private;
    constructor(sdk: any, target: LocalVideo);
    get target(): LocalVideo;
    /**
     * @implements LocalVideo.start()
     */
    start(constraintsOrTrack?: MediaTrackConstraints | MediaStreamTrack, processor?: VideoProcessor): Promise<MediaStreamTrack>;
    /**
     * @implements LocalVideo.stop()
     */
    stop(): Promise<void>;
    /**
     * @implements LocalVideo.setProcessor()
     */
    setProcessor(processor: VideoProcessor): Promise<void>;
    /**
     * @implements LocalVideo.disableProcessing()
     */
    disableProcessing(): Promise<void>;
    /**
     * @implements LocalVideo.applyConstraints()
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    private isConferenceActive;
    private isEligibleToReport;
    private onInternalError;
    private reportError;
}
