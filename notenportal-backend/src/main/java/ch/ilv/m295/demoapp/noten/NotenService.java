package ch.ilv.m295.demoapp.noten;

import ch.ilv.m295.demoapp.base.MessageResponse;
import ch.ilv.m295.demoapp.schulfach.Schulfach;
import ch.ilv.m295.demoapp.storage.EntityNotFoundException;
import org.aspectj.weaver.ast.Not;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotenService {

    public final NotenRespository notenRespository;


    public NotenService(NotenRespository notenRespository){
        this.notenRespository = notenRespository;
    }

    public List<Noten> getNoten() {
        return notenRespository.findAll();
    }

    public Noten getNote(Long id) {
        return notenRespository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id, Noten.class));
    }

    public Noten insertNoten(Noten noten) {
        return notenRespository.save(noten);
    }

    public Noten updateNoten(Noten noten, Long id) {
        return notenRespository.findById(id)
                .map(notenOrig -> {
                    notenOrig.setNote(noten.getNote());
                    return notenRespository.save(notenOrig);
                })
                .orElseGet(() -> notenRespository.save(noten));
    }

    public MessageResponse deleteNote(Long id) {
        notenRespository.deleteById(id);
        return new MessageResponse("Note " + id + " deleted");
    }
}
