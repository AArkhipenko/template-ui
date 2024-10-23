import { combineReducers } from "@reduxjs/toolkit";

import { initialState as defaultComponentInitialState, defaultComponentReducer} from "../components/default-component/modules/reducer";

import { ApplicationState } from "./global-types";

const initialState: ApplicationState = {
    defaultComponentState: defaultComponentInitialState
}

export const globalReducer = combineReducers({
    defaultComponentState: defaultComponentReducer
});
