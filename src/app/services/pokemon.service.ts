import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonStats2, PokemonStats3 } from '../interfaces/pokemon-stats';
import { RetornoPokemonList } from '../interfaces/retorno-list-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { 
    this.carregarPokemons();

  }
  async carregarPokemons(): Promise<Observable<RetornoPokemonList>> {
    return this.httpClient.get<RetornoPokemonList>('https://pokeapi.co/api/v2/pokemon?limit=1'); 
  }

  async carregarInfoPokemon(url: number): Promise<Observable<PokemonStats2>>{
    const numeroFormatado = this.leadingZero(url);
    return this.httpClient.get<PokemonStats2>(`https://pokeapi.co/api/v2/pokemon/${numeroFormatado}/`);
  }
  
  leadingZero(str: string | number, size = 3):string{
    let s = String(str);

    while(s.length < (size || 2)){
      s = '0' + s;
    }
    
    return s;
  }
}
