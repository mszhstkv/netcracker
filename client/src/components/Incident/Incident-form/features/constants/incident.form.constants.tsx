import {
    BlockerSvg,
    CriticalSvg,
    MajorSvg,
    MinorSvg,
    NormalSvg
} from 'common/icons/prioritiesIcons';
import React from 'react';

const areas: string[] = [
    'Подготовка оборудования',
    'Монтировочные работы',
    'Установка электрооборудования',
    'Настройка электроприборов',
    'Обрыв/Авария',
    'Контроль приборов',
    'Обслуживание объекта'
];

const statuses: string[] = [
    'Открыт',
    'В работе',
    'Необходима доп. Информация',
    'Информация предоставлена',
    'Исправлено',
    'Проверено',
    'Закрыт',
    'Переоткрыт'
];

export const maxTitleLength = 50;

export const incidentStatusesOptions = statuses.map((status: string) => ({
    label: status,
    value: status
}));

export const incidentAreasOptions = areas.map((area: string) => ({
    label: area,
    value: area
}));

export const incidentPriorityOptions = [
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
