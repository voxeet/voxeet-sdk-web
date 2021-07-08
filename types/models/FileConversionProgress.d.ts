/**
 * The FileConversionProgress model represents the process of converting files into images.
The model includes the [current step](#currentstep) in the process of converting a file, [ID of the converted file](#fileid), [conversion status](#progress), [the number of steps required to convert a file](#stepcount), and [ID of the participant who started the file presentation](#userid).
 */
export default class FileConversionProgress {
    /**
     * The ID of a user who started a file presentation.
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
