import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    /* Usando o gradiente que você definiu para o fundo do sistema */
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
`;

export const MainContent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;