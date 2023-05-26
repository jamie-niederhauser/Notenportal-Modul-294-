package ch.ilv.m295.demoapp.schulfach;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.math.BigInteger;

@Data
@Entity
public class Schulfach {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    @Size(max = 100)
    @NotEmpty
    private String schulfach;


}
