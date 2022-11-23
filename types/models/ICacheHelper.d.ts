/**
 * @ignore
 */
export interface ICacheHelper<T, U> {
    get: (key: T) => U;
    set: (key: T, item: U) => void;
    has: (key: T) => boolean;
    readonly size: number;
    delete: (key: T) => boolean;
    clear: () => void;
}
