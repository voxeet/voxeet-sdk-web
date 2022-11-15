import { BaseConferenceService } from '../Service';
/**
 * A service for broadcasting video streams. It allows you to start and stop broadcasting.
 * @ignore
 */
export declare class BroadcastingService extends BaseConferenceService {
    /**
     * @ignore
     * @param sdk
     */
    constructor(sdk: any);
    /**
     * Starts broadcasting a stream
     */
    start({ uri, hls }: {
        uri?: string;
        hls?: boolean;
    }): any;
    /**
     * Stops broadcasting
     */
    stop({ hls }?: {
        hls?: boolean;
    }): any;
}
