export interface PokemonStats{
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilites:[];
    forms:[];
    game_indices:[];
    held_items:[];
    location_area_encounters: string;
    moves:[];
    past_types:[];
    sprites: string;
    stats:[];
    types:[]
}