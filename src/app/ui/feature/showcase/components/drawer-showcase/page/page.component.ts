
import { Component, EventEmitter, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DrawerService } from 'src/app/ui/components/drawer/drawer.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatButtonModule]
})
export class PageComponent {
  @Input() name!: string;
  @Input() animal!: string;

  @Input() outputEmitter!: EventEmitter<string>;
  @Input() onCancelEmitter!: EventEmitter<boolean>;

  constructor(private drawerService: DrawerService) { }

  onSubmit(): void {
    if (this.outputEmitter) {
      this.outputEmitter.emit(this.animal);
    }
  }

  onCancel() {
    this.drawerService.close();
    this.onCancelEmitter.emit(true)
  }
}