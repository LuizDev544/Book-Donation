package BookDonation.demo.presentation.Controller;

import BookDonation.demo.presentation.DTO.LivroRequestDTO;
import BookDonation.demo.Domain.Service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/livros")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @PostMapping
    public ResponseEntity<?> cadastrar(@RequestBody LivroRequestDTO dto) {
        try {
            var livroCriado = livroService.criarLivro(dto);
            return ResponseEntity.ok("Livro criado com ID: " + livroCriado.getId());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}