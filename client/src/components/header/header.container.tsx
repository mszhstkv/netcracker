import React, { FC, memo, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Header from 'components/header/header.component';
import { logout } from 'redux/actions/auth.actions';
import { AppStateType } from 'redux/store';
import { HeaderContainerProps } from 'components/header/interfaces/header.container.interfaces';

const HeaderContainer: FC<HeaderContainerProps> = memo(
    ({ logoutAction, userLogin }: PropsWithChildren<HeaderContainerProps>) => (
        <Header userLogin={userLogin} logout={logoutAction} />
    )
);

const mapStateToProps = (state: AppStateType) => ({
    userLogin: state.auth.userLogin
});

export default connect(mapStateToProps, { logoutAction: logout })(
    HeaderContainer
);
