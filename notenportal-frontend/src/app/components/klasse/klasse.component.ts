import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Klasse } from 'src/app/data/klasse';
import { klassenService } from 'src/app/service/klassen.service';
import { AppRoles } from 'src/app/app.roles';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-klasse',
  templateUrl: './klasse.component.html',
  styleUrls: ['./klasse.component.scss']
})
export class KlasseComponent implements OnInit{
  klasseDataSource = new MatTableDataSource<Klasse>;
  public columns = ['klassenname','actions']
  public roles = AppRoles

  constructor(
  private service: klassenService,
  private router: Router,
  private dialog: MatDialog,
  private snackBar: MatSnackBar
  ){}


  async ngOnInit () {
    await this.reloadData()
  }

  reloadData () {
    this.service.getList().subscribe(obj => {
      this.klasseDataSource.data = obj
    })

  }

  async edit (obj:Klasse) {
    await this.router.navigate(['klasse', obj.id])
  }


  async add () {
    await this.router.navigate(['klasse-details'])
  }

  public delete (obj:Klasse) {
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
          next: response => {
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

