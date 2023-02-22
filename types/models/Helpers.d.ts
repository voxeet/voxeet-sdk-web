import { ParticipantInfo } from './Options';
import ConferenceOptions from './ConferenceOptions';
import AudioProcessingOptions from './AudioProcessingOptions';
/**
 * @ignore
 * @param data
 */
export declare function makeConferenceOptions(data: any): ConferenceOptions;
/**
 * @ignore
 * @param data
 * type: data.type || "user", // User type, none / user / listener / mixer,
 */
export declare function makeUserOptions(data: any): ParticipantInfo;
/**
 * @ignore
 * @param conferenceId
 * @param data
 */
export declare function makeMixingOptions(conferenceId: string, data: any): {
    enabled: any;
    uri: any;
};
/**
 * @ignore
 * @param activated
 */
export declare function makeSimulcastOption(activated: boolean): boolean;
/**
 * @ignore
 * @param data
 */
export declare function makeAudioProcessingOptions(data: any): AudioProcessingOptions;
/**
 * @ignore
 */
export declare function isMobile(): boolean;
