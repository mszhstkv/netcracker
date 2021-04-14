export interface IMapStateProps {
    isAuthenticated: string | null;
}

export interface IProps extends IMapStateProps {}

export interface IDataObject {
    token: string | null;
    userId: string | null;
    userLogin: string | null;
}
