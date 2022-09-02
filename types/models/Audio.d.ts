/**
 * The AudioCaptureMode model allows enabling and disabling audio processing for the local participant.
 *
 * By default, the Dolby Voice audio processing algorithm is enabled in Dolby Voice conferences to improve voice communication. However, audio processing lowers the quality of non-voice audio. To send non-voice audio, such as music, disable audio processing by using the Unprocessed mode.
 *
 * This model is available in SDK 3.7 and later.
 */
export declare enum AudioCaptureMode {
    /**
     * Disables audio processing to allow transmitting non-voice audio to a conference.
     */
    Unprocessed = "unprocessed",
    /**
     * Enables audio processing to improve voice quality.
     */
    Standard = "standard"
}
/**
 * The NoiseReductionLevel model allows selecting the preferred level of noise reduction.
 *
 * This model is available in SDK 3.7 and later.
 */
export declare enum NoiseReductionLevel {
    /**
     * Removes all background sounds to improve voice quality. Use this mode if you want to send only voice to a conference.
     */
    High = "high",
    /**
     * Removes stationary background sounds, such as the sound of a computer fan, air conditioning, or microphone hum, from audio transmitted to a conference. In this mode, non-stationary sounds are transmitted to give participants full context of other participants' environments and create a more realistic audio experience. If you want to send only voice to a conference, use the [High](#high) level.
     */
    Low = "low"
}
/**
 * The AudioCaptureModeStandardOptions model allows selecting the preferred audio mode options, such as the noise reduction level.
 *
 * This model is available in SDK 3.7 and later.
 */
export interface AudioCaptureModeStandardOptions {
    /**
     * The preferred level of noise reduction.
     */
    noiseReductionLevel?: NoiseReductionLevel;
}
/**
 * The AudioCaptureModeOptions model allows selecting the preferred audio capture mode and the preferred noise reduction level.
 *
 * This model is available in SDK 3.7 and later.
 */
export interface AudioCaptureModeOptions {
    /**
     * The preferred audio mode that allows enabling and disabling audio processing.
     */
    mode: AudioCaptureMode;
    /**
     * Additional audio options.
     */
    modeOptions?: AudioCaptureModeStandardOptions;
}
