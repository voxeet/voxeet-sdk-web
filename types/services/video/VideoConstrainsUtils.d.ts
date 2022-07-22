import { CameraVideoTrack } from './CameraVideoTrack';
/**
 * @ignore
 */
export declare class VideoConstrainsUtils {
    static merge(base: MediaTrackConstraints, update: MediaTrackConstraints): MediaTrackConstraints;
    static getDefaultConstraints(): MediaTrackConstraints;
    static getBandwidthConstraints(bandwidth: number): MediaTrackConstraints;
    static applyBandwidthConstraintsIfNeeded(track: CameraVideoTrack, bandwidth: number): void;
}
