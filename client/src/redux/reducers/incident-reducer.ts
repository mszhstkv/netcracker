import { Incidents, Users } from 'common/interfaces/interfaces';
import {
    ActionsType,
    INCIDENT_DATA_LOADING,
    SET_INCIDENTS_DATA,
    SET_USERS_DATA
} from 'redux/actions/incident-action';

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
                users: action.users
            };
        case SET_INCIDENTS_DATA:
            return {
                ...state,
                incidents: action.incidents
            };
        case INCIDENT_DATA_LOADING:
            return {
                ...state,
                incidentIsLoading: action.incidentIsLoading
            };
        default:
            return state;
    }
};

export default incidentReducer;
