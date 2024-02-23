import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private  snackbarserv : MatSnackBar){}

  openSnackbar(msg : string, action : string){
    this.snackbarserv.open(msg,action)
  }
}
