package ch.ilv.m295.demoapp.klasse;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KlasseRespository extends JpaRepository<Klasse, Long> {

    List<Klasse> findByOrderByKlassennameAsc();

}
