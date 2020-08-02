import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html'
})
export class SearchHeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  termino:string;

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this._activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.searchHereos(this.termino);
      })
  }

}
