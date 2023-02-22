import Event from '../Event';
import { default as FileConvertedModel } from '../../models/FileConverted';
/**
 * @ignore
 */
export default class FileConverted extends Event {
    error: String;
    files: FileConvertedModel[];
    constructor();
    static fromData(data: any): FileConverted;
}
