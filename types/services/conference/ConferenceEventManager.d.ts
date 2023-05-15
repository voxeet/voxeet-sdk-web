import ConferenceManager from './ConferenceManager';
import { SessionService } from '../session/SessionService';
/**
 * @ignore
 */
interface ConferenceEventHandlers {
    onStreamAdded: Function;
    onStreamUpdated: Function;
    onStreamRemoved: Function;
    onParticipantAdded: Function;
    onParticipantUpdated: Function;
    onConferenceGlobalError: Function;
}
/**
 * @ignore
 */
declare class ConferenceEventManager {
    #private;
    constructor(session: SessionService, conferenceManager: ConferenceManager, eventHandlers: ConferenceEventHandlers, getConference: Function);
    private get participants();
    get conference(): any;
    get dolbyVoice(): any;
    onLeave(): void;
    private onVideoForwardedChanged;
    private onParticipantAdded;
    private onParticipantUpdated;
    private onParticipantUpdatedHandleStreams;
    private onAudioUpdated;
    private onStreamAdded;
    /**
     * @ignore
     * @param peerId
     * @param stream
     */
    private onStreamUpdated;
    private onStreamRemoved;
    private createMixerMixParticipantData;
}
export default ConferenceEventManager;
