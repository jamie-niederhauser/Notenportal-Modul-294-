package ch.ilv.m295.demoapp.noten;

import ch.ilv.m295.demoapp.klasse.Klasse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotenRespository extends JpaRepository<Noten, Long> {
}
