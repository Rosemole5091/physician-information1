import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Physicians } from '../model/physicians'
@Component({
  selector: 'loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  physicianList: Array<Physicians> = [];
  physObj: Physicians = new Physicians();

  errorFname = "";
  errorLname = "";
  errorSpec = "";
  errorClinic = "";
  errorPhone = "";
  errorEmail = "";
  errorEmail1 = "";

  constructor() {
    this.physicianList = [{ firstName: 'Anil', lastName: 'Arun', speciality: 'doctor', clinic: 'DDD', phone: '3354353454', email: 'anilgmail.com' },
    { firstName: 'minu', lastName: 'jose', speciality: 'doctor', clinic: 'DDD', phone: '6677898979', email: 'anil@gmail.com' },
    { firstName: 'meera', lastName: 'Arun', speciality: 'doctor', clinic: 'DDD', phone: '324353454', email: 'jose@gmail.com' },
    { firstName: 'neethu', lastName: 'Arun', speciality: 'nurse', clinic: 'DDD', phone: '568787989', email: 'anil@gmail.com' },
    { firstName: 'ajay', lastName: 'mithun', speciality: 'doctor', clinic: 'DDD', phone: '3354387879', email: 'jose@gmail.com' }
    ];
  }

  addPhysician() {
    try {
      if (this.physObj.firstName == "") { this.errorFname = "First name required"; }

      if (this.physObj.lastName == "") { this.errorLname = "Last name required"; }

      if (this.physObj.speciality == "") { this.errorSpec = "Speciality name required"; }

      if (this.physObj.clinic == "") { this.errorClinic = "Clinic name required"; }


      if (this.physObj.phone == "" || this.physObj.phone.length != 10) 
      { this.errorPhone = "Invalid!!Phone Number"; }


      if (this.physObj.email == "") { this.errorEmail = "Email required"; }

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


      if (this.physObj.email.match(mailformat)) {
        return true;
      }
      else {

        this.errorEmail="You have entered an invalid email address!";
      }


      this.physicianList.push(this.physObj);
      console.log(this.physicianList);
    }
    catch (error) {
      console.log("error")
    }
  }
  listPhysician() {
    console.log(this.physicianList);
  }
}
