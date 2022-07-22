import Event from '../Event';
/**
 * @ignore
 */
export interface CameraStoppedData {
    stream: MediaStream;
}
/**
 * @ignore
 */
export default class CameraStopped extends Event {
    stream: MediaStream;
    constructor();
    static fromData(data: CameraStoppedData): CameraStopped;
}
