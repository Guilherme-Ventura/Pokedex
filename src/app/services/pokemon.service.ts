import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { RetornoPokemonList } from '../interfaces/retorno-list-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { 
    this.carregarPokemons();

  }
  async carregarPokemons(): Promise<Observable<RetornoPokemonList>> {
    return this.httpClient.get<RetornoPokemonList>('https://pokeapi.co/api/v2/pokemon?limit=151'); 
  }

  async carregarInfoPokemon(){
    
  }
}
