/**
 * The Recording model contains additional information about a conference recording.
 */
export default class Recording {
    /**
     * The ID of the participant who started the recording.
     */
    participantId: string;
    /**
     * The timestamp that informs when the recording was started.
     */
    startTimestamp: number;
    /**
     * @ignore
     */
    constructor(participantId: string, startTimestamp: number);
}
