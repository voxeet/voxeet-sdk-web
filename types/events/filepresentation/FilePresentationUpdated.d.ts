import Event from '../Event';
import { FilePresentation } from '../../models/FilePresentation';
/**
 * @ignore
 */
interface FilePresentationUpdatedData {
    fileId: string;
    userId: string;
    position: number;
}
/**
 * @ignore
 */
export default class FilePresentationUpdated extends Event {
    file: FilePresentation;
    constructor(file: FilePresentation);
    static fromData(data: FilePresentationUpdatedData): FilePresentationUpdated;
}
export {};
