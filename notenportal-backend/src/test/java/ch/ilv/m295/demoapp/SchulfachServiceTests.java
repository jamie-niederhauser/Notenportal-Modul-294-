package ch.ilv.m295.demoapp;

import ch.ilv.m295.demoapp.noten.NotenService;
import ch.ilv.m295.demoapp.schulfach.Schulfach;
import ch.ilv.m295.demoapp.schulfach.SchulfachRespository;
import ch.ilv.m295.demoapp.schulfach.SchulfachService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Optional;


import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.any;

public class SchulfachServiceTests {

    private SchulfachService schulfachService;

    private final SchulfachRespository schulfachRespositoryMock = mock(SchulfachRespository.class);

    private final Schulfach schulfachMock = mock(Schulfach.class);

    @BeforeEach
    void setUp(){
        schulfachService = new SchulfachService(schulfachRespositoryMock);
    }

    @Test
    void createSchulfach(){
        when(schulfachRespositoryMock.save(schulfachMock)).thenReturn(schulfachMock);
        schulfachService.insertSchulfach(schulfachMock);
        verify(schulfachRespositoryMock, times(1)).save(any());
    }

    @Test
    void findSchulfach(){
        when(schulfachRespositoryMock.findById(any())).thenReturn(Optional.ofNullable(schulfachMock));
        Schulfach s = schulfachService.getSchulfach(any());
        verify(schulfachRespositoryMock, times(1)).findById(any());
    }

    @Test
    void deleteSchulfach() {
        schulfachService.deleteSchulfach(any());
        verify(schulfachRespositoryMock, times(1)).deleteById(any());
    }

}
