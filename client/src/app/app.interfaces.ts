interface MapStateProps {
    isAuthenticated: string | null;
}

interface MapDispatchToProps {
    setLoginDataAction: ({ userId, token, userLogin }: DataObject) => void;
}

export interface Props extends MapStateProps, MapDispatchToProps {}

export interface DataObject {
    token: string | null;
    userId: string | null;
    userLogin: string | null;
}
