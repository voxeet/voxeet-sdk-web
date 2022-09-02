import AudioProcessingSenderOptions from './AudioProcessingSenderOptions';
/**
 * @deprecated
 * **Note**: This model is deprecated in SDK 3.7. To enable and disable audio processing in SDK 3.7 and later, use the [setCaptureMode](doc:js-client-sdk-model-loacalaudio#setcapturemode) method.
 *
 * The AudioProcessingOptions model is responsible for enabling and disabling audio processing.
 *
 * By default, the Dolby Voice audio processing algorithm is enabled for Dolby Voice conferences. Dolby Voice is optimized for voice communication and may have degraded behavior with non-voice audio, such as music. SDK 3.0 provides a Web API to disable audio processing if you wish to send the background audio or music to other conference participants.
 */
export default interface AudioProcessingOptions {
    /**
     * An object inside the audio processing option that includes the sender's metadata.
     *
     * This property is deprecated in SDK 3.7 and replaced with the [AudioCaptureMode](doc:js-client-sdk-model-audiomode) option that you can define using the [setCaptureMode](doc:js-client-sdk-audioservice#setcapturemode) method.
     */
    send?: AudioProcessingSenderOptions;
}
