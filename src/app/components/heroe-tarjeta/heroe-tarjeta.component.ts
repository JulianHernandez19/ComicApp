import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';
  import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}
  @Input() index: number;

  @Output() heroeSelected: EventEmitter<number>

  constructor(
    private _router: Router) { 
      this.heroeSelected = new EventEmitter();
    }

  ngOnInit(): void {
  }

  showHeroe() {
    // this.heroeSelected.emit( this.index )
    this._router.navigate(['/heroe', this.index]);
  }
}
