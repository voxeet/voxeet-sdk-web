import { AudioCaptureModeOptions } from '../../../models/Audio';
export declare type CaptureModeContext = {
    participantId: string;
    conferenceId: string;
    isDapmReady: (abortSignal: AbortSignal) => Promise<boolean>;
    shouldUpdateProcessing: boolean;
};
export interface CaptureModeState {
    setCaptureMode(previousAudioCaptureModeOptions: AudioCaptureModeOptions, audioCaptureModeOptions: AudioCaptureModeOptions, context?: CaptureModeContext): Promise<void>;
    init?(conferenceId: string, participantId: string, isDapmReady: (abortSignal: AbortSignal) => Promise<boolean>, audioCaptureModeOptions: AudioCaptureModeOptions): void;
}
/**
 * @ignore
 */
export declare const INITIAL_CAPTURE_MODE: AudioCaptureModeOptions;
