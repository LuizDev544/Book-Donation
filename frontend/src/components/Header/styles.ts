import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.colors.navbarBg};
    color: ${props => props.theme.colors.textLight};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    padding: 0 20px;

    h1 {
        font-size: 24px;
        margin: 0;
        font-weight: 600;
        letter-spacing: 1px;
    }

    img {
        height: 45px;
        width: auto;
        filter: drop-shadow(0px 0px 2px rgba(255, 255, 255, 0.2));
    }
`;