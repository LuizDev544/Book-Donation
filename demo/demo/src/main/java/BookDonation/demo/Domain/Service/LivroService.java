public class LivroNaoEncontradoException extends RuntimeException {
    public LivroNaoEncontradoException(Integer id) {
        super("Museu com ID" + id + " não encontrado ")
    }
}