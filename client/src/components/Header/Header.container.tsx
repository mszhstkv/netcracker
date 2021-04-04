import React, { FC, PropsWithChildren } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header/Header';
import { logout } from 'redux/actions/auth-actions';
import { AppStateType } from 'redux/store';
import { IHeaderContainerProps } from 'components/Header/interfaces/Header.container.interfaces';

const HeaderContainer: FC<IHeaderContainerProps> = ({
    ...props
}: PropsWithChildren<IHeaderContainerProps>) => (
    <Header userLogin={props.userLogin} logout={props.logout} />
);

const mapStateToProps = (state: AppStateType) => ({
    userLogin: state.auth.userLogin
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
