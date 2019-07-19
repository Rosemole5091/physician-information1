import { Injectable } from '@angular/core';
import { Physicians } from './model/physicians';

@Injectable({
  providedIn: 'root'
})
export class LoginformService {

  
  physicianList = [{ firstName: 'Anil', lastName: 'Arun', speciality: 'doctor', clinic: 'DDD', phone: '3354353454', email: 'anilgmail.com' },
  { firstName: 'minu', lastName: 'jose', speciality: 'doctor', clinic: 'DDD', phone: '6677898979', email: 'anil@gmail.com' },
  { firstName: 'meera', lastName: 'Arun', speciality: 'doctor', clinic: 'DDD', phone: '324353454', email: 'jose@gmail.com' },
  { firstName: 'neethu', lastName: 'Arun', speciality: 'nurse', clinic: 'DDD', phone: '568787989', email: 'anil@gmail.com' },
  { firstName: 'ajay', lastName: 'mithun', speciality: 'doctor', clinic: 'DDD', phone: '3354387879', email: 'jose@gmail.com' }
  ]; 
  
  constructor(){
    
  }
  
  listPhysician()
  {
    return this.physicianList;
  }
  
  
}
