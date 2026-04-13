package BookDonation.demo.Domain.Model.ValueObjects;

import jakarta.persistence.Embeddable;

@Embeddable
public class Titulo {

    private String titulo;

    protected Titulo() {}

    public Titulo(String titulo) {
        if (titulo == null || titulo.trim().isEmpty()) {
            throw new IllegalArgumentException("Titulo do Livro tá vazio");
        }
        
        this.titulo = titulo;
    }

    public String getTexto() {
        return titulo;
    }
}