import { User } from "../models/user.model";
import { Subject } from "rxjs/Subject";

export class UserService{
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james@smith.com',
      drinkPreference: 'coca',
      hobbie: [
        'coder',
        'la dégustation de café'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }
}
