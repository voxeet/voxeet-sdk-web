import { Participant } from './Participant';
/**
 * The VideoForwardingStrategy model defines how the SDK should select conference participants whose videos will be transmitted to the local participant. There are two possible values; the selection can be either based on the participants' audio volume or the distance from the local participant.
 *
 * Selecting the video forwarding strategy is supported only in SDK 3.6 and later. In SDK 3.5 and earlier, the SDK supports only the LastSpeaker strategy.
 *
 * By default, the SDK uses the LastSpeaker strategy.
 */
export declare enum VideoForwardingStrategy {
    /**
     * Selects participants based on their audio volume. This allows the local participant to receive video streams only from active speakers.
     */
    LastSpeaker = "lastSpeakerStrategy",
    /**
     * Selects participants based on their distance from the local participant. This allows the local participant to receive video streams only from the nearest participants. This strategy is available only to participants who enabled spatial audio.
     */
    ClosestUser = "closestUserStrategy"
}
/**
 * The VideoForwardingOptions model allows configuring the Video Forwarding functionality that allows:
 * - Setting the maximum number of video streams that may be transmitted to the local participant
 * - Prioritizing specific participants' video streams that need to be transmitted to the local participant
 * - Changing the video forwarding strategy that defines how the SDK should select conference participants whose videos will be received by the local participant
 */
export interface VideoForwardingOptions {
    /**
     * Sets the [video forwarding strategy](./../enums/models_VideoForwarding.VideoForwardingStrategy.html) for the local participant.
     */
    strategy?: VideoForwardingStrategy;
    /**
     * Sets the maximum number of video streams that may be transmitted to the joining participant. The valid parameter's values are between 0 and 25 for desktop browsers and between 0 and 4 for mobile browsers. In the case of providing a value smaller than 0 or greater than the valid values, SDK triggers the [VideoForwardingError](./../classes/lib_Exceptions.VideoForwardingError.html). If the parameter value is not specified, the SDK automatically sets the maximum possible value: 25 for desktop browsers and 4 for mobile browsers.
     */
    max?: number;
    /**
     * The list of the prioritized participants. This parameter allows using a pin option to prioritize specific participant's video streams and display their videos even when these participants do not talk.
     */
    participants?: Array<Participant>;
}
/**
 * Data which has to be provided to the backend for thee video forwarding strategy
 * @ignore
 */
export default class VideoForwarding {
    /**
     * The userId.
     */
    userId: string;
    /**
     * The streamIndex which is impacted.
     */
    streamIndex: number;
    constructor(userId: string, streamIndex: number);
}
