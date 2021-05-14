import {
    BlockerSvg,
    CriticalSvg,
    MajorSvg,
    MinorSvg,
    NormalSvg
} from 'common/priority-icons';
import React from 'react';

const AREAS: string[] = [
    'Подготовка оборудования',
    'Монтировочные работы',
    'Установка электрооборудования',
    'Настройка электроприборов',
    'Обрыв/Авария',
    'Контроль приборов',
    'Обслуживание объекта'
];

const STATUSES: string[] = [
    'Открыт',
    'В работе',
    'Необходима доп. Информация',
    'Информация предоставлена',
    'Исправлено',
    'Проверено',
    'Закрыт',
    'Переоткрыт'
];

export const MAX_TITLE_LENGTH = 50;

export const INCIDENT_STATUSES_OPTIONS = STATUSES.map((status: string) => ({
    label: status,
    value: status
}));

export const INCIDENT_AREA_OPTIONS = AREAS.map((area: string) => ({
    label: area,
    value: area
}));

export const INCIDENT_PRIORITY_OPTIONS = [
    {
        label: (
            <>
                Blocker <BlockerSvg />{' '}
            </>
        ),
        value: 'blocker'
    },
    {
        label: (
            <>
                Critical <CriticalSvg />{' '}
            </>
        ),
        value: 'critical'
    },
    {
        label: (
            <>
                Major <MajorSvg />{' '}
            </>
        ),
        value: 'major'
    },
    {
        label: (
            <>
                Normal <NormalSvg />{' '}
            </>
        ),
        value: 'normal'
    },
    {
        label: (
            <>
                Minor <MinorSvg />{' '}
            </>
        ),
        value: 'minor'
    }
];
