import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Renderer2, ElementRef } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, HttpClientModule]
})
export class HomePage implements OnInit {
  showSearchBar: boolean = false;
  heroes: any=[];
  villains: any=[];
  antiHeroes: any=[];
  aliens: any=[];
  humans: any=[];

  getHeroes() {
    return this.http.get('assets/data/aplication.json').pipe(map((data: any) => {
      return data.heroes;
    }))
  }
  getVillains() {
    return this.http.get('assets/data/aplication.json').pipe(map((data: any) => {
      return data.villains;
    }))
  }
  getAntiHeroes() {
    return this.http.get('assets/data/aplication.json').pipe(map((data: any) => {
      return data.antiHeroes;
    }))
  }
  getAliens() {
    return this.http.get('assets/data/aplication.json').pipe(map((data: any) => {
      return data.aliens;
    }))
  }
  getHumans() {
    return this.http.get('assets/data/aplication.json').pipe(map((data: any) => {
      return data.humans;
    }))
  }

  personajes: any[] = [];

  constructor(
    private router: Router,
    private http: HttpClient,
    private renderer: Renderer2,
    private elementref: ElementRef
    ) { }


  showSearch() {
    console.log("showSearch")
    this.showSearchBar = !this.showSearchBar;
  }

  searchChanged(event: any){
    console.log(event.detail.value)
  }

   searchTerm: string = '';
  results: any[] = [];

  searchItems() {
    this.searchTerm = this.searchTerm.trim();
    this.results = this.personajes.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      );
    });
    console.log(this.results);
  }

  ngOnInit(){
    this.getHeroes().subscribe((data: any) => {
      console.log(data);
      this.heroes = data;
    });
    this.getVillains().subscribe((data: any) => {
      console.log(data);
      this.villains = data;
    });
    this.getAntiHeroes().subscribe((data: any) => {
      console.log(data);
      this.antiHeroes = data;
    });
    this.getAliens().subscribe((data: any) => {
      console.log(data);
      this.aliens = data;
    });
    this.getHumans().subscribe((data: any) => {
      console.log(data);
      this.humans = data;
    });
  }

  llamar(datos: any) {
    this.router.navigate(['/datos'], {
      queryParams: {
        nombre: datos.name,
        alterEgo: datos.alterEgo,
        imagePath: datos.imagePath,
        biography: datos.biography,
        birth: datos.caracteristics.birth,
        weight: datos.caracteristics.weight.value,
        unity: datos.caracteristics.weight.unity,
        height: datos.caracteristics.height.value,
        unityHeight: datos.caracteristics.height.unity,
        universe: datos.caracteristics.universe,
        force: datos.abilities.force,
        intelligence: datos.abilities.intelligence,
        agility: datos.abilities.agility,
        endurance: datos.abilities.endurance,
        velocity: datos.abilities.velocity,
        movies: datos.movies,
      },
    });
  }

  

  filtrar(tipo: string) {
    const divHeroes = this.elementref.nativeElement.querySelector('.listaHeroes');
    const divVillanos = this.elementref.nativeElement.querySelector('.listaVillains');
    const divHumanos = this.elementref.nativeElement.querySelector('.listaAntiHeroes');
    const divAliens = this.elementref.nativeElement.querySelector('.listaAliens');
    const divAntiHeroes = this.elementref.nativeElement.querySelector('.listaHumans');
    switch (tipo) {
      case 'heroe':
        this.renderer.setStyle(divHeroes, 'display', 'flex');
        this.renderer.setStyle(divVillanos, 'display', 'none');
        this.renderer.setStyle(divHumanos, 'display', 'none');
        this.renderer.setStyle(divAliens, 'display', 'none');
        this.renderer.setStyle(divAntiHeroes, 'display', 'none');
        break;
      case 'villain':
        this.renderer.setStyle(divHeroes, 'display', 'none');
        this.renderer.setStyle(divVillanos, 'display', 'flex');
        this.renderer.setStyle(divHumanos, 'display', 'none');
        this.renderer.setStyle(divAliens, 'display', 'none');
        this.renderer.setStyle(divAntiHeroes, 'display', 'none');
        break;
      case 'humanos':
        this.renderer.setStyle(divHeroes, 'display', 'none');
        this.renderer.setStyle(divVillanos, 'display', 'none');
        this.renderer.setStyle(divHumanos, 'display', 'flex');
        this.renderer.setStyle(divAliens, 'display', 'none');
        this.renderer.setStyle(divAntiHeroes, 'display', 'none');
        break;
      case 'alien':
        this.renderer.setStyle(divHeroes, 'display', 'none');
        this.renderer.setStyle(divVillanos, 'display', 'none');
        this.renderer.setStyle(divHumanos, 'display', 'none');
        this.renderer.setStyle(divAliens, 'display', 'flex');
        this.renderer.setStyle(divAntiHeroes, 'display', 'none');
        break;
      case 'antiheroe':
        this.renderer.setStyle(divHeroes, 'display', 'none');
        this.renderer.setStyle(divVillanos, 'display', 'none');
        this.renderer.setStyle(divHumanos, 'display', 'none');
        this.renderer.setStyle(divAliens, 'display', 'none');
        this.renderer.setStyle(divAntiHeroes, 'display', 'flex');
        break;
      default:
        this.renderer.setStyle(divHeroes, 'display', 'flex');
        this.renderer.setStyle(divVillanos, 'display', 'flex');
        this.renderer.setStyle(divHumanos, 'display', 'flex');
        this.renderer.setStyle(divAliens, 'display', 'flex');
        this.renderer.setStyle(divAntiHeroes, 'display', 'flex');
        break;
    }
  }
}