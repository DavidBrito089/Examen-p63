import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  user = { nombre: '', correo: '', contrasena: '' };

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  signUp(){
    if(this.user.correo !='' && this.user.contrasena!=''){
      if(this.upsEmailValidator()=='bien' && this.user.contrasena.length>=6){
        this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/tabla1']);
        },
        err => console.log(err)
      )
      alert('usuario registrado');
      }else {
        alert('correo invalido o contraseña muy pequeña minimo 6 elementos');
      }
    }
  }

  signIn() {
    if(this.user.correo =='admin' && this.user.contrasena =='admin'){
      this.router.navigate(['/admin']);
      }else{
            this.authService.signInUser(this.user)
          .subscribe(
            res => {
              console.log(res);
              localStorage.setItem('token', res.token);
              this.router.navigate(['/tabla1']);
            },
            err =>{
              console.log(err)
              alert('Error en el inicio de sesiòn');
            }            
          )
      }
    }

    upsEmailValidator(): string {
      const email = this.user.correo;
      if (email && !email.toLowerCase().endsWith('@est.ups.edu.ec')) {
        return  'mal' ; // Devuelve un error si el correo electrónico no cumple con el dominio requerido
      }else{
        return 'bien';
      }
      };
}
