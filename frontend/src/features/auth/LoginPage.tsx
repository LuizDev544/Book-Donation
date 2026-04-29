import React, { useState } from 'react';
import Layout from '../../components/Layout';
import * as S from './styles';

const LoginPage: React.FC = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Tentativa de login com:', { email, password });
    };

    return (
        <Layout>
            <S.LoginContainer>
                <S.LoginCard>
                <h2>Painel Administrativo</h2>
                <form onSubmit={handleLogin}>
                    <S.FormGroup>
                    <label>E-mail</label>
                    <input 
                        type="email" 
                        placeholder="adm@vulturebooks.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    </S.FormGroup>
                    <S.FormGroup>
                    <label>Senha</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                    </S.FormGroup>
                    <S.LoginButton type="submit">
                    Entrar no Sistema
                    </S.LoginButton>
                </form>
                </S.LoginCard>
            </S.LoginContainer>
        </Layout>
    );
};

export default LoginPage;