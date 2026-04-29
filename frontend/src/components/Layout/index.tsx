import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import * as S from './styles';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <S.LayoutWrapper>
        <Header />
        <S.MainContent>
            {children}
        </S.MainContent>
        <Footer />
        </S.LayoutWrapper>
    );
};

export default Layout;