import { BaseConferenceService } from '../Service';
import VideoPresentation from '../../models/VideoPresentation';
import { ConferenceService } from '../conference/ConferenceService';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference';
/**
 * The VideoPresentationState model represents video presentation statuses.
 */
export declare enum VideoPresentationState {
    /**
     * The video presentation is played.
     */
    PLAYING = "playing",
    /**
     * The video presentation is paused.
     */
    PAUSED = "paused",
    /**
     * The video presentation is stopped.
     */
    STOPPED = "stopped"
}
/**
 * A service for video presentations. It allows you to seek, pause, play, start, and stop video presentations.
 * @ignore
 */
export declare enum VideoPresentationServiceEvents {
    Started = "started",
    Stopped = "stopped",
    Played = "played",
    Pause = "paused",
    Seek = "sought"
}
/**
 * The VideoPresentationService allows sharing video files during a conference. To present a video, the conference participant needs to provide the URL that defines the video file location. We recommend sharing files in the MPEG-4 Part 14 or MP4 video formats.
 *
 * **The video presentation workflow:**
 *
 * **1.** The presenter calls the [start](#start) method to start the video presentation. This method automatically starts playing the shared video file.
 *
 * **2.** All participants receive the [started](#started) event that contains the [URL](./models_VideoPresentation.VideoPresentation.html#url) property in the [VideoPresentation](./models_VideoPresentation.VideoPresentation.html) parameter. The property specifies the video file location. The application stores [URL](./models_VideoPresentation.VideoPresentation.html#url) in the source attribute of the [HTML video element](https://www.w3.org/TR/2011/WD-html5-20110113/video.html#video) that renders the shared video.
 *
 * **3.** If the presenter calls the [pause](#pause) method to pause the shared video, all participants receive the [paused](#paused) event.
 *
 * **4.** If the presenter calls the [play](#play) method to resume the paused video, all participants receive the [played](#played) event.
 *
 * **5.** The presenter can call the [seek](#seek) method to navigate to a specific section of the shared video. This method applies the provided timestamp to the [current time](https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-currenttime) attribute of the HTML video element. After calling the seek method, all conference participants receive the [sought](#sought) event and watch the video from the specified timestamp.
 *
 * **6.** The presenter calls the [stop](#stop) method to stop the video presentation.
 *
 */
export declare class VideoPresentationService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     */
    constructor(sdk: any, conferenceService: ConferenceService);
    private clear;
    /**
     * Starts sharing a video file. This method is not available for [listeners](../enums/models_Participant.ParticipantType.html#LISTENER). Calling this method by a listener results in the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * @param url - The URL that specifies the video file location.
     */
    start(url: string): any;
    /**
     * Stops the video presentation.
     */
    stop(): any;
    /**
     * Resumes the paused video presentation.
     */
    play(): any;
    /**
     * Pauses the video presentation. As a timestamp, we recommend using the [currentTime](https://www.w3.org/TR/2011/WD-html5-20110113/video.html#dom-media-currenttime) attribute of the HTML video element, as in the following example:
     *
     * ```javascript
     * const timestamp = Math.round($(`#stream-video video`)[0].currentTime * 1000);
     * ```
     *
     * When the timestamp is not specified, the SDK automatically sets the timestamp value to 0.
     *
     * @param timestamp - The timestamp that informs when the video should be paused, in milliseconds.
     */
    pause(timestamp: number): any;
    /**
     * Allows the presenter to navigate to the specific section of the shared video.
     * @param timestamp - The timestamp the presenter wants to start playing the video from, in milliseconds.
     */
    seek(timestamp: number): any;
    private onVideoPresentationStarted;
    private onVideoPresentationStopped;
    private onVideoPresentationPlay;
    private onVideoPresentationPause;
    private onVideoPresentationSeek;
    /**
     * Returns information about the current video presentation. Use this accessor if you wish to receive information that is available in the [VideoPresentation](./models_VideoPresentation.VideoPresentation.html) object, such as information about the participant who shares the video or the URL of the presented video file.
     */
    get current(): VideoPresentation | null;
    /**
     * Provides the current state of the video presentation.
     */
    get state(): VideoPresentationState;
    protected onConferenceJoined(event: ConferenceJoined): void;
    protected onConferenceLeft(event: ConferenceLeft): void;
}
