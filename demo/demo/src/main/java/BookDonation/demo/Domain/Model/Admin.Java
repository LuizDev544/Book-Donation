package BookDonation.demo.Domain.Model;

import java.util.List;

import BookDonation.demo.Domain.Model.ValueObjects.Email;
import BookDonation.demo.Domain.Model.ValueObjects.Senha;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "admin")
@NoArgsConstructor(access = AccessLevel.PROTECTED)

public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private Email email;

    @Embedded
    private Senha senha;

    @OneToMany(mappedBy = "adminRegistrador") 
    private List<Livro> livrosCadastrados;

    public Admin(Email email, Senha senha) {
        this.email = email;
        this.senha = senha;
    }

    public boolean autenticar(String senhaDigitada) {
        if (senhaDigitada == null) {
            return false;
        }
        return this.senha != null && this.senha.verificar(senhaDigitada);
    }

    public Long getId() {
        return this.id;
    }

}