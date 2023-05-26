package ch.ilv.m295.demoapp;

import ch.ilv.m295.demoapp.klasse.Klasse;
import ch.ilv.m295.demoapp.klasse.KlasseRespository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest()
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
class DBTests {


    @Autowired
    private KlasseRespository klasseRespository;

    @Test
    void insertKlassen() {
        Klasse objKlass = this.klasseRespository.save(new Klasse("4e"));
        Assertions.assertNotNull(objKlass.getId());
    }
}
