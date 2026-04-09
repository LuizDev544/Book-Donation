package BookDonation.demo.Domain.Model.ValueObjects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class Senha {
    
    @Column(name = "senha")
    private String valor;

    public Senha(String valor) {
        validar(valor);
        this.valor = valor;
    }

    private void validar(String valor) {
        if (valor == null || valor.length() < 8) {
            throw new IllegalArgumentException("A senha deve conter pelo menos 8 caracteres.");
        }
    }

    public boolean verificar(String valorDigitado) {
        return this.valor != null && this.valor.equals(valorDigitado);
    }
}
