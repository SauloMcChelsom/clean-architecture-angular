import { Component, Renderer2 } from '@angular/core';
import { TranslationService } from './feature/internationalization/translation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  constructor(private renderer: Renderer2, private translationService:TranslationService) {
    this.renderer.addClass(document.body, 'theme-laranjinha');
    this.renderer.addClass(document.body, 'light');//dark/light
  }
}
