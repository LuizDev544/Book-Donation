package BookDonation.demo.Domain.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "detalhes_condicao")
public class DetalhesCondicao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nivelConservacao;
    private String observacoesExtras; 

    protected DetalhesCondicao() {}

    public DetalhesCondicao(String nivelConservacao, String observacoesExtras) {
        this.nivelConservacao = nivelConservacao;
        this.observacoesExtras = observacoesExtras;
    }

    public void atualizarDados(String nivelConservacao, String observacoesExtras) {
        this.nivelConservacao = nivelConservacao;
        this.observacoesExtras = observacoesExtras;
    }

    public Long getId() { return id; }
    public String getNivelConservacao() { return nivelConservacao; }
    public String getObservacoesExtras() { return observacoesExtras; }
}