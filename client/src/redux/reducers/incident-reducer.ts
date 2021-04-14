import moment from 'moment';
import {
    IIncidentForm,
    IIncidents,
    IUsers
} from 'common/interfaces/interfaces';
import {
    ActionsType,
    INCIDENT_FORM_CREATE_VALUES,
    INCIDENT_FORM_EDIT_VALUES,
    INCIDENT_IS_LOADING,
    SET_INCIDENTS,
    SET_USERS
} from 'redux/actions/incident-action';

const initState = {
    users: [] as Array<IUsers>,
    incidents: [] as Array<IIncidents>,
    incidentIsLoading: false,
    incidentFormCreate: {
        incidentTitle: null,
        assignee: null,
        area: null,
        startDate: null,
        dueDate: null,
        description: null,
        priority: null,
        status: null
    } as IIncidentForm,
    incidentFormEdit: {
        _id: null,
        incidentTitle: null,
        assignee: null,
        area: null,
        startDate: null,
        dueDate: null,
        description: null,
        priority: null,
        status: null
    } as IIncidentForm
};

export type InitialStateType = typeof initState;

const incidentReducer = (
    state = initState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_INCIDENTS:
            return {
                ...state,
                incidents: action.incidents,
                incidentFormCreate: {
                    incidentTitle: null,
                    assignee: null,
                    area: null,
                    startDate: null,
                    dueDate: null,
                    description: null,
                    priority: null,
                    status: null
                }
            };
        case INCIDENT_FORM_CREATE_VALUES:
            return {
                ...state,
                incidentFormCreate: {
                    ...state.incidentFormCreate,
                    ...action.value,
                    startDate: moment().utc(true)
                }
            };
        case INCIDENT_FORM_EDIT_VALUES:
            return {
                ...state,
                incidentFormEdit: {
                    ...state.incidentFormEdit,
                    ...action.value
                }
            };
        case INCIDENT_IS_LOADING:
            return {
                ...state,
                incidentIsLoading: action.incidentIsLoading
            };
        default:
            return state;
    }
};

export default incidentReducer;
