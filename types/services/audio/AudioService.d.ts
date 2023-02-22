import { LocalAudio } from '../../models/LocalAudio';
import { RemoteAudio } from './RemoteAudio';
/**
 * The AudioService allows managing the local and remote participants' audio streams.
 *
 * This service is available in SDK 3.7 and later.
 */
export declare class AudioService {
    #private;
    constructor(localAudio: LocalAudio, remoteAudio: RemoteAudio);
    /**
     * Audio settings for the local participant.
     */
    get local(): LocalAudio;
    /**
     * Audio settings for remote participants.
     */
    get remote(): RemoteAudio;
}
