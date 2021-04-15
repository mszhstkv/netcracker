export interface MapStateProps {
    isAuthenticated: string | null;
}

export interface Props extends MapStateProps {}

export interface DataObject {
    token: string | null;
    userId: string | null;
    userLogin: string | null;
}
