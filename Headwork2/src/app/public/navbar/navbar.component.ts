import { Component, OnInit,OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { User} from '../../user';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {

  public user : User;
  isAuth = false;
  authSubscription : Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {

    this.user = {
      name :this.authService.testUser.username
      }
    }

  ngOnInit(){
    this.authSubscription = this.authService.authChange.subscribe( authStatus =>{
      this.isAuth = authStatus;
      console.log(this.isAuth);
    });

  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

}
