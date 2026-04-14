package BookDonation.demo.Domain.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import BookDonation.demo.Domain.Model.Livro;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {
    
}