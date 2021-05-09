export interface HeaderContainerMapStateProps {
    userLogin: string | null;
}

export interface HeaderContainerMapDispatchProps {
    logoutAction: () => void;
}

export interface HeaderContainerProps extends HeaderContainerMapStateProps, HeaderContainerMapDispatchProps {}