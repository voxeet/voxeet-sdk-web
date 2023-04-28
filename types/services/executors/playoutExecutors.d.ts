import { SequentialExecutor } from '../../lib/Executors';
declare type UserId = string;
export declare const playoutExecutors: {
    getExecutorForRemoteParticipant: (userId: UserId) => SequentialExecutor;
    getExecutorForLocalParticipant: () => SequentialExecutor;
};
export {};
