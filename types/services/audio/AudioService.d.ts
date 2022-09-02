import { ConferenceService } from '../conference/ConferenceService';
import { SessionService } from '../session/SessionService';
import { LocalAudio } from './LocalAudio';
import { RemoteAudio } from './RemoteAudio';
/**
 * The AudioService allows enabling and disabling audio for the local and remote participants.
 *
 * This service is available in SDK 3.7 and later.
 */
export declare class AudioService {
    #private;
    constructor(sdk: any, conference: ConferenceService, session: SessionService);
    /**
     * Audio settings for the local participant.
     */
    get local(): LocalAudio;
    /**
     * Audio settings for remote participants.
     */
    get remote(): RemoteAudio;
}
