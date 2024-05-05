import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/app/data/models/user.model';
import { UserEntity } from 'src/app/domain/entities/user.entity';
import { UserRoleEnum } from 'src/app/domain/helpers/enums/user_role_enum';
import { UserTypeEnum } from 'src/app/domain/helpers/enums/user_type_enum';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private user:UserRepository) { }

  ngOnInit(): void {}
  
  addNew() {
    this.user.save({
      email: 'maellibatista@gmail.com.br',
      is_active: true,
      uid:'df89d86-dfdsfds8jkuk-f87gf8hgf',
      user_name:'Maelli Batista',
      providers:'local.com',
      type:UserTypeEnum.USER,
      roles: [UserRoleEnum.VALID_EMAIL_ACCOUNT],
      timestamp: new Date().toString()
    })
  }
  add() {
    this.user.save({
      email: 'maellibatista@gmail.com.br',
      is_active: true,
      uid:'1209b84a-980d-4102-9494-b8e1c3d3c23a',
      user_name:'Maelli Batista',
      providers:'local.com',
      type:UserTypeEnum.USER,
      roles: [UserRoleEnum.VALID_EMAIL_ACCOUNT],
      timestamp: new Date().toString()
    })
  }
}
