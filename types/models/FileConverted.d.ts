/**
 * To share a file during a conference, the [FilePresentationService](doc:js-client-sdk-filepresentationservice) converts the user-provided file into multiple pages (images). The FileConverted model represents the converted file. The model includes the file [ID](#id), file [name](#optional-name), [size](#optional-size), [number of images](#imagecount) within the converted file, and the [ID of the participant](#optional-owner) who converted the file.
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
    imageCount: number;
    /**
     * @ignore
     */
    constructor(id: string, imageCount: number);
}
