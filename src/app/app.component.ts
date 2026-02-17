import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'movie_C4';
  isLoading:boolean = false;
 private authService = inject(AuthService)

ngOnInit(): void {
  this.authService.emitLoadingStaus$.subscribe(res=>{
    this.isLoading = res
    console.log(res);
    
  })
}
}
