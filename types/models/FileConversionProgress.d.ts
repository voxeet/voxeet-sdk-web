/**
 * The FileConversionProgress model gathers information about the process of converting files into images.
 */
export default class FileConversionProgress {
    /**
     * The ID of a participant who started a file presentation.
     */
    userId: string;
    /**
     * The file ID.
     */
    fileId: string;
    /**
     * The current step in the process of converting a file.
     */
    currentStep: number;
    /**
     * The number of steps required to convert a file.
     */
    stepCount: number;
    /**
     * The conversion status.
     */
    progress: number;
    /**
     * @ignore
     */
    constructor(userId: string, fileId: string, currentStep: number, stepCount: number, progress: number);
}
