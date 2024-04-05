import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IsAuthenticatedUseCase } from 'src/app/domain/usecases/auth/auth_usecase';

@Directive({
    selector: '[appHideIfLoggedIn]'
})
export class HideIfLoggedInDirective {

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private authService: IsAuthenticatedUseCase
    ) { }

    ngOnInit() {
        this.authService.isAuthenticated().subscribe((isLoggesIn: boolean) => {
            if (isLoggesIn) {
                this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
            }else{
                this.renderer.setStyle(this.el.nativeElement, 'display', 'initial');
            }
        })

    }
}
