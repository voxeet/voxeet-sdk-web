import { CaptureMode as DvwcCaptureMode, EchoCancellation as DvwcEchoCancellation } from '@dolby-dvc/dvwc';
import { AudioCaptureModeOptions, AudioEchoCancellation } from './Audio';
/**
 * Translate SDK processing mode to DVWC capture mode
 * @ignore
 */
export declare function captureModeToDvwc(options: AudioCaptureModeOptions): any;
export declare function dvwcToCaptureMode(dvwcCaptureMode: typeof DvwcCaptureMode, dvwcEchoCancellation?: typeof DvwcEchoCancellation): AudioCaptureModeOptions;
export declare function echoCancellationToDvwc(echoCancellation: AudioEchoCancellation): any;
