import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Editar.css'; 

const EditBookPage = () => {
    const { id } = useParams(); // Pega o ID da URL (ex: /editar/15)
    const navigate = useNavigate();

    const [book, setBook] = useState({
        titulo: '',
        statusInicial: 'DISPONIVEL',
        nomeAutor: '',
        nomeGenero: '',
        anoLancamento: '',
        quantidadePaginas: '',
        nomeIdioma: '',
        nivelConservacao: 'Novo',
        observacoesExtras: '',
        textoDescricao: ''
    });

    useEffect(() => {
        console.log(`Buscando dados do livro #${id} no MySQL...`);
        
        setBook({
        titulo: 'O Senhor dos Anéis',
        statusInicial: 'DISPONIVEL',
        nomeAutor: 'J.R.R. Tolkien',
        nomeGenero: 'Fantasia',
        anoLancamento: 1954,
        quantidadePaginas: 1200,
        nomeIdioma: 'Português',
        nivelConservacao: 'Novo',
        observacoesExtras: 'Capa dura',
        textoDescricao: 'Uma jornada épica pela Terra Média.'
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Atualizando livro ${id} com os dados:`, book);
        navigate('/dashboard');
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
        <Header />

        <div className="container d-flex justify-content-center align-items-center flex-grow-1 p-4">
            <div className="card shadow-lg p-4 form-container" style={{ maxWidth: '800px', width: '100%' }}>
            
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary m-0">Editar Livro <span className="text-secondary fs-4">#{id}</span></h2>
                <button onClick={() => navigate('/dashboard')} className="btn btn-outline-secondary btn-sm">Voltar</button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label">Título do Livro</label>
                    <input 
                    type="text" name="titulo" className="form-control" 
                    value={book.titulo} onChange={handleChange} required 
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label className="form-label">Status do Livro</label>
                    <select name="statusInicial" className="form-select" value={book.statusInicial} onChange={handleChange} required>
                    <option value="DISPONIVEL">Disponível</option>
                    <option value="INDISPONIVEL">Indisponível</option>
                    <option value="DOADO">Doado</option>
                    </select>
                </div>
                </div>

                <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-warning btn-lg fw-bold text-dark">Atualizar Livro</button>
                <button type="button" onClick={() => navigate('/dashboard')} className="btn btn-outline-secondary">Cancelar</button>
                </div>
            </form>
            </div>
        </div>

        <Footer />
        </div>
    );
};

export default EditBookPage;