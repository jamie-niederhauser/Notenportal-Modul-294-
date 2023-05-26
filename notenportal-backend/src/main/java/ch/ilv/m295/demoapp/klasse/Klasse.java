package ch.ilv.m295.demoapp.klasse;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.validation.annotation.Validated;

import java.math.BigInteger;

@Data
@Entity
@Validated
public class Klasse {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    @Size(max = 100)
    @NotEmpty
    private String klassenname;

    public Klasse(){

    }

    public Klasse(String klassenname){
        this.klassenname = klassenname;
    }

}
