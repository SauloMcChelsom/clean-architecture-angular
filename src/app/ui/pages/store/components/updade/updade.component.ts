import { Component, OnInit } from '@angular/core';
import { UserRepository } from 'src/app/data/models/user.model';
import { UserRoleEnum } from 'src/app/domain/helpers/enums/user_role_enum';
import { UserTypeEnum } from 'src/app/domain/helpers/enums/user_type_enum';

@Component({
  selector: 'app-updade',
  templateUrl: './updade.component.html',
  styleUrls: ['./updade.component.css']
})
export class UpdadeComponent implements OnInit {

  constructor(private user:UserRepository) { }

  ngOnInit(): void { }

  updade() {
    this.user.update({
      email: '2033.xyz@gmail.com.br',
      is_active: true,
      uid:'df89d86-dfdsfds8jkuk-f87gf8hgf',
      user_name:'',
      providers:'',
      type:UserTypeEnum.EDITOR,
      roles: [UserRoleEnum.VALID_EMAIL_ACCOUNT, UserRoleEnum.DELETE_ACCOUNT],
      timestamp: new Date().toString()
    })
  }

}