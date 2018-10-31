import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private api = "http://localhost:5000/api/Contacts/";

  constructor(private service: HttpClient) { }

  getContacts(){
    return this.service.get(this.api);
  }
  getContact(id: any){
    return this.service.get(this.api+id);
  }
  addContact(contact: any){
    return this.service.post(this.api, contact);
  }
  updateContact(contact: any){
    return this.service.put(this.api+contact.idUser, contact);
  }
  deleteContact(id: any){
    return this.service.delete(this.api+id);
  }
}
