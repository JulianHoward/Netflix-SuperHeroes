import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/Heroes';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class DatosPage implements OnInit {
  heroe: Heroe = {
    name: 'Deadpool',
    alterEgo: 'Wade Wilson',
    imagePath: './chars/deadpool.png',
    biography:
      'O jovem Wade saiu do controle quando sua mãe morreu de câncer quando ele tinha 6 anos de idade, tornando-o um garoto solitário e atormentado, sem nenhuma explicação. Seu pai – que era um bêbado do exército – o espancava e o tratava mal. Assim, com uma vida desestruturada, Wade tornou-se um delinquente na adolescência. Um dia chegou a agredir friamente seu pai com uma garrafa mostrando alguns traços de insanidade, matando-o no processo. Depois disso, Wade iniciou sua carreira de mercenário. Ele aceitava assassinar apenas aqueles merecedores da morte.',
    caracteristics: {
      birth: '1991',
      weight: {
        value: 95,
        unity: 'kg',
      },
      height: {
        value: 1.88,
        unity: 'meters',
      },
      universe: 'Terra 616',
    },
    abilities: {
      force: 80,
      intelligence: 60,
      agility: 85,
      endurance: 90,
      velocity: 70,
    },
    movies: ['./movies/deadpool-1.jpg', './movies/deadpool-2.jpg'],
  };
  edad : number = 0;
  constructor(private routes: ActivatedRoute) {
    this.getDatos();

  }

  ngOnInit() {}
  getDatos() {
    this.routes.queryParams.subscribe((params) => {
      if (params && params['nombre']) {
        this.ajustarHeroe(params);
        var date = new Date();
        var year = date.getFullYear();
        this.edad =  year - params['birth'];
      }
    });
  }
  ajustarHeroe(params : any){
    this.heroe.name = params['nombre'];
    this.heroe.alterEgo = params['alterEgo'];
    this.heroe.imagePath = params['imagePath'];
    this.heroe.biography = params['biography'];
    this.heroe.caracteristics.birth = params['birth'];
    this.heroe.caracteristics.weight.value = params['weight'];
    this.heroe.caracteristics.height.value = params['height'];
    this.heroe.caracteristics.universe = params['universe'];
    this.heroe.abilities.force = params['force'];
    this.heroe.abilities.intelligence = params['intelligence'];
    this.heroe.abilities.agility = params['agility'];
    this.heroe.abilities.endurance = params['endurance'];
    this.heroe.abilities.velocity = params['velocity'];
    this.heroe.movies = params['movies'];
  }
}
