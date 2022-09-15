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
     * Returns the local participant's audio capture mode in Dolby Voice conferences.
     * @return {Promise<AudioCaptureModeOptions>}
     */
    getCaptureMode(): Promise<AudioCaptureModeOptions>;
    /**
     * Sets the local participant's audio capture mode in Dolby Voice conferences.
     * @param options - The audio capture mode.
     * @return {Promise<Error>}
     */
    setCaptureMode(options: AudioCaptureModeOptions): Promise<void>;
    /**
     * Returns the comfort noise level setting for output devices in Dolby Voice conferences.
     */
    getComfortNoiseLevel(): Promise<ComfortNoiseLevel>;
    /**
     * Sets the comfort noise level for output devices in Dolby Voice conferences.
     * @param {ComfortNoiseLevel} level - The comfort noise level.
     */
    setComfortNoiseLevel(level: ComfortNoiseLevel): Promise<void>;
    /**
     * Enables the local participant's audio and sends the audio to a conference. This method is not available for listeners and triggers the [UnsupportedError](doc:js-client-sdk-model-unsupportederror).
     *
     * The SDK automatically manages audio rendering, which means that the application does not need to implement its own <audio> element. The application can use the [selectAudioInput](doc:js-client-sdk-mediadeviceservice#selectaudioinput) and [selectAudioOutput](doc:js-client-sdk-mediadeviceservice#selectaudiooutput) methods to select the proper audio input and output devices.
     *
     * The start method requires a few seconds to become effective.
     */
    start(): Promise<any>;
    /**
     * Disables the local participant's audio and stop sending the audio to a conference. This method is not available for listeners and triggers the [UnsupportedError](doc:js-client-sdk-model-unsupportederror).
     *
     * The stop method requires a few seconds to become effective.
     *
     */
    stop(): Promise<any>;
    protected onConferenceJoined(e: ConferenceJoined): Promise<void>;
}
