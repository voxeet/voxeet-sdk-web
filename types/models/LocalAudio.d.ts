/// <reference types="node" />
import { EventEmitter } from 'events';
import { AudioCaptureModeOptions } from './Audio';
import ComfortNoiseLevel from './ComfortNoiseLevel';
/**
 * The LocalAudio model allows enabling and disabling the local participant's audio as well as setting and checking the capture mode and comfort noise level.
 */
export interface LocalAudio extends EventEmitter {
    /**
     * Starts transmitting audio from the local participant's microphone to a conference. The SDK automatically manages audio rendering, which means that an application does not need to implement its own `<audio>` element. The method is available in SDK 3.7 and later, requires a few seconds to become effective, and is not supported for listeners.
     */
    start(constraints?: MediaTrackConstraints): Promise<MediaStreamTrack>;
    /**
     * Starts transmitting the local participant's audio from a custom track to a conference. The method allows transmitting audio from a non-microphone source, which may be useful for adding bots to a conference or using custom audio processing. For the best experience, set the audio capture mode to [Unprocessed](../enums/models_Audio.AudioCaptureMode.html#Unprocessed) if your custom track contains a non-speech content. The SDK automatically manages audio rendering, which means that an application does not need to implement its own `<audio>` element.
     *
     * This method is available in SDK 3.9 and later and is not supported for listeners. [Applying constraints](#applyconstraints) to an audio track is not supported while using the method.
     */
    start(customTrack: MediaStreamTrack): Promise<MediaStreamTrack>;
    /**
     * Enables the local participant's audio and sends the audio to a conference. This method is not available for listeners and triggers the [UnsupportedError](../lib_Exceptions.UnsupportedError.html).
     *
     * The SDK automatically manages audio rendering, which means that the application does not need to implement its own `<audio>` element. The application can use the [selectAudioInput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioInput) and [selectAudioOutput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioOutput) methods to select the proper audio input and output devices.
     *
     * The start method requires a few seconds to become effective.
     * @ignore
     * @param constraintsOrTrack
     */
    start(constraintsOrTrack?: MediaTrackConstraints | MediaStreamTrack): Promise<MediaStreamTrack>;
    /**
     * Disables the local participant's audio and stops sending the audio to a conference. This method is supported in SDK 3.7 and later, requires a few seconds to become effective, and is not available for listeners.
     *
     */
    stop(): Promise<void>;
    /**
     * Applies a set of audio constraints to an audio track to allow setting ideal values and acceptable value ranges of constrainable properties of the track, such as echo cancellation and noise suppression. The method does not allow setting the deviceId and groupId constraints. If the required constraints are too strict to find a match during a track configuration attempt, the promise is rejected with the [OverconstrainedError](./lib_Exceptions.MediaStreamError.html). We recommend using this method for applying constraints; [MediaStreamTrack.applyconstraints()](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamtrack-applyconstraints) may not work as expected.
     *
     * The method is supported in SDK 3.7 and later and is available only for [users](../enums/models_Participant.ParticipantType.html#USER) who use the Opus codec. The method may be rejected and trigger the [UnsupportedError](../lib_Exceptions.UnsupportedError.html) after being called by a listener, a participant who uses the Dolby Voice Codec or sends audio from a custom track, or an application user who is not in a conference or whose local audio track is not started.
     *
     * The method may require a few seconds to become effective because some constraints of an audio track must be recreated.
     *
     * @param constraints - The audio constraints.
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    /**
     * Returns the local participant's audio capture mode in Dolby Voice conferences. The method is supported in SDK 3.7 and later.
     * @return {Promise<AudioCaptureModeOptions>}
     */
    getCaptureMode(): Promise<AudioCaptureModeOptions>;
    /**
     * Sets the local participant's audio capture mode in Dolby Voice conferences to allow changing audio processing. The following modes are available:
     *
     * - [Standard](./../enums/models_Audio.AudioCaptureMode.html#Standard): The default mode that optimizes captured audio for speech by aggressively removing non-speech content, such as background noise. The mode is supported in SDK 3.7 and later.
     *
     * - [Music](./../enums/models_Audio.AudioCaptureMode.html#Music): Enhances the quality of music content and allows transmitting the captured audio with a high-quality stream. The mode is supported in SDK 3.8 and later.
     *
     * - [Unprocessed](./../enums/models_Audio.AudioCaptureMode.html#Unprocessed): Reduces latency that comes from audio processing and prevents over-processing audio in some scenarios. The mode is supported in SDK 3.7 and later.
     *
     * @param options - The preferred audio capture mode and additional settings for the selected mode.
     * @return {Promise<Error>}
     */
    setCaptureMode(options: AudioCaptureModeOptions): Promise<void>;
    /**
     * Returns the comfort noise level setting for output devices. Getting the comfort noise level is supported only for users who use the [Dolby Voice Codec](https://docs.dolby.io/communications-apis/docs/using-the-dolby-voice-codec-javascript) in Dolby Voice conferences. The method is available in SDK 3.7 and later.
     */
    getComfortNoiseLevel(): Promise<ComfortNoiseLevel>;
    /**
     * Sets the comfort noise level for output devices. Setting the comfort noise level is supported only for users who use the [Dolby Voice Codec](https://docs.dolby.io/communications-apis/docs/using-the-dolby-voice-codec-javascript) in Dolby Voice conferences. The method is available in SDK 3.7 and later.
     * @param {ComfortNoiseLevel} level - The comfort noise level.
     */
    setComfortNoiseLevel(level: ComfortNoiseLevel): Promise<void>;
}
