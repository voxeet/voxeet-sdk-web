import VideoPresentationEvent from './VideoPresentationEvent';
/**
 * @ignore
 */
export default class VideoPresentationStarted extends VideoPresentationEvent {
    url: string;
    timestamp: number;
    constructor(data: {
        conferenceId: string;
        userId: string;
        url: string;
        timestamp: number;
    });
    static fromData(data: any): VideoPresentationStarted;
}
