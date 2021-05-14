import { Incidents, Users } from 'common/interfaces';
import {
    ActionsType,
    INCIDENT_DATA_LOADING,
    SET_INCIDENTS_DATA,
    SET_USERS_DATA
} from 'redux/actions/incident.actions';

interface InitState {
    users: Users[];
    incidents: Incidents[];
    incidentIsLoading: boolean;
}

const initState: InitState = {
    users: [],
    incidents: [],
    incidentIsLoading: false
};

const incidentReducer = (state = initState, action: ActionsType): InitState => {
    switch (action.type) {
        case SET_USERS_DATA:
        case SET_INCIDENTS_DATA:
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
