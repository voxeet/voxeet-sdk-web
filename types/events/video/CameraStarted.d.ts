import Event from '../Event';
/**
 * @ignore
 */
export interface CameraStartedData {
    stream: MediaStream;
}
/**
 * @ignore
 */
export default class CameraStarted extends Event {
    stream: MediaStream;
    constructor();
    static fromData(data: CameraStartedData): CameraStarted;
}
