import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/Header';
import { logout } from 'redux/actions/auth.actions';
import { AppStateType } from 'redux/store';
import { HeaderContainerProps } from 'components/Header/features/interfaces/Header.container.interfaces';

const HeaderContainer: FC<HeaderContainerProps> = ({
    logoutAction,
    userLogin
}: PropsWithChildren<HeaderContainerProps>) => (
    <Header userLogin={userLogin} logout={logoutAction} />
);

const mapStateToProps = (state: AppStateType) => ({
    userLogin: state.auth.userLogin
});

export default connect(mapStateToProps, { logoutAction: logout })(
    HeaderContainer
);
