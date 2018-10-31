import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export const emailValidator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
  let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
  return EMAIL_REGEXP.test(control.value) ? null : { email: 'El formato de correo electrónico ingresado no es válido' };
};
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public title = 'Agregar contacto';
  public form = new FormGroup({
    idUser: new FormControl(0),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, emailValidator]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    cellphone: new FormControl('',Validators.maxLength(10)),
    birthdate: new FormControl(null, [Validators.required]),
    sex: new FormControl(false),
    enabled: new FormControl(1),
    createdAt: new FormControl(new Date())
  });

  constructor(
    public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      if(data) this.form.setValue(data);
    }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  saveUser(){
    this.dialogRef.close(this.form.value);
  }

}
