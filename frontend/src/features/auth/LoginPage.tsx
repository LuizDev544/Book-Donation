import React, { useState } from 'react';
import axios from 'axios'; // Importamos o Axios
import Layout from '../../components/Layout';
import * as S from './styles';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); 
    const [loading, setLoading] = useState(false); 
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const loginData = {
            email: email,
            senha: password 
        };

        try {
            const response = await axios.post('http://localhost:8080/api/admin/login', loginData);

            if (response.status === 200) {
                console.log('Login com sucesso!', response.data);
                alert('Bem-vindo ao Vulture Books!');
                
                window.location.href = '/livros/painel'; 
            }
        } catch (err: any) {
            console.error('Erro no login:', err);
            
            if (err.response && err.response.status === 401) {
                setError('E-mail ou senha incorretos.');
            } else if (err.code === 'ERR_NETWORK') {
                setError('O servidor Java está desligado!');
            } else {
                setError('Ocorreu um erro inesperado. Tente novamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <S.LoginContainer>
                <S.LoginCard>
                    <h2>Painel Administrativo</h2>
                    
                    {error && (
                        <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center', fontWeight: 'bold' }}>
                            {error}
                        </div>
                    )}

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
                        
                        <S.LoginButton type="submit" disabled={loading}>
                            {loading ? 'Carregando...' : 'Entrar no Sistema'}
                        </S.LoginButton>
                    </form>
                </S.LoginCard>
            </S.LoginContainer>
        </Layout>
    );
};

export default LoginPage;