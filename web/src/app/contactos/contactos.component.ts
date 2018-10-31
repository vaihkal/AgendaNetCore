import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { ContactosDataSource, ContactosItem } from './contactos-datasource';
import { ContactsService } from '../services/contacts.service';
import { EditContactComponent } from '../dialog/edit-contact/edit-contact.component';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
})
export class ContactosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ContactosItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['sex', 'firstName', 'lastName', 'phone', 'cellphone', 'email','birthdate', 'actions'];

  constructor(private service: ContactsService,public dialog: MatDialog){}

  ngOnInit() {
    this.getContacts();
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getContacts(){
    this.service.getContacts().subscribe((res: any)=>{
      this.dataSource.data = res;
    })
  }
  addContact(){
    const dialogRef = this.dialog.open(EditContactComponent, {
      width: '450px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.service.addContact(result).subscribe((res: any)=>{
          console.log("Contacto agregado");
          this.getContacts();
        })
      }
    });
  }
  editContact(user: any){
    const dialogRef = this.dialog.open(EditContactComponent, {
      width: '450px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.service.updateContact(result).subscribe((res: any)=>{
          console.log("Contacto agregado");
          this.getContacts();
        })
      }
    });
  }
  deleteContact(id: any){
    this.service.deleteContact(id).subscribe(res=>{
      console.log("Ususario eliminado");
      this.getContacts();
    })
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
