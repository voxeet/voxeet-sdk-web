/**
 * To share a file during a conference, the [FilePresentationService](./services_filepresentation_FilePresentationService.FilePresentationService.html) converts the user-provided file into multiple pages (images). The FileConverted model gathers information about the converted file.
 */
export default class FileConverted {
    /**
     * The file ID.
     */
    id: string;
    /**
     * The file name.
     */
    name?: string;
    /**
     * The size of the converted file.
     */
    size?: number;
    /**
     * The ID of the participant who converted the file.
     */
    ownerId?: string;
    /**
     * The number of images within the converted file.
     */
    imageCount?: number;
    /**
     * @ignore
     */
    constructor(id: string, imageCount: number);
}
