import { Participant } from './Participant';
/**
 * The VideoPresentation model contains additional information about a video presentation.
 */
export default class VideoPresentation {
    /**
     * The URL of the presented video file.
     */
    url: string;
    /**
     * The participant who started the video presentation.
     * @ignore
     */
    ownerId: string;
    /**
     * The participant who started the presentation.
     */
    owner: Participant;
    /**
     * The current video presentation timestamp used for seeking and pausing the video.
     */
    timestamp: number;
    /** @ignore */
    constructor(ownerId: string, url: string, timestamp: number);
}
