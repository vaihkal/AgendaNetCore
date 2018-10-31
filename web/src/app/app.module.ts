import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DIALOG_DATA, MatRadioModule } from '@angular/material';
import { ContactosComponent } from './contactos/contactos.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from './services/contacts.service';
import { EditContactComponent } from './dialog/edit-contact/edit-contact.component';
import { DatePipe } from '@angular/common';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactosComponent,
    EditContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    FormsModule, 
    ReactiveFormsModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  providers: [ContactsService, {provide: MAT_DATE_LOCALE, useValue: 'es-MX'}, DatePipe, {provide: MAT_DIALOG_DATA, useValue: []}],
  bootstrap: [AppComponent],
  entryComponents: [EditContactComponent]
})
export class AppModule { }
