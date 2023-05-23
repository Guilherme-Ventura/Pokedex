import { Pokemon } from "./pokemon";

export interface RetornoPokemonList{
    count: number;
    next: string;
    previous: string;
    results: Pokemon[]
}