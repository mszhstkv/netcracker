import {
    BlockerSvg,
    CriticalSvg,
    MajorSvg,
    MinorSvg,
    NormalSvg
} from 'common/priority-icons';
import { Incidents } from 'common/interfaces';
import React from 'react';

let incidentIcon: JSX.Element;

export const incidentBoardIcons = (incident: Incidents): React.ReactElement => {
    switch (incident.priority) {
        case 'blocker':
            incidentIcon = <BlockerSvg />;
            break;
        case 'critical':
            incidentIcon = <CriticalSvg />;
            break;
        case 'major':
            incidentIcon = <MajorSvg />;
            break;
        case 'normal':
            incidentIcon = <NormalSvg />;
            break;
        case 'minor':
            incidentIcon = <MinorSvg />;
            break;
        default:
            incidentIcon = <MinorSvg />;
    }

    return incidentIcon;
};
