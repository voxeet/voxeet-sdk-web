import Service from '../Service';
import { ParticipantInfo } from '../../models/Options';
import { Participant } from '../../models/Participant';
import { ConferenceLeaving, ConferenceLeft } from '../../events/conference/index';
/**
 *The SessionService allows connecting the SDK with the Dolby.io backend via the [open](#open) method. Opening a session is mandatory before interacting with any service.
 *
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
     *
     * @example
     * ```javascript
     * // Open a session as John Doe
     * await VoxeetSDK.session.open({
     *   name: 'John Doe',
     *   externalId: 'john.doe'
     * });
     * ```
     */
    open(info?: ParticipantInfo): Promise<void>;
    /**
     * Closes the current session.
     *
     * @example
     * ```javascript
     * await VoxeetSDK.session.close();
     * ```
     */
    close(): Promise<void>;
    private refreshToken;
    /**
     * Returns the local participant object that belongs to the current session.
     */
    get participant(): Participant;
    /**
     * @ignore
     */
    get customerKey(): string;
    /**
     * @ignore
     */
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
     * Checks whether there is an open session that connects the SDK with the Dolby.io backend.
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
    /**
     * Updates the local participant's name and avatar URL. The method does not allow updating the externalId.
     *
     * @param participantInfo - The preferred participant name and avatar URL.
     */
    updateParticipantInfo({ name, avatarUrl }: ParticipantInfo): Promise<void>;
}
