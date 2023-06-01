package ch.ilv.m295.demoapp.noten;

import ch.ilv.m295.demoapp.klasse.Klasse;
import ch.ilv.m295.demoapp.schueler.Schueler;
import ch.ilv.m295.demoapp.schulfach.Schulfach;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import ch.ilv.m295.demoapp.schulfach.Schulfach;
import lombok.Data;

import java.math.BigInteger;

@Data
@Entity
public class Noten {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private double note;

    @ManyToOne(optional = false)
    @JoinColumn(name = "schueler_id")
    private Schueler schueler;

        @ManyToOne(optional = false)
    @JoinColumn(name = "schulfach_id")
    private Schulfach schulfach;


}
