import Service from '../Service';
import { ParticipantInfo } from '../../models/Options';
import { Participant } from '../../models/Participant';
import { ConferenceLeaving, ConferenceLeft } from '../../events/conference/index';
/**
 *
 * The SessionService allows [opening](#open) and [closing](#close) sessions. Opening a session is mandatory before interacting with any service.
 *
 * ---
 *
 * @noInheritDoc
 */
export declare class SessionService extends Service {
    #private;
    /**
     * @ignore
     */
    private wsHost;
    /**
     * @ignore
     * @param sdk
     */
    constructor(sdk: any);
    /**
     * On leaving the conference.
     * @ignore
     */
    protected onConferenceLeaving(e: ConferenceLeaving): Promise<void>;
    /**
     * On left the conference.
     * @ignore
     */
    protected onConferenceLeft(e: ConferenceLeft): Promise<void>;
    /**
     * On leaving the conference expired.
     * @ignore
     */
    private leaveConferenceTimeoutExpired;
    /**
     * Getting an access token from voxeet servers.
     * @ignore
     */
    private register;
    /**
     * Opens a new session.
     *
     * @param info - The optional information about the local participant.
     */
    open(info?: ParticipantInfo): Promise<void>;
    /**
     * Closes the current session.
     */
    close(): Promise<void>;
    private refreshToken;
    /**
     * Provides the local participant object that belongs to the current session.
     */
    get participant(): Participant;
    get customerKey(): string;
    get customerSecret(): string;
    /**
     * Refreshes the conference access token.
     * @ignore
     */
    refreshAccessToken(): any;
    private accessTokenTimeoutHalfExpiration;
    private accessTokenTimeoutThreeQuarterExpiration;
    private accessTokenTimeoutExpired;
    /**
     * @ignore
     */
    private startAccessTokenExpirationTimeouts;
    /**
     * @ignore
     * @param token
     */
    private isTokenValid;
    /**
     * If true, indcates that connection with backend is open.
     */
    isOpen(): boolean;
    /**
     * @ignore
     */
    set customerKey(key: string);
    /**
     * @ignore
     */
    set customerSecret(secret: string);
    /**
     * @ignore
     */
    set accessToken(token: string);
    /**
     * @ignore
     */
    set refreshCallback(callback: Function);
}
