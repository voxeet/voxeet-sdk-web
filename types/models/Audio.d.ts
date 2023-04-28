/**
 * The AudioCaptureMode model allows selecting the preferred mode for capturing the local participant's audio.
 */
export declare enum AudioCaptureMode {
    /**
     * Disables audio processing to allow transmitting non-voice audio to a conference. The mode is supported in SDK 3.7 and later.
     */
    Unprocessed = "unprocessed",
    /**
     * The default mode that optimizes captured audio for speech by aggressively removing non-speech content, such as background noise. This mode additionally enhances speech perceptibility to create a conversation-focused conference environment. The mode is supported in SDK 3.7 and later.
     */
    Standard = "standard",
    /**
     * Allows transmitting a high-quality audio stream with audio enhancements designed to improve the perceptual quality of music content. This mode is perfect for music lessons, virtual concerts, and music-focused webinars. The mode allows more background noise into the conference, as such we do not recommend using the mode in conferences focused on conversation.
     *
     * We highly recommend using headphones and [disabling echo cancellation](./models_Audio.AudioEchoCancellation.html) while using the mode.
     *
     * Music mode is available in SDK 3.8 and later when running on Chrome or Edge on desktop operating systems and requires using the Dolby Voice Codec (DVC), which is not enabled by default. Enabling the codec requires a proper installation of the SDK and setting the [dolbyVoice](./../classes/models_ConferenceParameters.ConferenceParameters.html#dolbyVoice) and the [dvwc](./../interfaces/models_Options.JoinOptions.html#dvwc) parameter to true. For more information, see the [Using the Dolby Voice Codec](https://docs.dolby.io/communications-apis/docs/using-the-dolby-voice-codec-javascript) guide.
     *
     * In the case of experiencing issues while using the mode, see the [Troubleshooting](https://docs.dolby.io/communications-apis/docs/troubleshooting-audio-issues-in-music-mode) guide.
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
     *
     * This level requires [using the Dolby Voice Codec (DVC)](https://docs.dolby.io/communications-apis/docs/initializing-javascript).
     */
    Low = "low"
}
/**
 * The AudioEchoCancellation model allows modifying the echo management setting for the [Music](./models_Audio.AudioCaptureMode.html#Music) mode while calling the [setCaptureMode](./../classes/services_audio_LocalAudio.LocalAudio.html#setCaptureMode) method.
 *
 * This mode is available in SDK 3.8 and later.
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
    Bitrate18k = "18Kbps",
    /**
     * Sets the bitrate to 32 kbps.
     */
    Bitrate32k = "32Kbps",
    /**
     * Sets the bitrate to 64 kbps.
     */
    Bitrate64k = "64Kbps",
    /**
     * Sets the bitrate to 80 kbps.
     */
    Bitrate80k = "80Kbps",
    /**
     * Sets the bitrate to 96 kbps.
     */
    Bitrate96k = "96Kbps",
    /**
     * Sets the bitrate to 128 kbps.
     */
    Bitrate128k = "128Kbps"
}
/**
 * The AudioCaptureModeStandardOptions model allows setting additional options for the [Standard](./../enums/models_Audio.AudioCaptureMode.html#Standard) mode.
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
 * The AudioCaptureModeMusicOptions model allows configuring additional audio options for the [Music](./../enums/models_Audio.AudioCaptureMode.html#Music) mode.
 *
 * This model is available in SDK 3.8 and later.
 */
export interface AudioCaptureModeMusicOptions {
    /**
     * Configures the echo cancellation setting.
     */
    echoCancellation?: AudioEchoCancellation;
}
/**
 * The AudioCaptureModeOptions model allows selecting the preferred audio capture mode and additional options for the selected mode.
 */
export interface AudioCaptureModeOptions {
    /**
     * The preferred audio mode.
     */
    mode: AudioCaptureMode;
    /**
     * Additional audio options for the selected audio mode:
     *
     * - If you use the default [Standard](./../enums/models_Audio.AudioCaptureMode.html#Standard) mode, use additional settings available in [AudioCaptureModeStandardOptions](./models_Audio.AudioCaptureModeStandardOptions.html):
     * @example
     * ```js
     * VoxeetSDK.audio.local.setCaptureMode({mode: "standard", modeOptions: {noiseReductionLevel: "low"}});
     * ```
     *
     * - If you use the [Music](./../enums/models_Audio.AudioCaptureMode.html#Music) mode, use additional settings available in [AudioCaptureModeMusicOptions](.//models_Audio.AudioCaptureModeMusicOptions.html):
     * @example
     * ```js
     * VoxeetSDK.audio.local.setCaptureMode({mode: "music", modeOptions: {echoCancellation: "off"}});
     * ```
     *
     * - The [Unprocessed](./../enums/models_Audio.AudioCaptureMode.html#Unprocessed) mode does not offer any additional settings:
     * @example
     * ```js
     * VoxeetSDK.audio.local.setCaptureMode({mode: "unprocessed"});
     * ```
     */
    modeOptions?: AudioCaptureModeStandardOptions & AudioCaptureModeMusicOptions;
}
