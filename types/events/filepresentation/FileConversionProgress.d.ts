import Event from '../Event';
import { default as FileConversionProgressModel } from '../../models/FileConversionProgress';
/**
 * @ignore
 */
interface FileConversionProgressData {
    userId: string;
    fileId: string;
    currentStep: number;
    stepCount: number;
    progress: number;
}
/**
 * @ignore
 */
export default class FileConversionProgress extends Event {
    fileConversion: FileConversionProgressModel;
    constructor(fileConversion: FileConversionProgressModel);
    static fromData(data: FileConversionProgressData): FileConversionProgress;
}
export {};
