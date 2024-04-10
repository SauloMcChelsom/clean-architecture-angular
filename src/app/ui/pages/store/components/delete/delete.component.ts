import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/app/data/models/user.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private user:UserRepository) { }

  ngOnInit(): void { }

  delete() {
    this.user.delete()
  }

  deletById() {
    this.user.deletById('df89d86-dfdsfds8jkuk-f87gf8hgf')
  }
}
