import { AudioCaptureModeOptions } from '../../models/Audio';
/**
 * @ignore
 */
export declare enum ConferenceType {
    DVWC = 0,
    DV_OPUS = 1,
    NON_DV_OPUS = 2
}
/**
 * @ignore
 */
export declare function getConferenceType(isDvwc: boolean, isDolbyVoice: boolean): ConferenceType;
/**
 * @ignore
 */
export declare function pickConstraints(newMode: AudioCaptureModeOptions, conferenceType: ConferenceType, isDapm: boolean): {
    autoGainControl: boolean;
    googAutoGainControl: boolean;
    noiseSuppression: boolean;
    echoCancellation: boolean;
};
