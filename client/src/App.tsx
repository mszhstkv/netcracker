import React, {FC, PropsWithChildren, useEffect} from 'react';
import 'antd/dist/antd.css'
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {Layout} from "antd";
import {Content} from './App.styles';
import {connect, useDispatch} from "react-redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import {setLoginData} from "./redux/auth-reducer";
import {AppStateType} from "./redux/store";

type MapStatePropsType = {
    isAuthenticated: string | null
};

type PropsType = MapStatePropsType;

type dataObjectType = {
    token: string | null
    userId: string | null
    userLogin: string | null
};

const App:FC <PropsType> =(props: PropsWithChildren<PropsType>) => {

    const dispatch = useDispatch();
    let dataObject: dataObjectType;

    useEffect(() => {

        const data: string | null= localStorage.getItem('userData');
        if (data != null) {
            dataObject = JSON.parse(data);
        }
        if (dataObject) {
            dispatch(setLoginData(dataObject.userId, dataObject.token, dataObject.userLogin))
        }
    },[])

    const routes = useRoutes(!!props.isAuthenticated);

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
}

const mapStateToProps = (state: AppStateType) => ({
    isAuthenticated: state.auth.token
});

export default connect(mapStateToProps, {})(App);
