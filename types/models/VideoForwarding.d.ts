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
