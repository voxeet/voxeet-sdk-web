import { SpatialAudioStyle } from './SpatialAudio';
/**
 * @ignore
 */
export interface JoinParametersData {
    currentLanguage: string;
    dolbyVoice?: string;
    liveRecording: boolean;
    mode: string;
    rtcpMode: string;
    simulcast: boolean;
    stats: boolean;
    ttl: number;
    videoCodec: string;
    spatialAudioStyle?: SpatialAudioStyle;
}
/**
 * The ConferenceParameters model allows defining details of a conference.
 */
export default class ConferenceParameters {
    /**
     * The time to live defines the number of seconds a conference is kept running when empty. A minimum of 30 seconds is given when creating the conference to allow time for participants to join. The default value is 0.
     */
    ttl?: number;
    /**
     * Conference mode
     * @ignore
     *
     * Possible values: `standard` and `push`, where `push` indicates a Push To Talk (PTT) meeting
     */
    mode?: string;
    /**
     * The bitrate adaptation mode for the video transmission. The rtcpMode triggers the server to monitor the receivers’ available bandwidth. Based on the analyzed value, the server informs the video sender to automatically adjust the quality of the transmitted video streams.
     *
     * The possible values are:
     *
     * - `Worst`: adjusts the transmission bitrate to the receiver who has the worst network conditions
     * - `Average`: averages the available bandwidth of all the receivers and adjusts the transmission bitrate to this value
     * - `Max`: does not adjust the transmission bitrate to the receiver’s bandwidth
     *
     * By default, the value is set to `average`.
     *
     */
    rtcpMode?: string;
    /**
     * @ignore
     */
    stats?: boolean;
    /** @ignore */
    currentLanguage?: string;
    /**
     * The preferred video codec, either H264, VP8, or none. By default, the value is set to `H264`. Setting this parameter to `none` results in creating a conference that does not allow participants to [enable their videos](./../interfaces/models_LocalVideo.LocalVideo.html#start).
     *
     */
    videoCodec?: string;
    /**
     * Enables and disables live recording:
     *
     * - When set to `true`, the recorded file is available at the end of the call and can be downloaded immediately.
     * - When set to `false`, the [remix API](https://docs.dolby.io/communications-apis/reference/start-conference-remix) must be called after the conference to generate and retrieve the recorded file.
     *
     * This parameter does not start the recording; use the [start](./services_recording_RecordingService.RecordingService.html#start) method to turn it on.
     *
     * By default, the value is set to `false`.
     *
     * For more information, see the [Recording Conferences](https://docs.dolby.io/communications-apis/docs/guides-recording-conferences) document.
     */
    liveRecording?: boolean;
    /** A boolean that indicates whether the application wishes to create a Dolby Voice conference. For more information about Dolby Voice, see the [Dolby Voice](https://docs.dolby.io/communications-apis/docs/guides-dolby-voice) article. By default, the parameter is set to `true`.
     *
     */
    dolbyVoice?: boolean;
    /** A boolean that indicates whether the application wishes to create an audio-only conference. Setting this parameter to true results in creating a conference that does not allow participants to enable their videos. If a participant calls the [start](./../interfaces/models_LocalVideo.LocalVideo.html#start) method in an audio-only conference, the SDK returns [ServerError](./lib_Exceptions.ServerError.html). */
    audioOnly?: boolean;
    /**
     * Defines how the spatial location should be communicated between the SDK and the Dolby.io server.
     *
     * Setting the spatial audio style is supported only in SDK 3.6 and later. The earlier SDK versions support only the individual mode.
     */
    spatialAudioStyle?: SpatialAudioStyle;
    /**
     * @ignore
     */
    constructor();
    /**
     * @ignore
     * @param data
     */
    static fromJoinData(data: JoinParametersData): ConferenceParameters;
}
