/**
 * The Recording model includes the recording [timestamp](#starttimestamp) that informs when the recording was started and the [ID](#participantid) of a participant who started the recording.
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
