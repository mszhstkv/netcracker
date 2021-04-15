import React, { FC, PropsWithChildren, useEffect } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { useRoutes } from 'app/routes';
import HeaderContainer from 'components/Header/Header.container';
import { setLoginData } from 'redux/actions/auth-actions';
import { AppStateType } from 'redux/store';
import { Content } from 'app/App.styles';
import { DataObject, Props } from 'app/app.interfaces';

const App: FC<Props> = ({ isAuthenticated }: PropsWithChildren<Props>) => {
    const dispatch = useDispatch();
    let dataObject: DataObject;

    useEffect(() => {
        const data: string | null = localStorage.getItem('userData');
        if (data != null) {
            dataObject = JSON.parse(data);
        }
        if (dataObject) {
            dispatch(
                setLoginData(
                    dataObject.userId,
                    dataObject.token,
                    dataObject.userLogin
                )
            );
        }
    }, []);

    const routes = useRoutes(!!isAuthenticated);

    return (
        <BrowserRouter>
            <Layout className="layout">
                <HeaderContainer />
                <Content>
                    <div className="site-layout-content">{routes}</div>
                </Content>
            </Layout>
        </BrowserRouter>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuthenticated: state.auth.token
});

export default connect(mapStateToProps, {})(App);
