package ch.ilv.m295.demoapp.schueler;

import ch.ilv.m295.demoapp.base.MessageResponse;
import ch.ilv.m295.demoapp.security.Roles;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@SecurityRequirement(name = "bearerAuth")
@Validated
@RestController
public class SchuelerController {

    private final SchuelerService schuelerService;

    public SchuelerController(SchuelerService schuelerService){
        this.schuelerService = schuelerService;
    }

    @GetMapping("api/schueler")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<List<Schueler>> all() {
        List<Schueler> result = schuelerService.getSchuelers();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @GetMapping("api/schueler/{id}")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<Schueler> one(@PathVariable Long id) {
        Schueler schueler = schuelerService.getSchueler(id);
        return new ResponseEntity<>(schueler, HttpStatus.OK);
    }


    @PostMapping("api/schueler")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<Schueler> newSchueler(@Valid @RequestBody Schueler schueler) {
        Schueler savedSchueler = schuelerService.insertSchueler(schueler);
        return new ResponseEntity<>(savedSchueler, HttpStatus.OK);
    }


    @PutMapping("api/schueler/{id}")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<Schueler> updateSchueler(@Valid @RequestBody Schueler schueler, @PathVariable Long id) {
        Schueler savedSchueler = schuelerService.updateSchueler(schueler, id);
        return new ResponseEntity<>(savedSchueler, HttpStatus.OK);
    }

    @DeleteMapping("api/schueler/{id}")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<MessageResponse> deleteSchueler(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(schuelerService.deleteSchueler(id));
        } catch (Throwable t) {
            return ResponseEntity.internalServerError().build();
        }
    }


}
