import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  videogif: string = " ";
  fotoPasillo: string = "";
  fotoOficina: string = "";

  ngOnInit() {
    this.videogif = "../../assets/videos/videogif.mp4";
    this.fotoOficina = "../../assets/images/foto-oficina.png";
    this.fotoPasillo = "../../assets/images/foto-pasillo.png";
  }


}
