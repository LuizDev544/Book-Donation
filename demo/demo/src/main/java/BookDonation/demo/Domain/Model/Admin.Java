@Entity
@Table(name = "admin") 
@Getter
@NoArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Email;
    private String senha;
    private String nome;

    @Column(nullable = false)
    private String role = "ROLE_ADMIN";
}