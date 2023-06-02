import {TestBed} from '@angular/core/testing';

import {klassenService} from './klassen.service';
import {createSpyFromClass, Spy} from 'jasmine-auto-spies';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Klasse } from '../data/klasse';

describe('KlassenService', () => {
  let service: klassenService;
  let httpSpy: Spy<HttpClient>;

  const fakeKlassens: Klasse[] = [
    {
      id: 1,
      klassenname: 'Klasse 1'
    },
    {
      id: 2,
      klassenname: 'Klasse 2'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: createSpyFromClass(HttpClient)}
      ]
    });
    service = TestBed.inject(klassenService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a list of klassens', (done: DoneFn) => {
    httpSpy.get.and.nextWith(fakeKlassens);

    service.getList().subscribe({
        next:
          klassens => {
            expect(klassens).toHaveSize(fakeKlassens.length);
            done();
          },
        error: done.fail
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });
  it('should create a new klassen', (done: DoneFn) => {

    const newKlassen: Klasse = {
      id: 3,
      klassenname: 'Klasse 3'
    };

    httpSpy.post.and.nextWith(newKlassen);

    service.save(newKlassen).subscribe({
        next: klassen => {
          expect(klassen).toEqual(newKlassen);
          done();
        },
        error: done.fail
      }
    );
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should update an klassen', (done: DoneFn) => {

    const klassen = fakeKlassens[0];
    klassen.klassenname = 'Updated Klassen';

    httpSpy.put.and.nextWith(klassen);

    service.update(klassen).subscribe({
      next: klassen => {
        expect(klassen.klassenname).toEqual('Updated Klassen');
        done();
      },
      error: done.fail
    });
    expect(httpSpy.put.calls.count()).toBe(1);
  });

  it('should delete an existing klassen', (done: DoneFn) => {

    httpSpy.delete.and.nextWith(new HttpResponse({
      status: 200
    }));

    service.delete(1).subscribe({
      next: response => {
        expect(response.status).toBe(200);
        done();
      },
      error: done.fail
    });
    expect(httpSpy.delete.calls.count()).toBe(1);
  });
});
