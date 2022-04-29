import { DeviceChangeResult } from '../../models/MediaDevice';
/**
 * Emitted whenever the local participant adds, updates, or removes an audio or video device during a conference.
 *
 * @asMemberOf MediaDeviceService
 * @event
 * @param result - Information about the device.
 *
 * @example
 * ```javascript
 * VoxeetSDK.conference.on('devicechange', (result) => {
 *
 * });
 * ```
 */
export declare function deviceChanged(result: DeviceChangeResult): void;
