/**
 * @ignore
 */
export declare class ErrorOverrideValue extends Error {
    constructor();
}
/**
 * CacheValue
 * @ignore
 * Use this mechanism to cache get value and posponde function call.
 */
export declare class CacheValue<Type> {
    #private;
    constructor();
    /**
     * Return store cache value without calling callback.
     */
    get storeValue(): Type;
    /**
     * Return promise that will be executed when calling callGetValue. If getValue called twice first promise will be resolved with ErrorOverrideValue Error.
     */
    getValue(): Promise<Type | Error>;
    /**
     * Calls real function that returns value inside of stored promis.
     */
    executeGet(functionToCall: () => Promise<Type | Error>): void;
    /**
     * Store cache value without calling callback.
     */
    set storeValue(value: Type);
    /**
     * Return promise that will be executed when calling callSetValue. If setValue called twice first promise will be resolved with ErrorOverrideValue Error.
     */
    setValue(value: Type): Promise<void | Error>;
    /**
     * Calls real function that set cache value and resolve stored promise.
     */
    executeSet(functionToCall: (value: Type) => Promise<void | Error>): void;
}
