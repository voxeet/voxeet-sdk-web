import { Participant } from './Participant';
/**
 * The RemoteVideo model allows the local participant to locally start and stop remote participants` video streams  transmission.
 *
 * This model is supported only in SDK 3.7 and later.
 */
export interface RemoteVideo {
    /**
     * If the local participant used the [stop](#stop) method to stop receiving video streams from selected remote participants, the start method allows the participant to start receiving video streams from these participants. The start method does not impact the video transmission between remote participants and a conference and does not allow the local participant to force sending remote participants’ streams to the conference or to the local participant.
     *
     * The method requires a few seconds to become effective and is not available for [Real-time Streaming viewers](../enums/models_Options.ListenType.html#Mixed). Calling this method by an RTS viewer triggers the [UnsupportedError](../lib_Exceptions.UnsupportedError.html).
     *
     * @example
     * ```js
     * var someRemoteParticipant = ...
     *
     * await VoxeetSDK.video.remote.start(someRemoteParticipant);
     * ```
     *
     * @param participant - The selected remote participants whose video streams the local participant would like to receive.
     *
     * @return A Promise which resolves when the remote video is successfully started. If the remote video cannot be started, the promise is rejected with an error.
     */
    start(participant: Participant): Promise<void>;
    /**
     * Allows the local participant to stop receiving video from specific remote participants. This method does not impact audio transmission between remote participants and a conference and does not allow the local participant to stop sending remote participants’ streams to the conference.
     *
     * The method requires a few seconds to become effective and is not available for [Real-time Streaming viewers](../enums/models_Options.ListenType.html#Mixed). Calling this method by an RTS viewer triggers the [UnsupportedError](../lib_Exceptions.UnsupportedError.html).
     *
     * @example
     * ```js
     * var someRemoteParticipant = ...
     *
     * await VoxeetSDK.video.remote.stop(someRemoteParticipant);
     * ```
     *
     * @param participant - The selected remote participants whose video streams the local participants wouldn't like to receive.
     *
     * @return A Promise which resolves when the remote video is successfully stopped. If the remote video cannot be stopped, the promise is rejected with an error.
     */
    stop(participant: Participant): Promise<void>;
}
