/**
 * @ignore
 */
export interface JoinParametersData {
    currentLanguage: string;
    dolbyVoice?: string;
    liveRecording: boolean;
    mode: string;
    multiSession: boolean;
    rtcpMode: string;
    simulcast: boolean;
    stats: boolean;
    ttl: number;
    videoCodec: string;
}
/**
 * The ConferenceParameters model allows the application to:
 *
 * - Create an [audio-only](#audioonly) conference
 * - Enable [Dolby Voice](#optional-dolbyvoice)
 * - Turn the [live recording](#liverecording) on and off
 * - Set the [transmission bitrate adaptation mode](#rtcpmode)
 * - Customize the [waiting time](#ttl) before terminating an empty conference
 * - Change the [video codec](#videocodec) that is used during conferences
 */
export default class ConferenceParameters {
    /**
     * The time to live that enables customizing the waiting time (in seconds) and terminating empty conferences.
     * The Voxeet service terminates conferences after the established time if no one has joined the new conference or the last participant has left it. The default value is 0 seconds.
     */
    ttl?: number;
    /**
     * @ignore
     */
    multiSession?: boolean;
    /**
     * Conference mode
     * @ignore because this was done for a specific customer and will no longer be supported in the future. WalkieTalkie app
     * does not use this API, instead it toggles mute based on PTT state.
     *
     * Possible values: `standard` and `push`, where `push` indicates a Push To Talk (PTT) meeting
     */
    mode?: string;
    /**
     * The bitrate adaptation mode for the video transmission. The rtcpMode triggers the server to monitor the receivers’ available bandwidth. Based on the analyzed value, the server informs the video sender to automatically adjust the quality of the transmitted video streams.
     *
     * The possible values are:
     *
     * - `worst`: adjusts the transmission bitrate to the receiver who has the worst network conditions
     * - `average`: averages the available bandwidth of all the receivers and adjusts the transmission bitrate to this value
     * - `max`: does not adjust the transmission bitrate to the receiver’s bandwidth
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
     * The preferred video codec that is used during conferences, either `H264` or `VP8`. By default, the value is set to `H264`.
     *
     */
    videoCodec?: string;
    /**
     * Turns the live recording on and off. Specify this parameter during the conference creation.
     *
     * - When set to `true`, the recorded file is available at the end of the call and can be downloaded immediately.
     * - When set to `false`, the [remix API](reference:postconferencemixstart) must be called after the conference to generate and retrieve the recorded file.
     *
     * This parameter does not start the recording; use the [start](doc:js-client-sdk-recordingservice#start) method to turn it on.
     *
     * By default, the value is set to `false`.
     */
    liveRecording?: boolean;
    /** A boolean that indicates whether the application wishes to create a conference with Dolby Voice enabled. For more information about Dolby Voice, see [this article](doc:guides-dolby-voice).*/
    dolbyVoice?: boolean;
    /** A boolean that indicates whether the application wishes to create an audio-only conference. Setting this parameter to true results in creating a conference that does not allow participants to [enable their videos](doc:js-client-sdk-conferenceservice#startvideo). If a participant calls the [startVideo](doc:js-client-sdk-conferenceservice#startvideo) method in an audio-only conference, the SDK returns [ServerError](js-client-sdk-model-servererror). */
    audioOnly?: boolean;
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
