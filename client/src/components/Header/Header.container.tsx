import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/Header';
import { logout } from 'redux/actions/auth-actions';
import { AppStateType } from 'redux/store';

type MapStatePropsType = {
    userLogin: string | null;
};

type MapDispatchPropsType = {
    logout: () => void;
};

type PropsType = MapStatePropsType & MapDispatchPropsType;

const HeaderContainer: FC<PropsType> = ({
    ...props
}: PropsWithChildren<PropsType>) => (
    <Header userLogin={props.userLogin} logout={props.logout} />
);

const mapStateToProps = (state: AppStateType) => ({
    userLogin: state.auth.userLogin
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
