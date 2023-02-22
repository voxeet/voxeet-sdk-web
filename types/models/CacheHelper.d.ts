import { ICacheHelper } from './ICacheHelper';
/**
 * @ignore
 */
export declare class CacheHelper<T> implements ICacheHelper<string, T> {
    #private;
    clear(): void;
    delete(key: string): boolean;
    get(key: string): T;
    has(key: string): boolean;
    set(key: string, item: T): void;
    get size(): number;
}
