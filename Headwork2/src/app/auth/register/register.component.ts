import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public users: User[];
  selectUsers: User;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  register(event){
    event.preventDefault()
    const target = event.target;
    const name =  target.querySelector('#name').value;
   // const email =  target.querySelector('#email').value
    const passwd =  target.querySelector('#passwd').value;
    const passwd2 =  target.querySelector('#passwd2').value;

    //verification de mot de pass

    if(passwd == passwd2) {
      let users = new User('', name, passwd, "user");

    //appel de la methode postRegisterEvents pour enregistrer les users
      this.dataService.postRegisterEvents(users).subscribe(
        res => {
          this.iniRegister();
        }
      );
      console.log(users, 'users posted !!!');
    }
  }
  iniRegister() {
    this.selectUsers = new User();
  }

}
