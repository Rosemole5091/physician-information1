import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Physicians } from '../model/physicians'
import { LoginformService } from '../loginform.service';
@Component({
  selector: 'loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  physicianList: Array<Physicians> = [];
  physObj: Physicians = new Physicians();

  errormsgForFirstname = "";
  errormsgForLastname = "";
  errormsgForSpeciality = "";
  errormsgForClinic = "";
  errormsgForPhone = "";
  errormsgForEmail = "";
  errormsgForEmail1 = "";
  

  constructor(private loginformService:LoginformService) {
    
  }

  ngOnInit()
  {
    this.physicianList = this.loginformService.listPhysician();

  }
  
  addPhysician() {
    try {
      if (this.physObj.firstName == "") { this.errormsgForFirstname = "First name required"; }

      if (this.physObj.lastName == "") { this.errormsgForLastname = "Last name required"; }

      if (this.physObj.speciality == "") { this.errormsgForSpeciality = "Speciality name required"; }

      if (this.physObj.clinic == "") { this.errormsgForClinic = "Clinic name required"; }

      if (this.physObj.phone == "" || this.physObj.phone.length != 10) 
      { this.errormsgForPhone = "Invalid!!Phone Number"; }

      if (this.physObj.email == "") { this.errormsgForEmail = "Email required"; }

      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


      if (this.physObj.email.match(mailformat)) {
        return true;
      }
      else {

        this.errormsgForEmail="You have entered an invalid email address!";
      }

      this.physicianList.push(this.physObj);
      console.log(this.physicianList);
      
    }
    catch (error) {
      console.log("error")
    }
  }

}
