import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	contacto: FormGroup;
	submitted = false;
	title = 'Validar Formulario con Angular 10';

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
        this.contacto = this.formBuilder.group({
            nya: ['', Validators.required],            
            email: ['', [Validators.required, Validators.email]],
            asunto: ['', Validators.required],
            postre: ['', Validators.required],
            mensaje: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

	get f() {return this.contacto.controls; }

	onSubmit() {
		this.submitted = true;

		if(this.contacto.invalid) {
			return
		}

		alert('Mensaje Enviado !')

	}

}
