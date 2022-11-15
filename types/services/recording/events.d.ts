import Recording from '../../models/Recording';
/**
 * Emitted when the recording status has changed.
 *
 * @asMemberOf RecordingService
 * @event
 * @param isRecording - The status of the recording.
 * @param recording - The current recording.
 *
 * @example
 * ```javascript
 * VoxeetSDK.recording.on("statusUpdated", (isRecording, recording) => {
 *   if (isRecording) {
 *     console.log('Recording has started.');
 *   } else {
 *     console.log('Recording has stopped.');
 *   }
 * });
 * ```
 */
export declare function statusUpdated(isRecording: boolean, recording: Recording): void;
