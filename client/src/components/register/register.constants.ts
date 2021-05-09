import moment, { Moment } from 'moment';

export const MIN_LENGTH_LOGIN: number = 3;
export const MIN_LENGTH_PASSWORD: number = 6;

export const PASSWORD_INPUT_PATTERN: RegExp = /^[A-z-0-9]*$/;
export const FULL_NAME_INPUT_PATTERN: RegExp = /^[A-zА-яЁё\s]*$/;
export const LOGIN_INPUT_PATTERN: RegExp = /^[A-z-0-9-А-яЁё]*$/;

export const disabledDate = (current: Moment): boolean =>
    current && current > moment().startOf('day');
