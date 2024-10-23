import { createReducer } from "@reduxjs/toolkit";
import { DefaultComponentState } from "./types";
import { setDateTime } from "./actions";

export const initialState: DefaultComponentState = {
    dateTime: new Date()
}

export const defaultComponentReducer = createReducer<DefaultComponentState>(initialState,
    (builder) => {
        builder
            .addCase(setDateTime, (state, action) => {
                state.dateTime = action.payload
            })
    }
)