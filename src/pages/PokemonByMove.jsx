import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Pokemon } from "../components/Pokemon"

export function PokemonByMove(){
        const [results,setResults]=useState()
        const params = useParams()
        const name = params.name
        useEffect(()=>{
            fetch(`https://pokeapi.co/api/v2/move/${name}`)
            .then((response) => response.json())
            .then((data) => setResults(data))

        },[name])
    if(results){
        console.log(results.learned_by_pokemon)
        return (
            
            <div className="row">
            <h1 className="text-capitalize">{results.contest_type.name} learned by pokemons: </h1>
            {results.learned_by_pokemon.map((result,index)=>
                <Pokemon 
                    key={index}
                    pokemon={result}
                />
            )}
            </div>
        )
    }
}