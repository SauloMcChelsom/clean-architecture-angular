import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/app/data/models/user.model';

@Component({
  selector: 'app-store-component',
  templateUrl: './store-component.component.html',
  styleUrls: ['./store-component.component.css']
})
export class StoreComponentComponent implements OnInit {

  constructor(private user:UserRepository) { }

  ngOnInit() {
    this.user.select().subscribe((v)=>{
      console.log("STORE: ", v)
    })
  }

}
