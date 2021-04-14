export interface IHeaderContainerMapStateProps {
    userLogin: string | null;
}

export interface IHeaderContainerMapDispatchProps {
    logout: () => void;
}

export interface IHeaderContainerProps extends IHeaderContainerMapStateProps, IHeaderContainerMapDispatchProps {}