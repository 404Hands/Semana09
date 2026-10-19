import { Component, signal } from '@angular/core';
import { Persona } from '../../interfaces/persona';
import { form, FormField, min, REQUIRED, required, requiredError, schema } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-componente-dos',
  styleUrl: './componente-dos.css',
  templateUrl: './componente-dos.html',
})
export class ComponenteDos {

  personaModelo = signal<Persona>({nombre:'',edad:10})

  personaFormulario = form(this.personaModelo,(schema)=>{
    required(schema.nombre, {message:'el nombre es obligatorio'});
    required(schema.edad, {message:'La edad es obligatoria'});
    min(schema.edad, 18, {message: 'la edad mínima es de 18 años'});
  })

  guardar(evento:Event){
    evento.preventDefault();
    console.log(this.personaModelo());
  }

}
