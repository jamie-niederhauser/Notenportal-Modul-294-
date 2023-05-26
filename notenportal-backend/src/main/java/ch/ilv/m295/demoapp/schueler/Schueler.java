package ch.ilv.m295.demoapp.schueler;


import ch.ilv.m295.demoapp.klasse.Klasse;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.math.BigInteger;

@Data
@Entity
public class Schueler {


    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    @Size(max = 100)
    @NotEmpty
    private String name;

    @Column(nullable = false)
    @Size(max = 100)
    @NotEmpty
    private String nachname;

    @ManyToOne(optional = false)
    @JoinColumn(name = "klasse_id")
    private Klasse klasse;

    public Schueler(){

    }

}
