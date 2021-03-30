import React, {FC, PropsWithChildren} from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/store";

type MapStatePropsType = {
    userLogin: string | null
}

type MapDispatchPropsType = {
    userLogin: string | null
    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const HeaderContainer: FC <PropsType> = (props:PropsWithChildren<PropsType>) => {

    return (
        <Header
        userLogin={props.userLogin}
        logout={props.logout}
        />
    )
};

const mapStateToProps = (state: AppStateType) => ({
    userLogin: state.auth.userLogin
});

export default connect(mapStateToProps, {logout})(HeaderContainer);