import VideoPresentationEvent from './VideoPresentationEvent';
/**
 * @ignore
 */
export default class VideoPresentationStopped extends VideoPresentationEvent {
    constructor(data: {
        conferenceId: string;
        userId: string;
    });
    static fromData(data: any): VideoPresentationStopped;
}
