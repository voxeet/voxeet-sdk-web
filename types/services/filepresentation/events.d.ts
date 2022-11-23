import { FilePresentation } from '../../models/FilePresentation';
import FileConversionProgress from '../../models/FileConversionProgress';
import FileConverted from '../../models/FileConverted';
/**
 * Emitted when a file is converted.
 *
 * @asMemberOf FilePresentationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 * ```javascript
 * VoxeetSDK.filePresentation.on('converted', (e: FileConverted) => {
 *
 * });
 * ```
 */
export declare function converted(e: FileConverted): void;
/**
 * Emitted when a presenter starts converting a file and the file conversion is in progress.
 *
 * @asMemberOf FilePresentationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 * ```javascript
 * VoxeetSDK.filePresentation.on('conversionProgress', (e: FileConversionProgress) => {
 *
 * });
 * ```
 */
export declare function conversionProgress(e: FileConversionProgress): void;
/**
 * Emitted when a presenter starts a file presentation.
 *
 * @asMemberOf FilePresentationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 * ```javascript
 *
 * VoxeetSDK.filePresentation.on('started', (e: FilePresentation) => {
 *
 * });
 * ```
 */
export declare function Started(e: FilePresentation): void;
/**
 * Emitted when a presenter changes the displayed page of the shared file. The event contains information about the current page number.
 *
 * @asMemberOf FilePresentationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 * ```javascript
 * VoxeetSDK.filePresentation.on('updated', (e: FilePresentation) => {
 *
 * });
 * ```
 */
export declare function updated(e: FilePresentation): void;
/**
 * Emitted when a presenter ends a file presentation.
 *
 * @asMemberOf FilePresentationService
 * @event
 * @param e - The object containing properties specific to the event.
 *
 * @example
 * ```javascript
 * VoxeetSDK.filePresentation.on('stopped', (e: FilePresentation) => {
 *
 * });
 * ```
 */
export declare function Stopped(e: FilePresentation): void;
