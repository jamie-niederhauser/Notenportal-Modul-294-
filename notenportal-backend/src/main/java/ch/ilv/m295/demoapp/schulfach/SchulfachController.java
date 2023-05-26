package ch.ilv.m295.demoapp.schulfach;

import ch.ilv.m295.demoapp.base.MessageResponse;
import ch.ilv.m295.demoapp.schueler.Schueler;
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
public class SchulfachController {

    private final SchulfachService schulfachService;

    public SchulfachController(SchulfachService schulfachService){
        this.schulfachService = schulfachService;
    }

    @GetMapping("api/schulfach")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<List<Schulfach>> all() {
        List<Schulfach> result = schulfachService.getschulfaecher();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("api/schulfach/{id}")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<Schulfach> one(@PathVariable Long id) {
        Schulfach schulfach = schulfachService.getSchulfach(id);
        return new ResponseEntity<>(schulfach, HttpStatus.OK);
    }

    @PostMapping("api/schulfach")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<Schulfach> newSchulfach(@Valid @RequestBody Schulfach schulfach) {
        Schulfach savedSchulfach = schulfachService.insertSchulfach(schulfach);
        return new ResponseEntity<>(savedSchulfach, HttpStatus.OK);
    }

    @PutMapping("api/schulfach/{id}")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<Schulfach> updateSchulfach(@Valid @RequestBody Schulfach schulfach, @PathVariable Long id) {
        Schulfach savedSchulfach = schulfachService.updateSchulfach(schulfach, id);
        return new ResponseEntity<>(savedSchulfach, HttpStatus.OK);
    }

    @DeleteMapping("api/schulfach/{id}")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<MessageResponse> deleteSchulfach(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(schulfachService.deleteSchulfach(id));
        } catch (Throwable t) {
            return ResponseEntity.internalServerError().build();
        }
    }

}
