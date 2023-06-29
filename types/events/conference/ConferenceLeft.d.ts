import Event from '../Event';
import { ClientStateDump } from '../../models/ClientStateDump';
/**
 * @ignore
 */
export default class ConferenceLeft extends Event {
    stateDump?: ClientStateDump;
    constructor();
    static fromData(data: ClientStateDump): ConferenceLeft;
}
