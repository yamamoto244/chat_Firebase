import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  authSubject = new Subject<any>();
  auth$ = this.authSubject.asObservable();

  constructor(
      private router: Router,
      private afAuth: AngularFireAuth,
  ) { }

  login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          this.router.navigate(['/']);
        })
        .catch(error => console.error(error));
  }

  logout(): void {
    this.afAuth.auth.signOut()
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch(error => console.error(error));
  }

}
