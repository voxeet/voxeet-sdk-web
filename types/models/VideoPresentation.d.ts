import { Participant } from './Participant';
/**
 * The VideoPresentation model includes information about the video presentation, such as information about the [participant](#owner) who started the video presentation, the [URL of the presented video file](#url), and the video presentation [timestamp](#timestamp).
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
