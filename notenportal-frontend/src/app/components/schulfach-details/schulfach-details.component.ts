import { Component, OnInit } from '@angular/core';
import { Klasse } from 'src/app/data/klasse';
import { klassenService } from 'src/app/service/klassen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SchulfachService } from 'src/app/service/schulfach.service';
import { Schulfach } from 'src/app/data/schulfach';

@Component({
  selector: 'app-schulfach-details',
  templateUrl: './schulfach-details.component.html',
  styleUrls: ['./schulfach-details.component.scss']
})
export class SchulfachDetailsComponent implements OnInit {

  schulfach : Schulfach = new Schulfach()

  public schulfachForm = new FormGroup({
    id: new FormControl(0),
    schulfach : new FormControl(''),
  })

  constructor (
    private router: Router,
    private schulfachService: SchulfachService,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') !== null) {
      const id = Number.parseInt(this.route.snapshot.paramMap.get('id') as string);
      this.schulfachService.getOne(id).subscribe(obj => {
        if (obj !== null) {
          this.schulfach = obj
          this.schulfachForm = this.formBuilder.group(this.schulfach)
        } else {
          this.router.navigate(['noaccess'])
        }

      })
    }

  }


  async back () {
    await this.router.navigate(['schulfach'])
  }

  async save (formData: any) {
    this.schulfach = Object.assign(formData)

    if (this.schulfach.id) {
      this.schulfachService.update(this.schulfach).subscribe({
        next: () => {
          this.back()
        },
        error: () => {}
      })

    } else {
      this.schulfachService.save(this.schulfach).subscribe({
        next: () => {
          this.back()
        },
        error: () => {}
      })
    }
  }

}
