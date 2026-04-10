package BookDonation.demo.presentation.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import jakarta.servlet.http.HttpSession; // Não esqueça deste import!

import BookDonation.demo.Domain.Service.*;
import BookDonation.demo.Domain.Model.Admin;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/login")
    public String loginPage() {
        return "LoginAdm"; 
    }

    @PostMapping("/login")
    public String realizarLogin(@RequestParam String email, 
                                @RequestParam String senha, 
                                HttpSession session, 
                                RedirectAttributes attributes) {
        
        if (adminService.validarAcesso(email, senha)) {
            
            Admin adminLogado = adminService.buscarPorEmail(email);
            
            session.setAttribute("adminLogadoId", adminLogado.getId());
            
            return "redirect:/livros/painel";
        }
        
        attributes.addFlashAttribute("erro", "Email ou senha incorretos!");
        return "redirect:/admin/login";
    }

    @GetMapping("/painel")
    public String painelPage() {
        return "PainelAdm"; 
    }
    
    @GetMapping("/logout")
    public String realizarLogout(HttpSession session) {
        session.invalidate(); // Destrói a sessão
        return "redirect:/admin/login";
    }
}