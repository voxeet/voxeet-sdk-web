import { SupportedSpatialAudioStyles } from './SpatialAudio';
import { VideoForwardingStrategy } from './VideoForwarding';
/**
 * @ignore
 */
export declare type Metadata = {
    audio?: 'true' | 'false';
    dvwc?: 'true' | 'false';
    externalId: string;
    externalName: string;
    externalPhotoUrl: string;
    forwardingStrategy?: VideoForwardingStrategy;
    maxVideoForwarding?: string;
    preferRecvMono?: 'true' | 'false';
    preferSendMono?: 'true' | 'false';
    simulcast?: 'true' | 'false';
    spatialAudio?: string;
    supportedAVSyncFakeAudio?: 'true' | 'false';
    supportedSpatialAudioStyles?: SupportedSpatialAudioStyles;
    video?: 'true' | 'false';
};
