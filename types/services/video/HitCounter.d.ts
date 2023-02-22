/**
 * Counts hits.
 * @ignore
 */
export declare class HitCounter {
    #private;
    /**
     * @param bufforSizeMs - the max size of buffer in milliseconds
     */
    constructor(bufforSizeMs: number);
    /**
     * Deletes all counted hits that occurred so far.
     */
    reset(): void;
    /**
     * Count a single hit.
     */
    hit(): void;
    /**
     * Returns a number of hits that happened in the last X milliseconds.
     */
    hitsInLastXTime(timeMs: number): number;
    /**
     * Remove old hits.
     *
     * The old hit is a hit that occurred long enough to be out of the buffer.
     * Buffer ends are floating and flows with the time. The beginning of the buffer
     * is always in NOW time. While the end of the buffer is NOW time + buffer size.
     *
     * Hits which timestamp is after the end of the buffer are old and are removed from
     * an array.
     *
     * @param now - the current time in milliseconds
     */
    private removeOldHits;
    /**
     * Returns hits that occurred in specific time window
     *
     * @param timeWindowStart - the beginning of the time window in milliseconds
     * @param timeWindowEnd - the end of the time window in milliseconds
     */
    private getHits;
}
