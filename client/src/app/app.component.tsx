import React, { FC, PropsWithChildren, useEffect } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { useRoutes } from 'app/routes.utilities';
import HeaderContainer from 'components/header/header.container';
import { setLoginData } from 'redux/actions/auth.actions';
import { AppStateType } from 'redux/store';
import { Content } from 'app/app.styles';
import { DataObject, Props } from 'app/app.interfaces';
import { GlobalStyle } from 'app/global.styles';

const AppComponent: FC<Props> = ({
    setLoginDataAction,
    isAuthenticated
}: PropsWithChildren<Props>) => {
    useEffect(() => {
        let dataObject: DataObject;
        const data: string | null = localStorage.getItem('userData');
        if (data != null) {
            dataObject = JSON.parse(data);
            setLoginDataAction({
                userId: dataObject.userId,
                token: dataObject.token,
                userLogin: dataObject.userLogin
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const routes = useRoutes(!!isAuthenticated);

    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Layout>
                    <HeaderContainer />
                    <Content>
                        <div className="site-layout-content">{routes}</div>
                    </Content>
                </Layout>
            </BrowserRouter>
        </>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuthenticated: state.auth.token
});

export default connect(mapStateToProps, { setLoginDataAction: setLoginData })(
    AppComponent
);
