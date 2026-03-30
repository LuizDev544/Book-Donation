@Entity
@Table(name = "livros")
@NoArgsConstructor(access = AccessLevel.PROTECTED) // JPA feliz, mas ninguém mais cria livro vazio
@Getter // Use com moderação
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Encapsulando primitivos (Value Objects)
    @Embedded
    private Titulo titulo; 

    @Embedded
    private InfoLivro informacoes; // Agrupando campos relacionados (Regra: No classes with more than 5 instance variables)

    @Enumerated(EnumType.STRING)
    private StatusLivro condicao;

    // Construtor que garante que o livro já nasce válido
    public Livro(Titulo titulo, InfoLivro informacoes) {
        this.titulo = Objects.requireNonNull(titulo);
        this.informacoes = Objects.requireNonNull(informacoes);
        this.condicao = StatusLivro.DISPONIVEL;
    }

    public void marcarComoDoado() {
        if (this.condicao == StatusLivro.DOADO) {
            throw new IllegalStateException("Livro já foi doado!");
        }
        this.condicao = StatusLivro.DOADO;
    }
}