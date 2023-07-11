import { CaptureModeContext, CaptureModeState } from './CaptureModeState';
import { AudioCaptureModeOptions } from '../../../models/Audio';
import { RenegotiableJoinOptions, RenegotiateCaptureMode } from './RenegotiateCaptureMode';
export declare class DvcsOpusCaptureModeState implements CaptureModeState {
    #private;
    constructor(renegotiateCaptureMode: RenegotiateCaptureMode, initialRenegotiableOptions: () => RenegotiableJoinOptions);
    setCaptureMode(previousModeAndOptions: AudioCaptureModeOptions, newModeAndOptions: AudioCaptureModeOptions, { participantId, conferenceId, isDapmReady }: CaptureModeContext): Promise<void>;
    private getRenegotiateOptions;
    private getModeStandardRenegotiateOptions;
    private updateProcessing;
    private getAudioProcessingValue;
    init(conferenceId: string, participantId: string, isDapmReadyCallback: (abortSignal: AbortSignal) => Promise<boolean>, audioCaptureModeOptions: AudioCaptureModeOptions): Promise<void>;
    private isThereAnyPendingWaitingForDapmTaskController;
    private registerWaitingForDapmTaskController;
}
