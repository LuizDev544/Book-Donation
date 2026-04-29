import React from 'react';
import * as S from './styles';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <S.FooterContainer>
        <p>Vulture Books &copy; {currentYear} | Sistema de Doação de Livros</p>
        </S.FooterContainer>
    );
};

export default Footer;