import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  userform: FormGroup; 
  
  constructor() {
    this.userform = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      email: new FormControl(''),
      password: new FormControl(''),
      gender: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  adduser(){
    console.log("add user called..");
    
  }

}
