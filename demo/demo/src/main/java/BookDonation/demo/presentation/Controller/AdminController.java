package BookDonation.demo.presentation.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import bookdonation.demo.service.AdminService;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/login")
    public String loginPage() {
        return "login"; 
    }

    @PostMapping("/login")
    public String realizarLogin(@RequestParam String email, @RequestParam String senha) {
        if (adminService.validarAcesso(email, senha)) {
            return "redirect:/admin/painel";
        }
        return "login";
    }

    @GetMapping("/painel")
    public String painelPage() {
        return "painel"; 
    }
}