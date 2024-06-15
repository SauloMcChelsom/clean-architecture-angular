import { StorageModel } from "../../storage/models/storage.model";

export const enum LoadingState {
    INIT = "INIT",
    LOADING = "LOADING",
    LOADED = "LOADED"
}

export interface ErrorState {
    errorMsg: string;
}

export type CallState = LoadingState | ErrorState;

export interface AppState<T> {
    items: T[];
    callState: CallState;
    storage: StorageModel;
}

export const getError = (callState: CallState): LoadingState | string | null => {
    if ((callState as ErrorState).errorMsg !== undefined) {
        return (callState as ErrorState).errorMsg;
    }

    return null;
}