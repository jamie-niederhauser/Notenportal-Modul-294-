package ch.ilv.m295.demoapp.schulfach;

import ch.ilv.m295.demoapp.schueler.Schueler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchulfachRespository extends JpaRepository<Schulfach,Long> {
}
