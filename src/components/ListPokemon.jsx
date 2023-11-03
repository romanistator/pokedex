import { useEffect, useState } from 'react'
import{Pokemon} from './Pokemon.jsx'
export function ListPokemon(){

    const[results,setResults]=useState([])
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100/")
        .then(response=>response.json())
        .then(data=>setResults(data.results))
        
    },[])
  
    return(
        <div  class="row">
            {results.map((result,index)=>
                <Pokemon 
                    key={index}
                    pokemon={result}
                />
            )}
        </div>


    )

    
}