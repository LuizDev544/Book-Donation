import React from 'react';
import * as S from './styles';

const Header: React.FC = () => {
    return (
        <S.HeaderContainer>
        <img src="/assets/imagens/Urubu2.png" alt="Vulture Books Logo" />
        <h1>Vulture Books</h1>
        </S.HeaderContainer>
    );
};

export default Header;