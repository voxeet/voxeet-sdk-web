import VideoPresentationEvent from './VideoPresentationEvent';
/**
 * @ignore
 */
export default class VideoPresentationPlay extends VideoPresentationEvent {
    timestamp: number;
    constructor(data: {
        conferenceId: string;
        userId: string;
        timestamp: number;
    });
    static fromData(data: any): VideoPresentationPlay;
}
