/**
 * @deprecated
 * **Note**: This model is deprecated in SDK 3.7. To enable and disable audio processing in SDK 3.7 and later, use the [setCaptureMode](doc:js-client-sdk-model-loacalaudio#setcapturemode) method.
 *
 * The AudioProcessingSenderOptions model allows enabling and disabling audio processing for the local participant who transmits an audio stream.
 *
 * By default, the Dolby Voice audio processing algorithm is enabled for Dolby Voice conferences. Dolby Voice is optimized for voice communication and may have degraded behavior with non-voice audio, such as music. SDK 3.0 provides a Web API to disable audio processing in the event that you have background audio or music that needs to be passed through to the conference.
 */
declare class AudioProcessingSenderOptions {
    /**
     * A boolean value that indicates whether the audio processing is enabled or disabled.
     *
     * This property is deprecated in SDK 3.7 and replaced with the [AudioCaptureMode](doc:js-client-sdk-model-audiomode) option that you can define using the [setCaptureMode](doc:js-client-sdk-audioservice#setcapturemode) method.
     */
    audioProcessing?: boolean;
}
export default AudioProcessingSenderOptions;
