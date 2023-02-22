import Event from '../Event';
/**
 * @ignore
 */
export interface UpdateTokenData {
    conferenceId: string;
    userId: string;
    content: {
        access_token: string;
    };
}
/**
 * @ignore
 */
export default class UpdateToken extends Event {
    conferenceId: string;
    userId: string;
    conferenceAccessToken: string;
    constructor();
    static fromData(data: UpdateTokenData): UpdateToken;
}
