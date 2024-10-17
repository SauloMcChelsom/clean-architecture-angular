import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private title: Title,
    private translate: TranslateService,
    private router: Router
  ) {}

  init() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        const route = this.router.routerState.root;
        let activeRoute = route;

        while (activeRoute.firstChild) {
          activeRoute = activeRoute.firstChild;
        }

        return activeRoute.snapshot.data['title'];
      }),
      switchMap((titleKey: string) =>
        this.translate.get(titleKey || 'DEFAULT_TITLE')
      )
    ).subscribe((translatedTitle) => {
      this.title.setTitle(translatedTitle);
    });
  }
}
