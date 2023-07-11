import { AudioBitrate, AudioCaptureModeOptions } from '../../../models/Audio';
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
}, captureModeOptions?: AudioCaptureModeOptions, sendRequest?: boolean) => Promise<void>;
