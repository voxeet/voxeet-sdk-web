import Event from '../Event';
import { FilePresentation } from '../../models/FilePresentation';
/**
 * @ignore
 */
interface FilePresentationStartedData {
    fileId: string;
    userId: string;
    position: number;
    imageCount: number;
}
/**
 * @ignore
 */
export default class FilePresentationStarted extends Event {
    file: FilePresentation;
    constructor(file: FilePresentation);
    static fromData(data: FilePresentationStartedData): FilePresentationStarted;
}
export {};
