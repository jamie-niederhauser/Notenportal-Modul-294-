import { Component, OnInit } from '@angular/core';
import { Klasse } from 'src/app/data/klasse';
import { klassenService } from 'src/app/service/klassen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-klasse-details',
  templateUrl: './klasse-details.component.html',
  styleUrls: ['./klasse-details.component.scss']
})
export class KlasseDetailsComponent implements OnInit {

  public klassForm = new FormGroup({
    id: new FormControl(0),
    klassenname: new FormControl(''),
  })

  constructor (
    private router: Router,
    private klasseService: klassenService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
      this.klasseService.getOne(id).subscribe(obj => {
        if (obj !== null) {
          this.klasse = obj
          this.klassForm = this.formBuilder.group(this.klasse)
        } else {
          this.router.navigate(['noaccess'])
        }

      })
    }

  }


  klasse : Klasse = new Klasse()

  async back () {
    await this.router.navigate(['klasse'])
  }

  async save (formData: any) {
    this.klasse = Object.assign(formData)

    if (this.klasse.id) {
      this.klasseService.update(this.klasse).subscribe({
        next: () => {
          this.back()
        },
        error: () => {}
      })

    } else {
      this.klasseService.save(this.klasse).subscribe({
        next: () => {
          this.back()
        },
        error: () => {}
      })
    }
  }

}
