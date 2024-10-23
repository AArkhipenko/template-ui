import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setDateTime } from "./modules/actions";
import { dateTimeSelector } from "./modules/selectors";

import { ApplicationState } from "../../modules/global-types";

import "./default-component.css";

/**
 * Стандартный компонент (для тестов)
 */
export const DefaultComponent: React.FC = () => {
    const dispatch = useDispatch();

    const { dateTime } = useSelector((state: ApplicationState) => ({
        dateTime: dateTimeSelector(state),
    }));

    const getTimeFunc = useCallback(async () => {
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        await axios.get(`https://timeapi.io/api/time/current/zone?timeZone=${timeZone}`)
            .then((response) => {
                dispatch(setDateTime(new Date(response.data.dateTime)));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [dispatch]);

    useEffect(() => {
        setInterval(getTimeFunc, 1000);
        return () => { };
    }, [dispatch]);

    return (
        <div className="default-component">
            <div className="date-box">
                {dateTime.toDateString()}
            </div>
            <div className="time-box">
                {dateTime.toTimeString()}
            </div>
        </div>
    );
}