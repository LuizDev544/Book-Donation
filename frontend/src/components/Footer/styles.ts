import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 20px;
    text-align: center;
    background-color: transparent; /* Ele vai herdar o fundo do container pai */
    margin-top: auto; /* Garante que o rodapé "empurre" para o final da página */

    p {
        color: ${props => props.theme.colors.textMuted};
        font-size: 14px;
        font-weight: 500;
    }
`;