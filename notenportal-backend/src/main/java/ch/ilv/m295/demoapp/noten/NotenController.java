package ch.ilv.m295.demoapp.noten;


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
public class NotenController {

    public final NotenService notenService;

    public NotenController(NotenService notenService){
        this.notenService = notenService;
    }

    @GetMapping("api/noten")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<List<Noten>> all() {
        List<Noten> result = notenService.getNoten();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("api/noten/{id}")
    @RolesAllowed(Roles.Read)
    public ResponseEntity<Noten> one(@PathVariable Long id) {
        Noten noten = notenService.getNote(id);
        return new ResponseEntity<>(noten, HttpStatus.OK);
    }

    @PostMapping("api/noten")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<Noten> newNote(@Valid @RequestBody Noten noten) {
        Noten savedNoten = notenService.insertNoten(noten);
        return new ResponseEntity<>(savedNoten, HttpStatus.OK);
    }

    @PutMapping("api/noten/{id}")
    @RolesAllowed({Roles.Admin, Roles.Update})
    public ResponseEntity<Noten> updateNoten(@Valid @RequestBody Noten noten, @PathVariable Long id) {
        Noten savedNoten = notenService.updateNoten(noten, id);
        return new ResponseEntity<>(savedNoten, HttpStatus.OK);
    }

    @DeleteMapping("api/note/{id}")
    @RolesAllowed(Roles.Admin)
    public ResponseEntity<MessageResponse> deleteNote(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(notenService.deleteNote(id));
        } catch (Throwable t) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
