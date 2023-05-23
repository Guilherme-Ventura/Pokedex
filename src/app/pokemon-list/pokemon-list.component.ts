import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { first, firstValueFrom } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];

  constructor(public pokemonService: PokemonService){
    this.coletapokemon();
  }
  async coletapokemon(){
    this.pokemons = (await firstValueFrom(await this.pokemonService.carregarPokemons())).results;
  }
  
}
