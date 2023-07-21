import { LocalAudio } from '../../models/LocalAudio';
import { Participant } from '../../models/Participant';
import { BaseConferenceService } from '../Service';
import { SessionService } from '../session/SessionService';
/**
 * The RemoteAudio model allows the local participant to locally mute and unmute remote participants.
 *
 * This model is supported only in SDK 3.7 and later.
 */
export declare class RemoteAudio extends BaseConferenceService {
    #private;
    /**
     * @ignore
     */
    constructor(sdk: any, localAudio: LocalAudio, session: SessionService);
    /**
     * Allows the local participant to unmute a specific remote participant who is locally muted through the [stop](#stop) method. The start method does not impact the audio transmission between remote participants and a conference and does not allow the local participant to force sending remote participants’ streams to the conference or to the local participant. This method is not available for listeners and triggers the [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * The SDK automatically manages audio rendering, which means that the application does not need to implement its own `<audio>` element. The application can use the [selectAudioInput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioInput) and [selectAudioOutput](./services_mediadevice_MediaDeviceService.MediaDeviceService.html#selectAudioOutput) methods to select the proper audio input and output devices.
     *
     * The startAudio method requires a few seconds to become effective.
     *
     * @param participant - The selected remote participant who is locally muted through the [stop](#stop) method.
     *
     * @return {Promise<Error>}
     */
    start(participant: Participant): Promise<void>;
    private startRemoteAudio;
    /**
     * Allows the local participant to locally mute specific remote participants. This method does not impact the audio transmission between remote participants and a conference and does not allow the local participant to stop sending remote participants’ streams to the conference. The method is not available for listeners and triggers [UnsupportedError](./lib_Exceptions.UnsupportedError.html).
     *
     * The stop method requires a few seconds to become effective.
     *
     * @param participant - The selected remote participant who should be locally muted.
     * @return {Promise<Error>}
     */
    stop(participant: Participant): Promise<void>;
    private stopRemoteAudio;
}
