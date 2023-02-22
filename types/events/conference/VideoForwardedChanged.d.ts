import Event from '../Event';
/**
 * @ignore
 */
interface VideoForwardedData {
    videoForwardedId: string[];
    conferenceId: string;
}
/**
 * @name VideoForwardedChanged
 * Internal Event
 * @ignore
 */
export default class VideoForwardedChanged extends Event {
    videoForwardedId: string[];
    conferenceId: string;
    constructor();
    static fromData(data: VideoForwardedData): VideoForwardedChanged;
}
export {};
