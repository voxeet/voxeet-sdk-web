import Event from '../Event';
import { StateDump } from '@dolby-dvc/dvwc';
/**
 * @ignore
 */
export default class ConferenceLeft extends Event {
    stateDump?: StateDump;
    constructor();
    static fromData(data: StateDump): ConferenceLeft;
}
