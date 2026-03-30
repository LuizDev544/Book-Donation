@Entity
@Table(name = "livros")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private Titulo titulo; 

    @Embedded
    private InfoLivro informacoes; 

    @Enumerated(EnumType.STRING)
    private StatusLivro condicao;

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