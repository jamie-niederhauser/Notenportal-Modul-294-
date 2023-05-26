package ch.ilv.m295.demoapp.schulfach;

import ch.ilv.m295.demoapp.base.MessageResponse;
import ch.ilv.m295.demoapp.schueler.SchuelerService;
import ch.ilv.m295.demoapp.storage.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SchulfachService {

private final SchulfachRespository schulfachRespository;

public SchulfachService(SchulfachRespository schulfachRespository){
    this.schulfachRespository = schulfachRespository;
}
    public List<Schulfach> getschulfaecher() {
        return schulfachRespository.findAll();
    }

    public Schulfach getSchulfach(Long id) {
        return schulfachRespository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id, Schulfach.class));
    }

    public Schulfach insertSchulfach(Schulfach schulfach) {
        return schulfachRespository.save(schulfach);
    }

    public Schulfach updateSchulfach(Schulfach schulfach, Long id) {
        return schulfachRespository.findById(id)
                .map(schulfachOrig -> {
                    schulfachOrig.setSchulfach(schulfach.getSchulfach());
                    return schulfachRespository.save(schulfachOrig);
                })
                .orElseGet(() -> schulfachRespository.save(schulfach));
    }

    public MessageResponse deleteSchulfach(Long id) {
        schulfachRespository.deleteById(id);
        return new MessageResponse("Schulfach " + id + " deleted");
    }

}
