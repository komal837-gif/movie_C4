import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
@Input() movieObj!:Imovie;
  constructor(private movieService:MovieService,
    private matDialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  onEdit(movie:Imovie){
    this.movieService.EditObj(movie)
  }

  onRemove(movie:Imovie){
    let matconfig = new MatDialogConfig();
    matconfig.width = '500px';
    matconfig.disableClose = true;
    matconfig.data = `Are you sure, You want to remove this movie with id ${movie.id}??`
   let matDialogRef = this.matDialog.open(GetConfirmComponent,matconfig)
    matDialogRef.afterClosed()
        .pipe(
          filter(res=> res===true),
          switchMap(()=>{
            return this.movieService.removeMovie(movie.id)
          })
        ).subscribe(res=>{
          this.movieService.removeId(movie.id)
        })
  }

}
