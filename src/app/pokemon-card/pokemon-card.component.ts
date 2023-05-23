import { Component, Input, Type } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  pokemon: Pokemon = {
    name: "",
    url: "",
    type: ""
  };

  @Input()
  numero!: number;
  linkImage: string = "";

  constructor(public pokemonService: PokemonService){
    //this.ColetaInfoPokemon();
    this.linkImage =  this.pegarImagemPokemons();
  }
  async ColetaInfoPokemon(){
    let result = await (await firstValueFrom(await this.pokemonService.carregarInfoPokemon(this.numero)));
    console.log(result);
  }

  pegarImagemPokemons(){
    console.log("EXECUTANDO IMAGEM");
    console.log(this.numero);

    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`
  }

  leadingZero(str: string | number, size = 3):string{
    let s = String(str);

    while(s.length < (size || 2)){
      s = '0' + s;
    }
    
    return s;
  }
}
