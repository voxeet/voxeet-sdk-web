import { ICacheHelper } from './ICacheHelper';
export declare class CacheHelper implements ICacheHelper<string, MediaStreamTrack[]> {
    #private;
    clear(): void;
    delete(key: string): boolean;
    get(key: string): MediaStreamTrack[];
    has(key: string): boolean;
    set(key: string, item: MediaStreamTrack[]): void;
    get size(): number;
}
