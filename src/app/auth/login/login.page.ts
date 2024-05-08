import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 //Definimos nuestros user y password
 username: string = "";
 password: string = "";

 constructor(private router: Router,  private alertController: AlertController ) { }
 ngOnInit() {
 }

  login() {
    if (this.username && this.password) { //verificamos que no esten vacios
     // Usuario autenticado, redirigir a otra página
     this.router.navigate(['/tabs/tab1']); //ruta de la página a la que quieres redirigir
   } else {
     // Mostrar un mensaje de error si los campos están vacíos
     // console.log('Por favor, ingresa usuario y contraseña.');
     this.presentAlert();

   }
 }

 async presentAlert() {
   const alert = await this.alertController.create({
     header: 'Error',
     message: 'Por favor, ingresa usuario y contraseña.',
     buttons: ['Aceptar']
   });

   await alert.present();
 }
 
}
