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

  constructor(private user:UserRepository<UserEntity>) { }

  ngOnInit(): void { }

  add() {
    this.user.save({
      email: 'saulo',
      is_active: true,
      uid:'',
      user_name:'',
      providers:'',
      type:UserTypeEnum.USER,
      roles: [UserRoleEnum.VALID_EMAIL_ACCOUNT],
      timestamp: new Date().toString()
    })
  }

}
