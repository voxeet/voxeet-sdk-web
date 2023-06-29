import { AudioCaptureModeOptions } from '../../../models/Audio';
export declare type CaptureModeContext = {
    participantId: string;
    conferenceId: string;
    isDapm: boolean;
};
export interface CaptureModeState {
    setCaptureMode(previousAudioCaptureModeOptions: AudioCaptureModeOptions, audioCaptureModeOptions: AudioCaptureModeOptions, context?: CaptureModeContext): Promise<void>;
}
/**
 * @ignore
 */
export declare const INITIAL_CAPTURE_MODE: AudioCaptureModeOptions;
