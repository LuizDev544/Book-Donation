import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './Cadastrar.css'; 

const CreateBookPage = () => {
    const [book, setBook] = useState({
        titulo: '',
        statusInicial: 'DISPONIVEL',
        anoLancamento: '',
        quantidadePaginas: '',
        nomeIdioma: '',
        nomeAutor: '',
        nomeGenero: '',
        nivelConservacao: 'Novo',
        observacoesExtras: '',
        textoDescricao: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
        setBook(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Livro para salvar no MySQL via Redux:", book);
    };

    return (
        <div className="bg-page min-vh-100 d-flex flex-column">
        <Header />

        <div className="content-wrapper flex-grow-1 p-4">
            <div className="card p-5 form-container shadow mx-auto" style={{ maxWidth: '900px' }}>
            <h2 className="text-center mb-5 text-title">Cadastrar Novo Livro</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-md-6 mb-3">
                    <label className="form-label">Título do Livro</label>
                    <input 
                    type="text" name="titulo" className="form-control" 
                    placeholder="Ex: O Senhor dos Anéis" 
                    value={book.titulo} onChange={handleChange} 
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label className="form-label">Status do Livro</label>
                    <select name="statusInicial" className="form-select" value={book.statusInicial} onChange={handleChange}>
                    <option value="DISPONIVEL">Disponível</option>
                    <option value="INDISPONIVEL">Indisponível</option>
                    <option value="DOADO">Doado</option>
                    </select>
                </div>
                </div>

                <div className="row">
                <div className="col-md-4 mb-3">
                    <label className="form-label">Ano de Lançamento</label>
                    <input 
                    type="number" name="anoLancamento" className="form-control" 
                    value={book.anoLancamento} onChange={handleChange} 
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Total de Páginas</label>
                    <input 
                    type="number" name="quantidadePaginas" className="form-control" 
                    value={book.quantidadePaginas} onChange={handleChange} 
                    />
                </div>
                <div className="col-md-4 mb-3">
                    <label className="form-label">Idioma</label>
                    <input 
                    type="text" name="nomeIdioma" className="form-control" 
                    value={book.nomeIdioma} onChange={handleChange} 
                    />
                </div>
                </div>

                
                <div className="row">
                <div className="mb-4">
                    <label className="form-label">Descrição / Resumo</label>
                    <textarea 
                    name="textoDescricao" className="form-control" rows="3" 
                    value={book.textoDescricao} onChange={handleChange}
                    ></textarea>
                </div>

                <div className="d-grid gap-3">
                    <button type="submit" className="btn-salvar-doacao">Salvar Doação</button>
                    <button type="button" className="btn-cancelar">Cancelar</button>
                </div>
                </div>
            </form>
            </div>
        </div>

        <Footer />
        </div>
    );
};

export default CreateBookPage;