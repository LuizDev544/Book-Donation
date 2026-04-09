package BookDonation.demo.Domain.Service;

import BookDonation.demo.Domain.Model.Admin;
import BookDonation.demo.Domain.Model.ValueObjects.Email;
import BookDonation.demo.Domain.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean validarAcesso(String emailDigitado, String senhaDigitada) {
        
        Optional<Admin> adminOptional = adminRepository.findByEmail(new Email(emailDigitado));

        return adminOptional
                .map((Admin admin) -> admin.autenticar(senhaDigitada))
                .orElse(false);
    }
}
