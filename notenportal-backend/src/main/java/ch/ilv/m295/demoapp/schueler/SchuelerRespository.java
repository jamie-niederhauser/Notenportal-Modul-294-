package ch.ilv.m295.demoapp.schueler;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SchuelerRespository extends JpaRepository<Schueler,Long> {


}
