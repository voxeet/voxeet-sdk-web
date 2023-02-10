import { DeviceChangeResult } from '../../models/MediaDevice';
/**
 * Emitted whenever the local participant adds, updates, or removes an audio or video device during a conference. The event is available only in SDK 3.5 and later.
 *
 * @asMemberOf MediaDeviceService
 * @event
 * @param result - Information about the device.
 *
 * @example
 * ```javascript
 * VoxeetSDK.mediaDevice.on('deviceChanged', (result) => {
 *
 * });
 * ```
 */
export declare function deviceChanged(result: DeviceChangeResult): void;
