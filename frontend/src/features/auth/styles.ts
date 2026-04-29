import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 20px;
    `;

export const LoginCard = styled.div`
    background-color: ${props => props.theme.colors.card};
    border-radius: ${props => props.theme.borderRadius.lg};
    box-shadow: ${props => props.theme.shadows.login};
    width: 100%;
    max-width: 400px;
    padding: 40px;
    text-align: center;

    h2 {
        color: ${props => props.theme.colors.secondary};
        margin-bottom: 25px;
        font-weight: 700;
    }
    `;

export const FormGroup = styled.div`
    text-align: left;
    margin-bottom: 20px;

    label {
        display: block;
        color: ${props => props.theme.colors.textLabel};
        margin-bottom: 8px;
        font-size: 14px;
        font-weight: 600;
    }

    input {
        width: 100%;
        padding: 12px 15px;
        border: 2px solid ${props => props.theme.colors.border};
        border-radius: ${props => props.theme.borderRadius.md};
        transition: 0.3s;

        &:focus {
        border-color: ${props => props.theme.colors.action};
        outline: none;
        }
    }
    `;

export const LoginButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: ${props => props.theme.colors.action};
    color: ${props => props.theme.colors.textLight};
    border-radius: ${props => props.theme.borderRadius.md};
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
    transition: 0.3s;

    &:hover {
        background-color: ${props => props.theme.colors.actionHover};
        transform: translateY(-2px);
    }
`;