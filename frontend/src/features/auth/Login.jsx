import React, { useState } from "react";
import './LoginADM.css';

const Login = () => {

    const [credentials, setCredentials] = useState ({ email: '', senha: '' });
    const [error, setError] = useState(null);

    const handChance = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.senha) {
        setError("Por favor, preencha todos os campos.");
        return;
    }
    console.log("Enviando para o Redux:", credentials);
};

return (
    <div className="bg-sistema min-vh-100 d-flex flex-column">
    <header className="navbar-global text-center p-3">
        <h1>Vulture Books</h1>
        <img src="/assets/Urubu2.png" alt="Logo" style={{ width: '50px' }} />
    </header>
        <main className="login-wrapper flex-grow-1 d-flex align-items-center justify-content-center">
            <div className="login-container shadow p-4 rounded bg-white" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Login Admin</h2>

                {error && (
                    <div className="alert alert-danger text-center">
                    {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3 d-flex flex-column">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control"
                        placeholder="Digite seu email"
                        value={credentials.email}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="input-group mb-4 d-flex flex-column">
                    <label className="form-label">Senha</label>
                    <input 
                        type="password" 
                        name="senha" 
                        className="form-control"
                        placeholder="Digite sua senha"
                        value={credentials.senha}
                        onChange={handleChange}
                    />
                    </div>
                    <button type="submit" className="login-btn btn btn-primary w-100">Entrar</button>
                </form>
            </div>
        </main>

        <footer className="footer-global text-center p-3">
            Sistema de Doação de Livros
        </footer>
    </div>
    );
};

export default Login;