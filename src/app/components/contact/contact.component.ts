import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500)])
    });
  }

  onSubmit() {

    Swal.fire({
      icon: 'success',
      title: '¡Mensaje enviado!',
      text: 'Gracias por ponerte en contacto con nosotros.',
    });

    // Reset the form
    this.contactForm.reset();
  }

}
