import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Arial, sans-serif;
    }

    html, body {
        height: 100%;
        background-color: ${props => props.theme.colors.pageBg};
        color: ${props => props.theme.colors.textDark};
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    /* A classe bg-sistema que você usava no HTML agora fica aqui */
    .bg-sistema {
        background: linear-gradient(135deg, 
        ${props => props.theme.colors.primary} 0%, 
        ${props => props.theme.colors.secondary} 100%
        ) !important;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`;