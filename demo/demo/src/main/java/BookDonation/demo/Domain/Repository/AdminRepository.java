package BookDonation.demo.Domain.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import BookDonation.demo.Domain.Model.Admin;
import BookDonation.demo.Domain.Model.ValueObjects.Email;
import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin , Long> {
    Optional<Admin> findByEmail(Email endereco);
}