package ch.ilv.m295.demoapp.schueler;

import ch.ilv.m295.demoapp.base.MessageResponse;
import ch.ilv.m295.demoapp.storage.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchuelerService {

    private final SchuelerRespository schuelerRespository;

    public SchuelerService(SchuelerRespository schuelerRespository){
        this.schuelerRespository = schuelerRespository;
    }


    public List<Schueler> getSchuelers() {
        return schuelerRespository.findAll();
    }

    public Schueler getSchueler(Long id) {
        return schuelerRespository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id, Schueler.class));
    }

    public Schueler insertSchueler(Schueler schueler) {
        return schuelerRespository.save(schueler);
    }


    public Schueler updateSchueler(Schueler schueler, Long id) {
        return schuelerRespository.findById(id)
                .map(schuelerOrig -> {
                    schuelerOrig.setName(schueler.getName());
                    schuelerOrig.setNachname(schueler.getNachname());
                    schuelerOrig.setKlasse(schueler.getKlasse());
                    return schuelerRespository.save(schuelerOrig);
                })
                .orElseGet(() -> schuelerRespository.save(schueler));
    }

    public MessageResponse deleteSchueler(Long id) {
        schuelerRespository.deleteById(id);
        return new MessageResponse("Schueler " + id + " deleted");
    }

}
