import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snack:MatSnackBar) { }


  showSuccessMsg(msg:string){
    this.snack.open(msg,'close',{
      horizontalPosition:"center",
      verticalPosition:"bottom",
      duration:1500,
      panelClass:['success-snackBar']
    })
  }

  showError(err:any){
     this.snack.open(err,'close',{
      horizontalPosition:"center",
      verticalPosition:"bottom",
      duration:1500,
      panelClass:['error-snackBar']
    })
  }
}
