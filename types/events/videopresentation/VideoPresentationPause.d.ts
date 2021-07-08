import VideoPresentationEvent from './VideoPresentationEvent';
/**
 * @ignore
 */
export default class VideoPresentationPause extends VideoPresentationEvent {
    timestamp: number;
    constructor(data: {
        conferenceId: string;
        userId: string;
        timestamp: number;
    });
    static fromData(data: any): VideoPresentationPause;
}
