import Event from '../Event';
import { FilePresentation } from '../../models/FilePresentation';
/**
 * @ignore
 */
interface FilePresentationStoppedData {
    fileId: string;
    userId: string;
}
/**
 * @ignore
 */
export default class FilePresentationStopped extends Event {
    file: FilePresentation;
    constructor(file: FilePresentation);
    static fromData(data: FilePresentationStoppedData): FilePresentationStopped;
}
export {};
