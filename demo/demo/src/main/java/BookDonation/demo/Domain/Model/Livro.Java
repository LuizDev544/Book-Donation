package BookDonation.demo.Domain.Model;

import BookDonation.demo.Domain.Model.ValueObjects.*;
import jakarta.persistence.*;

@Entity
@Table(name = "livros")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private Titulo titulo; 

    @Embedded
    private AnoLivro ano;

    @Embedded
    private Autor autor;

    @Embedded
    private Descricao descricao;

    @Embedded
    private Genero genero;

    @Embedded
    private Idioma idioma;

    @Embedded
    private Pagina pagina;

    @Embedded 
    private StatusLivro status;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin adminRegistrador;

    @OneToOne(cascade = CascadeType.ALL) 
    @JoinColumn(name = "condicao_id")
    private DetalhesCondicao detalhesCondicao;

    protected Livro() {}

    public Livro(Titulo titulo, AnoLivro ano, Autor autor, Descricao descricao, Genero genero, Idioma idioma, Pagina pagina, StatusLivro status) {
        this.titulo = titulo;
        this.ano = ano;
        this.autor = autor;
        this.descricao = descricao;
        this.genero = genero;
        this.idioma = idioma;
        this.pagina = pagina;
        this.status = status;
    }


    public void atualizarDados(Titulo novoTitulo, AnoLivro novoAno, Autor novoAutor, Descricao novaDescricao, Genero novoGenero, Idioma novoIdioma, Pagina novaPagina, StatusLivro novoStatus) {
        this.titulo = novoTitulo;
        this.ano = novoAno;
        this.autor = novoAutor;
        this.descricao = novaDescricao;
        this.genero = novoGenero;
        this.idioma = novoIdioma;
        this.pagina = novaPagina;
        this.status = novoStatus;
    }

    public void tornarDisponivel() {
        this.status = StatusLivro.valueOf("DISPONIVEL");
    }
    
    public void setAdminRegistrador(Admin admin) {
        this.adminRegistrador = admin;
    }

    public void setDetalhesCondicao(DetalhesCondicao detalhes) {
        this.detalhesCondicao = detalhes;
    }

    public DetalhesCondicao getDetalhesCondicao() {
        return this.detalhesCondicao;
    }

    public void atualizarCondicao(String nivel, String observacoes) {
    if (this.detalhesCondicao == null) {
        this.detalhesCondicao = new DetalhesCondicao(nivel, observacoes);
        return;
    }
    
    this.detalhesCondicao.atualizarDados(nivel, observacoes);
}

    public Long getId() { return id; }
    public Titulo getTitulo() { return titulo; }
    public AnoLivro getAno() { return ano; }
    public Autor getAutor() { return autor; }
    public Descricao getDescricao() { return descricao; }
    public Genero getGenero() { return genero; }
    public Idioma getIdioma() { return idioma; }
    public Pagina getPagina() { return pagina; }
    public StatusLivro getStatus() { return status; }

}