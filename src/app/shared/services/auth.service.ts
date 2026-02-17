import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  emitLoadingStatus:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  emitLoadingStaus$:Observable<boolean> = this.emitLoadingStatus.asObservable()

  loadingStatus(status:boolean){
    this.emitLoadingStatus.next(status)
  }
}
