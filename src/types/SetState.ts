export type SetState<T> = (value: T | ((val: T) => T)) => void;
