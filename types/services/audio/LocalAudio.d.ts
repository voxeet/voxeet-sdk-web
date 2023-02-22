import { AudioCaptureModeOptions } from '../../models/Audio';
import { BaseConferenceService } from '../Service';
import ComfortNoiseLevel from '../../models/ComfortNoiseLevel';
import { ConferenceJoined } from '../../events/conference';
import { SessionService } from '../session/SessionService';
/**
 * The LocalAudio model allows enabling and disabling the local participant's audio as well as setting and checking the capture mode and comfort noise level.
 *
 * This model is supported only in SDK 3.7 and later.
 */
export declare class LocalAudio extends BaseConferenceService {
    #private;
    constructor(sdk: any, session: SessionService);
    /**
     * Gets the local participant's audio capture mode in Dolby Voice conferences.
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
     * Returns the comfort noise level setting for output devices. Getting the comfort noise level is supported only in Dolby Voice conferences for users who use the [Dolby Voice Codec](https://docs.dolby.io/communications-apis/docs/using-the-dolby-voice-codec-javascript).
     */
    getComfortNoiseLevel(): Promise<ComfortNoiseLevel>;
    /**
     * Sets the comfort noise level for output devices. Setting the comfort noise level is supported only in Dolby Voice conferences for users who use the [Dolby Voice Codec](https://docs.dolby.io/communications-apis/docs/using-the-dolby-voice-codec-javascript).
     * @param {ComfortNoiseLevel} level - The comfort noise level.
     */
    setComfortNoiseLevel(level: ComfortNoiseLevel): Promise<void>;
    /**
     * Starts transmitting local participant's audio to a conference. This method is not available for listeners and triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * The SDK automatically manages audio rendering, which means that the application does not need to implement its own `<audio>` element. The application can use the [selectAudioInput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioInput) and [selectAudioOutput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioOutput) methods to select the proper audio input and output devices.
     *
     * The start method requires a few seconds to become effective.
     *
     * @param constraintsOrTrack
     */
    start(constraintsOrTrack?: MediaTrackConstraints | MediaStreamTrack): Promise<any>;
    /**
     * Disables the local participant's audio and stop sending the audio to a conference. This method is not available for listeners and triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * The stop method requires a few seconds to become effective.
     *
     */
    stop(): Promise<any>;
    /**
     * Applies a set of audio constraints to an audio track to allow setting ideal values and acceptable value ranges of constrainable properties of the track, such as echo cancellation and noise suppression. The method does not allow setting the deviceId and groupId constraints. If the required constraints are too strict to find a match during a track configuration attempt, the promise is rejected with the [OverconstrainedError](./lib_Exceptions.MediaStreamError.html). We recommend using this method for applying constraints; [MediaStreamTrack.applyconstraints()](https://www.w3.org/TR/mediacapture-streams/#dom-mediastreamtrack-applyconstraints) may not work as expected.
     *
     * The method is available only for [users](./../enums/models_Participant.ParticipantType.html#USER) who use the Opus codec. The method may be rejected and trigger the [UnsupportedError](./lib_Exceptions.UnsupportedError.html) after being called by a listener, a participant who uses the Dolby Voice Codec or sends audio from a custom track, or an application user who is not in a conference or whose local audio track is not started.
     *
     * The method may require some time to become effective because an audio track object must be recreated.
     *
     * @param constraints - The audio constraints.
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    protected onConferenceJoined(e: ConferenceJoined): Promise<void>;
}
