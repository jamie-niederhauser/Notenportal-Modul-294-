
import { Component, OnInit } from '@angular/core';
import { Klasse } from 'src/app/data/klasse';
import { klassenService } from 'src/app/service/klassen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Schueler } from 'src/app/data/schueler';
import { SchuelerService } from 'src/app/service/schueler.service';

@Component({
  selector: 'app-schueler-details',
  templateUrl: './schueler-details.component.html',
  styleUrls: ['./schueler-details.component.scss']
})
export class SchuelerDetailsComponent implements OnInit {

  schueler : Schueler = new Schueler()
  klasse : Array<Klasse> = []

  public schuelerForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    nachname: new FormControl(''),
    klasse: new FormControl()
  })

  constructor (
    private router: Router,
    private schuelerService: SchuelerService,
    private klassenService: klassenService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
      this.schuelerService.getOne(id).subscribe(obj => {
        if (obj !== null) {
          this.schueler = obj
          this.schuelerForm = this.formBuilder.group(this.schueler)
        } else {
          this.router.navigate(['noaccess'])
        }

      })
    }

    this.klassenService.getList().subscribe(obj => {
      this.klasse = obj;
    });

  }





  async back () {
    await this.router.navigate(['schueler'])
  }
  public compareOptions(o1 : any, o2 : any): boolean{
    return o1 && o2 ? o1?.id === o2?.id : o1 === o2;
  }

  async save (formData: any) {
    this.schueler = Object.assign(formData)

    if (this.schueler.id) {
      this.schuelerService.update(this.schueler).subscribe({
        next: () => {
          this.back()
        },
        error: () => {}
      })

    } else {
      this.schuelerService.save(this.schueler).subscribe({
        next: () => {
          this.back()
        },
        error: () => {}
      })
    }
  }

}
