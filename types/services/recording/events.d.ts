import Recording from '../../models/Recording';
/**
 * Emitted when the recording status has changed.
 *
 * @asMemberOf RecordingService
 * @event
 * @param recording - The current recording.
 * @param isRecording - The status of the recording.
 *
 * @example
 * ```javascript
 * VoxeetSDK.recording.on("statusUpdated", (recording, isRecording) => {
 *
 * });
 * ```
 */
export declare function statusUpdated(isRecording: boolean, recording: Recording): void;
