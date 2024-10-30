import { createSelector } from "@reduxjs/toolkit";
import { ApplicationState } from "../../../modules/global-types";

const defaultComponentStateSelector = (state: ApplicationState) => {
    return state.defaultComponentState;
};

export const dateTimeSelector = createSelector(
    defaultComponentStateSelector,
    (defaultState) => {
        return defaultState.dateTime;
    });
