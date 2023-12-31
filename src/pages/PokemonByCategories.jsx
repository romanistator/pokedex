import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Pokemon } from "../components/Pokemon"
import { Navbar } from "../components/Navbar"


export function PokemonByCategories(){

    const [results,setResults]=useState()
    const params = useParams()
    const name = params.name
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/type/${name}`)
        .then(response=>response.json())
        .then(data=>setResults(data))

    },[name])

    if(results){
        return(
            <>
            <Navbar/>
            <div className="row show">
                <h1 className="text-capitalize">Pokemons in {results.name} category</h1>
                {results.pokemon.map((result,index)=>
                    <Pokemon 
                        key={index}
                        pokemon={result.pokemon}
                    />
                )}
            </div>
            </>
            

        )
    }

}