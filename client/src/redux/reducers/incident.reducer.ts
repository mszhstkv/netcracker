import { Incidents, Users } from 'common/interfaces/interfaces';
import {
    ActionsType,
    INCIDENT_DATA_LOADING,
    SET_INCIDENTS_DATA,
    SET_USERS_DATA
} from 'redux/actions/incident.actions';

const initState = {
    users: [] as Users[],
    incidents: [] as Incidents[],
    incidentIsLoading: false
};

export type InitialStateType = typeof initState;

const incidentReducer = (
    state = initState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_INCIDENTS_DATA:
            return {
                ...state,
                ...action.payload
            };
        case INCIDENT_DATA_LOADING:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default incidentReducer;
