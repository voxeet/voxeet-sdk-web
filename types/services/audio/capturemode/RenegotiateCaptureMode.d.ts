import { AudioBitrate, AudioCaptureMode, AudioCaptureModeOptions } from '../../../models/Audio';
/**
 * @ignore
 */
export declare type RenegotiableJoinOptions = {
    audioBitrate: AudioBitrate;
    preferSendMono: boolean;
};
/**
 * @ignore
 */
export declare type RenegotiateCaptureMode = (joinOptions: RenegotiableJoinOptions, constraints?: MediaTrackConstraints & {
    [otherOptions: string]: unknown;
}, captureModeOptions?: AudioCaptureModeOptions, sendRequest?: boolean, dapmInited?: boolean) => Promise<void>;
/**
 * @ignore
 */
export declare const renegotiableJoinOptionsPerCaptureMode: Record<AudioCaptureMode, RenegotiableJoinOptions>;
/**
 * @ignore
 */
export declare const getRenegotiableJoinOptionsPerCaptureMode: (captureMode: AudioCaptureMode) => RenegotiableJoinOptions;
export declare const STANDARD_BITRATE: AudioBitrate;
