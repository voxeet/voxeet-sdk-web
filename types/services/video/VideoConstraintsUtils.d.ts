import { CameraVideoTrack } from './CameraVideoTrack';
import { ProcessedVideoTrack } from './ProcessedVideoTrack';
/**
 * @ignore
 */
export declare class VideoConstraintsUtils {
    static merge(base: MediaTrackConstraints, update: MediaTrackConstraints): MediaTrackConstraints;
    static getDefaultConstraints(): MediaTrackConstraints;
    static getBandwidthConstraints(bandwidth: number): MediaTrackConstraints;
    static applyBandwidthConstraintsIfNeeded(track: CameraVideoTrack, processedTrack: ProcessedVideoTrack, bandwidth: number, resolutionAdaptationEnabled: boolean, frameRateAdaptationEnabled: boolean): Promise<void>;
    /**
     * Removes constraints.
     *
     * @param constraints - object from constrains will be removed
     * @param constraintsToRemove - constrains list that will be removed from 'constraints'
     *
     * @return Tuple that contains two arrays. The first is the new constrains object with removed items and the seconds array contains the removed items.
     */
    static remove(constraints: MediaTrackConstraints, constraintsToRemove: string[]): [MediaTrackConstraints, string[]];
}
