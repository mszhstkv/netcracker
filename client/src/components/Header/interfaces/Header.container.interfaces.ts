export interface HeaderContainerMapStateProps {
    userLogin: string | null;
}

export interface HeaderContainerMapDispatchProps {
    logout: () => void;
}

export interface HeaderContainerProps extends HeaderContainerMapStateProps, HeaderContainerMapDispatchProps {}