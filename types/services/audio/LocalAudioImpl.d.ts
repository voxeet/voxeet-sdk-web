import { AudioCaptureModeOptions } from '../../models/Audio';
import { BaseConferenceService } from '../Service';
import ComfortNoiseLevel from '../../models/ComfortNoiseLevel';
import { ConferenceJoined } from '../../events/conference';
import { SessionService } from '../session/SessionService';
import { LocalAudio } from '../../models/LocalAudio';
/**
 * Implementation of LocalAudio interface.
 * @ignore
 */
export declare class LocalAudioImpl extends BaseConferenceService implements LocalAudio {
    #private;
    constructor(sdk: any, session: SessionService);
    /**
     * @implements LocalAudio.getCaptureMode()
     */
    getCaptureMode(): Promise<AudioCaptureModeOptions>;
    /**
     * @implements LocalAudio.setCaptureMode()
     */
    setCaptureMode(options: AudioCaptureModeOptions): Promise<void>;
    private setModeUnprocessed;
    private setModeStandard;
    private setModeMusic;
    private resetDeviceConstraint;
    validateAudioCaptureOptions(options: any): boolean;
    /**
     * @implements LocalAudio.getComfortNoiseLevel()
     */
    getComfortNoiseLevel(): Promise<ComfortNoiseLevel>;
    /**
     * @implements LocalAudio.setComfortNoiseLevel()
     */
    setComfortNoiseLevel(level: ComfortNoiseLevel): Promise<void>;
    /**
     * @implements LocalAudio.start()
     */
    start(constraintsOrTrack?: MediaTrackConstraints | MediaStreamTrack): Promise<MediaStreamTrack>;
    private startLocalAudio;
    /**
     * @implements LocalAudio.stop()
     */
    stop(): Promise<void>;
    private stopLocalAudio;
    /**
     * @implements LocalAudio.applyConstraints()
     */
    applyConstraints(constraints: MediaTrackConstraints): Promise<void>;
    protected onConferenceJoined(e: ConferenceJoined): Promise<void>;
    private onUpdateToken;
}
