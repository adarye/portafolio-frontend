import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar( horizontalPosition: MatSnackBarHorizontalPosition, verticalPosition: MatSnackBarVerticalPosition, sec:number, message: string) {
    this._snackBar.open(message, 'Close', {
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
      duration: sec * 1000,
    });
  }
}
