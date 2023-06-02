import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Klasse } from 'src/app/data/klasse';
import { SchuelerService } from 'src/app/service/schueler.service';
import { AppRoles } from 'src/app/app.roles';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Schueler } from 'src/app/data/schueler';
import { Schulfach } from 'src/app/data/schulfach';
import { SchulfachService } from 'src/app/service/schulfach.service';


@Component({
  selector: 'app-schulfach',
  templateUrl: './schulfach.component.html',
  styleUrls: ['./schulfach.component.scss']
})
export class SchulfachComponent implements OnInit{
  schulfachDataSource = new MatTableDataSource<Schulfach>;
  public columns = ['schulfach','actions']
  public roles = AppRoles

  constructor(
  private service: SchulfachService,
  private router: Router,
  private dialog: MatDialog,
  private snackBar: MatSnackBar
  ){}


  async ngOnInit () {
    await this.reloadData()
  }

  reloadData () {
    this.service.getList().subscribe(obj => {
      this.schulfachDataSource.data = obj
    })

  }


  async edit (obj:Schulfach) {
    await this.router.navigate(['schulfach', obj.id])
  }


  async add () {
    await this.router.navigate(['schulfach-details'])
  }

  public delete (obj:Schulfach) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: {
        title: 'Löschen',
        message: 'Soll dieser Eintrag gelöscht werden?'
      }
    })

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult === true) {
        this.service.delete(obj.id).subscribe({
          next: (response) => {
            typeof(response);
            if (response.status === 200) {
              this.snackBar.open('Der Eintrag ist gelöscht worden.', '', {duration: 4000});
              this.reloadData()
            } else {
              this.snackBar.open('Es ist ein Fehler aufgetreten.', '', {duration: 4000});
            }
          },
          error: () => this.snackBar.open('Es ist ein Fehler aufgetreten.', '', {duration: 4000})
        })
      }
    })


}



}

