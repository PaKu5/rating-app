import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnDestroy {

  logedIn:boolean = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private Auth: AuthService, router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    router.events.subscribe((val) => {
      if(this.Auth.currentUserValue) {
        this.logedIn = true;
      } else {
        this.logedIn = false;
      } 
    });
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
