import { CaptureMode as DvwcCaptureMode } from '@dolby-dvc/dvwc';
import { AudioCaptureModeOptions } from './Audio';
/**
 * Translate SDK processing mode to DVWC capture mode
 * @ignore
 */
export declare function captureModeToDvwc(options: AudioCaptureModeOptions): any;
export declare function dvwcToCaptureMode(dvwcCaptureMode: typeof DvwcCaptureMode): AudioCaptureModeOptions;
