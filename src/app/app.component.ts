import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conditional';

  isVisible=true;
  color:string='blue';

  userArray = ['Ram','Rahul','Raj']
  userList = [
    {name:'Ram',salary:50000, location:'Jaffna',skillset:['angular','.Net','Java']},
    {name:'Rahul',salary:60000, location:'PPD',skillset:['Reactjs','Nodejs','Java']},
    {name:'Raj',salary:70000, location:'Kandy',skillset:['vuejs','springboot','Python']}
  ]
}
