import { BaseConferenceService } from '../Service';
import { FilePresentation } from '../../models/FilePresentation';
import FileConverted from '../../models/FileConverted';
import { ConferenceService } from '../conference/ConferenceService';
import { ConferenceJoined, ConferenceLeft } from '../../events/conference';
/**
 * The FilePresentationService allows presenting files during a conference. The Dolby.io Communications APIs service converts the user-provided file into multiple pages, as images, accessible through the [image](#image) method.
 *
 * **The file presentation workflow:**
 *
 * **1.** The presenter calls the [convert](#convert) method to upload and convert a file.
 *
 * **2.** The presenter receives the [conversionProgress](#conversionprogress) event that informs that the file conversion is in progress.
 *
 * **3.** The presenter receives [converted](#converted) event when the file conversion is finished.
 *
 * **4.** The presenter calls the [start](#start) method to start presenting the file.
 *
 * **5.** The presenter and the viewers receive the [started](#started) event that informs that the file presentation starts. Upon receiving the [started](#started) event, call the [image](#image) method to get the converted file images URLs and display the proper page of the file by retrieving the individual images.
 *
 * **6.** The application is responsible for coordinating the page flip between the local and the presented files. The presenter calls the [update](#update) method to inform the service to send the updated page number to the participants.
 *
 * **7.** The presenter and viewers receive the [updated](#updated) event with the current page number. Receiving the [updated](#updated) event should trigger calling the [image](#image) method to display the proper page of the file by retrieving the individual images.
 *
 * **8.** The presenter may call the [thumbnail](#thumbnail) method to obtain thumbnail images of the file and implement a carousel control for the presenting user to flip pages locally.
 *
 * **9.** The presenter calls the [stop](#stop) method to end the file presentation.
 *
 * **10.** The presenter and the viewers receive the [stopped](#stopped) event to inform about the end of the file presentation.
 *
 * The following diagram presents the easiest workflow for presenting files during a conference.
 *
 * <br>
 *
 * <img src="https://files.readme.io/45244f2-js-file-presentation.png" title="The file presentation diagram" width="700"/>
 *
 * The [current](#current) accessor allows the participants to receive information about the current state of the file presentation.
 *
 * <br>
 *
 */
export declare class FilePresentationService extends BaseConferenceService {
    #private;
    /**
     * @ignore
     * @param sdk
     * @param conferenceService
     */
    constructor(sdk: any, conferenceService: ConferenceService);
    /**
     * Converts the user-provided file into multiple pages, as images, that can be shared during the file presentation. The file is uploaded as FormData. The maximum possible size of the uploaded file is 250 MB. In the case of uploading a file that exceeds 250 MB, the SDK triggers an error.
     *
     * Supported file formats are:
     *
     * - doc/docx (Microsoft Word)
     * - ppt/pptx
     * - pdf
     *
     * After conversion, the files are broken into individual images with maximum resolution capped at **2560x1600**.
     *
     * When the file is converted and ready for the presentation, the application receives the [converted](#converted) event.
     *
     * Only the converted files can be shared during conferences.
     *
     * @param file - The file that the presenter wants to share during the conference.
     */
    convert(file: File): any;
    /**
     * Converts a file to a specific URL.
     * @param filename - Name of the file
     * @param url - Url of the file
     * @ignore
     */
    convertUrl(filename: string, url: string): any;
    /**
     * Starts a file presentation. The Dolby.io Communications APIs allow presenting only the converted files.
     *
     * This method is not available for [listeners](../enums/models_Participant.ParticipantType.html#LISTENER). Calling this method by a listener results in the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * @param file - The converted file that the presenter wants to share during the conference.
     */
    start(file: FileConverted): any;
    /**
     * Informs the service to send the updated page number to conference participants.
     * @param page - The page number that corresponds to the page that should be presented.
     */
    update(page: number): Promise<any>;
    /**
     * Stops the file presentation.
     */
    stop(): Promise<any>;
    /**
     * Provides the image URL that refers to a specific page of the presented file.
     * @param page - The number of the presented page. Files that do not have any pages, for example jpg images, require setting the value of the page parameter to `0`.
     * @param fileId - The file ID that allows presenting files without joining a conference.
     */
    image(page: number, fileId?: string): Promise<string>;
    /**
     * Provides the thumbnail URL that refers to a specific page of the presented file.
     * @param page - The number of the presented page. Files that do not have any pages, for example jpg images, require setting the value of this parameter to `0`.
     * @param fileId - The file ID that allows presenting files without joining a conference.
     */
    thumbnail(page: number, fileId?: string): Promise<string>;
    private checkPresentation;
    private onFileConverted;
    private onFileConversionProgress;
    private onFilePresentationStarted;
    private onFilePresentationUpdated;
    private onFilePresentationStopped;
    /**
     * Returns information about the current state of the file presentation. Use this accessor if you wish to receive information that is available in the [FilePresentation](./models_FilePresentation.FilePresentation.html) object, such as the file ID, the number of images in the presentation, information about the file owner, or the current position in the presentation. For example, use the following code to ask about the file owner:
     *
     * ```javascript
     * VoxeetSDK.filePresentation.current.owner;
     * ```
     */
    get current(): FilePresentation;
    protected onConferenceJoined(event: ConferenceJoined): void;
    protected onConferenceLeft(event: ConferenceLeft): void;
}
