import { Component, Renderer2 } from '@angular/core';
import { TranslationService } from './feature/internationalization/translation.service';
import { TitleService } from './feature/internationalization/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  constructor(private renderer: Renderer2, private titleService: TitleService, private translationService:TranslationService) {
    this.renderer.addClass(document.body, 'laranjinha');
    this.renderer.addClass(document.body, 'light');//dark/light
  }

  ngOnInit() {
    this.titleService.init();
  }
}
