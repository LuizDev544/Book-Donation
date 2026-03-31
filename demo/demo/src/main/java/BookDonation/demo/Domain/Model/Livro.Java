package BookDonation.demo.Domain.Model;

import jakarta.persistence.*;
import lombok.*;
import java.util.Objects;
import BookDonation.demo.Domain.Model.ValueObjects.*;

@Entity
@Table(name = "livro")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Embedded
    private Autor autor;

    @Embedded
    private DetalhesLivros detalhes;

    @Enumerated(EnumType.STRING)
    private StatusLivro condicao;

    public Long getId() {
        return this.id;
    }

    public Livro(String titulo, Autor autor, DetalhesLivros detalhes) {
        this.titulo = Objects.requireNonNull(titulo, "Título é obrigatório");
        this.autor = Objects.requireNonNull(autor, "Autor é obrigatório");
        this.detalhes = Objects.requireNonNull(detalhes, "Detalhes são obrigatórios");
        this.condicao = StatusLivro.DISPONIVEL;
    }

    public void marcarComoDoado() {
        if (this.condicao.equals(StatusLivro.DOADO)) {
            throw new IllegalStateException("Livro já foi doado.");
        }
        this.condicao = StatusLivro.DOADO;
    }
}