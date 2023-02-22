import { Participant } from './Participant';
/**
 *The FilePresentation model contains information about the presented file.
 */
export declare class FilePresentation {
    /**
     * The file ID.
     */
    id: string;
    /**
     * The file owner id.
     * @ignore
     */
    ownerId?: string;
    /**
     * The file owner.
     */
    owner: Participant;
    /**
     * The number of images in the presentation.
     */
    imageCount?: number;
    /**
     * The number of the currently displayed image of the shared file.
     */
    position?: number;
    /** @ignore */
    constructor(id: string);
}
