/**
 * The AudioCaptureMode model allows selecting the preferred mode for capturing the local participant's audio.
 *
 * By default, the Dolby Voice audio processing algorithm is enabled in Dolby Voice conferences to improve voice quality. However, audio processing lowers the quality of non-voice audio. To send non-voice audio, such as music, use the Music mode or disable audio processing by using the Unprocessed mode.
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
    Standard = "standard",
    /**
     * Allows sending high-quality music and voice at the same time. The mode distinguishes voice streams from music streams and processes them differently to improve voice quality without impacting the quality of music. We recommend using this mode during virtual music lessons, webinars with music, or interactive music events.
     */
    Music = "music"
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
 * The AudioEchoCancellation model allows modifying the echo management setting.
 */
export declare enum AudioEchoCancellation {
    /**
     * The default option that enables echo cancellation to remove echo from the audio sent into the conference.
     */
    Default = "default",
    /**
     * Enables echo cancellation to remove echo from the audio sent into the conference.
     */
    On = "on",
    /**
     * Disables echo cancellation to prevent degrading quality of the captured audio by the echo management algorithms. We recommend this option for users who use headphones and, therefore, do not inject echo back into the conference.
     */
    Off = "off"
}
/**
 * The AudioBitrate model allows selecting the bitrate of the outgoing audio stream.
 *
 * This model is supported only in SDK 3.8 and later.
 */
export declare enum AudioBitrate {
    /**
     * Sets the bitrate to 18 kbps.
     */
    Bitrate18k = "18Kbps"
    /**
     * Sets the bitrate to 64 kbps.
     */ ,
    Bitrate64k = "64Kbps"
    /**
     * Sets the bitrate to 80 kbps.
     */ ,
    Bitrate80k = "80Kbps"
    /**
     * Sets the bitrate to 96 kbps.
     */ ,
    Bitrate96k = "96Kbps"
    /**
     * Sets the bitrate to 128 kbps.
     */ ,
    Bitrate128k = "128Kbps"
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
 * The AudioCaptureModeMusicOptions model allows configuring additional audio options for the Music mode.
 */
export interface AudioCaptureModeMusicOptions {
    /**
     * Configures the echo cancellation setting.
     */
    echoCancellation?: AudioEchoCancellation;
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
    modeOptions?: AudioCaptureModeStandardOptions & AudioCaptureModeMusicOptions;
}
