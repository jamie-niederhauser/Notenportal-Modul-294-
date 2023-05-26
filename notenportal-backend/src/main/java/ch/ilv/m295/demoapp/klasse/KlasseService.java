package ch.ilv.m295.demoapp.klasse;

import ch.ilv.m295.demoapp.base.MessageResponse;
import ch.ilv.m295.demoapp.storage.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KlasseService {


    private final KlasseRespository klasseRespository;

    public KlasseService(KlasseRespository klasseRespository){
        this.klasseRespository = klasseRespository;
    }

    public List<Klasse> getKlasses() {
        return klasseRespository.findByOrderByKlassennameAsc();
    }

    public Klasse getKlasse(Long id) {
        return klasseRespository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id, Klasse.class));
    }

    public Klasse insertKlasse(Klasse klasse) {
        return klasseRespository.save(klasse);
    }

    public Klasse updateKlasse(Klasse klasse, Long id) {
        return klasseRespository.findById(id)
                .map(klasseOrig -> {
                    klasseOrig.setKlassenname(klasse.getKlassenname());
                    return klasseRespository.save(klasseOrig);
                })
                .orElseGet(() -> klasseRespository.save(klasse));
    }

    public MessageResponse deleteKlasse(Long id) {
        klasseRespository.deleteById(id);
        return new MessageResponse("Klasse " + id + " deleted");
    }

}
