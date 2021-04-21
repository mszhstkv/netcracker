import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    .loader-style {
        margin-top: calc(50vh - 129px);
    }

    .loader-spin-style {
        color: #b07fb9;
    }

    .loader-icon {
        font-size: 50px;
        color: #b07fb9;
    }
    
    .login-form {
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
        
        &__item-login {
            padding-top: 10px;
        }
    }
        
    .login-form_title-icon {
        color: #b07fb9;
    }
    
    .login-form_register-link {
        color: black;
    }
    
    &.register-form {
        background: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 4px rgba(34, 60, 80, 0.2);
    }
    
    &.register-form_login-link {
        color: black;
    }
`;
