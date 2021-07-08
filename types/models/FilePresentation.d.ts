import { Participant } from './Participant';
/**
 *The FilePresentation model includes information about the presented file, such as the file [ID](#id), information about the[participant who presents the file](#owner), [number of images within the shared file](#optional-imagecount), and the [current position](#optional-position) that informs which image is currently presented.
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
