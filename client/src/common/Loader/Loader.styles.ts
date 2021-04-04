import { createGlobalStyle } from 'styled-components';

export const LoaderStyle = createGlobalStyle`
    &.loader-style {
        margin-top: calc(50vh - 129px);
    }
    
    &.loader-spin-style {
        color: black;
    }
    
    &.loader-icon {
        font-size: 50px;
        color: #b07fb9;
    }
`;
