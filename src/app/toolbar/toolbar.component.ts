import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnDestroy {

  logedIn:boolean = this.Auth.isLoggedIn;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private Auth: AuthService, router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
    router.events.subscribe((val) => {
      this.logedIn = this.Auth.isLoggedIn;
    });
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
