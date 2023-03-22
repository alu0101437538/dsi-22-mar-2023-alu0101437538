import { PokemonCreator } from "./PokemonCreator";
import { FirePokemon } from "./FirePokemon";
import { Pokemon } from "./Pokemon";

export class FirePokemonCreator extends PokemonCreator {

    constructor (private _name: string, private _ability: string, private _stats: number[]) {
        super()
    }

    factoryMethod(): Pokemon {
        return new FirePokemon(this._name, this._ability, this._stats)
    }
}