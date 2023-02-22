import AudioProcessingSenderOptions from './AudioProcessingSenderOptions';
/**
 * @deprecated
 * This model is deprecated in SDK 3.7. To enable and disable audio processing in SDK 3.7 and later, use the [setCaptureMode](./../classes/services_audio_LocalAudio.LocalAudio.html#setCaptureMode) method.
 * <br>
 * <br>
 * The AudioProcessingOptions model contains the AudioProcessingSenderOptions model responsible for enabling and disabling audio processing.
 *
 * By default, the Dolby Voice audio processing algorithm is enabled for Dolby Voice conferences. Dolby Voice is optimized for voice communication and may have degraded behavior with non-voice audio, such as music. SDK 3.0 provides a Web API to disable audio processing if you wish to send the background audio or music to other conference participants.
 */
export default interface AudioProcessingOptions {
    /**
     * An object inside the audio processing option that contains the sender's metadata.
     */
    send?: AudioProcessingSenderOptions;
}
