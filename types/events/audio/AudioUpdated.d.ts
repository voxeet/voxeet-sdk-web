import { Participant } from '../../models/Participant';
/**
 * @ignore
 */
export default class AudioUpdated extends Event {
    participant: Participant;
    previousAudioTransmitting: boolean;
    audioTransmitting: boolean;
    constructor(participant: Participant, previousAudioTransmitting: boolean, audioTransmitting: boolean);
}
